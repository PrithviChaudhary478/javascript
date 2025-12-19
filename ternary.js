// Conditional Or Ternary Operator

// To check the number is odd or even
let number = 26
let isOddEven = (number % 2 == 0) ? "The number is even." : "The number is odd."
console.log(isOddEven)

// To check the larger number amount two numbar
let num1 = 96; let num2 = 65
let largest = (num1 > num2) ? `${num1} is larger than ${num2}` : `${num2} is larger than ${num1}.`
console.log(largest)

// age < 18 => Child, age <=40 => Young Adult, age <= 60 => Adult, age >= 61 => Old Age
let age = 74
let catagory = (age < 18) ? "Child" : (age <= 40) ? "Young Adult" : (age <= 60) ? "Adult" : "Old Age"
console.log(catagory)