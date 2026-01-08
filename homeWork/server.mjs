import http from "http"

let server = http.createServer((request, response)=>{
console.log(request.method, request.url)
// response.write("This is server")
// response.end()
// response.end("This is server")
if (request.url === "/home"){
    response.end("This is home page.")
} else if (request.url === "/about"){
    response.end("This is about page.")
} else if (request.url === "/contact"){
    response.end("This is contact page.")
} else {
    response.end("404 is not found")
}
})

server.listen(5000, ()=>{
    console.log("Server is running")
})