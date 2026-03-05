import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;
const mockUsers = [
        {id: 1,username: "Asifiwe", displayName:"Mucyo"},
        {id: 2,username: "Ben", displayName:"Niyo"},
        {id: 3,username: "Nshuti", displayName:"Esrone"},
        {id: 4,username: "Irakoze", displayName:"Aime"}
    ]

app.get('/api/users',(req,res) =>{
    res.send(mockUsers);    
});


app.get('api/users/:id',(req,res) =>{
    console.log(req.params);
})

app.get('/api/him',(req,res) =>{
    res.status(200).json({msg: "Hello"});
})


app.listen(PORT,() =>{
    console.log(`Server running on port ${PORT}`)
})

