//fs.writeFile
//Reading a file 

// In same folder


const fs = require("fs");
fs.readFile("node.txt","utf8",(err,data) => {
    if(err){
        console.log("Error reading file:",err);
        return;
    }
    console.log("File content: ");
    console.log(data);
});

//In a different folder

const path = require("path");
const filePath = path.join(__dirname,"../../../../Mucyo.txt");

fs.readFile(filePath,"utf8",(err,data) =>{
     if(err){
        console.log("Error file reading",err);
        return;
     }
     console.log("File content: ");
     console.log(data);
    });


  
    //fs.writeFile

    //Overwriting existing file


fs.writeFile("node.txt", "Hello Node.js!","utf8", (err) =>{
    if(err){
        console.log("Error writing file: ",err);
        return;
    }
    console.log("File successfully overwritten");
});  


//Overwriting file in a different folder


const newPath = path.join(__dirname,"../../../../Mucyo.txt");
fs.writeFile(newPath,"I am overwriting a file","utf8", (err) =>{
    if(err){
        console.log("Error writing file: ",err);
        return;
    }
    console.log("File successfully overwritten");
});


//Creating a new file

fs.writeFile("newFile.txt", "Hello, this is a new file!", "utf8", (err) => {
    if (err) {
        console.log("Error creating file:", err);
        return;
    }
    console.log("File successfully created!");
});


//Appending file(Adding content to file)

fs.appendFile("Newfile.txt","This line is appended!","utf8",(err) => {
    if(err){
    console.log("Error creating file",err);
    return;
   }
    console.log("This is a new file created in node js");    
})

//Deleting file content

fs.unlink("newFile.txt",(err) =>{
    if(err){
        console.log("Error deleting files",err)
        return;
    }
       console.log("File deleted successfully");
});


//Making a new directory


fs.mkdir("newFolder",(err) => {
    if(err){
        console.log("Error creating folder: ",err);
        return
    }
})

// Opening a file 

fs.open("node.txt", "r", (err, fd) => {
    if (err) {
        console.log("Error opening file:", err);
        return;
    }
    console.log("File opened successfully, file descriptor:", fd);

    // Close the file after opening
    
    fs.close(fd, (err) => {
        if (err) console.log("Error closing file:", err);
        else console.log("File closed successfully");
    });
});
