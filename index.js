var randomNumber1 = Math.random()*6;
randomNumber1 = Math.floor(randomNumber1) +1;
if(randomNumber1===1){
  document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
}
else if(randomNumber1===2){
  document.querySelector("img.img1").setAttribute("src", "images/dice2.png");
}
else if(randomNumber1===3){
  document.querySelector("img.img1").setAttribute("src", "images/dice3.png");
}
else if(randomNumber1===4){
  document.querySelector("img.img1").setAttribute("src", "images/dice4.png");
}
else if(randomNumber1===5){
  document.querySelector("img.img1").setAttribute("src", "images/dice5.png");
}
else{
  document.querySelector("img.img1").setAttribute("src", "images/dice6.png");
}



var randomNumber2 = Math.floor(Math.random()*6) + 1;//1-6
var randomImage = "images/dice" + randomNumber2 + ".png";//images/dice1-6.png
document.querySelectorAll("img")[1].setAttribute("src", randomImage);//change .img2 images

//for h1 heading chages
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "Player1 Wins!🏆";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "Player2 Wins!🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
