// Find the length of a given string.
console.log('Broadway Infosys'.length) // 16

// Convert a string to uppercase
console.log("New Star English Boarding School".toUpperCase())

// convert a string to lowercase.
let fruit = "APPLE"
console.log(fruit.toLowerCase())

// Remove spaces from both ends of a string
let country = "   Nepal   "
console.log(country.trim())

// Extract the first 4 characters of a string.
let institute = "Broadway"
console.log(institute.slice(0, 4))

// Extract the last 5 character of a string.
console.log(institute.slice(-5))

// concatinate two strings into one string.
let firstName = "Ram"; let lastName = "Rai"
console.log(firstName + " " + lastName)

// access the first character of a string.
console.log(firstName[0]) // R
console.log(lastName.charAt(0)) // R

// access the last character of the string
console.log(firstName.slice(-1)) // m

// check whether a string contains the word
let isWord = "Java"
console.log(isWord == "Java")
console.log(isWord == "java")

// Find the position of the first occurance of "a" in a string
console.log(isWord.indexOf('a'))

// Find the position of the last occurence of "e" in a string.
console.log("Number".lastIndexOf('e'))

// check whether a string ends with ".com".
console.log("https://www.youtube.com".endsWith('.com')) // true
console.log("https:///www.sunilsapkota11.com.np".endsWith('.com')) // false

// check whether a string starts with "Mr"
console.log("Mr Sushan sir".startsWith('Mr')) // true

//Check whether a string contains "@"
console.log("broadwayinfosys@gmail.com".includes('@')) // true

// check whether two strings are exactly equal.
let userName = "Ram"
let user_name = "ram"
console.log(userName === user_name) // false

//check whether two strings are equal ignoring case
console.log(userName == user_name) // false
console.log("Ram" == "ram") // string ma value ra datatypes comparsion garda same result kina aauxa 

// check whether a string is empty
let address = null
let result = (address== null || address == undefined) 
? "Empty"
: "Not Empty"
console.log(result)

// Replace "hello" with "hi" in a string.
console.log("Hello friends".replace("Hello", "Hi"))

// Replace all spaces in a string with hyphens(-).
let message = "Helloo my dear students"
console.log(message.replaceAll(" ", "-"))

// Remove all spaces from string.
console.log(message.replaceAll(" ",""))

// Remove all vowels in a string with .
console.log(message.replace(/[aeiou]/gi,'.'))  // g => removel all vowel [a, e, i, o, u] i=> uppercase and lowercase remove

// Remove all digits from a string
let email= "hellocage564@gmail.com"
console.log(email.replace(/[0123456789]/g, ''))

// remove all special character from a string
let special = "abc`!@#$%^&*"
console.log(special.replace(/[`!~@#$%^&*]/g,""))

// - Mask all characters of a string except the last 4 characters.
let Number = "2424345"
console.log(Number.slice(-4))

// Pad a string at the start to make its length 10.
console.log(Number.slice(-4).padStart(Number.length, "*"))

// Pad a string at the end to make its length 12.
console.log(Number.slice(-4).padEnd(Number.length, "#"))

// find the character at index of 5
console.log(message[5])
console.log(message.charAt(5))

// split a sentence of words in an array
console.log(message.split(" "))

// count the number of word in a sentence
let bio = "i am prithabi"
console.log(bio.split(" ").length)

// Extract the username from a email address
let mail = "sunilsapkota@gmail.com"
console.log(mail.split("@")[0])

// Extract the domain name from email address
console.log(email.split("@")[1])

// Replace only the first occurances of a word in a string 
console.log("Bye Bye baby".replace("Bye", "Hi,"))

//convert "hello world" into "Hello World using letters"
console.log("hello world I am javascript".replace("hello world", "Hello World"))

// Check whether a string contains only lowercase letters.

// Check whether a string contains only uppercase letters.

// Find the index of a specific character in a string.
console.log("Hello Javascript".indexOf('v'))