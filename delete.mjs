

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

app.delete("/api/users/:id",(req,res) =>{
   const id = req.params.id;
   const parsedId = parseInt(id)
   if(isNaN(parsedId)) return res.sendStatus(400);
   
  const findUserIndex = mockUsers.findIndex((user) =>user.id === parsedId);
  if(findUserIndex === -1) return res.sendStatus(404);

   mockUsers.splice(findUserIndex,1);
   const deletedUser = mockUsers.splice(findUserIndex,1)[0]
  return res.status(200).json({
    message: "User deleted successfully",
    user:deletedUser
  })
})

    app.listen(PORT,() =>{
  console.log(`Listening on port ${PORT}`);
});