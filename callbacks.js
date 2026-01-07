// callback function

// function sub(a, b, sub){
//     setTimeout( ()=>{
//       sum = a - b
//       sub(sum)
//     }, 3000) // 3s = 3000

// }
// sub (5, 4, (sub)=>{
//   console.log(sub)
// })

// area of triangle
function triangle(b, h, area){
  
  if ( b < 0 || h < 0){
    let error = new Error ("Breadth or Height is wrong")
    area(error, null)
  } else {
    a = 0.5 * ( b * h)
    area(null, a)
  }

}

triangle(1, 5, (error, data)=>{
  (error) ? console.log(error.message) : console.log(data)

})