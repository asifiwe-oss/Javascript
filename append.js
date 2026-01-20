//Add content to the end of existing file content or create new file and do so

const fs = require("fs");
fs.appendFile("file.txt","This is a line appended to file","utf8")