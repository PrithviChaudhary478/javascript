// ForEach => loop all element of array
let student = [1, "Prabesh", "seven", 13]

student.forEach((value)=>{
console.log(value)
})

// map => transform array and return new array
let employe = [15000, 34333, 21343, 42321, 60555]
let finalSalary = employe.map((salary)=> salary + 750)
console.log(finalSalary)

// filter => provides element by filtering
let filterSalary = finalSalary.filter((salary)=> salary >=40000)
    console.log(filterSalary)


// Reduce => return single element performing operation
let totalSalary = finalSalary.reduce((acc, salary)=>acc + salary) 
console.log(totalSalary)