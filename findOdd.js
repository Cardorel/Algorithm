/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times. */

/* function findOdd(A) {
    //happy coding!
    let result = 0
    if (A.length <= 1) result = A[0];
    let obj = A.reduce((acc, val) => {
        if (val % 2 != 0) {
            acc[val] = (acc[val] || 0) + 1;
        } else {
            acc[val] = (acc[val] || 0) + 1;
        }
        return acc;
    }, {})

    for (var o in obj) {
        let val = obj[o];
        if (val % 2 != 0) {
            result = o;
        }
    }
    return +result;
}
 */
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); //5
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); // -1
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 5
console.log(findOdd([10])); //10
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])) //10;
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])); //1