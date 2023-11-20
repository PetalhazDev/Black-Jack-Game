let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("#message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let player = {
    name : "Peter",
    chip : 100
}

let playerEl = document.querySelector("#player-el")
function startGame() {
    isAlive = true
    cards = [getRandomCard(), getRandomCard()]
    sum = cards[0] + cards[1]
    hasBlackJack = false
    renderGame()
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber === 1) {
        return 11
    }
    else if(randomNumber > 10) {
        return 10
    }
    else {
        return randomNumber
    }
}

function renderGame() {
    if (sum <= 20) {
        alert("Do you want to Draw a Card? ")
    }
    else if (sum === 21) {
        alert(" Whoo! You 've got Black Jack")
    }
    else {
        alert("You 're out of the game! ")
        chip -= 10
    }
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for(let i = 0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    messageEl.textContent = message
    playerEl.textContent = player.name + ": $" + player.chip
}

function newCard() {
    if(isAlive && hasBlackJack === false) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
        player.chip -=6
        renderGame()
    }
}

