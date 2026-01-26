function greetMe(name,callback){
    setTimeout(() =>{
     callback(null,`Hello ${name}`)
    },3000);
}

greetMe("David",(err,msg) =>{
    if(err){
        console.log(err)
    }
    console.log(msg)
})

console.log("Hello mister David")

//get country
//get provinces by country
//get districts by province
//get sectors by districts

