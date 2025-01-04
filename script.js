let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heighJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heighJohn * heighJohn);
const markHigherBmi = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBmi);
