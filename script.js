// global variables
const boardElement = document.querySelector(".board");

// objects
const numberCards = [
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
  { color: "black-wild", type: "special", value: "wild" },
  { color: "red", type: "special", value: "draw two" },
  { color: "red", type: "special", value: "draw two" },
  { color: "yellow", type: "special", value: "draw two" },
  { color: "yellow", type: "special", value: "draw two" },
  { color: "green", type: "special", value: "draw two" },
  { color: "green", type: "special", value: "draw two" },
  { color: "blue", type: "special", value: "draw two" },
  { color: "blue", type: "special", value: "draw two" },
  { color: "four-wild", type: "special", value: "wild draw four" },
  { color: "four-wild", type: "special", value: "wild draw four" },
  { color: "four-wild", type: "special", value: "wild draw four" },
  { color: "four-wild", type: "special", value: "wild draw four" },
  { color: "four-wild", type: "special", value: "wild draw four" },
  { color: "four-wild", type: "special", value: "wild draw four" },
  { color: "four-wild", type: "special", value: "wild draw four" },
  { color: "four-wild", type: "special", value: "wild draw four" },
];

//main code
generateCards();

// ------------------------------

// generate cards
function generateCards() {
  numberCards.forEach((card) => {
    let cardContainerElem = document.createElement("div");
    cardContainerElem.classList.add(
      "card-container",
      `${card.type}`,
      `${card.color}`
    );
    let cardValue = obtainCardValue(card);

    if (cardValue === "+2") {
      cardContainerElem.innerHTML = `
      <div class="value top smaller-font-secondary">${cardValue}</div>
      <div class="card-elipsis"></div>
      <div class="value smaller-font-main">${cardValue}</div>
      <div class="value bottom smaller-font-secondary">${cardValue}</div>
      `;
    } else if (cardValue === "+4") {
      cardContainerElem.innerHTML = `
      <div class="value top smaller-font-secondary">${cardValue}</div>
      <div class="card-elipsis"></div>
      <div class="value smaller-font-main"> 
        <div class="card-elipsis-wild">
          <div class="four-value">${cardValue}</div>
        </div>
      </div>
      <div class="value bottom smaller-font-secondary">${cardValue}</div>
      `;
    } else if (cardValue === "wild") {
      cardContainerElem.innerHTML = `
      <div class="top-elipsis">
        <div class="card-elipsis-wild"></div>
      </div>
      <div class="card-elipsis-wild"></div>
      <div class="bottom-elipsis">
        <div class="card-elipsis-wild"></div>
      </div>
      `;
    } else {
      cardContainerElem.innerHTML = `
      <div class="value top normal-font-secondary">${cardValue}</div>
      <div class="card-elipsis"></div>
      <div class="value normal-font-main">${cardValue}</div>
      <div class="value bottom normal-font-secondary">${cardValue}</div>
      `;
    }
    cardContainerElem.id = `${card.color}-${card.type}-${cardValue}`;
    addChildElement(boardElement, cardContainerElem);
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
{
  /* <div class="card-container number red" id="red-number-0">
<div class="value top">1</div>
<div class="card-elipsis"></div>
<div class="value">1</div>
<div class="value bottom">1</div>
</div> */
}
function generateSpecialCards() {
  specialCards.forEach((card) => {
    let cardValue;
    let isWild = false;
    let isWildFour = false;
    switch (card.value) {
      case "reverse":
        cardValue = "⇆";
        break;
      case "skip":
        cardValue = "⊘";
        break;
      case "wild":
        isWild = true;
        break;
      case "draw two":
        cardValue = "+2";
      case "wild draw four":
        isWildFour = true;
        cardValue = "+4";
        break;
    }
    let cardContainerElem = document.createElement("div");
    cardContainerElem.innerHTML = `
    <div class="value top">${cardValue || ""}</div>
    <div class="card-elipsis"></div>
    <div class="value">${cardValue || ""}</div>
    <div class="value bottom">${cardValue || ""}</div>
    `;
    cardContainerElem.id = `${card.color}-${card.type}-${cardValue}`;
  });
}

// utility functions
function addChildElement(parentElem, childElem) {
  parentElem.appendChild(childElem);
}
