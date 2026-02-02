import express, { text } from "express";
import logger from "./middlewares/logger";

const app = express(); // create object of express framework for node Js
app.use(express.json());
app.use(logger)

app.get("/", (req, res)=>{
    res.send({message : "Get method successfull"});
})

const blogs = [
    {   id : 1,
        text : "Sample One"
    },
    {
        id : 2,
        text : "Sample Two"
    },
]

app.get("/blogs", (req, res)=>{
    res.send(blogs)
});

app.post("/blogs", (req, res)=>{
    const blog = req.body;
    blogs.push(blog);
    res.statusCode = 201;
    // res.send({message : "Created successful"});
    res.status(201).send({message : "created successfull"});
});

app.put("/blogs/:id", (req, res)=>{
    // console.log(req.params.id);
    const {id} = req.params;
    const blog = blogs.find((b)=> { return b.id == id}); // return object of array
    // console.log(blog);
    if (!blog) return res.status(404).send({error : "blog cannot found"});
    blog.text = req.body.text;
    res.send({message : "updated"});
})

// Delete
// app.delete("/blogs/:id", (req, res)=>{
//     const
// })
app.listen(5500, ()=>{
    console.log("Server is up and running");
});