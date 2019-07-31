let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';
let playerMove = 'nieznany ruch';

if (randomNumber === 1) {
    computerMove = 'kamień'
} else if (randomNumber === 2) {
    computerMove = 'papier'
} else if (randomNumber === 3) {
    computerMove = 'nożyce'
}
printMessage('Mój ruch to: ' + playerMove);

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