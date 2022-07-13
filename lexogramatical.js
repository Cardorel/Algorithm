const lexicographicalOrder = (n) => {
  let result = [];
  for (let i = 1; i < n; i++) {
    result.push(i);
  }

  result.sort();

  return result;
};

console.log(lexicographicalOrder(24));
console.log(lexicographicalOrder(15));
