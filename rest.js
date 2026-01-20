const fs = require("fs");

//Delete file

fs.unlink("newFile.txt", (err) => {
    if(err){
        console.log("Error deleting file:", err);
        return;
    }
    console.log("File deleted successfully");
});


//Create folder

fs.mkdir("newFolder", (err) => {
    if(err){
        console.log("Error creating folder:", err);
        return;
    }
    console.log("Folder successfully created");
});


//Delete folder with all it's content

fs.rmdir("newFolder", { recursive: true }, (err) => {
    if(err){
        console.log("Error removing folder:", err);
        return;
    }
    console.log("Folder removed successfully");
});


//Open file with advanced operations("w","r","a")



fs.open("example.txt", "w", (err, fd) => {
    if(err){
        console.log("Error opening file:", err);
        return;
    }
    console.log("File opened successfully with file descriptor:", fd);
});


