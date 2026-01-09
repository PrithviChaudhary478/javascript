import http from "http"

let users = [
    {
        userId : 1,
        name : "sunil",
        contact : 9815666815,
    }, 
    {
        userId : 2,
        name : "laxmi",
        contact : 9749951185,
    },
];

let server = http.createServer((req, res)=>{
    const URL = req.url;
    const METHOD = req.method
    res.setHeader("Content-Type", "application/json")

    if (METHOD == "GET"){
        if (URL == "/users") {
            res.end(JSON.stringify(users))
        } else {
            res.statusCode = 404
            res.end(JSON.stringify({error : `Cannot Get on ${URL}`}))
        }
    }
    else if (METHOD == "POST") {
        if (URL == "/users"){
            let body = "";
            req.on("data", (chunk)=>{
                body +=chunk
                // console.log(body)
            })

            req.on("end", ()=>{
                let user = JSON.parse(body)
                users.push(user)
                res.statusCode = 201
                res.end(JSON.stringify({message : "successfull post"}))
            })
        }

    }
    else {
        res.end(JSON.stringify({error : `This Method is not correct`}))
    }


})

server.listen(3500, ()=>{
    console.log("Server Running");
});