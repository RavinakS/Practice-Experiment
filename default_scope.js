a = 0;
while(a<5){
    if(a>2){
        console.log(a);
        return a; // it stopes execution when it comes to this line
        // because Node.js JavaScript is different from browser's javaScript 
        // when it comes to global scope. In the browser's javascript 
        // variables declared without var keyword becomes global. In node everythings becomes local by default. 
    }
    a++;
}
console.log(a);