// global variables
const boardElement = document.querySelector(".board");
const deckElement = document.querySelector(".deck");
const discardPileElement = document.querySelector(".discard-pile");
const bottomPlayerElement = document.querySelector(".player-bottom");
const topPlayerElement = document.querySelector(".player-top");
const leftPlayerElement = document.querySelector(".player-left");
const rightPlayerElement = document.querySelector(".player-right");
const playButtonElement = document.querySelector(".play-button");
let allCardsInDeck;
let cardsInDeck;

// names
const playerLeftName = document.querySelector(".player-left-name");
const playerRightName = document.querySelector(".player-right-name");
const playerTopName = document.querySelector(".player-top-name");
const playerBottomName = document.querySelector(".player-bottom-name");

const cardsPerPlayer = 4;
const dealDelay = 50;
const finishedDealing = false;

// objects
const cards = [
  { color: "red", type: "number", value: 0 },
  { color: "red", type: "number", value: 1 },
  { color: "red", type: "number", value: 2 },
  { color: "red", type: "number", value: 3 },
  { color: "red", type: "number", value: 4 },
  { color: "red", type: "number", value: 5 },
  { color: "red", type: "number", value: 6 },
  { color: "red", type: "number", value: 7 },
  { color: "red", type: "number", value: 8 },
  { color: "red", type: "number", value: 9 },
  { color: "red", type: "number", value: 1 },
  { color: "red", type: "number", value: 2 },
  { color: "red", type: "number", value: 3 },
  { color: "red", type: "number", value: 4 },
  { color: "red", type: "number", value: 5 },
  { color: "red", type: "number", value: 6 },
  { color: "red", type: "number", value: 7 },
  { color: "red", type: "number", value: 8 },
  { color: "red", type: "number", value: 9 },
  // { color: "green", type: "number", value: 0 },
  // { color: "green", type: "number", value: 1 },
  // { color: "green", type: "number", value: 2 },
  // { color: "green", type: "number", value: 3 },
  // { color: "green", type: "number", value: 4 },
  // { color: "green", type: "number", value: 5 },
  // { color: "green", type: "number", value: 6 },
  // { color: "green", type: "number", value: 7 },
  // { color: "green", type: "number", value: 8 },
  // { color: "green", type: "number", value: 9 },
  // { color: "green", type: "number", value: 1 },
  // { color: "green", type: "number", value: 2 },
  // { color: "green", type: "number", value: 3 },
  // { color: "green", type: "number", value: 4 },
  // { color: "green", type: "number", value: 5 },
  // { color: "green", type: "number", value: 6 },
  // { color: "green", type: "number", value: 7 },
  // { color: "green", type: "number", value: 8 },
  // { color: "green", type: "number", value: 9 },
  // { color: "blue", type: "number", value: 0 },
  // { color: "blue", type: "number", value: 1 },
  // { color: "blue", type: "number", value: 2 },
  // { color: "blue", type: "number", value: 3 },
  // { color: "blue", type: "number", value: 4 },
  // { color: "blue", type: "number", value: 5 },
  // { color: "blue", type: "number", value: 6 },
  // { color: "blue", type: "number", value: 7 },
  // { color: "blue", type: "number", value: 8 },
  // { color: "blue", type: "number", value: 9 },
  // { color: "blue", type: "number", value: 1 },
  // { color: "blue", type: "number", value: 2 },
  // { color: "blue", type: "number", value: 3 },
  // { color: "blue", type: "number", value: 4 },
  // { color: "blue", type: "number", value: 5 },
  // { color: "blue", type: "number", value: 6 },
  // { color: "blue", type: "number", value: 7 },
  // { color: "blue", type: "number", value: 8 },
  // { color: "blue", type: "number", value: 9 },
  // { color: "yellow", type: "number", value: 0 },
  // { color: "yellow", type: "number", value: 1 },
  // { color: "yellow", type: "number", value: 2 },
  // { color: "yellow", type: "number", value: 3 },
  // { color: "yellow", type: "number", value: 4 },
  // { color: "yellow", type: "number", value: 5 },
  // { color: "yellow", type: "number", value: 6 },
  // { color: "yellow", type: "number", value: 7 },
  // { color: "yellow", type: "number", value: 8 },
  // { color: "yellow", type: "number", value: 9 },
  // { color: "yellow", type: "number", value: 1 },
  // { color: "yellow", type: "number", value: 2 },
  // { color: "yellow", type: "number", value: 3 },
  // { color: "yellow", type: "number", value: 4 },
  // { color: "yellow", type: "number", value: 5 },
  // { color: "yellow", type: "number", value: 6 },
  // { color: "yellow", type: "number", value: 7 },
  // { color: "yellow", type: "number", value: 8 },
  // { color: "yellow", type: "number", value: 9 },
  // { color: "red", type: "special", value: "reverse" },
  // { color: "red", type: "special", value: "reverse" },
  // { color: "yellow", type: "special", value: "reverse" },
  // { color: "yellow", type: "special", value: "reverse" },
  // { color: "green", type: "special", value: "reverse" },
  // { color: "green", type: "special", value: "reverse" },
  // { color: "blue", type: "special", value: "reverse" },
  // { color: "blue", type: "special", value: "reverse" },
  // { color: "red", type: "special", value: "skip" },
  // { color: "red", type: "special", value: "skip" },
  // { color: "yellow", type: "special", value: "skip" },
  // { color: "yellow", type: "special", value: "skip" },
  // { color: "green", type: "special", value: "skip" },
  // { color: "green", type: "special", value: "skip" },
  // { color: "blue", type: "special", value: "skip" },
  // { color: "blue", type: "special", value: "skip" },
  // { color: "black-wild", type: "special", value: "wild" },
  // { color: "black-wild", type: "special", value: "wild" },
  // { color: "black-wild", type: "special", value: "wild" },
  // { color: "black-wild", type: "special", value: "wild" },
  // { color: "red", type: "special", value: "draw-two" },
  // { color: "red", type: "special", value: "draw-two" },
  // { color: "yellow", type: "special", value: "draw-two" },
  // { color: "yellow", type: "special", value: "draw-two" },
  // { color: "green", type: "special", value: "draw-two" },
  // { color: "green", type: "special", value: "draw-two" },
  // { color: "blue", type: "special", value: "draw-two" },
  // { color: "blue", type: "special", value: "draw-two" },
  // { color: "four-wild", type: "special", value: "wild-draw-four" },
  // { color: "four-wild", type: "special", value: "wild-draw-four" },
  // { color: "four-wild", type: "special", value: "wild-draw-four" },
  // { color: "four-wild", type: "special", value: "wild-draw-four" },
];

