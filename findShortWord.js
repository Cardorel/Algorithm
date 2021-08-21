function findShort(s){
    let arrayOfString = s.split(' ');
    let tmp = arrayOfString[0];
    return arrayOfString
            .reduce((acc , val , index , array) =>{    
             if(tmp.length > val.length){
               tmp = val; 
               acc = val.length;  
             }else if(tmp.length == val.length){
                 acc = val.length; 
                 tmp = val;
               console.log(tmp);
             }
      return acc;
    } , 0)
  }

/*   function findShort(s){
    return s
      .split(' ')
      .map(a => a.length)
      .reduce((a, b) => Math.min(a, b))
  } */

  console.log(findShort("bitcoin take over the world maybe who knows perhaps")) // 3
  console.log(findShort("turns out random test cases are easier than writing out basic ones")) // 3
  console.log(findShort("Let's travel abroad shall we")) // 2
