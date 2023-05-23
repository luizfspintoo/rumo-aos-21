let nome = prompt("Qual é seu nome?");
if(nome === null) {
  nome = "";
}

// player = {
//   name: "Luiz",
// }

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

//DOM
let messageMain = document.querySelector("#msg")
let somMain = document.querySelector("#som")
let cardMain = document.querySelector("#cart")
let players = document.querySelector("#player")
let title = document.querySelector("#title");
let cartInicial = document.getElementById("cartInicial")
players.textContent += "Jogador: " + nome;
title.textContent += "Olá, seja bem-vindo " + nome + "!";

//INICIO DO GAME
function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  //let secoundCard = getRandomCard()
  cards = [firstCard]
  sum = firstCard //+ secoundCard
  renderGame()
  cartInicial.setAttribute("disabled", "disabled")
}

//NUMERO ALEATORIO
function getRandomCard() {
  let numberRandom = Math.floor(Math.random() * 13) + 1
  if (numberRandom > 10) {
    return 10
  } else if (numberRandom === 1) {
    return 11
  } else {
    return numberRandom
  }
}

//RESPOSTA DO GAME (LOGICA)
function renderGame() {
  if (sum < 21) {
    message = "Ufaa! quase lá."
  } else if (sum === 21) {
    message = "Yesss, Parabéns você ganhou o jogo"
    hasBlackJack = true
    setTimeout(function () {
      window.location.href = "index.html"
    }, 4000)
  } else {
    message = "Game Over! Você não ganhou"
    isAlive = false
    setTimeout(function () {
      window.location.href = "index.html"
    }, 4000)
  }
  messageMain.textContent = message

  cardMain.textContent = "Cartas: "
  for (let i = 0; i < cards.length; i++) {
    cardMain.textContent += cards[i] + " "
  }
  somMain.textContent = "Soma: " + sum
}

//ADICIONA CARD
function newCart() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
}

//CONFIGURAÇÃO DO MODAL
let modal = document.getElementById("myModal")
let myBtn = document.getElementById("myBtn")
let span = document.getElementsByClassName("close")[0]

setTimeout(function () {
  modal.style.display = "block"
}, 900)

span.onclick = function () {
  modal.style.display = "none"
}

myBtn.onclick = function () {
  modal.style.display = "block"
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}
