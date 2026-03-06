//Updating the entire resource

import express from "express";
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

const mockUsers = [
        {id: 1,username: "Asifiwe", displayName:"Mucyo"},
        {id: 2,username: "Ben", displayName:"Niyo"},
        {id: 3,username: "Nshuti", displayName:"Esrone"},
        {id: 4,username: "Irakoze", displayName:"Aime"}
    ]
app.put("/api/users/:id",(req,res) =>{
  const{body,params:{id}} = req;
  const parsedId = parseInt(id);
  if(isNaN(parsedId)) return res.sendStatus(400);

 const findUser = mockUsers.findIndex((user) => user.id === parsedId);
 if(findUser === -1) res.sendStatus(404);

 mockUsers[findUser] = {...mockUsers[findUser],...req.body}
 res.status(200).json(mockUsers[findUser])
 })

 app.get("/api/users/:id",(req,res) =>{
  const id = req.params.id;
  const parsedId = parseInt(id);
  if(isNaN(parsedId)) res.sendStatus(400);

 const findUser = mockUsers.find((user) => user.id === parsedId);
 if(!findUser) return res.sendStatus(404);
 res.json(mockUsers[findUser]);
 })

 app.delete("/api/users/:id",(req,res) =>{
    const id = req.params.id;
  const parsedId = parseInt(id);
  if(isNaN(parsedId)) res.sendStatus(400);

 const findUser = mockUsers.find((user) => user.id === parsedId);
 if(!findUser) return res.sendStatus(404);

 mockUsers.splice(findUser,1);
 deletedUser = mockUsers.splice(findUser,1)
 res.json({
  "DeletedUser": deletedUser
 })
 
 })

app.listen(PORT,() =>{
  console.log(`Listening on port ${PORT}`);
});