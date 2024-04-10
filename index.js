var rand1 = Math.floor(Math.random() * 7);
var rand2 = Math.floor(Math.random() * 7);

var li1 = "./images/dice" + rand1 + ".png";
document.querySelector(".img1").setAttribute("src", li1);

var li2 = "./images/dice" + rand1 + ".png";
document.querySelector(".img2").setAttribute("src", li2);

if(rand1>rand2){
    document.querySelector("h1").textContent = "⛳️ Player 1 Won";

}
else if(rand1<rand2){
    document.querySelector("h1").textContent = "Player 2 Won ⛳️";
}
else{
    document.querySelector("h1").textContent = "It's a Draw";
}