// players
const players = [
  {
    player: "Amanda",
    currentCards: [],
  },
  {
    player: "Veronica",
    currentCards: [],
  },
  {
    player: "Candace",
    currentCards: [],
  },
  {
    player: "OP",
    currentCards: [],
  },
];

//main code
generateCards();

// add event listener to play button
playButtonElement.addEventListener("click", () => {
  startGame();
});

// ------------------------------

function startGame() {
  dealCards();
  startDiscardPile();
  enableDeck();
  toggleVariablesVisibility();
}

function generateCard(card) {
  // get div main elements
  let cardContainerElement = document.createElement("div");
  let cardFrontElement = document.createElement("div");
  let cardBackElement = document.createElement("div");

  // get card front elements
  topValueElement = document.createElement("div");
  bottomValueElement = document.createElement("div");
  valueElement = document.createElement("div");
  elipsisElement = document.createElement("div");

  //add class to container
  cardContainerElement.classList.add("card-container", "flip", "in-deck");

  // add classes to front card
  cardFrontElement.classList.add(
    "card",
    "card-front",
    `${card.color}`,
    `${card.type}`
  );

  // add classes to card back
  cardBackElement.classList.add("card", "card-back");

  //identify cards with id
  cardContainerElement.id = `${card.color} ${card.type} ${card.value}`;

  // add html to front card element
  if (card.value === "draw-two") {
    cardFrontElement.innerHTML = `
    <div class="value top smaller-font-secondary">+2</div>
    <div class="card-elipsis"></div>
    <div class="value smaller-font-main">+2</div>
    <div class="value bottom smaller-font-secondary">+2</div>
    `;
  } else if (card.value === "wild-draw-four") {
    cardFrontElement.innerHTML = `
    <div class="value top smaller-font-secondary">+4</div>
    <div class="card-elipsis"></div>
    <div class="value smaller-font-main"> 
      <div class="card-elipsis-wild">
        <div class="four-value">+4</div>
      </div>
    </div>
    <div class="value bottom smaller-font-secondary">+4</div>
    `;
  } else if (card.value === "wild") {
    cardFrontElement.innerHTML = `
    <div class="top-elipsis">
      <div class="card-elipsis-wild"></div>
    </div>
    <div class="card-elipsis-wild"></div>
    <div class="bottom-elipsis">
      <div class="card-elipsis-wild"></div>
    </div>
    `;
  } else if (card.value === "skip" || card.value === "reverse") {
    let value = card.value === "skip" ? "⊘" : "⇆";
    cardFrontElement.innerHTML = `
      <div class="value top normal-font-secondary">${value}</div>
      <div class="card-elipsis"></div>
      <div class="value normal-font-main">${value}</div>
      <div class="value bottom normal-font-secondary">${value}</div>
      `;
  } else {
    cardFrontElement.innerHTML = `
      <div class="value top normal-font-secondary">${card.value}</div>
      <div class="card-elipsis"></div>
      <div class="value normal-font-main">${card.value}</div>
      <div class="value bottom normal-font-secondary">${card.value}</div>
      `;
  }
  // add html html to backside element
  cardBackElement.innerHTML = `
  <div class="card-backside">UNO</div>
  `;
  // append elements to card container
  cardContainerElement.appendChild(cardFrontElement);
  cardContainerElement.appendChild(cardBackElement);
  return cardContainerElement;
}

