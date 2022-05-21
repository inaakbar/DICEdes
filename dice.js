var rn=Math.floor(Math.random()*6+1);
var rnn=Math.floor(Math.random()*6+1);
var image1="images/dice"+rn+".png";
document.querySelectorAll("img")[0].setAttribute("src",image1);
document.querySelectorAll("img")[1].setAttribute("src",("images/dice"+rnn+".png"));
if (rn > rnn)
{
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (rn< rnn)
{
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else
{
  document.querySelector("h1").innerHTML = "Draw!";
}