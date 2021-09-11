const readline = require('readline-sync');

user = readline.question("> ");
user_int = parseInt(user);
lower_case = user_int.toLowerCase(); 
// error: if I apply toLowerCase() with integer
// else toLowerCase() works with integer in string
console.log(lower_case);