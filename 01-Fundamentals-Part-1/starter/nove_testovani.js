// Mark's parametres
let weightMark1 = 78;
let weightMark2 = 95;
let heightMark1 = 1.69;
let heightMark2 = 1.88;

// John's parametres
let weightJohn1 = 92;
let weightJohn2 = 85;
let heightJohn1 = 1.95;
let heightJohn2 = 1.76;

const BMIMark1 = weightMark1 / (heightMark1 ** 2);
const BMIMark2 = weightMark2 / (heightMark2 ** 2);

const BMIJohn1 = weightJohn1 / (heightJohn1 ** 2);
const BMIJohn2 = weightJohn2 / (heightJohn2 ** 2);

console.log(BMIMark1, BMIJohn1);
console.log(BMIMark2, BMIJohn2);

const markHigherBMI1 = BMIMark1 > BMIJohn1;
const markHigherBMI2 = BMIMark2 > BMIJohn2;

console.log(markHigherBMI1);
console.log(markHigherBMI2);