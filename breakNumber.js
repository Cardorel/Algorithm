//Given a number 'N', you need to find all possible unique ways to
// represent this number as the sum of positive integers

let print_all_sum_rec = (n, current_sum, start, result, output) => {
  //On verifie si notre target n est pegal a la current sum
  if (current_sum === n) return output.push(result.slice());

  for (let i = start; i < n; i++) {
    //tmp sum
    let tmp_sum = current_sum + i;
    if (tmp_sum <= n) {
      result.push(i);
      print_all_sum_rec(n, tmp_sum, i, result, output);
      result.pop();
    }
    return;
  }
};

let print_all_sum = (n) => {
  let output = [];
  let result = [];
  print_all_sum_rec(n, 0, 1, result, output);
  return output;
};

let n = 1;
let result = print_all_sum(n);
console.log(result);
