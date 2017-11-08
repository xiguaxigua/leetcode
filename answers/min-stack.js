var MinStack = function () {
  this._data = new Stack()
  this._min = new Stack()
}

MinStack.prototype.push = function (v) {
  this._data.push(v)
  if (this._min.top() !== undefined) {
    if (v < this._min.top()) {
      this._min.push(v)
    } else {
      this._min.push(this._min.top())
    }
  } else {
    this._min.push(v)
  }
}
MinStack.prototype.pop = function () {
  this._min.pop()
  return this._data.pop()
}
MinStack.prototype.top = function () {
  return this._data.top()
}
MinStack.prototype.getMin = function () {
  return this._min.top()
}

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

var minStack = new MinStack()
minStack.push(-2)
minStack.push(0)
minStack.push(-3)
console.log(minStack.getMin())
minStack.pop()
console.log(minStack.top())
console.log(minStack.getMin())
