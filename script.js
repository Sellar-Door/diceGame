
const rollDice = () => {
let d1 = Math.floor(Math.random()*6+1)
total = d1
die1.innerHTML = d1 
let image = document.getElementById("image")
document.getElementById("score").addEventListener("click", function(event){ 
   
})

if(d1 == 1) {
    image.src = "img/dice1.png"
} if(d1 == 2) {
    image.src = "img/dice2.png"
} if(d1 == 3) {
    image.src = "img/dice3.png"
} if(d1 == 4) {
    image.src = "img/dice4.png"
} if(d1 == 5) {
    image.src = "img/dice5.png"
} if(d1 == 6) {
    image.src = "img/dice6.png"
}
}

