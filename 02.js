// Data Types
// number : int, float, BigInt
let age = 23
let number = 234.3443

console.log(typeof age) // number
console.log(typeof number) // number

console.log(number.toFixed(2)) // fised the decimal value
console.log(typeof number.toString()) // string
console.log(typeof number.toLocaleString()) // string
let price = 123412342
console.log(typeof price.toLocaleString())  // string
console.log(price.toLocaleString()) // seperate by , english number

// Math Operation
const PI = Math.PI
console.log(PI) // PI value: 3.141592653589793

let square =Math.sqrt(16)
console.log(square) // Square root: 4

//ceil => round up 
console.log(Math.ceil(12.43))

// floor => accept interger value only ignor decimal value
console.log(Math.floor(12.43))

// Power 
console.log(Math.pow(5,3)) // 5 power 3 = 5 * 5 * 5 = 125


// Generate Random Number

let num = Math.random() 
console.log(num) 

// Generate Random Number between 1 - 6
let MIN = 1
let MAX = 6
let randomNumber = Math.floor(Math.random() * (MAX - MIN + 1) + MIN )
console.log(randomNumber)

// Generate Random Number between: 100 - 300
MiN = 200
MAX = 300
randomNumber = Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
console.log(randomNumber)

// Generate Random Number between: 1000 - 9999
MIN = 1000
MAX = 9999
randomNumber = Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
console.log(randomNumber)