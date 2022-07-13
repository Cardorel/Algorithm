function inArray(array1 = [], array2 = []) {
  //...
  let stringOfWords = array2.join(" ");
  return array1.reduce((acc1, val1) => {
    if (stringOfWords.includes(val1)) {
      acc1.push(val1);
    }
    return acc1.sort();
  }, []);
}

const inArray2 = (arr1 = [], arr2 = []) =>
  arr2.filter((val) => arr1.includes(val)).sort((a, b) => a - b);

let a2;
let a1;
a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
a1 = ["xyz", "live", "strong"];
console.log(inArray(a1, a2)); //, ["live", "strong"])
a1 = ["live", "strong", "arp"];
console.log(inArray(a1, a2)); //, ["arp", "live", "strong"])
a1 = ["tarp", "mice", "bull"];
console.log(inArray(a1, a2)); //, [])

/* console.log(inArray2(a1, a2)); //, ["live", "strong"])
a1 = ["live", "strong", "arp"];
console.log(inArray2(a1, a2)); //, ["arp", "live", "strong"])
a1 = ["tarp", "mice", "bull"];
console.log(inArray2(a1, a2)); //, [])
 */
