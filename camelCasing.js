function solution(string) {
  return string.replace(/([A-Z])+/gm, " $1");
}

const camelCasingReduce = (letter = "cardoJunesNgass") =>
  letter.replace(/([A-Z])+/gm, " $1");
//use Reduce

//console.log(solution("camelCasing")); // 'camel Casing'
//console.log(solution("camelCasingTest")); //'camel Casing Test'
console.log(camelCasingReduce());
