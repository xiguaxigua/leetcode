module.exports = {
  displayLinkedList: function (head) {
    while (head) {
      process.stdout.write(head.val + '->')
      head = head.next
    }
    process.stdout.write('null \n')
  }
}
