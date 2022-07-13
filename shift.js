//remove at the beging

const shift = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr;
};

console.log(shift([1, 2, 3, 4, 5, 6].shift()));
