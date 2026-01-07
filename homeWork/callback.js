

const users = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex@example.com"
  },
  {
    id: 2,
    name: "Sam Wilson",
    email: "sam@example.com"
  }
];

const posts = [
  {
    id: 101,
    userId: 1,
    title: "Learning JavaScript",
    body: "Callbacks, promises and async/await explained."
  },
  {
    id: 102,
    userId: 1,
    title: "Understanding Node.js",
    body: "Event loop and non-blocking IO."
  },
  {
    id: 201,
    userId: 2,
    title: "MongoDB Basics",
    body: "Documents, collections and schemas."
  }
];

const messages = [
  {
    id: 1001,
    postId: 101,
    user: "Chris",
    message: "Great explanation!"
  },
  {
    id: 1002,
    postId: 101,
    user: "Jordan",
    message: "This helped me a lot, thanks!"
  },
  {
    id: 1003,
    postId: 102,
    user: "Taylor",
    message: "Waiting for the next article."
  }
];

// // GetMessageByPostId(postId, callback) {}
function getMessageByPostId(postId, callback){
  let message = messages.filter((pId)=>{
    return pId.postId === postId
  })
  callback(message)

}

getMessageByPostId(106, (data)=> {
  console.log(data)
})

// function getUserById(id, Callbacks){}
function getUserById(id, Callbacks){
 let user= users.find((u)=>u.id==id)
 Callbacks(user)
}
getUserById(2, (data)=>{
  console.log(data)

})
 

// function getPostByUserId(postId, Callback){}
function getPostByUserId(postId, Callback){
 let post = posts.filter((pos)=> pos.userId == postId)
 Callback(post)
}

getPostByUserId(7, (data)=>{
  console.log(data)
})


function loadUserDashBoard(userId, user, callback){
let user2 = users.find((u)=>{
  return u.id === userId
})
let {name}= user2
callback(name)
let allPost = messages.filter((all)=>{
 return all.user === user
})
callback(allPost)

}

loadUserDashBoard(2, "Jordan", (data)=>{
//  fetch the user by useId
console.log(data)
console.log(data)

})


