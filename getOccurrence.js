//Given a number n and a digit d, count all occurrences of d in range from 0 to n.

const getOccurrence = (n, d) => {
  let res = 0;
  // Count appearances in numbers
  // starting from d
  let itr = d;
  while (itr <= n) {
    if (itr % 10 === d) {
      res++;
    }

    if (itr != 0 && Math.floor(itr / 10) === d) {
      res++;
      itr++;
    } else if (Math.floor(itr / 10) === d - 1) {
      itr += 10 - d;
    } else {
      itr += 10;
    }
  }
  return res;
};

let n = 25;
let d = 3;
console.log(getOccurrence(n, d));
