// String Data types
let schoolName = "New Star English Boarding School"
let address = 'Gho.Na.Pa.01'
let country = `   Nepal  `

// string method
console.log(schoolName[4]) // S
console.log(schoolName.charAt(9)) // E
console.log(schoolName.length) // 32
console.log(schoolName.toUpperCase()) // Change character into UpperCase
console.log(schoolName.toLocaleLowerCase()) // change character into LowerCase
console.log(schoolName.slice(9, 16)) // English {16 index character is excluded} syntax: slice(start, end)
console.log(schoolName.substring(4, 8)) // Star syntax: (start, end)

// Trim method
console.log(country.trim()) // remove space of start and end
console.log(country.trimStart()) // remove space of start
console.log(country.trimEnd()) // Remove space of end


// split method
console.log(schoolName.split(' ')) // split word into array 
console.log(schoolName.split(''))  // split each an every character in array

// Repeat Repalce RepalceAll
let fullName  = "Broadway Infosys"
console.log(fullName.repeat(2)) // Repeat:Broadway Infosys Broadway Infosys {Repeat 2 times}
console.log(fullName.replace('Broadway Infosys', 'Prithabi Chaudhary')) // Replace: Broadway Infosys by Prithabi Chaudhary 


let biography = `I am from Nepal. Nepal is a landlock country. Kathmandu is the capital city of Nepal.`
console.log(biography.replaceAll('Nepal','America')) // Repalce: Every Nepal word by America
