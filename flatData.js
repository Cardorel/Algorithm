const data = [
  {a: 'happy', b: 'robin', c: ['blue','green']}, 
  {a: 'tired', b: 'panther', c: ['green','black','orange','blue']}, 
  {a: 'sad', b: 'goldfish', c: ['green','red']}
];

let flatData = data.reduce((accumulate , value) => {
    accumulate.push(value.a)
    accumulate.push(value.b)
    value.c.forEach((e) => accumulate.push(e));
  return accumulate;
}, []);



const countEach = flatData.reduce((acc , value) => {
    acc[value] = (acc[value] || 0) + 1 
    return acc;
}, {})
console.log(countEach);