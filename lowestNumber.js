const numbers = [102, 91, 3, -6, 203, 8, 33, 21, 150, 77, 61, 3, 91, 21, 8];
let low = 0;
const lowest = numbers.reduce((acc , value) => {
    if(value > acc)
    {
        acc = value;
    }
  return acc;
} , 0);

console.log(lowest);