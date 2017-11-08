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
var c1 = new ListNode(3)
var c2 = new ListNode(6)
var c3 = new ListNode(9)

a1.next = a2
a2.next = a3
b1.next = b2
b2.next = b3
c1.next = c2
c2.next = c3

console.log('a链表：')
displayLinkedList(a1)
console.log('b链表：')
displayLinkedList(b1)
console.log('c链表：')
displayLinkedList(c1)

var result = mergeKLists([a1, b1, c1])
console.log('合并后的链表：')
displayLinkedList(result)
function mergeKLists (lists) {
  if (!lists.length) return null
  if (lists.length === 1) return lists[0]
  if (lists.length === 2) return mergeTwoLists(lists[0], lists[1])

  var mid = Math.ceil(lists.length / 2)

  var subList1 = []
  var subList2 = []

  for (var i = 0; i < mid; i++) {
    subList1.push(lists[i])
  }
  for (var i = mid; i < lists.length; i++) {
    subList2.push(lists[i])
  }

  var l1 = mergeKLists(subList1)
  var l2 = mergeKLists(subList2)

  return mergeTwoLists(l1, l2)
}
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

/*
function mergeKLists (lists) {
  var temp = []
  var result = new ListNode(0)
  // 将所有节点置于一个临时数组中
  lists.forEach(function (list) {
    while (list) {
      temp.push(list)
      list = list.next
    }
  })
  if (!temp.length) return null
  // 对数组进行排序
  temp.sort(function (a, b) {
    return a.val - b.val
  })
  // 将排序后的数组中的节点进行连接
  temp.forEach(item => {
    result.next = item
    result = result.next
  })

  return temp[0]
}
*/
