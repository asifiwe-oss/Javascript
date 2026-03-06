//Update and entity or resource partially


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

app.patch("/api/users/:id",(req,res) =>{
    const {body,params:{id}} = req;
    const parsedId = parseInt(id);
    if(isNaN(parsedId)) return res.sendStatus(400);

    const findUserIndex = mockUsers.findIndex((user) =>user.id === parsedId);
    if(findUserIndex === -1) return res.sendStatus(404);

    mockUsers[findUserIndex] = {...mockUsers[findUserIndex],...body}
    return res.status(200).json(mockUsers[findUserIndex]);
})

app.get("/api/users/:id",(req,res) =>{
    const id = req.params.id;
    const userId = parseInt(id);
    if(isNaN(userId)) return res.sendStatus(400);

    const findUser = mockUsers.find((user) => user.id === userId);
    if(!findUser) return res.sendStatus(404);
    res.json(findUser);

})

app.get("/api/users", (req, res) => {
    res.json(mockUsers);
});

app.listen(PORT,() =>{
  console.log(`Listening on port ${PORT}`);
});