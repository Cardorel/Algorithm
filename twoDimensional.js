let grades = [
  [89, 77, 78],
  [76, 82, 81],
  [91, 94, 89],
];

//Calcule total
//calcul the avg
let sum = 0;
let avg = 0;
for (let row = 0; row < grades.length; row++) {
  for (let col = 0; col < grades[row].length; col++) {
    sum += grades[row][col];
  }
  avg = sum / grades[row].length;
  console.log("Student " + parseInt(row + 1) + " average: " + avg.toFixed(2));
}

//console.log(sum, avg);
