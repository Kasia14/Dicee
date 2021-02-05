let randomNumber1 = Math.floor(Math.random()*6) + 1;
let randomNumber2 = Math.floor(Math.random()*6) +1;
const imageDice = document.querySelector('.img1');
const image2Dice = document.querySelector('.img2');
const info = document.querySelector('h1')

let randomDiceImage = "dice" + randomNumber1 +".png" // dice1.png - dice6.png
let randomDiceImage2 = "dice" + randomNumber2 +".png"
let randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png
let randomImageSource2 = "images/" + randomDiceImage2;

imageDice.setAttribute("src", randomImageSource);
image2Dice.setAttribute("src", randomImageSource2);


function whoWIn(){
if(randomNumber1 > randomNumber2){
    info.innerHTML = "Player 1 Wins!"
}else if(randomNumber1 < randomNumber2){
    info.innerHTML = "Player 2 Wins"
}else if(randomNumber1 = randomNumber2){
info.innerHTML = "Draw!"
}
}

whoWIn();