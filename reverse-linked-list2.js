/**
 * result:
 *   初始链表：
 *   Jilin->Beijing->Shanghai->Guangzhou->Hangzhou->Shenzhen->null
 *   结果链表：
 *   Jilin->Guangzhou->Shanghai->Beijing->Hangzhou->Shenzhen->null
 */
var linkedList = require('./src/linked-list')
var utils = require('./src/utils')
var displayLinkedList = utils.displayLinkedList

var cities = new linkedList('Jilin')
cities.insert('Beijing', 'Jilin')
cities.insert('Shanghai', 'Beijing')
cities.insert('Guangzhou', 'Shanghai')
cities.insert('Hangzhou', 'Guangzhou')
cities.insert('Shenzhen', 'Hangzhou')
console.log('初始链表：')
displayLinkedList(cities.head)

var newCitiesHead = reverseList(cities.head, 2, 4)

console.log('结果链表：')
displayLinkedList(newCitiesHead)

function reverseList (head, m, n) {
  var changeLength = n - m + 1 // 需要逆置的节点个数
  var preHead = null // 逆置节点的前驱
  var result = head // 结果
  // 查找逆置节点的前驱，将head移动m-1个位置
  while (head && --m) {
    preHead = head
    head = head.next
  }
  var modifuListTail = head // 逆置节点的尾节点
  var newHead = null
  // 对逆置节点进行逆置操作
  while (head && changeLength) {
    var headNext = head.next
    head.next = newHead
    newHead = head
    head = headNext
    changeLength--
  }
  // 连接逆置节点其后的节点
  modifuListTail.next = head
  // 连接逆置节点前面的节点
  if (preHead) {
    preHead.next = newHead
  } else {
    result = newHead
  }
  return result
}
