function spinWords(string){
    //TODO Have fun :)
    //split string
    //get first world if length of array is more 2
    //split each val and reverse them!
    //use reduce
    const arrayOfString = string.split(' ');
     return arrayOfString.reduce((acc , val , index , array) => {
      if(val.split('').length <= 4){
        if(arrayOfString[arrayOfString.length - 1] == val){
            acc += val
          }else{
            acc += val + ' '
          }
      }else{
        if(arrayOfString.length == 1){
        acc += val.split('').reverse().join("");
        }else{
          if(arrayOfString[arrayOfString.length - 1] == val){
            acc += val.split('').reverse().join("");
          }else{
            acc += val.split('').reverse().join("") + ' ';
          }
        }
      }
      return acc;
    }, '')
    
  }

  console.log(spinWords('Welcome')); //"emocleW"
  console.log(spinWords("Hey fellow warriors")); //"Hey wollef sroirraw"
  console.log(spinWords('This is a test')); //"This is a test"
  console.log(spinWords('This is another test')); //"This is rehtona test"
  console.log(spinWords('You are almost to the last test')); //"You are tsomla to the last test"
  console.log(spinWords('Just kidding there is still one more')); //"Just gniddik ereht is llits one more"
  console.log(spinWords('Seriously this is the last one')); //"ylsuoireS this is the last one"

  /*
  Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

    Strings passed in will consist of only letters and spaces.
    Spaces will be included only when more than one word is present.

Examples:

spinWords("Hey fellow warriors") => "Hey wollef sroirraw" 
spinWords("This is a test") => "This is a test" 
spinWords("This is another test") => "This is rehtona test"  
  */