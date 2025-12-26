// // loop is used to excute block of code repetedly
// // for loop => used when loop is certain
// for (let i = 0; i <= 5; i++){
//     console.log(i)
// }

// // multiplication table
// let num = 5
// console.log('Multiplication Table')
// for (let i = 1; i<=10; i++){
//     console.log(`${num} x ${i} = ${num * i}`)
// }

// // sum of 1 to 20 
// let sum = 0;
// for (let i = 1; i<=5; i++) {
//     sum = sum + i
// }
// console.log(`The sum of 1 - 5 is: ${sum}`)

// // nested for loop => loop inside loop
// // Multiplication table of even number less than 21
// for ( let num = 2; num <21; num +=2){
//     console.log(`The Multiplication Table of : ${num}`)
//     for (let i =1; i<=10; i++){
//         console.log(`${num} x ${i} = ${num * i}`)
//     }
// }

// /*
// *****
// ****
// ***
// **
// *
// */
// for (let i = 5; i>=1; i--){
  
//      console.log("*".repeat(i))
  
// }
// /*
// 1
// 22
// 333
// 4444
// 55555
// */
// for (let i = 1; i <= 5; i++){
//     console.log(`${i}`.repeat(i))
// }

// // Palindrome print
// // 123454321
// let str =""
// function printPalindrome(num){
//     for (let i = 1; i <= num; i++)
//     {
//         str += i
//     }
//     for (let j = num -1; j >= 1; j--){
//         str += j
//     }
//     console.log(str)
// }

// printPalindrome(5)

// // 12321
// let result = ""
// function Palindrome1(){
// for(let i = 1; i<= 3; i++){
//     result = result + i
// }

// for (let j = 2; j>=1; j-- ){
//     result = result + j
// }

// console.log(result)
// }

// Palindrome1()

for (let i = 1; i<=5; i++){
    let str = ''
    for (let j = 1; j <= i; j++)
    {
      str += (j)
    }
    console.log(str)
}
let num = 4
for (let i = 1; i<=5; i++){
    let str = ''
    
    for (let j = 1; j <= num ; j++)
    {
      str += (j)
      
    }
    
    console.log(str)
    num = num - 1
}