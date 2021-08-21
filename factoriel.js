const input = 5;

const fact = Array(input).fill(null).map((curr , index) => index + 1).reduce((acc , val) => acc * val);
console.log(fact);