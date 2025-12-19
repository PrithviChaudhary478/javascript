// An Object is a variable that can hold many variables.
// Objects are collections of key-value pairs, where each key (known as property names) has a value.
// Objects can describe anything like houses, cars, people, animals, or any other subjects.

// object in JS
let car = {
    // key : value
    companyName : "Tesla",
    price : 80500,
    color : "Red",
    model : 2025,
    weight : 500,
    country : "Nepal",

}

// Accessing object
console.log(car)
 /*{
  companyName: 'Tesla',
  price: 80500,
  color: 'Red',
  model: 2025,
  weight: 500,
  country: 'Nepal'
}  */

// create empty object

let person = {}

// insert data in person empty object
person.firstName = "Sunil" 
person.secondName = "Sapkota"
person.age = "21"
person.gmail = "sapkotasunil21@gmial.com"

// output
console.log(person)

// create object using new Object()
let a = new Object({
    age : 23
})

console.log(a.age) // 23