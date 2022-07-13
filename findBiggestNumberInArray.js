const arr1 = [1, 4, 5, 6, 6, 7, 8, 9, 7, 9];
const arr2 = [1, 0, 4, 5, 3, 6, 7, 8];

const findBiggestNumberInArray = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  let middle;
  while (start < end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < arr[middle + 1]) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  return arr[start];
};

const biggestNumber = (arr) => arr.sort((a, b) => b - a)[0];

console.log(findBiggestNumberInArray(arr1));
console.log(findBiggestNumberInArray(arr2));

console.log(biggestNumber(arr1));
console.log(biggestNumber(arr2));
