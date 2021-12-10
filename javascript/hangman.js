class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord()
    this.letters = []
    this.guessedLetters = ''
    this.errorsLeft = 10
  }

  pickWord() {
    const index = Math.floor(Math.random() * this.words.length)
    const word = this.words[index]
    return word
    // ... your code goes here
  }

  checkIfLetter(keyCode) {
    if (keyCode <= 90 && keyCode >= 65 ) return true
    else return false
  }

  checkClickedLetters(letter) {
    for(let i = 0; i < this.letters.length; i++){
      if (this.letters[i] === letter) return false
    }
    this.letters.push(letter)
    this.addCorrectLetter(letter)
    this.addWrongLetter(letter)
    return true

  }

  addCorrectLetter(letter) {
     for(let t = 0; t < this.secretWord.length; t++){
      if(letter === this.secretWord[t]){
        this.guessedLetters += letter.toUpperCAse()
        this.checkWinner()
      }
      
    } 

   /*  if(this.secretWord.indexOf(letter) !== -1){
      this.guessedLetters += `${letter}`
    } */
    
  }

  addWrongLetter(letter) {
    for(let m = 0; m < this.secretWord.length; m++){
      if(letter === this.secretWord[m]){ 
        continue
       }
      }
      this.errorsLeft -= 1
      this.checkGameOver()
    }

  checkGameOver() {
    if(this.errorsLeft === 0) return true
    else return false
  }

  checkWinner() {
    //let gameWin = false
    /*let wordToDiscover = JSON.stringify(this.secretWord)
    let findLetters = JSON.stringify(this.guessedLetters)

    wordToDiscover = wordToDiscover.sort()
    findLetters = findLetters.sort() */
    let lettersOrdered = this.guessedLetters.split('').sort((a, b) => a.localeCompare(b)).join('')
    let wordOrdered = this.secretWord.split('').sort((a, b) => a.localeCompare(b)).join('')

    if (lettersOrdered === wordOrdered) return true
    else return false


     //if(this.guessedLetters.length !== this.secretWord.length) return false
     //else {
    /*   const numberOfCorrectLetters = 0
      for(let j = 0; j < this.secretWord.length; j ++){
        const letter = this.secretWord.length[j]
        for(let k = 0; k < this.guessedLetters.length; k++){
          if(this.guessedLetters[k] === letter) numberOfCorrectLetters ++
        }
      }
      if(numberOfCorrectLetters === this.secretWord.length) return true */
      
    
    
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  hangman.checkClickedLetters(letter)

});
