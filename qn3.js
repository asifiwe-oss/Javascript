const Person = require("./qns");
const person1 = new Person("Mugisha","Jean");
const person2 = new Person("Mulisa","Kalisa");

console.log(person1.firstName);
console.log(person2.lastName);

console.log(person1.fullName());
console.log(person2.fullName());
