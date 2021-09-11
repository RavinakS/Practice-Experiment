const readline = require('readline-sync');

user = readline.question("> ");
user_int = parseInt(user);
lower_case = user_int.toLowerCase();
console.log(lower_case);