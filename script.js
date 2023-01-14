// global variables
const boardElement = document.querySelector(".board");
const deckElement = document.querySelector(".deck");
const discardPileElement = document.querySelector(".discard-pile");
const bottomPlayerElement = document.querySelector(".player-bottom");
const topPlayerElement = document.querySelector(".player-top");
const leftPlayerElement = document.querySelector(".player-left");
const rightPlayerElement = document.querySelector(".player-right");
const playButtonElement = document.querySelector(".play-button");
const passTurnButtonElement = document.querySelector(".pass-turn");
const currentColorSpanElement = document.querySelector(".current-color span");
const chooseAColorElement = document.querySelector(".choose-color");
const colorButtonElements = document.querySelectorAll(".choose-color button");
let allCardsInDeck;
let cardsInDeck;

// names
const playerLeftName = document.querySelector(".player-left-name");
const playerRightName = document.querySelector(".player-right-name");
const playerTopName = document.querySelector(".player-top-name");
const playerBottomName = document.querySelector(".player-bottom-name");
const currentTurnElement = document.querySelector(".header-current-turn");

const numberOfPlayers = 4;
const cardsPerPlayer = 7;
const dealDelay = 50;
const finishedDealing = false;
let turnFlow = "right";
let lastSpecialCardPlayed = "";

const colors = ["green", "blue", "red", "yellow"];
let chosenColor = "";

// objects
let hasCurrentPlayerDrawnCard;
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
  { color: "green", type: "number", value: 0 },
  { color: "green", type: "number", value: 1 },
  { color: "green", type: "number", value: 2 },
  { color: "green", type: "number", value: 3 },
  { color: "green", type: "number", value: 4 },
  { color: "green", type: "number", value: 5 },
  { color: "green", type: "number", value: 6 },
  { color: "green", type: "number", value: 7 },
  { color: "green", type: "number", value: 8 },
  { color: "green", type: "number", value: 9 },
  { color: "green", type: "number", value: 1 },
  { color: "green", type: "number", value: 2 },
  { color: "green", type: "number", value: 3 },
  { color: "green", type: "number", value: 4 },
  { color: "green", type: "number", value: 5 },
  { color: "green", type: "number", value: 6 },
  { color: "green", type: "number", value: 7 },
  { color: "green", type: "number", value: 8 },
  { color: "green", type: "number", value: 9 },
  { color: "blue", type: "number", value: 0 },
  { color: "blue", type: "number", value: 1 },
  { color: "blue", type: "number", value: 2 },
  { color: "blue", type: "number", value: 3 },
  { color: "blue", type: "number", value: 4 },
  { color: "blue", type: "number", value: 5 },
  { color: "blue", type: "number", value: 6 },
  { color: "blue", type: "number", value: 7 },
  { color: "blue", type: "number", value: 8 },
  { color: "blue", type: "number", value: 9 },
  { color: "blue", type: "number", value: 1 },
  { color: "blue", type: "number", value: 2 },
  { color: "blue", type: "number", value: 3 },
  { color: "blue", type: "number", value: 4 },
  { color: "blue", type: "number", value: 5 },
  { color: "blue", type: "number", value: 6 },
  { color: "blue", type: "number", value: 7 },
  { color: "blue", type: "number", value: 8 },
  { color: "blue", type: "number", value: 9 },
  { color: "yellow", type: "number", value: 0 },
  { color: "yellow", type: "number", value: 1 },
  { color: "yellow", type: "number", value: 2 },
  { color: "yellow", type: "number", value: 3 },
  { color: "yellow", type: "number", value: 4 },
  { color: "yellow", type: "number", value: 5 },
  { color: "yellow", type: "number", value: 6 },
  { color: "yellow", type: "number", value: 7 },
  { color: "yellow", type: "number", value: 8 },
  { color: "yellow", type: "number", value: 9 },
  { color: "yellow", type: "number", value: 1 },
  { color: "yellow", type: "number", value: 2 },
  { color: "yellow", type: "number", value: 3 },
  { color: "yellow", type: "number", value: 4 },
  { color: "yellow", type: "number", value: 5 },
  { color: "yellow", type: "number", value: 6 },
  { color: "yellow", type: "number", value: 7 },
  { color: "yellow", type: "number", value: 8 },
  { color: "yellow", type: "number", value: 9 },
  { color: "red", type: "special", value: "reverse" },
  { color: "red", type: "special", value: "reverse" },
  { color: "yellow", type: "special", value: "reverse" },
  { color: "yellow", type: "special", value: "reverse" },
  { color: "green", type: "special", value: "reverse" },
  { color: "green", type: "special", value: "reverse" },
  { color: "blue", type: "special", value: "reverse" },
  { color: "blue", type: "special", value: "reverse" },
  { color: "red", type: "special", value: "skip" },
  { color: "red", type: "special", value: "skip" },
  { color: "yellow", type: "special", value: "skip" },
  { color: "yellow", type: "special", value: "skip" },
  { color: "green", type: "special", value: "skip" },
  { color: "green", type: "special", value: "skip" },
  { color: "blue", type: "special", value: "skip" },
  { color: "blue", type: "special", value: "skip" },
  { color: "black-wild", type: "special", value: "wild" },
  { color: "black-wild", type: "special", value: "wild" },
  { color: "black-wild", type: "special", value: "wild" },
  { color: "black-wild", type: "special", value: "wild" }, ///////
  { color: "red", type: "special", value: "draw-two" },
  { color: "red", type: "special", value: "draw-two" },
  { color: "yellow", type: "special", value: "draw-two" },
  { color: "yellow", type: "special", value: "draw-two" },
  { color: "green", type: "special", value: "draw-two" },
  { color: "green", type: "special", value: "draw-two" },
  { color: "blue", type: "special", value: "draw-two" },
  { color: "blue", type: "special", value: "draw-two" },
  { color: "four-wild", type: "special", value: "wild-draw-four" },
  { color: "four-wild", type: "special", value: "wild-draw-four" },
  { color: "four-wild", type: "special", value: "wild-draw-four" },
  { color: "four-wild", type: "special", value: "wild-draw-four" }, ////
];

