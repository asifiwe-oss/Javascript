const fs = require("fs");
const path = require("path");

//Reading internal file(same folder)

fs.readFile("file.txt","utf8",(err,data) =>{
    if(err){
        console.log("Error reading file",err)
        return;
    }
    console.log("File content: ");
    console.log(data);
})


//Reading external file(different folder)

const filePath = path.join(__dirname,"../../../../..","Mucyo.txt")
fs.readFile(filePath,"utf8",(err,data) =>{
    if(err){
        console.log("File reading unsuccessful",err);
    }
    console.log("File content: ");
    console.log(data);
})