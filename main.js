const GameBoard = {
    wordToGuess : "Hello",
    wordToGuessArray: [],
    numOfLettersInWord : 5,
    wasGuessCorrect : false,
    correctGuessesMade : [],
    incorrectGuessesMade: [],
    lettersLeftInAnswer: 5,
    startGame : function(){
        const randomIndex = Math.floor(Math.random()*answers.length);
        this.wordToGuess = answers[randomIndex].word.toLowerCase();
        this.wordToGuessArray = this.wordToGuess.split("");
        for (let i = 0; i<this.wordToGuessArray.length; i++){
            this.correctGuessesMade.push('_');
        }
        console.log(this.correctGuessesMade);
        this.numOfLettersInWord = this.wordToGuess.length
        //populate wordToGuessArray
        //populate numOfLetters in Word
        //

    },
    getGuess : function(letter) {
        //get guess from user
        let indexOfLetterGuessed = this.wordToGuessArray.indexOf(letter);
        if(indexOfLetterGuessed > -1){
            //if correct: 1. subtract letter-s left in Answer
            //            2. set wasGuessCorrectto True
            console.log(`${letter} was there!`)
            this.wasGuessCorrect = true;
        }
        else{
            //if incorrect: 1. put letter in incorrectGuessesMade array
            console.log(`${letter} was not there!`)
            this.wasGuessCorrect = false;
        }
        
    }
    

}

const ViewEngine = {
    setUpBoard : function() {
        //put blanks
        const blanks = GameBoard.correctGuessesMade.join("");
        $(guessing_word).text(blanks);
    },
    getGuessFromUser: function(id){
        //gray out button that has been guessed already
        $(`#${id}`).removeClass('unclicked');
        $(`#${id}`).addClass('clicked');
        //remove event listener
        $(`#${id}`).off('click');
        //
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
        GameBoard.startGame();
        //set up gameboard view
        ViewEngine.setUpBoard();

    },
    handleMakeGuess: function(event){
        const letterGuessed = ($(event.target).attr('id'));  
        GameBoard.getGuess(letterGuessed);
        ViewEngine.getGuessFromUser(letterGuessed);
        if(GameBoard.wasGuessCorrect){
            AppController.handleGuessCorrect();
        }
        else{
            AppController.handleGuessIncorrect();

        }



    },
    handleGuessIncorrect: function(){


    },
    handleGuessCorrect: function(){

    },
    handleWin: function(){

    },
    handleLose: function(){

    }
}

$(document).ready(function(){

AppController.handleBoardSetUp();
$('#a').on('click', AppController.handleMakeGuess);

});