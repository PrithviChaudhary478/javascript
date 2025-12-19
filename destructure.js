// Array and Object Destructure


// Array Destructure
let product = ["Iphone 13", 78000, "Iphone", 256]
let  [name, price, brand, storage] = product
console.log(name) // Iphone 13
console.log(price) // 78000
console.log(storage) // 256
console.log(brand) // Iphone


// Object Destructure
let userInfo = {
    firstName : "Prithabi",
    lastName : "Chaudhary",
    age : 23,
    address : "Sukhad",
    job : "student",
    study : "MERN Stack Development",
}

let {firstName, lastName, address, study} = userInfo
console.log(address) // SUkhad
console.log(study)  // MERN Stack Development

let user = {
    firstName : "Prithabi",
    lastName : "Chaudhary",
    age : 23,
    address : {
        permanent : "Sukhad",
        Temporary : "Kathmandu",
    },
    job : "student",
    study : "MERN Stack Development",
}
console.log(use.address.Temporary)
let {address: {permanent, Temporary}} = user
console.log(permanent)
console.log(Temporary)