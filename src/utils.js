module.exports = {
  displayLinkedList: function (head, valueLabel) {
    valueLabel = valueLabel || 'val'
    while (head) {
      process.stdout.write(head[valueLabel] + '->')
      head = head.next
    }
    process.stdout.write('null \n')
  }
}
