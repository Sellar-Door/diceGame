// global variable setting totalScore to 0 before a function is run 

let totalScore = 0

// function to store a random number between 1 and 6 in a variable and use this variable to simulate rolling a dice and displaying the outcome 

const rollDice = () => {
let d1 = Math.floor(Math.random()*6+1) // random number variable 
let total = d1
let image = document.getElementById("image")
totalScore = totalScore + total // adds each dice roll to create a total score 
die1.innerHTML = "You rolled " + d1
score.innerHTML = "TOTAL "+ totalScore
if(totalScore >= 20) { // used to alter the text in id "score" when totalScore is equal to 20 or above 
   score.innerHTML = "YOU WIN! You scored a total of " +totalScore
}if(d1 === 1) { // resets total score to 0 if dice roll - d1 - equals 1 at any point in the game and displays text to "score"
   totalScore = totalScore - totalScore
   score.innerHTML = "GAME OVER. Roll the dice to start again"
}if(totalScore >=20) { // used to reset total score to 0 once the totalScore is equal to 20 or above
   totalScore = totalScore - totalScore
}
// if statements in rollDice function to display dice image dependent on the value of d1 variable 
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