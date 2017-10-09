function Node (val) {
  this.val = val
  this.next = null
}

var a1 = new Node('a1')
var a2 = new Node('a2')
var a3 = new Node('a3')
var a4 = new Node('a4')
var a5 = new Node('a5')
var a6 = new Node('a6')
var a7 = new Node('a7')

a1.next = a2
a2.next = a3
a3.next = a4
a4.next = a5
a5.next = a6
a6.next = a7
a7.next = a3

var result = hasCycle(a1)
console.log('链表中是否存在环：')
console.log(result)

function hasCycle (head) {
  // 快慢两指针
  var fast = head
  var slow = head

  while (fast) {
    slow = slow.next
    fast = fast.next
    // 快指针指向null则证明无环
    if (!fast) {
      return false
    } else {
      fast = fast.next
    }
    // 快指针追上慢指针则证明有环
    if (fast === slow) return true
  }

  return false
}
