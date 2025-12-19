// Array
 // create single dimensional array
 let product = ["Car", "Tesla", 800000, 2026, "Red" ]

 let numbers = new Array (1, 2, 3, 4, 5)
 // workin in index: start with 0 1 2 3 ...
 console.log(numbers[0])
 console.log(numbers[2])
 console.log(numbers[4])

 // create two dimensional array3 32002
 // person information
 let personInfo = [
    "Dipendra Kathayat",
    13,
    [
        9812321365,
        9712874563,
    ],
    [
        "abc@gmail.com",
        "xyz78@gmail.com",
    ],
    "Gho.Na.Pa.1 sukhad",
 ]

 // output // Retrival element from array
 console.log(personInfo[0]) // Dipendra Kathayat
 console.log(personInfo[1]) // 13
 console.log(personInfo[2][1]) // 9712874563,
 console.log(personInfo[3][0])  //abc@gmail.com
 console.log(personInfo[4])  // Gho.Na.Pa.1 sukhad


 // data insert in array

 let college = []
  // push() is used to add element at end of array
  college.push("Ghodaghodi Multiple Campus")
  college.push("Rastriys Multple Campus")
  console.log(college)

  // unshift() Add element at start
  college.unshift("Kathmandu Multiple Campus")
  console.log(college)

 // pop()   Remove last element of array
  let person = ["Sunil Sapkota", 22, "Gho.Na.Pa.01",9815657326]
  person.pop() // Remove 9815657326
  console.log(person) 


  // shift() Remove first element of array
  person.shift()  // Sunil Sapkota
  console.log(person)

  