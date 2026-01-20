

//Adding content to existing empty file or just overwrite the existing file content

const fs = require("fs");
fs.writeFile("file.txt","I have changed the file content", "utf8",(err) =>{
    if(err){
    console.log("Error overwriting file",err);
    return;
}
console.log("File overwriting successful");
})