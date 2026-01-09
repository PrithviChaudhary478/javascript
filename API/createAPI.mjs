import http from "http"
import fs from "fs"
let server = http.createServer((req, res)=>{
    console.log(req.method, res.url)
    // html responselai kasari pathaune 
    // res.end("<h1> Hello I  am heading one. </h1>") // h1 tag lai chrome le accept garxa but h1 lai gardaina
    // res.end("<h2> Heading Two </h2>") // Problem create vayo
    
    // res.setHeader("Content-Type", "text/html")
    // fs.readFile("index.html", (error, data)=>{
    //     res.end(data.toString())
    // }) 

    let users = {id : 1, name : "John.Doe"  }
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify(users))

})

server.listen(5000, ()=>{

    console.log("server")
})