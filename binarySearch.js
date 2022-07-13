const arr = [1, 5, 5, -7, 6, 8, -6, -7, -8, 5, 9];

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let middle;

  while (left <= right) {
    //find the middle
    middle = Math.round((right - left) / 2) + 2;
    //Check if the middle is the same as our target
    if (target === arr[middle]) {
      //return this middle
      return middle;
    } else if (target < arr[middle]) {
      //Change our right value
      right = middle - 1;
    } else {
      //change our left value
      left = middle + 1;
    }
  }
  //If nothing let show -1
  return -1;
};

console.log(binarySearch(arr, 5));
