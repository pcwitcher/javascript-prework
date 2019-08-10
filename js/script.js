let playerScore = 0;
let computerScore = 0;

const game = function () {

    const playGame = function (playerInput) {

        clearMessages();

        const getMoveName = function (randomNumber) {
            if (randomNumber === 1) {
                return 'kamień';
            } else if (randomNumber === 2) {
                return 'papier';
            } else if (randomNumber === 3) {
                return 'nożyce';
            }
        }

        const displayResult = function (argComputerMove, argPlayerMove) {
            if (argComputerMove === 'kamień' && argPlayerMove === 'papier') {
                printMessage('Ty wygrywasz!');
                playerScore++;

            } else if (argComputerMove === 'nożyce' && argPlayerMove === 'kamień') {
                printMessage('Ty wygrywasz!');
                playerScore++;
            } else if (argComputerMove === 'papier' && argPlayerMove === 'nożyce') {
                printMessage('Ty wygrywasz!');
                playerScore++;
            } else if (argComputerMove === argPlayerMove) {
                printMessage('Remis');
            } else {
                printMessage('Ty przegrywasz!');
                computerScore++;
            }
            printMessage('Wynik Gracza: ' + playerScore + ' Komp: ' + computerScore);
            console.log('Gracz: ' + playerScore + ' Komp: ' + computerScore);
        }

        const randomNumber = Math.floor(Math.random() * 3 + 1);

        console.log('Wylosowana liczba to: ' + randomNumber);

        const computerMove = getMoveName(randomNumber);

        printMessage('Kompa ruch to: ' + computerMove);

        console.log('Gracz wybrał: ' + playerInput);

        const playerMove = getMoveName(playerInput);

        printMessage('Gracza ruch to: ' + playerMove);

        displayResult(computerMove, playerMove);


    }

    document.getElementById('play-rock').addEventListener('click', function () {
        playGame(1);
    });
    document.getElementById('play-paper').addEventListener('click', function () {
        playGame(2);
    });
    document.getElementById('play-scissors').addEventListener('click', function () {
        playGame(3);
    });

}

game();