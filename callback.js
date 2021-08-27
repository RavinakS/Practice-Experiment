const calc = function (num1, num2, calcType){
    if(calcType === 'add'){
        return num1 + num2;
    }else(calcType === 'multiply'){
        return num1 * num2;
    }
};

calc(2, 3, 'add');