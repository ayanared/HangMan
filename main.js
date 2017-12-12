const GameBoard = {
    wordToGuess : "Hello",
    wordToGuessArray: [],
    numOfLettersInWord : 5,
    incorrectGuessesMade: [],
    lettersLeftInAnswer: 5,
    startGame : function(){
        const randomIndex = Math.floor(Math.random()*answers.length);
        this.wordToGuess = answers[randomIndex].word.toLowerCase();
        this.wordToGuessArray = this.wordToGuess.split("");
        this.numOfLettersInWord = this.wordToGuess.length
        console.log(this.wordToGuess);
        console.log(this.numOfLettersInWord);
        console.log(this.wordToGuessArray);
        //populate wordToGuessArray
        //populate numOfLetters in Word
        //

    },
    getGuess : function(letter) {
        //get guess from user
        
            //if correct: 1. subtract letter-s left in Answer
            //            2.
            //            3. 
            //if incorrect: 1. put letter in incorrectGuessesMade array
            //
    }
    

}

const ViewEngine = {
    setUpBoard : function() {
        //put blanks/boxes for the letters needed
    },
    deactivateButton : function(){
        //gray out button that has been guessed already
    },
    updateWordToGuess : function() {
        //display letters guessed correctly
    },
    updateHangMan : function() {
        //increase hangman parts
    },
    updateNumberToGuess: function(){
        //

    }


}

const AppController = {
    handleBoardSetUp: function(){
        //GameBoard.startGame
        //

    },
    handleMakeGuess: function(){

    },
    handleGuessIncorrectly: function(){

    },
    handleGuessCorrectly: function(){

    },
    handleWin: function(){

    },
    handleLose: function(){

    }
}

$(document).ready(function(){
GameBoard.startGame();


});