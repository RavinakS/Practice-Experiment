const readline = require('readline-sync');

user = readline.question('>>> ');
console.log((/[a-zA-Z]/).test(user)); // regular expression - will check if the userinput are from a to z 
// test is one of the methods of regEx.

// var r = /3/;
// var s = "123hellp";
// console.log(r.test(s));


