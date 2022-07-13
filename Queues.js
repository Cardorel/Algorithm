function Queue() {
  this.dataStore = [];
  this.front = front;
  this.back = back;
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.toString = toString;
  this.empty = empty;
}

function enqueue(element) {
  this.dataStore.push(element);
}

function dequeue() {
  this.dataStore.shift();
}

function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataStore[this.dataStore.length - 1];
}

function toString() {
  let result = "";
  for (let i = 0; i < this.dataStore.length; i++) {
    result += this.dataStore[i] + "\n";
  }
  return result;
}

function empty() {
  if (this.dataStore.length === 0) {
    return true;
  }
  return false;
}

var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
q.dequeue();
console.log(q.toString());

const dancers = `F Allison McMillan
M Frank Opitz
M Mason McMillan
M Clayton Ruff
F Cheryl Ferenback
M Raymond Williams
F Jennifer Ingram
M Bryan Frazer
M David Durr
M Danny Martin
F Aurora Adney
`;

const femelleQ = new Queue();
const maleQ = new Queue();

function Dancer(name, sex) {
  this.name = name;
  this.sex = sex;
}

function getDancer() {
  const names = dancers.split("\n");
  for (let i = 0; i < names.length; i++) {
    names[i] = names[i].trim();
  }

  for (let i = 0; i < names.length; i++) {
    const dancer = names[i].split(" ");
    const sex = dancer[0];
    const name = dancer[1];
    if (sex == "F") {
      femelleQ.enqueue(new Dancer(name, sex));
    } else {
      maleQ.enqueue(new Dancer(name, sex));
    }
  }
}

function dance(males, femelles) {
  console.log("The dance partners are: \n");
  while (!maleQ.empty() && !femelleQ.empty()) {
    console.log("femelle: '\n'");
  }
}
