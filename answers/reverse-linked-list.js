/**
 * result:
 *   初始链表：
 *   Shenzhen->Beijing->Shanghai->Guangzhou->null
 *   结果链表：
 *   Guangzhou->Shanghai->Beijing->Shenzhen->null
 */
var linkedList = require('./src/linked-list')
var utils = require('./src/utils')
var displayLinkedList = utils.displayLinkedList

var cities = new linkedList('Shenzhen')
cities.insert('Beijing', 'Shenzhen')
cities.insert('Shanghai', 'Beijing')
cities.insert('Guangzhou', 'Shanghai')
console.log('初始链表：')
displayLinkedList(cities.head)

var newCitiesHead = reverseList(cities.head)

console.log('结果链表：')
displayLinkedList(newCitiesHead)

function reverseList (head) {
  var newHead = null
  while (head) {
    // 保存当前节点的尾节点
    var headNext = head.next
    // 将当前节点的next指向新的头节点
    head.next = newHead
    // 设置新的头节点
    newHead = head
    // 将head指针指向之前保存的尾节点
    head = headNext
  }
  return newHead
}
