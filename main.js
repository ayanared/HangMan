const GameBoard = {
    score: 0,
    wordToGuess: "",
    hint: "",
    wordToGuessArray: [],
    wasGuessCorrect: false,
    correctGuessesMade: [],
    guessesLeft: 6,
    wonGame: false,
    lostGame: false,
    startGame: function () {
        const randomIndex = Math.floor(Math.random() * answers.length);
        this.wordToGuess = answers[randomIndex].word.toLowerCase();
        this.hint = answers[randomIndex].hint;
        this.wordToGuessArray = this.wordToGuess.split("");
        this.wordToGuessArray.forEach(() => {
            this.correctGuessesMade.push('_');
        })
    },
    getGuess: function (letter) {
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
            this.wasGuessCorrect = false;
            this.guessesLeft--;
        }
    },
    didIWin: function () {
        if (this.wordToGuess === this.correctGuessesMade.join("")) {
            this.wonGame = true;
            this.score++;
        }
    },
    didILose: function () {
        if (this.guessesLeft === 0) {
            this.lostGame = true;
        }

    },
    resetGame: function () {
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
        const blanks = GameBoard.correctGuessesMade.join("");
        $('#guessing_word').text(blanks);
        $('#hint').text(`"${GameBoard.hint}"`);

    },
    getGuessFromUser: function (id) {
        $(`#${id}`).removeClass('unclicked');
        $(`#${id}`).addClass('clicked');
        $(`#${id}`).off('click');
        //
    },
    updateWordToGuess: function () {
        const wordGuessed = GameBoard.correctGuessesMade.join("")
        $(guessing_word).text(wordGuessed);
    },
    updateNumberToGuess: function () {
        $('#guesses_left').text(GameBoard.guessesLeft);
    },
    showModalBox: function (message) {
        $('#game_over_text').text(message);
        $('#Modal_Container').show();
    },
    updateScore: function () {
        $('#score_board').text(GameBoard.score);
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
        if (GameBoard.wonGame) {
            AppController.handleWin();
            ViewEngine.updateScore();
        }
    },
    handleIncorrectGuess: function () {
        ViewEngine.updateNumberToGuess();
        GameBoard.didILose();
        if (GameBoard.lostGame) {
            AppController.handleLose();
        }
    },
    handleWin: function () {
        ViewEngine.showModalBox("Congratulations! You won!")
        $('.unclicked').off('click', AppController.handleMakeGuess);
    },
    handleLose: function () {
        ViewEngine.showModalBox("Sorry!  The name was " + GameBoard.wordToGuess)
        $('.unclicked').off('click', AppController.handleMakeGuess);
    },
    handleReset: function () {
        GameBoard.resetGame();
        ViewEngine.setUpBoard();
        ViewEngine.updateNumberToGuess();
        $('#Modal_Container').hide();
        $('.clicked').addClass('unclicked');
        $('.clicked').on('click', AppController.handleMakeGuess);
        $('.clicked').removeClass('clicked')
        
        
    }
}
$(document).ready(function () {
    AppController.handleBoardSetUp();
    $('.unclicked').on('click', AppController.handleMakeGuess);
    $('#closeBtn').on('click', function () {
        $('#Modal_Container').hide();
    })
    $('.reset_button').on('click', AppController.handleReset);

});