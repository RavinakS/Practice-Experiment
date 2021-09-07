const readline = require('readline-sync');
num1 = readline.questionInt("> ");

(function (num){
    if(num%2===0){
        console.log("even");
    }else{
        console.log("odd");
    }
})(num1)