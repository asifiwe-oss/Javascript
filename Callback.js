//Synchronous call backs

function greetMe(name,callback){
    console.log(`Hello ${name}`);
    callback();
}

function sayBye(){
    console.log("Good bye");
}

greetMe("Alex",sayBye);

//Async call backs


function fetchData(callback){
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    },3000);
}

function afterFetch(){
    console.log("This is after data fetching");
}

fetchData(afterFetch);


//Call back

function showMessage(callback){
    setTimeout(() => {
        console.log("This is to be out put before")
        callback()
    }, 3000);
}

function finalMessage(){
    console.log("This comes later");
}

showMessage(finalMessage);

 
function product(a,b,callback){
    const result = a * b;
    callback(result)
}

function showResult(value){
    console.log(value);
}

product(5,4,showResult);


function firstNamU(callback){
    setTimeout(() => {
        callback("Alex");
    }, 3000);
}

function lastNamU(namU){
    console.log(`User: ${namU}`);
}

firstNamU(lastNamU)