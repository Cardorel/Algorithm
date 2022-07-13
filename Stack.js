function Stack() {
  this.datastore = [];
  this.top = 0;
  this.peek = peek;
  this.push = push;
  this.pop = pop;
  this.length = length;
  this.clear = clear;
}

function push(element) {
  return (this.datastore[this.top++] = element);
}

function pop() {
  return this.datastore[--this.top];
}

function peek() {
  return this.datastore[this.top - 1];
}

function length() {
  return this.top;
}

function clear() {
  this.top = 0;
}

/* var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
s.push("Junes");
console.log("length: " + s.length());
console.log(s.peek());
var popped = s.pop();
console.log("The popped element is: " + popped);
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
s.clear();
console.log("length: " + s.length());
console.log(s.peek());
s.push("Clayton");
console.log(s.peek()); */

//Exo 1
function mulBase(num, base) {
  var stack = new Stack();
  do {
    stack.push(num % base);
    num = Math.floor((num /= base));
  } while (num > 0);

  var convert = "";
  while (stack.length() > 0) {
    convert += stack.pop();
  }

  return convert;
}

/* var newNum = mulBase(32, 2);
console.log(newNum);
 */

//isPalindrom
function isPalindrom(word) {
  var s = new Stack();
  for (let i = 0; i < word.length; i++) {
    s.push(word[i]);
  }

  var rWord = "";
  while (s.length() > 0) {
    rWord += s.pop();
  }

  return word === rWord;
}

var word = "racecar";
console.log(isPalindrom(word));

//Recursion factorial
function factorial(n) {
  var s = new Stack();
  while (n > 0) {
    s.push(n--);
  }
  var result = 1;
  while (s.length() > 0) {
    result *= s.pop();
  }

  return result;
}

console.log(factorial(5));

//exo 1

function MissingParatnensis(arithmetic) {
  var s = new Stack();
  const signs = [".", "/", "+", "-", "*"];
  let pos = -1;
  if (arithmetic.length < 0) return pos;
  for (let i = 0; i < arithmetic.length; i++) {
    const currentElem = arithmetic[i];
    if (
      currentElem === "(" ||
      !isNaN(currentElem) ||
      signs.indexOf(currentElem) !== -1
    ) {
      s.push(currentElem);
    }
  }

  return pos;
}

console.log(MissingParatnensis("2.3 + 23 / 12 + (3.14159 * .246"));
