var displayLinkedList = require('./src/utils').displayLinkedList

function ListNode (val) {
  this.val = val
  this.next = null
}

var a1 = new ListNode(1)
var a2 = new ListNode(4)
var a3 = new ListNode(7)
var b1 = new ListNode(2)
var b2 = new ListNode(5)
// var b3 = new ListNode(8)

a1.next = a2
a2.next = a3
b1.next = b2
// b2.next = b3

console.log('a链表：')
displayLinkedList(a1)
console.log('b链表：')
displayLinkedList(b1)

var result = addTwoNumbers(a1, b1)
console.log('合并后的链表：')
displayLinkedList(result)

function addTwoNumbers (l1, l2) {
  var temp = new ListNode(0)
  var head = temp
  var addon = 0
  while (l1 || l2) {
    l1Value = l1 && l1.val || 0
    l2Value = l2 && l2.val || 0
    var value = l1Value + l2Value + addon
    if (value >= 10) {
      value = value % 10
      addon = 1
    } else {
      addon = 0
    }
    var item = new ListNode(value)
    head.next = item
    head = head.next
    l1 = l1 && l1.next
    l2 = l2 && l2.next
  }
  if (addon) {
    var item = new ListNode(1)
    head.next = item
  }
  return temp.next
}
