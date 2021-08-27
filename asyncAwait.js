function a(){
    return new Promise((resolve=>{
        setTimeout(() => {
            resolve("A");
        }, 4000);
    }))
}

function b(){
    return new Promise((resolve=>{
        setTimeout(() => {
            resolve('B');
        }, 4000);
    }))
}






// async function c(){
//     throw new "Something went wrong!"
//     // const value = "Ravina!"
//     // return value;
// }

// console.log(c());
// c().then((value)=>{
//     console.log("Inside then.");
//     console.log(value);
// }).catch((err)=>{
//     console.log("Inside catch!");
//     console.log(err);
// })



// async function hello(){
//     return "Ravina!"
// };

// hello().then(console.log); // shorthand