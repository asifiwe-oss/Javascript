import express from "express";
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

const users = [
  { id: 1, username: "Asifiwe", displayName: "Mucyo", email: "asifiwe@example.com" },
  { id: 2, username: "Ben", displayName: "Niyo", email: "ben@example.com" },
  { id: 3, username: "Nshuti", displayName: "Esrone", email: "nshuti@example.com" },
  { id: 4, username: "Irakoze", displayName: "Aime", email: "irakoze@example.com" }
];

//Converting string id to a number

app.put("/api/users/:id",(req,res) =>{
    const {body,params:{id}} = req;
    const Id = parseInt(id);
    if(isNaN(Id)) return res.sendStatus(400);

//Accessing the values at that id

const accessValue = users.findIndex((user) => user.id === Id);
if(accessValue === -1) return res.sendStatus(404);
users[accessValue] = {id: Id, ...body};
return res.status(200).json(users[accessValue]);
})

app.get("api/users/:id",(req,res) => {
   const parsedId = parseInt(req.params.id);
   if(isNaN(parsedId)) return res.sendStatus(400);

   const user = users.find(u => u.id === parsedId);
   if(!user) return res.sendStatus(404);
   res.json(user);
})

app.listen(PORT,() =>{
    console.log(`Listening on port ${PORT}`);
})