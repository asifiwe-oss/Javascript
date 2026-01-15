// const greet = function(msg){
//     console.log(msg);
// };
// module.exports = greet;
// module.exports = {
//     info: function(msg){
//         console.log("Info: " + msg);
//     },
//     warning: function(msg){
//         console.log("Warning: " + msg);
//     },
//     error: function(msg){
//         console.log("Error: " + msg);
//     }
// };

// Exporting local modules as a class

const Person =require("./log.js");

const person1 = new Person("Asifiwe","Mucyo");
const person2 = new Person("Mugisha","Chris");

console.log(person1.firstName);
console.log(person2.lastName);

console.log(person1.fullName());
console.log(person2.fullName());



