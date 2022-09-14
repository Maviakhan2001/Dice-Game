var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 - 6

var randomDiceImg = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource1 = "images/" + randomDiceImg; // images/dice1.png - images/dice6.png 

var Image1 = document.querySelectorAll("img")[0];

Image1.setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// condition Loops


if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "&#128681 Player 1  Wins!"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! &#128681"
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}