// players
let currentTurn;
const players = [
  {
    player: "OP",
    currentCards: [],
  },
  {
    player: "Candace",
    currentCards: [],
  },
  {
    player: "Amanda",
    currentCards: [],
  },
  {
    player: "Veronica",
    currentCards: [],
  },
];

//main code
generateCards();

// add event listener to play button
playButtonElement.addEventListener("click", () => {
  startGame();
});
// add event listener to color buttons
colorButtonElements.forEach((button) => {
  button.addEventListener("click", (e) => {
    handleColorChoosing(e.target.id);
  });
});

// ------------------------------

function startGame() {
  dealCards();
  startDiscardPile();
  enableDeck();
  enableButtons();
  toggleVariablesVisibility();
  setStartingTurn();
  updateTurnOnHTML(currentTurn);
  hasCurrentPlayerDrawnCard = false;
  if (currentTurn !== 0) {
    setTimeout(nextPlay, cardsPerPlayer * numberOfPlayers * dealDelay * 2);
  }
}
// make the computer play
function nextPlay() {
  if (bottomPlayerElement.classList.contains("clickable")) {
    togglePlayerOPPlayability();
  }
  hasCurrentPlayerDrawnCard = false;
  if (lastSpecialCardPlayed) {
    handleSpecialCard(currentTurn);
  } else {
    if (currentTurn < numberOfPlayers && currentTurn > 0) {
      updateTurnOnHTML(currentTurn);
      setTimeout(makeBotPlay, 1000 * currentTurn, currentTurn);
      handleNextTurn();
    } else {
      updateTurnOnHTML(currentTurn);
      if (bottomPlayerElement.classList.contains("unclickable")) {
        togglePlayerOPPlayability();
      }
    }
  }
}
function makeBotPlay(usedTurn) {
  let chosenRandomCard;
  let playableCards = getPlayableCardsByBot(usedTurn);
  if (playableCards.length > 0) {
    chosenRandomCard =
      playableCards[Math.floor(Math.random() * playableCards.length)];
  } else {
    drawCard(usedTurn);
    let drawnCard = getPlayableCardsByBot(usedTurn)[0];
    if (drawnCard) {
      chosenRandomCard = drawnCard;
    }
  }
  if (chosenRandomCard) {
    chosenColor = "";
    setTimeout(flipCard, 500, chosenRandomCard);
    setTimeout(dispatchCardToDiscardPile, 1000, chosenRandomCard, usedTurn);
  }
  setTimeout(nextPlay, 1500);
}
function handleNextTurn() {
  if (turnFlow === "right") {
    currentTurn++;
    if (currentTurn > 3) {
      currentTurn -= 4;
    }
  } else {
    currentTurn--;
    if (currentTurn < 0) {
      currentTurn += 4;
    }
  }
}
function getPlayableCardsByBot(usedTurn) {
  const currentBot = getPlayer(usedTurn);
  let playableCards = [];
  if (!hasCurrentPlayerDrawnCard) {
    let currentBotCards = currentBot.childNodes;
    currentBotCards.forEach((card) => {
      if (checkIfCardIsPlayable(card.id)) {
        playableCards.push(card);
      }
    });
  } else {
    let drawnCard = currentBot.childNodes[currentBot.childNodes.length - 1];
    if (checkIfCardIsPlayable(drawnCard.id)) {
      playableCards.push(drawnCard);
    }
  }
  return playableCards;
}

