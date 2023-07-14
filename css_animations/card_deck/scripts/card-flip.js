function getRandomCard() {
    const lastCard = 35;
    return Math.round(Math.random() * lastCard);
}

function flipCards(sideSelector, animationName) {
    if (!sideSelector || !sideSelector.frontSide || !sideSelector.backSide) {
        throw new TypeError(`Invalid side selector. Selector must contain frontSide and backSide properties. Example: {frontSide: '.card__front', backSide: '.card__back'}`);
    }
    if (!animationName || !animationName.frontAnimation || !animationName.backAnimation) {
        throw new TypeError(`Invalid side selector. Animation name must contain frontAnimation and backAnimation properties. Example: {frontAnimation: 'rotate-front', backAnimation: 'rotate-back'}`);
    }
    const cardFrontList = document.querySelectorAll(sideSelector.frontSide);
    const cardBackList = document.querySelectorAll(sideSelector.backSide);
    let previousCard = getRandomCard();
    setInterval(() => {
        let currentCard = getRandomCard();
        while (previousCard === currentCard) {
            currentCard = getRandomCard();
        }
        previousCard = currentCard;
        const cardFront = cardFrontList.item(previousCard);
        const cardBack = cardBackList.item(previousCard);
        cardFront.style.animationName = animationName.frontAnimation;
        cardBack.style.animationName = animationName.backAnimation;
        const timeout = setTimeout(() => {
            cardFront.style.animationName = null;
            cardBack.style.animationName = null;
            clearTimeout(timeout);
        }, 4000);
    }, 2000);
}

flipCards({
        frontSide: '.js-card-flip__front',
        backSide: '.js-card-flip__back'
    },
    {
        frontAnimation: 'rotate-front',
        backAnimation: 'rotate-back'
    }
);
