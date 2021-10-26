function hint_letter(secret_word, guessed_word){
    for(letter of secret_word){ // takes direct elements one by one
      if(!guessed_word.includes(letter)){
        return letter;
      }
    }
  }

secret_word = "ravina";
guessed_word = 'rav';

console.log(hint_letter(secret_word, guessed_word));