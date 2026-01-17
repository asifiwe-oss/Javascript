const path = require("path");
console.log(__filename);
console.log(__dirname);
console.log(path.basename(__dirname));
console.log(path.extname(__filename));
const filePath = path.join(__dirname,"files", "data.txt");
console.log(filePath);

const absolutePath = path.resolve("files", "data.txt");
console.log(absolutePath);