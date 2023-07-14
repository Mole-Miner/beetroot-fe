function generateCardDeck(cardDeckSelector = '.card-deck', cardClass = '.card') {
    const cardDesk = document.querySelector(cardDeckSelector);
    for (let i = 0, lastCard = 36; i < lastCard; i++) {
        const card = document.createElement('div');
        const cardFront = document.createElement('div');
        const cardBack = document.createElement('div');
        card.classList.add(cardClass);
        cardFront.classList.add(`${cardClass}__front`);
        cardBack.classList.add(`${cardClass}__back`);
        cardFront.textContent = 'Front';
        cardBack.textContent = 'Back';
        card.append(cardFront, cardBack);
        cardDesk.appendChild(card);
    }
}

function getRandomCard() {
    const lastCard = 35;
    return Math.round(Math.random() * lastCard);
}

function flipCards({frontAnimationName = 'rotate-front', backAnimationName = 'rotate-back'}, cardSelector = '.card') {
    const cardDeck = document.querySelectorAll(cardSelector);
    let previousCard = getRandomCard();
    setInterval(() => {
        let currentCard = getRandomCard();
        while (previousCard === currentCard) {
            currentCard = getRandomCard();
        }
        previousCard = currentCard;
        const card = cardDeck.item(previousCard);
        const cardFront = card.querySelector(`${cardSelector}__front`);
        const cardBack = card.querySelector(`${cardSelector}__back`);
        cardFront.style.animationName = frontAnimationName;
        cardBack.style.animationName = backAnimationName;
        const timeout = setTimeout(() => {
            cardFront.style.animationName = null;
            cardBack.style.animationName = null;
            clearTimeout(timeout);
        }, 4000);
    }, 2000);
}

generateCardDeck('#scss-card-deck', 'scss-card-flip');
generateCardDeck('#js-card-deck', 'js-card-flip');
flipCards({frontAnimationName: 'rotate-front', backAnimationName: 'rotate-back'}, '.js-card-flip');

