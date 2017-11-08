var Stack = function () {
  this.data = []
}

Stack.prototype.push = function (v) {
  this.data.push(v)
}
Stack.prototype.pop = function () {
  return this.data.pop()
}
Stack.prototype.top = function () {
  return this.data[this.data.length - 1]
}
Stack.prototype.empty = function () {
  return !this.data.length
}

module.exports = Stack
