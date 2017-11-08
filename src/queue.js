var Queue = function () {
  this.data = []
}

Queue.prototype.push = function (v) {
  return this.data.unshift(v)
}
Queue.prototype.pop = function () {
  return this.data.pop()
}
Queue.prototype.top = function () {
  return this.data[this.data.length - 1]
}
Queue.prototype.empty = function () {
  return !this.data.length
}

module.exports = Queue
