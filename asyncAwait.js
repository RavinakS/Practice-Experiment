function a(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("A Apple");
        }, 5000);
    })
}

function b(){
    return new Promise((resolve=>{
        setTimeout(() => {
            resolve('B Ball');
        }, 5000);
    }))
}

function c(){
    return new Promise((resolve=>{
        setTimeout(() => {
            resolve("C Cat")
        }, 5000);
    }))
}

async function alphabet(){
    try{
        const A = await a();
        console.log(A);

        const B = await b();
        console.log(B);

        const C = await f();
        console.log(C);
    }catch{
        console.log("Don't know what went wrong!!");
    }
};

alphabet()


// async function c(){
//     throw new "Something went wrong!"
//     // const value = "Ravina!"
//     // return value;
// }

// console.log(c());
// c().then((value)=>{
//     console.log("Inside then.");
//     console.log(value);
// }).catch((err)=>{ //can't handle error with catch which is created in async function for this we have to use try-catch.
//     console.log("Inside catch!");
//     console.log(err);
// })



// async function hello(){
//     return "Ravina!"
// };

// hello().then(console.log); // shorthand