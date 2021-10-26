const fs = require('fs');

// console.log("start");

// fs.readFile("classOnPromise.json", (err, data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         dataInObject = JSON.parse(data);
//         console.log(dataInObject);
//     }
// })

// console.log("end");

const getData = new Promise((resolve, reject)=>{
        fs.readFile("classOnPromise.json", (err, data)=>{
            if(err){
                reject(err);
            }else{
                data = JSON.parse(data)
                resolve(data);
            }
        });
        // resolve("Hello World");
    });

// getData
// .then((resolvedData)=>{
//     console.log(resolvedData);
// }).then(()=>{
//     console.log("Hii");
// }).then(()=>{
//     console.log("Byee");
// })
// .catch((rejectedValue)=>{
//     console.log(rejectedValue);
// })

async function a(){
    console.log("Start");
    let b = await getData;
    console.log(b);
    console.log("End");
}

a();