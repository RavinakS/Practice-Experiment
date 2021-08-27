function a(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("A Apple");
        }, 200);
    })
}

function b(){
    return new Promise((resolve=>{
        setTimeout(() => {
            resolve('B Ball');
        }, 1000);
    }))
}

function c(){
    return new Promise((resolve=>{
        setTimeout(() => {
            resolve("C Cat")
        }, 500);
    }))
}

async function alphabet(){
    const A = await a();
    const B = await b();
    const C = await c();

    console.log(A);
    console.log(B);
    console.log(C);
};

alphabet();


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