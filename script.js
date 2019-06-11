let totalScore = 0

const rollDice = () => {
let d1 = Math.floor(Math.random()*6+1)
let total = d1
let image = document.getElementById("image")
totalScore = totalScore + total
die1.innerHTML = "You rolled " + d1
score.innerHTML = "TOTAL "+ totalScore
if(totalScore >= 20) {
   score.innerHTML = "YOU WIN! You scored a total of " +totalScore
} if(d1 === 1) {
   totalScore = totalScore - totalScore
   score.innerHTML = "GAME OVER. Roll the dice to start again"
} if(totalScore >=20) {
   totalScore = totalScore - totalScore
}
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