function togglePlayerOPPlayability() {
  bottomPlayerElement.classList.toggle("unclickable");
  deckElement.classList.toggle("unclickable");
  passTurnButtonElement.classList.toggle("unclickable");
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
    playerToDealTo = getPlayer(currentPlayer);
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
    if (dealtCards === cardsPerPlayer * numberOfPlayers) {
      clearInterval(id);
      flipMainPlayerCards();
    }
  }
}
function getPlayer(playerNumber) {
  switch (playerNumber) {
    case 0:
      return bottomPlayerElement;
    case 1:
      return rightPlayerElement;
    case 2:
      return topPlayerElement;
    case 3:
      return leftPlayerElement;
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
  dispatchCardToDiscardPile;
  addChildElement(discardPileElement, cardElement);
  setTimeout(() => {
    flipCard(cardElement);
    updateCurrentColor(cardElement.id);
  }, 50);
}

// add clicking functionality to main player cards
function playCard(card) {
  let chosenCard = getChosenCard(card);
  if (checkIfCardIsPlayable(chosenCard.id)) {
    dispatchCardToDiscardPile(chosenCard);
    chosenColor = "";
    setTimeout(() => {
      handleNextTurn();
      nextPlay();
    }, 500);
  }
}
function getChosenCard(card) {
  while (!card.classList.contains("card-container")) {
    card = card.parentElement;
  }
  return card;
}

function dispatchCardToDiscardPile(cardElement, setTurn = undefined) {
  let removedCard;
  cardElement.classList.toggle("remove");
  setTimeout(() => {
    // usedTurn helps to dispatch cards by both the user and the bots
    let usedTurn = setTurn === undefined ? currentTurn : setTurn;
    let playerToRemoveCardFrom = getPlayer(usedTurn);
    removedCard = playerToRemoveCardFrom.removeChild(cardElement);
    updateCardList(removedCard.id, setTurn);
    removedCard.classList.toggle("in-deck");
    checkIfSpecial(removedCard.id);
    updateCurrentColor(removedCard.id);
    addChildElement(discardPileElement, removedCard);
    setTimeout(() => {
      removedCard.classList.toggle("remove");
    }, 50);
  }, 300); // 300 is the duration of the animation (0.3s)
}
function updateCardList(cardId, setTurn) {
  let usedTurn = setTurn === undefined ? currentTurn : setTurn;
  players[usedTurn].currentCards = players[usedTurn].currentCards.filter(
    (item) => item !== cardId
  );
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
  if (chosenColor) {
    // a wild or wild draw four has been played
    if (chosenCardIds[2] === "wild" || chosenCardIds[2] === "wild-draw-four") {
      // another wild overrides previous wild!
      return true;
    } else if (chosenCardIds[0] === chosenColor) {
      // card is the same color as the chosen by the wild
      return true;
    } else {
      // card is not compatible
      return false;
    }
  } else {
    // no wild has been played
    if (binCardIds[2] === "wild" || binCardIds[2] === "wild-draw-four") {
      // this can only happen in case the bin starts with any wild
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
}

// add draw card functionality
function enableDeck() {
  deckElement.addEventListener("click", drawCard);
}
function drawCard(usedTurn) {
  if (!hasCurrentPlayerDrawnCard) {
    let setTurn;
    if (typeof usedTurn !== "number") {
      // this checks for 'event' parameter when clicking on the deck
      setTurn = currentTurn;
    } else {
      setTurn = usedTurn;
    }
    let cardFromDeck = extractCardFromDeck();
    if (!cardFromDeck) return;
    cardFromDeck.classList.toggle("in-deck");
    cardFromDeck.addEventListener("click", (e) => {
      playCard(e.target);
    });
    let playerToDealTo = getPlayer(setTurn);
    players[setTurn].currentCards.push(cardFromDeck.id);
    addChildElement(playerToDealTo, cardFromDeck);
    if (setTurn === 0) {
      setTimeout(flipCard, 50, cardFromDeck);
    }
    hasCurrentPlayerDrawnCard = true;
  }
}

// toggle visibility upon game start
function toggleVariablesVisibility() {
  let hiddenVariables = document.querySelectorAll(".invisible");
  hiddenVariables.forEach((element) => {
    element.classList.toggle("invisible");
  });
  playButtonElement.classList.toggle("invisible");
}

// turn on all buttons
function enableButtons() {
  passTurnButtonElement.addEventListener("click", passTurn);
}
function passTurn() {
  handleNextTurn();
  nextPlay();
}

// turns functionality
function setStartingTurn() {
  currentTurn = randomizeStartingTurn();
}
function randomizeStartingTurn() {
  return Math.floor(Math.random() * numberOfPlayers);
}
function updateTurnOnHTML(currentTurn) {
  currentTurnElement.innerText = `Current Turn: ${players[currentTurn].player}`;
}

// special cards
function checkIfSpecial(cardId) {
  let cardParts = cardId.split(" ");
  if (cardParts[1] === "special") {
    lastSpecialCardPlayed = cardParts[2];
  }
}
function handleSpecialCard(usedTurn) {
  // remember that handleNextTurn() is always called regardless of any special card!
  switch (lastSpecialCardPlayed) {
    case "skip":
      handleSkipCard();
      break;
    case "reverse":
      handleReverseCard();
      break;
    case "wild":
      console.log("wild");
      handleWildCard(usedTurn);
      break;
    case "draw-two":
      handleDrawTwoCard(usedTurn);
      break;
    case "wild-draw-four":
      handleWildDrawFourCard(usedTurn);
      break;
  }
}
function handleSkipCard() {
  handleNextTurn();
  lastSpecialCardPlayed = "";
  setTimeout(nextPlay, 500);
}
function handleReverseCard() {
  turnFlow = turnFlow === "right" ? "left" : "right";
  handleNextTurn();
  handleNextTurn();
  lastSpecialCardPlayed = "";
  setTimeout(nextPlay, 500);
}
function handleDrawTwoCard(usedTurn) {
  for (let i = 0; i < 2; i++) {
    drawCard(usedTurn);
    hasCurrentPlayerDrawnCard = false;
  }
  handleNextTurn();
  lastSpecialCardPlayed = "";
  setTimeout(nextPlay, 500);
}
function handleWildCard(usedTurn) {
  if (usedTurn === 1) {
    // main player
    togglePlayerOPPlayability();
    toggleColorSelect();
  } else {
    // randomize color (maybe i'll change it later!)
    handleColorByBot();
  }
  lastSpecialCardPlayed = "";
}
function handleWildDrawFourCard(usedTurn) {
  for (let i = 0; i < 4; i++) {
    drawCard(usedTurn);
    hasCurrentPlayerDrawnCard = false;
  }
  if (usedTurn === 1) {
    togglePlayerOPPlayability();
    toggleColorSelect();
  } else {
    handleColorByBot();
  }
  handleNextTurn();
  lastSpecialCardPlayed = "";
}
// handle current color and color choosing
function handleColorByBot() {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  updateCurrentColor(randomColor);
  chosenColor = randomColor;
  setTimeout(nextPlay, 500);
}
function updateCurrentColor(cardId) {
  const cardParts = cardId.split(" ");
  const color = cardParts[0];
  switch (color) {
    case "red":
      handleColorChange("red-text", "Red");
      break;
    case "green":
      handleColorChange("green-text", "Green");
      break;
    case "blue":
      handleColorChange("blue-text", "Blue");
      break;
    case "yellow":
      handleColorChange("yellow-text", "Yellow");
      break;
    case "four-wild" || "black-wild":
      handleColorChange("", "Wild card!");
      break;
  }
}
function handleColorChange(colorClass, value = "") {
  currentColorSpanElement.classList = "";
  currentColorSpanElement.classList += colorClass;
  currentColorSpanElement.innerText = value;
}
function toggleColorSelect() {
  chooseAColorElement.classList.toggle("choose-color-invisible");
}
function handleColorChoosing(colorId) {
  chosenColor = colorId;
  setTimeout(() => {
    updateCurrentColor(colorId);
    toggleColorSelect();
  }, 250);
  setTimeout(nextPlay, 500);
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
