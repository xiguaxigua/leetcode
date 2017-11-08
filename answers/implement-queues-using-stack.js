var MyQueue = function () {
  this.data = new stack()
}
MyQueue.prototype.push = function (v) {
  var temp = new stack()
  while (!this.data.empty()) {
    temp.push(this.data.pop())
  }
  temp.push(v)
  while (!temp.empty()) {
    this.data.push(temp.pop())
  }
}
MyQueue.prototype.pop = function () {
  return this.data.pop()
}
MyQueue.prototype.peek = function () {
  return this.data.top()
}
MyQueue.prototype.empty = function () {
  return this.data.empty()
}

var stack = function () {
  this.data = []
}

stack.prototype.push = function (v) {
  this.data.push(v)
}
stack.prototype.pop = function () {
  return this.data.pop()
}
stack.prototype.top = function () {
  return this.data[this.data.length - 1]
}
stack.prototype.empty = function () {
  return !this.data.length
}

var a = new MyQueue()
a.push(1)
a.push(2)
a.push(3)
a.push(4)
console.log(a.pop())
console.log(a.pop())
console.log(a.pop())
console.log(a.pop())

/* var b = new stack()
b.push(1)
b.push(2)
b.push(3)
b.push(4)
console.log(b.pop())
console.log(b.pop())
console.log(b.pop())
console.log(b.pop()) */
