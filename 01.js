console.log("Hello From Broadway Infosys")  // output on Terminal

// Variables Declaration
// Variable name should be title bit informative or related
var num1 = 45 //Global Scope
let num2 = 34 // Block Scope
const PI = 22 / 7 // Value not changed

// casing in js
let userName = "Surakshya" // camelCase
let UserAge = 35 // PascalCase
let user_salary = 25000 // snake_case
let MAX_LIMIT = 2537 // UPPER_CASE for constant variable

// Arithematic Operation 
let sum = num1 + num2  // addition + operator is used
let sub = num1 - num2 // substraction - operator is used
let mul = num1 * num2 // Multiplication * operator is used
let div = num1 / num2 // Division / operator is used
let mode = num1 % num2 // Modulus (Remainder) % operator is used
let exponent = num1 ** num2 // Exponent like 2**3 = 2 * 2 *  2 = 8

// Assignment Operator
let a = 5 // = operator is used to asign value 
let b = 4
b += a  // b = b + a
let c 
c -= b // c = c - b
let d 
d *= c // d = d * c
let e 
e /= d // e = e / d
let f
f %= e // f = f % e

// Comparison Operator
let check = num1 > num2 // Right
check = (num1 < num2) // Right
check = num1 <= num2
check = num1 >= num2
check = num1 != num2
check = num1 !== num2
check = num1 == num2
check = num1 === num2

// Logical Operator
let age = 19
let gernder = "female"
// AND (&&) operator  true && true => true  else false
let discount = (age <= 18 && gernder == "female") ? "You got 50% discount" : "You got 10% discount"
// console.log(discount)

// OR (||) Operator true || flase => true
 discount = (age == 60 || gernder == "female" || gernder == "male") ? "You got 50% discount" : "You got 10% discount"
//  console.log(discount)

 // NOT (!) Operator gives reverse result true => false false => true
 let bool = true
//  console.log(!bool)

 // Ternary Operator
 let isMarriage = (age > 20 ) ? "Eligible for marriage" : "Not eligible for marriage"
//  console.log(isMarriage)

// Nullish Colleaching
let price
let userAge = price ?? null
console.log(userAge)

// Template Letral
let boyName = "Dipendra Kathayat"
let girlName = "Dipana Baduwal"

let result = `Dear ${boyName},
Congratulations for marriage with beautiful angel's ${girlName}.
Please click the link below to view your lovely memories: https://www.pexels.com/search/beautiful%20girl/
Thank You`
console.log(result)

let users = [
    {
        id : 1,
        userName: "abc",
        password : "12341234"
    },
     {
        id : 2,
        userName: "abc",
        password : "12341234"
    },
     {
        id : 3,
        userName: "abc",
        password : "12341234"
    },
]

