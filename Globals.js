console.log(__dirname);
console.log(__filename);
console.log(process.version);
console.log(process.platform);
 // Timers

 //1 setTimeout

setTimeout(()=>{ 
  console.log("Run after 3 seconds"); // Run after specified time
},3000)

//2 setInterval

let timer = setInterval(() =>{
    console.log("I run after 3 seconds");
},3000);
setTimeout(()=>{
    clearInterval(timer);
},16000)

//3 setIntermediate

console.log("start")

setImmediate(()=>{
 console.log("I run after current program finishes");
});

console.log("End");
console.log("7+5");
console.log("this is a programmer");

