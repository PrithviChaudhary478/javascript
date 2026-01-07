// WAP to use a loop to find the sum of 1 to N.
// let n = 10
// let sum = 0
// for (let i = 1; i <=n; i++)
// {
// sum = sum + i
// }
// console.log(sum)

// Given three numbers to find the greatest number.
// let num1 = 57; let num2 = 22; let num3 = 9;
// let largestNumber = num1 > num2 && num1 > num3 ? num1 : num2 > num1 && num2 > num3 ? num2 : num3
// console.log(largestNumber)

// Count the number of even numbers exists between 1 and 50.
// let count = 0;
// for (let i = 1; i <= 50; i++)
// {
//     if (i % 2 == 0)
//     {
//         count = count + 1;
//     }
// }
// console.log(count)

// Use a loop to reverse a given number.
// let number = 22434
// let reverse = 0;
// while (number > 0){
//     let rem = number % 10
//     reverse = reverse * 10 + rem
//     number = Math.floor(number / 10)
// }
// console.log(reverse)

// let reverse = "";

// while (number > 0) {
//     let rem = number % 10;
//     reverse = reverse + rem;
//     number = Math.floor(number / 10);
// }

// console.log(reverse);
// Create a function that takes a number as input and return true if a number is prime else return false.
// function chckPrimeNumber (num){
//     if (num < 1) return false
//     for(let i = 2; i < num; i++){
//         if(num % i == 0 )
//         {
//             return false
//         }
        
//     }
//     return true
// }
// console.log(chckPrimeNumber(11))
// Create a function that takes a number and checks if a number is a palindrome number.
let palindrome = ""
function isPalindrome (num){
    while (num > 0){
        let rem = num % 10
        palindrome += rem
        num =Math.floor ( num / 10 )
    }
}
console.log(isPalindrome(12321))

if (palindrome == 12321) {
        console.log("palindrome")
    } else {
        console.log("Not palindrome")
    }

 
// Check if a number is an armstrong number.