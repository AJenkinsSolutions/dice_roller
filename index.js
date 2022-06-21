

// list of images
var images = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];

// Dice objects
var dice1 = document.querySelector('.img1');
var dice2 = document.querySelector('.img2');

//Title object
var title = document.querySelector('h1');

function getRandomIndex(){
    // choose random index 
    // Returns index
    var index = Math.random() * images.length;
    index = Math.floor(index);
    return index
}

function setImageAttribute() {
    
    //Assign image from list
    randomImage1 = images[getRandomIndex()];
    randomImage2 = images[getRandomIndex()];
    
    //Set new dice Attributes
    dice1.setAttribute('src', randomImage1);
    dice2.setAttribute('src', randomImage2);
}

function getDiceValues(){
    // Get dice values 
    var dice1Value = dice1.getAttribute('src')[11];
    var dice2Value = dice2.getAttribute('src')[11];
    return [dice1Value, dice2Value]
    }
    

function calculateWinner(p1, p2) {

    if(p1 > p2){
        // Change H1 TAG
        title.innerText = 'Player1 Wns ';
    }else if(p2 > p1){
        // Change h1 tag
        title.innerText = 'Player2 Wins';
    }else{
        title.innerText = 'Draw';
    }
}


// On window refresh 
setImageAttribute()

var scores = getDiceValues();

var p1 = scores[0];
var p2 = scores[1];

calculateWinner(p1, p2);


