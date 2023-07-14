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

flipCards({frontAnimationName: 'rotate-front', backAnimationName: 'rotate-back'}, '.js-card-flip');
