// TODO: add semicolons
// TODO: add comments

let dealtCards = []

function deckBuilder() {
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
  const cards = [];
  for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
      const value = values[v];
      const suit = suits[s];
      cards.push({ value, suit });
    }
  }

  return cards;
}

let spades = [];
let hearts = [];
let diamonds = [];
let clubs = [];

// TODO: different sort / random algorithm

function randomCard(cards) {
  const random = Math.floor(Math.random() * cards.length);
  const cardValue = cards[random].value;
  const cardSuit = cards[random].suit;

  if (cardSuit === "Diamonds"){
    diamonds.push(cardValue);
  } else if (cardSuit === "Hearts") {
    hearts.push(cardValue);
  } else if (cardSuit === "Spades") {
    spades.push(cardValue);
  } else {
    clubs.push(cardValue);
  }
  cards.splice(random, 1)
}

const cards = deckBuilder();

for (let counter = 0; counter < 13; counter++ ){
  randomCard(cards)
}

const sortCards = function ( x, y ) {
  if ( !isNaN(x) && isNaN(y) ) {
    return 1;
 } else if ( isNaN(x) && isNaN(y) ) {
      if ( x === "J" ) { return 1 }
      else if (y === "J") { return -1 } else if ( x > y ) { return 1; }
      else { return -1; }
  } else if ( !isNaN(x) && !isNaN(y) ) {
      if ( x === "10" ) { return - 1 }
      else if (y === "10") { return 1 } else if ( x > y ) { return -1; }
      else { return 1; }
  } else {
    return -1;
  }
};

// TODO: put arrays in array and loop

// Suits into arrays for sorting

let hand = [spades, hearts, diamonds, clubs];
hand.forEach(suit => (suit.sort(sortCards)));

// Suits into object for manipulation

hand = {
  spades: spades,
  hearts: hearts,
  clubs: clubs,
  diamonds: diamonds,
}

let highCardPoints = 0;

for (let suit in hand) {
  console.log(`The ${suit} cards are ${hand[suit]}`);
  let tempSuit = hand[suit]
  for (let card in tempSuit) {
    let tempCard = tempSuit[card];
    if (tempCard === "A") {
      highCardPoints += 4;
    } else if (tempCard === "K") {
      highCardPoints += 3;
    } else if (tempCard === "Q") {
      highCardPoints += 2;
    } else if (tempCard === "J") {
      highCardPoints++;
    } else {
      break;
    }
  }
}

console.log("The high card points are: " + highCardPoints);

function renderCards() {
  for (let suit in hand) {
    let displaySuit = hand[suit]
    for (let card in displaySuit) {
      const cardContainer = document.createElement("div");
      let displayCard = displaySuit[card];
      let entity;
      suit === "diamonds"
      ? (entity = "&diams;")
      : (entity = "&" + suit + ";");
      cardContainer.classList.add("cardContainer", suit);
      cardContainer.innerHTML = '<span class="card-value-suit top">' + displayCard + entity + "</span>" + '<span class="card-suit">' + entity + "</span>" + '<span class="card-value-suit bot">' + displayCard+ entity + "</span>";
      document.body.appendChild(cardContainer);
    };
  }
}
renderCards();

// DECK INFO FUNCTIONS

function isHandBalanced() {
  let shape = [ spades.length, hearts.length, diamonds.length, clubs.length ]
  const balancedDiv = document.createElement("div");
  balancedDiv.classList.add("bal");
  shape.sort().reverse();
  console.log(shape);
  if ( shape[0] + shape[1] > 8 ) {
    balancedDiv.innerHTML = '<br/><p>This hand is unbalanced</p>';
    console.log("This hand is unbalanced.");
  } else {
    console.log("This hand is balanced.");
    balancedDiv.innerHTML = '<br/><p>This hand is balanced</p>';
  }
  document.body.appendChild(balancedDiv);
}



// function renderCards(suit) {
//   let currentSuit = Object.keys({suit})[0]
//   console.log(currentSuit)
//   let entity;
  // suit === diamonds
  //   ? (entity = "&diams;")
  //   : (entity = "&" + "diamonds" + ";");
  // const card = document.createElement("div");
  // card.classList.add("card", cardSuit.toLowerCase());
  // card.innerHTML = '<span class="card-value-suit top">' + cardValue + entity + "</span>" + '<span class="card-suit">' + entity + "</span>" + '<span class="card-value-suit bot">' + cardValue + entity + "</span>";
  // document.body.appendChild(card);


isHandBalanced();
