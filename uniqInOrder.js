var uniqueInOrder = function (iterable) {
    //your code here - remember iterable can be a string or an array
    let tmp;
    let array = [];
    for (var i = 0; i < iterable.length; i++) {
        if (tmp != iterable[i]) {
            array.push(iterable[i]);
            tmp = iterable[i];
        }
    }
    return array;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')) // ['A','B','C','D','A','B']