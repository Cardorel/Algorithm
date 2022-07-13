function findNextLetter(array) {
  let last = array[array.length - 1];
  return (
    array &&
    array.reduce((acc, val, index) => {
      if (val.indexOf(last) != -1) {
        let getCharCode = array.join("").charCodeAt(index);
        if (val == val.toUpperCase()) {
          acc = String.fromCharCode(getCharCode + 1).toUpperCase();
        } else {
          acc = String.fromCharCode(getCharCode + 1).toLowerCase();
        }
      }
      return acc;
    }, "")
  );
}

console.log(findMissingLetter(["a", "b", "c", "d", "e", "f"])); //, 'g');
