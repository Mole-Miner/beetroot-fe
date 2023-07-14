class AnimatedCardSide {
    #node;
    #animation;

    constructor(node, animation) {
        this.#node = node;
        this.#animation = animation;
    }

    #setAnimation() {
        this.#node.style.animationName = this.#animation.animationName;
        this.#node.style.animationDuration = `${this.#animation.animationDuration / 1000}s`;
    }

    #removeAnimation() {
        const timeout = setTimeout(() => {
            this.#node.style.animationName = null;
            this.#node.style.animationDuration = null;
            clearTimeout(timeout);
        }, this.#animation.animationDuration);
    }

    flip() {
        this.#setAnimation();
        this.#removeAnimation();
    }
}

class AnimatedCardsService {
    #previousCard;
    #cardFrontList;
    #cardBackList;

    constructor(sideSelector, animationMap) {
        this.#cardFrontList = [...document.querySelectorAll(sideSelector.frontSide)].map(frontSide => new AnimatedCardSide(frontSide, animationMap.front));
        this.#cardBackList = [...document.querySelectorAll(sideSelector.backSide)].map(backSide => new AnimatedCardSide(backSide, animationMap.back));
    }

    #randomCard() {
        const lastCard = 35;
        return Math.round(Math.random() * lastCard);
    }

    #flipCardSides() {
        const cardSides = [this.#cardFrontList.at(this.#previousCard), this.#cardBackList.at(this.#previousCard)];
        cardSides.forEach(cardSide => cardSide.flip());
    }

    flipCards() {
        this.#previousCard = this.#randomCard();
        setInterval(() => {
            let currentCard = this.#randomCard();
            while (this.#previousCard === currentCard) {
                currentCard = this.#randomCard();
            }
            this.#previousCard = currentCard;
            this.#flipCardSides()
        }, 2000);
    }
}

const cardsService = new AnimatedCardsService({
        frontSide: '.js-card-flip__front',
        backSide: '.js-card-flip__back'
    },
    {
        front: {
            animationName: 'rotate-front',
            animationDuration: 4000
        },
        back: {
            animationName: 'rotate-back',
            animationDuration: 4000
        }
    }
);

cardsService.flipCards();
