// global variables
const boardElement = document.querySelector(".board");
const deckElement = document.querySelector(".deck");

// objects
const cards = [
  { color: "red", type: "number", value: 0 },
  { color: "red", type: "number", value: 1 },
  // { color: "red", type: "number", value: 2 },
  // { color: "red", type: "number", value: 3 },
  // { color: "red", type: "number", value: 4 },
  // { color: "red", type: "number", value: 5 },
  // { color: "red", type: "number", value: 6 },
  // { color: "red", type: "number", value: 7 },
  // { color: "red", type: "number", value: 8 },
  // { color: "red", type: "number", value: 9 },
  // { color: "red", type: "number", value: 1 },
  // { color: "red", type: "number", value: 2 },
  // { color: "red", type: "number", value: 3 },
  // { color: "red", type: "number", value: 4 },
  // { color: "red", type: "number", value: 5 },
  // { color: "red", type: "number", value: 6 },
  // { color: "red", type: "number", value: 7 },
  // { color: "red", type: "number", value: 8 },
  // { color: "red", type: "number", value: 9 },
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
    player: "Veronica",
    currentCards: [],
    player: "Candace",
    currentCards: [],
  },
];

//main code
generateCards();

// ------------------------------

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
