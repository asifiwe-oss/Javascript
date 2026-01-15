// let log = require("./app.js");
// log("Hello Node.js");

// const log = require("./app.js");

// log.info("Server started");
// log.warning("This is a warning");
// log.error("Something went wrong");

// Accessing local modules as a class

module.exports = function(firstName,lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function(){
    return `${this.firstName} ${this.lastName}`;
  }
}