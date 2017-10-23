var MyStack = function () {
  this.data = new Queue()
}

MyStack.prototype.push = function (v) {
  var temp = new Queue()
  temp.push(v)
  while (!this.data.empty()) {
    temp.push(this.data.pop())
  }
  this.data = temp
}
MyStack.prototype.pop = function () {
  return this.data.pop()
}
MyStack.prototype.top = function () {
  return this.data.top()
}
MyStack.prototype.empty = function () {
  return this.data.empty()
}


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

var a = new MyStack()
a.push(1)
a.push(2)
a.push(3)
a.push(4)
console.log(a.pop())
console.log(a.pop())
console.log(a.pop())
console.log(a.pop())
