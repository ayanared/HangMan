const GameBoard = {
    wordToGuess: "",
    wordToGuessArray: [],
    wasGuessCorrect: false,
    correctGuessesMade: [],
    guessesLeft: 6,
    wonGame : false,
    lostGame : false,
    startGame: function () {
        const randomIndex = Math.floor(Math.random() * answers.length);
        this.wordToGuess = answers[randomIndex].word.toLowerCase();
        this.wordToGuessArray = this.wordToGuess.split("");
        for (let i = 0; i < this.wordToGuessArray.length; i++) {
            this.correctGuessesMade.push('_');
        }
    },
    getGuess: function (letter) {
        //get guess from user
        let indexOfLetterGuessed = this.wordToGuessArray.indexOf(letter);
        if (indexOfLetterGuessed > -1) {
            this.wasGuessCorrect = true;
            while (indexOfLetterGuessed > -1) {
                this.correctGuessesMade.splice(indexOfLetterGuessed, 1, letter)
                GameBoard.wordToGuessArray.splice(indexOfLetterGuessed, 1, "-");
                indexOfLetterGuessed = this.wordToGuessArray.indexOf(letter);
            }
        }
        else {
            //if incorrect: 1. put letter in incorrectGuessesMade array
            this.wasGuessCorrect = false;
            this.guessesLeft--;
        }
    },
    didIWin: function(){
        if (this.wordToGuess===this.correctGuessesMade.join("")){
            this.wonGame = true;
        }
    },
    didILose: function(){
        if(this.guessesLeft === 0){
            this.lostGame = true;
        }
        
    },
    resetGame: function(){
        this.wasGuessCorrect = false;
        this.correctGuessesMade = [];
        this.guessesLeft = 6;
        this.wonGame = false,
        this.lostGame = false,
        this.startGame();

    }
}
const ViewEngine = {
    setUpBoard: function () {
        //put blanks
        const blanks = GameBoard.correctGuessesMade.join("");
        $(guessing_word).text(blanks);
    },
    getGuessFromUser: function (id) {
        //gray out button that has been guessed already
        $(`#${id}`).removeClass('unclicked');
        $(`#${id}`).addClass('clicked');
        //remove event listener
        $(`#${id}`).off('click');
        //
    },
    updateWordToGuess: function () {
        const wordGuessed = GameBoard.correctGuessesMade.join("")
        $(guessing_word).text(wordGuessed);
    },
    updateHangMan: function () {
        //increase hangman parts
    },
    updateNumberToGuess: function () {
        $('#guesses_left').text(GameBoard.guessesLeft);
    },
    showModalBox: function (message) {
        $('#game_over_text').text(message);
        $('#Modal_Container').show();

    }

}

const AppController = {
    handleBoardSetUp: function () {
        GameBoard.startGame();
        ViewEngine.setUpBoard();
    },
    handleMakeGuess: function (event) {
        const letterGuessed = ($(event.target).attr('id'));
        GameBoard.getGuess(letterGuessed);
        ViewEngine.getGuessFromUser(letterGuessed);
        if (GameBoard.wasGuessCorrect) {
            AppController.handleCorrectGuess();
        }
        else {
            AppController.handleIncorrectGuess();
        }
    },
    handleCorrectGuess: function () {
        ViewEngine.updateWordToGuess();
        GameBoard.didIWin();
        if(GameBoard.wonGame){
            AppController.handleWin();
        }
    },
    handleIncorrectGuess: function () {
        ViewEngine.updateNumberToGuess();
        GameBoard.didILose();
        if(GameBoard.lostGame){
            AppController.handleLose();
        }
    },
    handleWin: function () {
        ViewEngine.showModalBox ("Congratulations! You won!")
    },
    handleLose: function () {
        ViewEngine.showModalBox ("Sorry!  The name was " + GameBoard.wordToGuess)
    },
    handleReset: function (){
        GameBoard.resetGame();
        ViewEngine.setUpBoard();
        $('#Modal_Container').hide();
        $('.clicked').addClass('unclicked');
        $('.clicked').removeClass('clicked')
        $('.clicked').on('click',AppController.handleMakeGuess);
    }  
}
$(document).ready(function () {
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
    $('#closeBtn').on('click', function(){
        $('#Modal_Container').hide();
    })
    $('#reset_button').on('click', AppController.handleReset);



});