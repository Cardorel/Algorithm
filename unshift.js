//unshift is to add at the begining
const unshift = (arr, addedValue) => {
  const len = arr.length;
  for (let i = len; i >= 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = addedValue;
  return arr;
};

console.log(unshift([9, 1, 2, 3, 4, 5], 0));
