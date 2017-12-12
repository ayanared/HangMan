const GameBoard = {
    wordToGuess : "Hello",
    wordToGuessArray: [],
    wasGuessCorrect : false,
    correctGuessesMade : [],
    guessesLeft : 6,
    startGame : function(){
        const randomIndex = Math.floor(Math.random()*answers.length);
        this.wordToGuess = answers[randomIndex].word.toLowerCase();
        this.wordToGuessArray = this.wordToGuess.split("");
        for (let i = 0; i<this.wordToGuessArray.length; i++){
            this.correctGuessesMade.push('_');
        }
    },
    getGuess : function(letter) {
        //get guess from user
        let indexOfLetterGuessed = this.wordToGuessArray.indexOf(letter);
        if(indexOfLetterGuessed > -1){
            this.wasGuessCorrect = true;
            while(indexOfLetterGuessed >-1){
                this.correctGuessesMade.splice(indexOfLetterGuessed,1,letter)
                GameBoard.wordToGuessArray.splice(indexOfLetterGuessed, 1,"-");
                indexOfLetterGuessed = this.wordToGuessArray.indexOf(letter);
            }
            
        }
        else{
            //if incorrect: 1. put letter in incorrectGuessesMade array
            console.log(`${letter} was not there!`)
            this.wasGuessCorrect = false;
            this.guessesLeft --;
            console.log("guesses left:" + this.guessesLeft)


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
        
        const wordGuessed = GameBoard.correctGuessesMade.join("")
        console.log(wordGuessed)
        $(guessing_word).text(wordGuessed);
        console.log('updateWordToGuess')

    },
    updateHangMan : function() {
        //increase hangman parts
    },
    updateNumberToGuess: function(){
        //update guesses
        console.log("did this happen?")
        
        $('#guesses_left').text(GameBoard.guessesLeft);


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
        console.log(GameBoard.wasGuessCorrect)
        if(GameBoard.wasGuessCorrect){
            
            ViewEngine.updateWordToGuess();
        }
        else{
           ViewEngine.updateNumberToGuess();

        }

    },
    handleGuessIncorrect: function(){


    },
    
    handleWin: function(){

    },
    handleLose: function(){

    }
}

$(document).ready(function(){

AppController.handleBoardSetUp();
$('#a').on('click', AppController.handleMakeGuess);
$('#b').on('click', AppController.handleMakeGuess);
$('#c').on('click', AppController.handleMakeGuess);
$('#d').on('click', AppController.handleMakeGuess);
$('#e').on('click', AppController.handleMakeGuess);
$('#f').on('click', AppController.handleMakeGuess);
$('#g').on('click', AppController.handleMakeGuess);
$('#h').on('click', AppController.handleMakeGuess);
$('#i').on('click', AppController.handleMakeGuess);
$('#j').on('click', AppController.handleMakeGuess);
$('#k').on('click', AppController.handleMakeGuess);
$('#l').on('click', AppController.handleMakeGuess);
$('#m').on('click', AppController.handleMakeGuess);
$('#n').on('click', AppController.handleMakeGuess);
$('#o').on('click', AppController.handleMakeGuess);
$('#p').on('click', AppController.handleMakeGuess);
$('#q').on('click', AppController.handleMakeGuess);
$('#r').on('click', AppController.handleMakeGuess);
$('#s').on('click', AppController.handleMakeGuess);
$('#t').on('click', AppController.handleMakeGuess);
$('#u').on('click', AppController.handleMakeGuess);
$('#v').on('click', AppController.handleMakeGuess);
$('#w').on('click', AppController.handleMakeGuess);
$('#x').on('click', AppController.handleMakeGuess);
$('#y').on('click', AppController.handleMakeGuess);
$('#z').on('click', AppController.handleMakeGuess);

});