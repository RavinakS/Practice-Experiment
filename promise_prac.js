function demo(value){
    return new Promise((resolve, reject)=>{
        if(value){
            resolve("Succeed.");
            console.log("In"); // this line will also execute.
        }else{
            reject("Didn't succeed");
            console.log("Out"); // this line will also execute.
        }
    })
}

demo(true).then((value)=>{
    console.log(value);
}).catch((err)=>{
    console.log(err);
})