// generate cards
function generateCards() {
  cards.forEach((card) => {
    let generatedCard = generateCard(card);
    addChildElement(deckElement, generatedCard);
  });
  allCardsInDeck = document.querySelectorAll(".deck .card-container");
  cardsInDeck = allCardsInDeck.length;
}
function obtainCardValue(card) {
  if (card.type === "number") {
    return card.value;
  } else {
    switch (card.value) {
      case "reverse":
        return "⇆";
      case "skip":
        return "⊘";
      case "wild":
        return "wild";
      case "draw two":
        return "+2";
      case "wild draw four":
        return "+4";
    }
  }
}

// deal cards
function dealCards() {
  // 8 random cards, 4 players
  let dealtCards = 0;
  let currentPlayer = 0;
  let playerToDealTo;
  let id = setInterval(dealCard, dealDelay);

  function dealCard() {
    let cardElement = extractCardFromDeck();
    players[currentPlayer].currentCards.push(cardElement.id);
    switch (currentPlayer) {
      case 0:
        playerToDealTo = bottomPlayerElement;
        break;
      case 1:
        playerToDealTo = topPlayerElement;
        break;
      case 2:
        playerToDealTo = leftPlayerElement;
        break;
      case 3:
        playerToDealTo = rightPlayerElement;
        break;
    }
    // add clickable functionality to main player's cards
    if (currentPlayer === 0) {
      cardElement.addEventListener("click", (e) => {
        playCard(e.target);
      });
    }
    toggleCardInDeck(cardElement);
    addChildElement(playerToDealTo, cardElement);
    currentPlayer++;
    dealtCards++;

    // break the inverval
    if (currentPlayer === 4) currentPlayer = 0;
    if (dealtCards === cardsPerPlayer * 4) {
      clearInterval(id);
      flipMainPlayerCards();
    }
  }
}

