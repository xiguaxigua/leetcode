function Node (element) {
  this.val = val
  this.next = null
}

function LinkedList (headElement) {
  this.head = new Node(headElement)
  this.find = find
  this.insert = insert
  this.display = display
}

function find (item) {
  var currNode = this.head
  while (currNode.element !== item) {
    currNode = currNode.next
  }
  return currNode
}

function insert (newElement, item) {
  var newNode = new Node(newElement)
  var current = this.find(item)
  newNode.next = current.next
  current.next = newNode
}

function display () {
  var currNode = this.head
  while (!(currNode.next == null)) {
    console.log(currNode.next.element)
    currNode = currNode.next
  }
}

module.exports = LinkedList
