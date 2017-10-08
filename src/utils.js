module.exports = {
  displayLinkedList: function (head) {
    while (head) {
      process.stdout.write(head.element + '->')
      head = head.next
    }
    process.stdout.write('null \n')
  }
}
