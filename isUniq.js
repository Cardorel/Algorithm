//split the string
//use reduce
//check the index of acc
//give a variable false by start
//and check

((str)=>{
    let isUniq = false;
 str
   .split('')
   .reduce((acc , val) => {
     if(acc.indexOf(val) === -1){
         acc.push(val);
         isUniq = true;
     }else{
         acc.push(val);
        isUniq = false;
     }
     return acc;
   } , [])
  
   console.log(isUniq);
})("hero");