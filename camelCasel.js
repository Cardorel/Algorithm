String.prototype.camelCase=function(){
    //your code here
   return this.split(' ')
     .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')
}
  
//use reduce

const camelCaseUseReduce = (letter = 'test case') =>
  letter.split(' ')
    .reduce((acc, val) => acc + val.charAt(0).toUpperCase() + val.slice(1), '');

  



/* console.log("test case".camelCase()) //, "TestCase");
console.log("camel case method".camelCase()) //, "CamelCaseMethod");
console.log("say hello ".camelCase()) //, "SayHello");
console.log(" camel case word".camelCase()) //, "CamelCaseWord");
console.log("".camelCase()) //, ""); */
console.log(camelCaseUseReduce());