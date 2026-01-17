const os = require("os");
console.log(os.platform());

if(os.platform() === "win32"){
    console.log("Hello world"); //win32
}


console.log(os.arch());
if(os.arch() === "x64"){
    console.log("64-bit system");  // x64
}

console.log(os.cpus());   //Model,speed,times


console.log(os.totalmem());  // Total RAM
console.log(os.freemem());   //Free space

const totalMemory = os.totalmem()  //In bytes
const freeMemory = os.freemem()  //In bytes

console.log(totalMemory);
console.log(freeMemory);

const totalMemoryMB = totalMemory / 1024 / 1024 ;
const freeMemoryMB = freeMemory / 1024 / 1024 ;

console.log(`Total memory: ${totalMemoryMB.toFixed(2)}`);
console.log(`Free memory: ${freeMemoryMB.toFixed(2)}`);

console.log(os.networkInterfaces());
console.log(os.EOL);  