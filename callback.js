function add(a, b){
    return a + b;
};

function multiply(a, b){
    return a*b;
};

const calc = function (num1, num2, callback){
    return callback(num1, num2);
};

console.log(calc(2, 3, add));


// const calc = function (num1, num2, calcType){
//     if(calcType === 'add'){
//         return num1 + num2;
//     }else if(calcType === 'multiply'){
//         return num1 * num2;
//     }
// };

// console.log(calc(2, 3, 'add'));