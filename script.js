let cards = {
    "♠️ Ace": "01", "♠️ 2": "02", "♠️ 3": "03", "♠️ 4": "04", "♠️ 5": "05",
    "♥️ Ace": "21", "♥️ 2": "22", "♥️ 3": "23", "♥️ 4": "24", "♥️ 5": "25",
    "♣️ Ace": "41", "♣️ 2": "42", "♣️ 3": "43", "♣️ 4": "44", "♣️ 5": "45",
    "♦️ Ace": "61", "♦️ 2": "62", "♦️ 3": "63", "♦️ 4": "64", "♦️ 5": "65"
};

let cardElement = document.getElementById("card-display");
let optionsElement = document.getElementById("options");
let resultElement = document.getElementById("result");
let nextCardButton = document.getElementById("next-card");

let currentCard, correctCode;

function getRandomCard() {
    let entries = Object.entries(cards);
    let randomEntry = entries[Math.floor(Math.random() * entries.length)];
    currentCard = randomEntry[0];
    correctCode = randomEntry[1];

    cardElement.textContent = `Bu kartaning kodi nima? ${currentCard}`;
    resultElement.textContent = "";
    
    optionsElement.innerHTML = "";
    let wrongOptions = [String(Math.floor(Math.random() * 73) + 1), String(Math.floor(Math.random() * 73) + 1)];
    let options = [correctCode, ...wrongOptions];
    options.sort(() => Math.random() - 0.5);

    options.forEach(option => {
        let button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selected) {
    if (selected === correctCode) {
        resultElement.textContent = "✅ To‘g‘ri!";
    } else {
        resultElement.textContent = `❌ Noto‘g‘ri! To‘g‘ri javob: ${correctCode}`;
    }
}

nextCardButton.onclick = getRandomCard;

getRandomCard();
