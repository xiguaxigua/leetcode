function RandomListNode (label) {
  this.label = label
  this.next = this.random = null
}

function displayLinkedList (head) {
  while (head) {
    process.stdout.write(head.label + '( ' + (head.random && head.random.label) + ' )' + '->')
    head = head.next
  }
  process.stdout.write('null \n')
}

function displayArrayList (arr) {
  arr.forEach(item => {
    process.stdout.write(item.label + ' | ')
  })
  process.stdout.write('null \n')
}

var a1 = new RandomListNode('a1')
var a2 = new RandomListNode('a2')
var a3 = new RandomListNode('a3')
var a4 = new RandomListNode('a4')
var a5 = new RandomListNode('a5')
var a6 = new RandomListNode('a6')
var a7 = new RandomListNode('a7')

a1.next = a2
a1.random = a3
a2.next = a3
a2.random = a1
a3.next = a4
a3.random = a6
a4.next = a5
a4.random = a1
a5.next = a6
a5.random = null
a6.next = a7
a6.random = a1
console.log('原始数组：')
displayLinkedList(a1, 'label')
var result = copyRandomList(a1)
console.log('复制数组：')
displayLinkedList(result, 'label')

function copyRandomList (head) {
  var result = new RandomListNode(0)
  var resultPre = result
  var headPre = head
  var oldItemStore = []
  var newItemStore = []
  // 复制链表并将链表元素缓存
  while (head) {
    var item = new RandomListNode(head.label)
    result.next = item
    result = result.next
    oldItemStore.push(head)
    newItemStore.push(item)
    head = head.next
  }

  head = headPre
  result = resultPre.next
  // 处理random指向
  while (head) {
    var index = oldItemStore.indexOf(head.random)
    if (index > -1) result.random = newItemStore[index]
    result = result.next
    head = head.next
  }

  return resultPre.next
}
