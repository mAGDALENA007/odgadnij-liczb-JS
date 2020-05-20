// RANDOM GAME ;)
const randomNumber = getRandomNumber(10);
let guess;
let guessCount = 0;
let correctGuess = false;

function getRandomNumber(upper){
    let num = Math.floor(Math.random()*upper) + 1;
    return num;
}
while(true){
    guess = prompt ("UWAGA 2 runda !!! myślę o nr od 1 do 10");
    guessCount += 1;
    if (parseInt(guess) === randomNumber){
        correctGuess = true;
        break;
    }
} 
document.write("<h1>Zgadłeś !!!</h1>");
document.write("it took you " + guessCount + " tries to guess the number " + randomNumber + ".");