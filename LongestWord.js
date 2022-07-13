function LongestWord(sen) { 
    if(!sen.length) return '';
     const splitSen = sen.split(' ');
     let tmp = splitSen[0].replace(/\W+/gs , '');
     splitSen.forEach(s =>{
       const removeAnyCharater = s.replace(/\W+/gs , '');
       if(removeAnyCharater.length > tmp.length){
         tmp = removeAnyCharater;
       }
     })
    return tmp;
    }
       
    // keep this function call here 
    console.log(LongestWord(readline()));