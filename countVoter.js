var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

const countVoter = voters.reduce((acc, value) => {
  if (value.voted) {
    acc++;
  }
  return acc;
}, 0);

console.log(countVoter);

// return length of largest sequence of the same numbers
// [1, 2, 3, 4, 4, 5, 2, 2, 2, 8, 9] => 3 // because 2, 2, 2 is the largest sequence of same numbers and has length 3
/* function (a) {
    // todo: implement
// to check if a is empty
if(!a.length) return 0;
let i;
let count = 0;
let tmp = 0;
for(i = 0 ; i < a.length ; i++){
if( a[i] === a[i +1]){
count++;
tmp = count;
}
else{
count = 0;
}
}

return tmp;
} */
/* console.log(JSON.stringify(a([1, 2, 3, 4, 4, 5, 2, 2, 2, 8, 9])));
console.log(JSON.stringify(a([1, 1, 2])));
console.log(JSON.stringify(a([1, 2, 2])));
console.log(JSON.stringify(a([1, 2, 2, 3])));
console.log(JSON.stringify(a([]))); */

const count = (a) => {
  // todo: implement
  // to check if a is empty
  if (!a.length) return 0;
  let i;
  let count = 0;
  let tmp = 0;
  for (i = 0; i < a.length; i++) {
    if (a[i] === a[i + 1]) {
      count++;
      tmp = count;
    } else {
      count = 0;
    }
  }
  return tmp;
};

console.log(count([1, 2, 3, 4, 4, 5, 2, 2, 2, 8, 9]));

//b
// d
// e
//a
//c
