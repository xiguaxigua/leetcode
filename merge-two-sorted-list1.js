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
var b3 = new ListNode(8)

a1.next = a2
a2.next = a3
b1.next = b2
b2.next = b3

console.log('a链表：')
displayLinkedList(a1)
console.log('b链表：')
displayLinkedList(b1)

var result = mergeTwoLists(a1, b1)
console.log('合并后的链表：')
displayLinkedList(result)

function mergeTwoLists (l1, l2) {
  var temp_pre = new ListNode(0)
  var pre = temp_pre
  // 将较小的值填入新链表中
  while (l1 && l2) {
    if (l1.val < l2.val) {
      pre.next = l1
      l1 = l1.next
    } else {
      pre.next = l2
      l2 = l2.next
    }
    pre = pre.next
  }
  // 连接剩余项
  if (l1) pre.next = l1
  if (l2) pre.next = l2

  return temp_pre.next
}
