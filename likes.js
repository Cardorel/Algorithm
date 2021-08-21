function likes(names) {
    // TODO
    //cycle for
    //slice array
    let result = '';    
    if(names.length < 1){
        result = 'no one'
      }else if(names.length == 1){
        result = names[0];
      }
       else if(names.length <= 3){
        let allNamesWithoutLast =  names.filter((val) => val != names[names.length - 1]).join(', ')
        let lastName = names[names.length - 1];
         result = allNamesWithoutLast + ' and ' + lastName;
      }else{
        let allNamesWithoutLast =  names
        .filter((val) => (val == names[0]) || (val == names[1]))
        .join(', ')
        let count  = names.length - 2;
         result = allNamesWithoutLast + ' and ' + count + ' others';
      }
    return names.length <=1 ? result + ' likes this' : result + ' like this';
  }

console.log(likes([]))       //'no one likes this';
console.log(likes(['Peter'])) // 'Peter likes this'
console.log(likes(['Jacob', 'Alex'])) // 'Jacob and Alex like this'
console.log(likes(['Max', 'John', 'Mark'])) //'Max, John and Mark like this'
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))  //'Alex, Jacob and 2 others like this'