function extractCardFromDeck() {
  let randomCardIndeplayer = Math.floor(Math.random() * cardsInDeck);
  let chosenCard = allCardsInDeck[randomCardIndeplayer];
  if (!chosenCard) return;
  cardsInDeck--;
  let pickedCard = deckElement.removeChild(chosenCard);
  // update cards from deck list
  updateDeckCardsList();
  return pickedCard;
}
function updateDeckCardsList() {
  allCardsInDeck = document.querySelectorAll(".deck .card-container");
}
function toggleCardInDeck(card) {
  card.classList.toggle("in-deck");
}
function flipCard(card) {
  card.classList.toggle("flip");
}
function flipMainPlayerCards() {
  let bottomCards = document.querySelectorAll(".player-bottom .card-container");
  bottomCards.forEach((cardElement) => {
    flipCard(cardElement);
  });
}

// start discard pile
function startDiscardPile() {
  let cardElement = extractCardFromDeck();
  addChildElement(discardPileElement, cardElement);
  setTimeout(flipCard, 50, cardElement);
}

// add clicking functionality to main player cards
function playCard(card) {
  let chosenCard = getChosenCard(card);
  if (checkIfCardIsPlayable(chosenCard.id)) {
    dispatchCardToDiscardPile(chosenCard);
  }
}
function getChosenCard(card) {
  while (!card.classList.contains("card-container")) {
    card = card.parentElement;
  }
  return card;
}

function dispatchCardToDiscardPile(cardElement) {
  let removedCard;
  cardElement.classList.toggle("remove");
  setTimeout(() => {
    removedCard = bottomPlayerElement.removeChild(cardElement);
    removedCard.classList.toggle("in-deck");
    addChildElement(discardPileElement, removedCard);
    setTimeout(() => {
      removedCard.classList.toggle("remove");
    }, 50);
  }, 300); // 300 is the duration of the animation (0.3s)
}

function checkIfCardIsPlayable(cardId) {
  // get card id "atop" of discard pile IE last child
  let topcardDiscardPileId = document.querySelector(
    ".discard-pile .card-container:last-child"
  ).id;
  // dissect both cards id's to check for rules compability
  let binCardIds = topcardDiscardPileId.split(" ");
  let chosenCardIds = cardId.split(" ");
  // first come the color, then the type, then the value/action
  if (
    topcardDiscardPileId[0] === "black-wild" ||
    topcardDiscardPileId[0] === "four-wild"
  ) {
    // if a wild or wild draw four is atop the discard pile, any card card can be used (CHANGE THIS LATER!)
    return true;
  } else if (
    chosenCardIds[2] === "wild" ||
    chosenCardIds[2] === "wild-draw-four"
  ) {
    return true; // wilds or wild draw four can be used everywhere
  } else if (binCardIds[0] === chosenCardIds[0]) {
    return true; // both are the same color
  } else if (
    binCardIds[1] === chosenCardIds[1] &&
    binCardIds[2] === chosenCardIds[2]
  ) {
    return true; // both are numbers or specials and they're the same
  } else {
    return false; // the cards are incompatible
  }
}

// add draw card functionality
function enableDeck() {
  deckElement.addEventListener("click", drawCard);
}
function drawCard() {
  let cardFromDeck = extractCardFromDeck();
  if (!cardFromDeck) return;
  cardFromDeck.classList.toggle("in-deck");
  cardFromDeck.addEventListener("click", (e) => {
    playCard(e.target);
  });
  addChildElement(bottomPlayerElement, cardFromDeck);
  setTimeout(flipCard, 50, cardFromDeck);
}

// toggle visibility upon game start
function toggleVariablesVisibility() {
  let hiddenVariables = document.querySelectorAll(".invisible");
  hiddenVariables.forEach((element) => {
    element.classList.toggle("invisible");
  });
  playButtonElement.classList.toggle("invisible");
}

// utility functions
function createElement(elemType) {
  return document.createElement(elemType);
}
function addClassToElement(elem, className) {
  elem.classList.add(className);
}
function addIdToElement(elem, id) {
  elem.id = id;
}
function addChildElement(parentElem, childElem) {
  parentElem.appendChild(childElem);
}
