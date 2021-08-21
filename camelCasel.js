String.prototype.camelCase=function(){
    //your code here
   return this.split(' ')
     .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')
  }



console.log("test case".camelCase()) //, "TestCase");
console.log("camel case method".camelCase()) //, "CamelCaseMethod");
console.log("say hello ".camelCase()) //, "SayHello");
console.log(" camel case word".camelCase()) //, "CamelCaseWord");
console.log("".camelCase()) //, "");