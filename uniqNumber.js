const numbers = [102, 91, 3, -6, 203, 8, 33, 21, 150, 77, 61, 3, 91, 21, 8];

const uniqNumbers = numbers.reduce((acc , val) => {
    if(acc.indexOf(val) === -1){
        acc.push(val)
    }
  return acc;
} , []);



console.log(uniqNumbers);