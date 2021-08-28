function add(a, b){
    return a + b;
};

function multiply(a, b){
    return a*b;
};

const calc = function (num1, num2, callback){
    try{
        return callback(num1, num2);
    }catch{
        return `Wrong 'callback'!!`
    }
    // if(cb && typeof callback === 'function'){
    //     return callback(num1, num2);
    // }
    // else{
    //     return `Wrong 'callback' !!`
    // }
};

console.log(calc(2, 3, wrongCallback));


// const calc = function (num1, num2, calcType){
//     if(calcType === 'add'){
//         return num1 + num2;
//     }else if(calcType === 'multiply'){
//         return num1 * num2;
//     }
// };

// console.log(calc(2, 3, 'add'));

// const calc = function (callback){
//     if(typeof callback === 'function'){
//         return callback();
//     }else{
//         return `Wrong 'callback' !!`
//     }
// };