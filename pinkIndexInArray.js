const arr1 = [1, 4, 5, 6, 6, 7, 8, 9, 7, 9];
const arr2 = [1, 0, 4, 5, 3, 6, 7, 8];

const pinkIndexInArray = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
};

const pinkIndexInArray1 = (arr = []) => arr.indexOf(Math.max(...arr));
console.log(pinkIndexInArray1(arr1));
console.log(pinkIndexInArray1(arr2));
