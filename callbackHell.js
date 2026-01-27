function fetch(callback){
    setTimeout(() => {
        console.log("User fetched");
        callback()
    }, 1000);
}

function Posts(callback){
    setTimeout(() => {
        console.log("Posts fetched");
        callback()
    }, 1000);
}

function Comments(callback){
    setTimeout(() => {
        console.log("Comments fetched");
        callback()
    }, 1000);
}

fetch(() =>{
    Posts(() =>{
        Comments(() =>{
            console.log("All data ready");
        });
    });
});