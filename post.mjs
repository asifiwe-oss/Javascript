import express from "express"
const app = express();
const PORT = process.env.PORT || 3000
app.use(express.json());

const mockUsers = [
        {id: 1,username: "Asifiwe", displayName:"Mucyo"},
        {id: 2,username: "Ben", displayName:"Niyo"},
        {id: 3,username: "Nshuti", displayName:"Esrone"},
        {id: 4,username: "Irakoze", displayName:"Aime"}
    ]


app.post('/api/users',(req,res) =>{
    const {body} = req;
    const newUser =  {id: mockUsers[mockUsers.length - 1].id +1, ...body };
    mockUsers.push(newUser);
    console.log(req.body);
    res.status(200).send("This is it")
})

app.listen(3000,() =>{
    console.log(`Running on port ${3000}`);
})