const express = require('express');
const app = express();

app.use((req,res,next) =>{
    console.log(`${req.method} request to ${req.url}`);
    next();
});

app.get("/",(req,res) =>{
    res.send("Hello, Middleware!");
});

app.listen(PORT,() =>{
    console.log(`Server running on http://localhost: ${PORT}`);
})