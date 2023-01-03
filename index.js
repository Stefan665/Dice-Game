//first number
var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;

var randomImageSource1= "dice" + randomNumber1 + ".png";

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

//second number
var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;

var randomImageSource2="dice" + randomNumber2 + ".png";

var image2= document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

//if statement
if(randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML= "🚩Player One Wins!";
}
else if(randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML= "Player Two Wins!🚩";
}
else {
  document.querySelector("h1").innerHTML= "It's a draw!🎉";
}
