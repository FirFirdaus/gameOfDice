//First dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelector(".img1").setAttribute("src", randomDiceImage);


// Second Dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelector(".img2").setAttribute("src", randomDiceImage2);


//set var to find out who draw by changing h1 innerHTML
var playerDice1 = randomNumber1;
var playerDice2 = randomNumber2;

if (playerDice1 > playerDice2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
} else if (playerDice1 < playerDice2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
} else {
  document.querySelector("h1").innerHTML = "It's a Draw!"
}

function refreshPage(){
    window.location.reload();
}


// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// var randomDiceImage = "dice" + randomNumber1 + ".png";
// // console.log(randomNumber1);.
// var randomImageSource = "images/" + randomDiceImage;
// var image1 = document.querySelector(".img1").setAttribute("src", randomImageSource);
//
//
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// var randomDiceImage2 = "dice" + randomNumber2 + ".png";
// // console.log(randomNumber1);.
// var randomImageSource2 = "images/" + randomDiceImage2;
// var image1 = document.querySelector(".img2").setAttribute("src", randomImageSource2);
//
//
//
// var playerDice1 = randomNumber1;
// var playerDice2 = randomNumber2;
//
// if (playerDice1 > playerDice2) {
//   document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
// } else if (playerDice1 < playerDice2) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
// } else {
//   document.querySelector("h1").innerHTML = "It's a Draw!"
// }
//
//

// <button type="ref" class="buttonNote" name="button" ><a href="javascript:confirmRefresh();">Click to refresh the page.</a></button>
// function confirmRefresh() {
// var okToRefresh = confirm("Do you want to refresh the page?");
// if (okToRefresh)
// 	{
// 			setTimeout("location.reload(true);",500);
// 	}
// }
