function permutations(string) {
    let ret = [];

    for (let i = 0; i < string.length; i++) {
        let rest = permutations(string.slice(0, i).concat(string.slice(i + 1)));
        if (!rest.length) {
            ret.push(string[i])
        } else {
            for (let j = 0; j < rest.length; j++) {
                if (!ret.includes(string[i].concat(rest[j]))) ret.push(string[i].concat(rest[j]))
            }
        }
    }
    return ret;
}

/* 
In this kata you have to create all permutations of an input string and remove duplicates, 
if present. This means, you have to shuffle all letters from the input in all possible orders.

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

*/


console.log(permutations('a'))
//, ['a']);
console.log(permutations('ab').sort())
    //, ['ab', 'ba'].sort());
console.log(permutations('aabb').sort())
    //, ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort());