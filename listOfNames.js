function list(names) {
    //your code here
    let result;
    let lastName = names.length - 1
    result = names
        .filter(val => val.name != names[lastName].name)
        .reduce((acc, name) => {
            if (names[names.length - 2].name && name.name == names[names.length - 2].name) {
                return acc += name.name
            } else {
                return acc += name.name + ', '
            }
            return acc
        }, '')
    return result.length <= 1 ? (names.length >= 1 ? names[0].name : '') : result + ' & ' + names[lastName].name;

}
console.log(list([{
    name: 'Bart'
}, {
    name: 'Lisa'
}, {
    name: 'Maggie'
}, {
    name: 'Homer'
}, {
    name: 'Marge'
}]))
//, 'Bart, Lisa, Maggie, Homer & Marge', "Must work with many names")
console.log(list([{
    name: 'Bart'
}, {
    name: 'Lisa'
}, {
    name: 'Maggie'
}])) //, 'Bart, Lisa & Maggie',"Must work with many names")
console.log(list([{
    name: 'Bart'
}, {
    name: 'Lisa'
}]))
//, 'Bart & Lisa', "Must work with two names")
console.log(list([{
    name: 'Bart'
}])) //, 'Bart', "Wrong output for a single name")
console.log(list([])) //, '', "Must work with no names")