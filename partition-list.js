var displayLinkedList = require('./src/utils').displayLinkedList
function Node (val) {
  this.val = val
  this.next = null
}

var a1 = new Node (1)
var a2 = new Node (4)
var a3 = new Node (3)
var a4 = new Node (2)
var a5 = new Node (5)
var a6 = new Node (2)

a1.next = a2
a2.next = a3
a3.next = a4
a4.next = a5
a5.next = a6

console.log('修改前链表: ')
displayLinkedList(a1)
var result = partition(a1, 3)
console.log('修改后链表：')
displayLinkedList(result)

function partition (head, x) {
  var smallList = new Node('smallList')
  var bigList = new Node('bigList')
  var bigListStore = bigList
  var smallListStore = smallList

  while (head) {
    if (head.val < x) {
      smallList.next = head
      smallList = head
    } else {
      bigList.next = head
      bigList = head
    }
    head = head.next
  }

  smallList.next = bigListStore.next
  bigList.next = null

  return smallListStore.next
}
