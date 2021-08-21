function findMissingLetter(array)
{
   for (var i = 0; i < array.length - 1; i++) {
        if (array.join('').charCodeAt(i + 1) - array.join('').charCodeAt(i) != 1) {
            return String.fromCharCode(array.join('').charCodeAt(i) + 1);
        }
    }
}

console.log(findMissingLetter(['a','b','c','d','f'])) //, 'e'
console.log(findMissingLetter(['O','Q','R','S'])) // 'P'