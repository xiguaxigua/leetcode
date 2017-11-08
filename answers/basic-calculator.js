/**
 * #describe
 * Implement a basic calculator to evaluate a simple expression string.
 * The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces .
 * You may assume that the given expression is always valid.
 * #describe
 */

/* answer */
var Stack = function () {
  this.data = [];
}
Stack.prototype.push = function (v) {
  this.data.push(v);
}
Stack.prototype.pop = function () {
  return this.data.pop();
}
Stack.prototype.top = function () {
  return this.data[this.data.length - 1];
}
Stack.prototype.size = function () {
  return this.data.length;
}
Stack.prototype.empty = function () {
  return !this.data.length;
}

var compute = function (numberStack, operationStack) {
  if (numberStack.size() < 2) return;
  var num2 = numberStack.top();
  numberStack.pop();
  var num1 = numberStack.top();
  numberStack.pop();

  if (operationStack.top() === '+') {
    numberStack.push(num1 + num2);
  } else if (operationStack.top() === '-') {
    numberStack.push(num1 - num2);
  }

  operationStack.pop();
}

var isNum = function (s) {
  return s >= 0 && s <= 9
}

var calculate = function (str) {
  var STATE_BEGIN = 0;
  var NUMBER_STATE = 1;
  var OPERATION_STATE = 2;

  var numberStack = new Stack();
  var operationStack = new Stack();

  var state = STATE_BEGIN;
  var number = 0;
  var compuateFlag = false;

  for (var i = 0; i < str.length; i++) {
    var curr = str[i]
    if (curr === ' ') continue;

    switch (state) {
      case STATE_BEGIN:
        state = isNum(curr) ? NUMBER_STATE : OPERATION_STATE;
        i--;
        break;
      case NUMBER_STATE:
        if (isNum(curr)) {
          number = number * 10 + (+curr);
        } else {
          numberStack.push(number);
          if (compuateFlag) compute(numberStack, operationStack);
          number = 0;
          i--;
          state = OPERATION_STATE
        }
        break;
      case OPERATION_STATE:
        if (curr === '+' || curr === '-') {
          operationStack.push(curr);
          compuateFlag = true;
        } else if (curr === '(') {
          state = NUMBER_STATE;
          compuateFlag = false;
        } else if (isNum(curr)) {
          state = NUMBER_STATE;
          i--;
        } else if (curr === ')') {
          compute(numberStack, operationStack);
        }
        break;
    }
  }

  if (number !== 0) {
    numberStack.push(number)
    compute(numberStack, operationStack)
  } else if (number === 0 && numberStack.empty()) {
    return 0
  }

  return numberStack.top()
}
/* answer */

/* test */
var assert = require('colorful-assert').equal;
var testCase = [
  { q: "1 + 1", a: 2 },
  { q: " 2-1 + 2 ", a: 3 },
  { q: "(1+(4+5+2)-3)+(6+8)", a: 23 }
];
testCase.forEach(item => {
  console.log(calculate(item.q))
  assert(calculate(item.q), item.a, item.q + " = " + item.a);
})
/* test */
