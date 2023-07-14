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

generateCardDeck('#scss-card-deck', 'scss-card-flip');
generateCardDeck('#js-card-deck', 'js-card-flip');

