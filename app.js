//'use strict';
/*
 * Create a list that holds all of your cards
 */

/*let allCards = ['fa-diamond', 'fa-diamond', 'fa-paper-plane-o','fa-anchor','fa-bolt','fa-cube','fa-anchor','fa-leaf','fa-bicycle','fa-diamond','fa-bomb','fa-leaf','fa-bomb','fa-bolt','fa-bicycle','fa-paper-plane-o','fa-cube'];
*/

let availableCards = ['fa-diamond', 'fa-diamond', 'fa-paper-plane-o',
                      'fa-anchor','fa-bolt','fa-cube','fa-anchor','fa-leaf',
                      'fa-bicycle','fa-diamond','fa-bomb','fa-leaf','fa-bomb',
                      'fa-bolt','fa-bicycle','fa-paper-plane-o','fa-cube'];

let openCardsList = [];
let firstCard, secondCard;
let cardIsOpen = false;


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

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
}


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

/*createCard
//generateGameBoard
//compareCards
//gameOver
function displayCard(){
    
};

function isClosed(card) {
   openCards.pop(card); 
};

//function pushCard(pCinopenCard,  )

function checkCards(cC) {
    cC.addEventListener('click', function () {
        
    })

}
*/

function displayCard(){
    console.log('clicked');
    console.log(this);
    console.log('cardIsOpen: ' + cardIsOpen);
    console.log('firstCard: ' + firstCard);
    console.log('secondCard:' + secondCard);
    if (!cardIsOpen) {
        firstCard = this;
        firstCard.classList.add('open', 'show');
        cardIsOpen = true;
        secondCard = null;
    } else {
//        firstCard.classList.add('open','show');
        secondCard = this;
        secondCard.classList.add('open', 'show');
        cardIsOpen = false;
        console.log('secondCard:' + secondCard.classList);
        if (firstCard.firstElementChild.className === secondCard.firstElementChild.className) {
            console.log('match with both cards');
            firstCard.classList.add('match');
            secondCard.classList.add('match');
            firstCard.removeEventListener('click', displayCard);
            secondCard.removeEventListener('click', displayCard); 
        } else {
            isClosed(firstCard);
            setTimeout(isClosed(secondCard), 1000);
        }

//   setTimeout(isClosed(secondCard), 5000);
//    firstCard.classList.remove('open', 'show');
//    secondCard.classList.remove('open', 'show');
    
    }
    
    
// add class to array for matching cards later
    
    
};
/*
function isOpen() {
    this.classList.add('open','show');
    this.addEventListener('click', isClosed);
    console.log('clicked');
    console.log(this);
};
*/

function isClosed(card) {
    card.classList.remove('open','show');
    
    console.log('clicked closed');
    console.log(card);

};


var allCards = document.querySelectorAll('.card');
var shuffleOption = document.querySelector('.restart')


//allCards = shuffleOption.addEventListener('click', shuffle(availableCards));

allCards.forEach(function(card){
            card.addEventListener('click', displayCard);
 //       openCards =
//        card.addEventListener('click', isClosed);
                

    
});
 