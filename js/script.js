//SAMA WYBRAŁAM LICZBĘ WYGRYWAJĄCĄ 
alert('You have 10 guesses. Gess 1-10');

const answer = 3; //to jest moja szukana liczba
guess = prompt("What's your guess?"); //zapytanie

for (i=0; i<10; i++) {

    if(answer == guess) {
        alert("You guessed correctly !!!");
        break; //bez tego pomimo dobrej odp wciąż zadawałoby pytania o moją liczbę
    } else {
        guess = prompt("Please Try Agin ;("); //komunikat o błędzie
    }

}