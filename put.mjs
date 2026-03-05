//Updating the entire resource

import express from "express";
const app = express();
app.use = (express.json());
const PORT = process.env.PORT || 3000;

const mockUsers = [
        {id: 1,username: "Asifiwe", displayName:"Mucyo"},
        {id: 2,username: "Ben", displayName:"Niyo"},
        {id: 3,username: "Nshuti", displayName:"Esrone"},
        {id: 4,username: "Irakoze", displayName:"Aime"}
    ]

app.put("/api/users",(req,res) =>{
    const{body,params:{id}} = req;
    const parsedId = parseInt(id);
    if(isNaN(parsedId)) return res.statusCode(400)
     })

app.listen(3000,() =>{
  console.log(`Listening on port ${PORT}`);
})   