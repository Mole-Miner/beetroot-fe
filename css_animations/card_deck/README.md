#How to use
1. Open ./scripts/card-flip.js and copy all code to your file
2. Invoke flipCard with frontAnimationName: <keyframe name>, backAnimationName: <keyframe name>, cardSelector: <selector to find all cards>

#Warn
Your card must contain two elements with &__front and &__back classes respectively
<div class="your-card-class">
    <div class="your-card-class__front"></div>
    <div class="your-card-class__back"></div>
</div>

#Example
flipCards({frontAnimationName: 'my-front-animation', backAnimationName: 'my-back-animation'}, '.my-flip-card-class');
