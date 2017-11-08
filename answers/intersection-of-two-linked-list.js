/**
 * result
 *   初始链表：
 *   a1->a2->c1->c2->c3->null
 *   b1->b2->b3->c1->c2->c3->null
 *   交点：
 *   Node {
 *    val: 'c1',
 *    next: Node { val: 'c2', next: Node { val: 'c3', next: null } } }
 */
var utils = require('./src/utils')
var displayLinkedList = utils.displayLinkedList

function Node (val) {
  this.val = val
  this.next = null
}

var a1 = new Node('a1')
var a2 = new Node('a2')
var b1 = new Node('b1')
var b2 = new Node('b2')
var b3 = new Node('b3')
var c1 = new Node('c1')
var c2 = new Node('c2')
var c3 = new Node('c3')

a1.next = a2
a2.next = c1
c1.next = c2
c2.next = c3
b1.next = b2
b2.next = b3
b3.next = c1

console.log('初始链表：')
displayLinkedList(a1)
displayLinkedList(b1)

var result = getIntersectionNode(a1, b1)

console.log('交点：')
console.log(result)

function getIntersectionNode (headA, headB) {
  // 求得两个链表的长度
  var headALength = getListLength(headA)
  var headBLength = getListLength(headB)
  // 对齐两链表
  if (headALength > headBLength) {
    headA = forwardLongList(headALength, headBLength, headA)
  } else {
    headB = forwardLongList(headBLength, headALength, headB)
  }
  // 求得交点
  while (headA && headB) {
    if (headA === headB) {
      return headA
    }
    headA = headA.next
    headB = headB.next
  }

  return null
}

function getListLength (head) {
  var length = 0
  while (head) {
    length++
    head = head.next
  }
  return length
}

function forwardLongList (long, short, head) {
  var delta = long - short
  while (head && delta) {
    head = head.next
    delta--
  }
  return head
}
