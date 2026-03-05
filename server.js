const express = require('express');
const app = express();

app.get('/',(req,res) =>{
   console.log("Here");   
//    res.status(500).send("Hi");
   res.download("server.js");
//    res.send('Hi');
})


// app.get("/",(req,res) =>{
//     res.send('Hey');
//     // res.sendStatus(500);
//     // res.status(500).json({message: "Error"});
// })
app.listen(3000);

