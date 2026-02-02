import express from "express";

const app = express();
app.use(express.json())

app.get("/", (req, res)=>{
    res.send({message : "Get Method is Success"});
});

const users = [
{
    id : 1,
    name : "Eva",
    profession : "Content Creator",
},
{
    id : 2, 
    name : "Ankita",
    profession : "Student",
},
]
app.get("/users", (req, res)=>{
    res.send(users)
});

app.post("/users", (req, res)=>{
    const user = req.body;
    users.push(user);
    res.status(201).send({message : "Created"});
})


app.put("/users/:id", (req, res)=>{
    const {id} = req.params
    const user = users.find((b) => {
        return b.id == id;
    });
    if (!user) return res.status(404).send({ error  : "404 is not found"} )
    user.profession = req.body.profession
    user.name = req.body.name
    res.status(201).send({message : "updated"})

})
app.listen(5000, ()=>{
    console.log("Server Is Running");
});