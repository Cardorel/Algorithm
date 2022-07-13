//add at the end of array
const pop = (arr, value) => {
  const len = arr.length;
  for (let i = 0; i < len + 1; i++) {
    arr[i] = arr[i];
  }
  arr[arr.length - 1] = value;
  return arr;
};

console.log(pop([1, 2, 3, 4], [1, 2]));
