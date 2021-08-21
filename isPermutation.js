//check their lengths,
//split them
//sort them
//compare them


const isPermutation = ((str1 , str2)=>{
  let sort1 = str1.split('').sort();
  let sort2 = str2.split('').sort();
  if(str1.length != str2.length) {
      return false;
  }else{
    if(sort1.join('') == sort2.join('')) return true;
    else return false;
  }
  
})("abcd" , "dcba");

console.log(isPermutation);