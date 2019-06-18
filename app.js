/*
 * Create a list that holds all of your cards
 */

let firstCard, secondCard;
let ArrayGameOver = [];
let NumberOfMoves = 0;
let cardIsOpen = false;

var allMoves = document.querySelector('.moves');

// Shuffle function from http://stackoverflow.com/a/2450976

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    
    return array;
};


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */


function displayCard(){
    if (!cardIsOpen) {
        firstCard = this;
        firstCard.classList.add('open', 'show');
        cardIsOpen = true;
    } else {
        secondCard = this;
        secondCard.classList.add('open', 'show'); 
        
        if (firstCard.firstElementChild.className === secondCard.firstElementChild.className) {
            firstCard.classList.add('match');
            secondCard.classList.add('match');
            
            firstCard.removeEventListener('click', displayCard);
            secondCard.removeEventListener('click', displayCard);
            
            GameOver(firstCard.firstElementChild.className,secondCard.firstElementChild.className);
            
        } else {
                setTimeout(function() {
                    isClosed(firstCard);
                    isClosed(secondCard);
                }, 500);
           
        }   
        cardIsOpen = false;
    }
    NumberOfMoves++;
    allMoves.textContent = NumberOfMoves;
};

function isClosed(card) {
    card.classList.remove('open','show');
};

function newGame() {
    let cardsForNewGame = document.querySelectorAll('.card');
    let newCardsArray = [];  
    let ArrayGameOver = [];
    NumberOfMoves = 0;
    startTimer;
    allMoves.textContent = NumberOfMoves;
    for (let i=0; i< cardsForNewGame.length; i++) {
        newCardsArray.push(cardsForNewGame[i].children[0].className);
    };
    setNewCards = shuffle(newCardsArray);
// Loop through the NodeList and assign the correct className to the NodeList
    for (var i = 0; i < cardsForNewGame.length; i++) {
        cardsForNewGame[i].className = "card";
        cardsForNewGame[i].firstElementChild.className = setNewCards[i];
    };
    cardsForNewGame.forEach(function(card){
            card.addEventListener('click', displayCard)});
};

function GameOver(firstcard, secondcard) {
    ArrayGameOver.push(firstcard);
    ArrayGameOver.push(secondcard);
    console.log(ArrayGameOver);
    if (ArrayGameOver.length === allCards.length) {
        window.alert("Game Over !!");
    } 
};

function startTimer(){
    var second = 0, minute = 0; hour = 0;
    var timer = document.querySelector(".timer");
    var interval;
    interval = setInterval(function(){
        timer.textContent = minute+"mins "+second+"secs";
        second++;
        if(second == 60){
            minute++;
            second=0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
};

function stopTimer() {
    //alertbox "you have finished the game in blalaa" secods
};

var allCards = document.querySelectorAll('.card');
var shuffleOption = document.querySelector('.restart');

startTimer();
allMoves.textContent = 0;
shuffleOption.addEventListener('click', newGame);
allCards.forEach(function(card){
            card.addEventListener('click', displayCard); 
});
 