let randomNumber = Math.floor(Math.random() * 3 + 1);

//console.log('Wylosowana liczba to: ' + randomNumber);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let computerMove = getMoveName(randomNumber);
let playerMove = getMoveName(randomNumber);





/*if (playerInput === '1') {
    argPlayerMove = 'kamień';
}*/

printMessage('Twój ruch to: ' + playerMove);


function getMoveName(randomNumber) {
    if (randomNumber === 1) {
        return 'kamień';
    } else if (randomNumber === 2) {
        return 'papier';
    } else if (randomNumber === 3) {
        return 'nożyce';
    }
    printMessage('Nie znam ruchu o id ' + randomNumber + '.');
    return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove) {
    if (argComputerMove === 'kamień' && argPlayerMove === 'papier') {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove === 'nożyce' && argPlayerMove === 'kamień') {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove === 'papier' && argPlayerMove === 'nożyce') {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove === 'nożyce' && argPlayerMove === 'nożyce') {
        printMessage('Remis');
    } else if (argComputerMove === 'papier' && argPlayerMove === 'papier') {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove === 'kamień' && argPlayerMove === 'kamień') {
        printMessage('Ty wygrywasz!');
    } else if (argPlayerMove === 'nieznany ruch' && argCompterMove === 'kamień' || argComputerMove === 'nożyce' || argCompterMove === 'papier') {
        printMessage('Oszust!')
    } else {
        printMessage('Ty przegrywasz!');
    }
}

/*if (randomNumber === 1) {
    computerMove = 'kamień'
} else if (randomNumber === 2) {
    computerMove = 'papier'
} else if (randomNumber === 3) {
    computerMove = 'nożyce'
}
printMessage('Mój ruch to: ' + playerMove);*/

/*if (randomNumber === 1) {
    playerMove = 'kamień'
} else if (randomNumber === 2) {
    playerMove = 'papier'
} else if (randomNumber === 3) {
    playerMove = 'nożyce'
}
printMessage('Mój ruch to: ' + playerMove);*/



if (computerMove === 'kamień' && playerMove === 'papier') {
    printMessage('Ty wygrywasz!');
} else if (computerMove === 'nożyce' && playerMove === 'kamień') {
    printMessage('Ty wygrywasz!');
} else if (computerMove === 'papier' && playerMove === 'nożyce') {
    printMessage('Ty wygrywasz!');
} else if (computerMove === 'nożyce' && playerMove === 'nożyce') {
    printMessage('Remis');
} else if (computerMove === 'papier' && playerMove === 'papier') {
    printMessage('Ty wygrywasz!');
} else if (computerMove === 'kamień' && playerMove === 'kamień') {
    printMessage('Ty wygrywasz!');
} else if (playerMove === 'nieznany ruch' && computerMove === 'kamień' || computerMove === 'nożyce' || computerMove === 'papier') {
    printMessage('Oszust!')
} else {
    printMessage('Ty przegrywasz!');
}

//console.log(getMoveName(2));