const readline = require('readline-sync');

user = readline.question(">>> ");

// if(typeof(user) === NaN){
//     console.log("true");
// }else{
//     console.log("flase");
// }

index = 0;
while(index<user.length){
    a_char = parseInt(user[index]);
    if(a_char === a_char){ // NaN is not equal to NaN
        console.log(`${a_char}:-  Number`);
    }
    else{
        console.log(`${user[index]}:-  String`);
    }
    index++;
}
