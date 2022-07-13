function List() {
  this.listSize = 0;
  this.pos = 0;
  //here we will store our list
  this.datastore = [];
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.length = length;
  this.contains = contains;
}

function append(element) {
  this.datastore[this.listSize++] = element;
}

//find first the element i mean his index
function find(element) {
  for (let i = 0; i < this.datastore.length; i++) {
    if (this.datastore[i] === element) {
      return i;
    }
    return -1;
  }
}

//remove the element in the arrays.
function remove(element) {
  let index = find(element);
  if (index > -1) {
    this.datastore.splice(index, 1);
    this.listSize--;
    return true;
  }
  return false;
}

//a length of array
function length() {
  return this.listSize;
}

//allow us to view elements of array
function toString() {
  return this.datastore;
}

//insert in the array after
function insert(element, after) {
  const insertPos = find(after);
  if (insertPos > -1) {
    this.datastore.splice(insertPos + 1, 0, element);
    this.listSize++;
    return true;
  }
  return false;
}

//clear all function
function clear() {
  delete this.datastore;
  this.datastore = [];
  this.listSize = this.pos = 0;
}

//contains
function contains(element) {
  for (let i = 0; i < this.datastore.length; i++) {
    return this.datastore[i] === element ? true : false;
  }
}

function front() {
  this.pos = 0;
}

function end() {
  this.pos = this.listSize - 1;
}

function prev() {
  if (this.pos > 0) {
    --this.pos;
  }
}

function next() {
  if (this.pos < this.listSize - 1) {
    ++this.pos;
  }
}

function currPos() {
  return this.pos;
}

function moveTo(pos) {
  this.pos = pos;
}

function getElement() {
  return this.datastore[this.pos];
}

var names = new List();
names.append("Hello");
names.append("string");
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");
names.next();
names.next();

/* for (names.front(); names.currPos() < names.length(); names.next()) {
  console.log(names.getElement());
}
 */

var movies = read("films.txt").split("/n");

function createArr() {
  var arr = read("films.txt").split("/n");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].trim();
  }
  return arr;
}

var movieList = new List();

for (let i = 0; i < movies.length; i++) {
  movieList.append(movies[i]);
}

function displayList(list) {
  for (list.front(); list.currPos() < list.length(); list.next()) {
    if (list.getElement() instanceof Customer) {
      console.log(
        list.getElement()["name"] + ", " + list.getElement()["movie"]
      );
    } else {
      console.log(list.getElement());
    }
  }
}

console.log(displayList(movieList));
