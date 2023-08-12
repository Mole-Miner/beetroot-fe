const btn = document.querySelector('#click');
/*btn.onclick = (event) => {
    console.log(event.target);
}*/

const div = document.querySelector('div');
/*div.onclick = () => {
    console.log('div clicked');
}*/
function divClicked() {
    console.log('div clicked');
}

function divMouseOver() {
    console.log('Over');
    div.style.backgroundColor = 'orange';
}

function divMouseOut() {
    console.log('Out');
    div.style.backgroundColor = 'lightblue';
}

div.onclick = divClicked;
div.onmouseover = divMouseOver;
div.onmouseout = divMouseOut;

btn.addEventListener('click', (e) => {
    console.log(e.target);
});

const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');

box1.addEventListener('click', (e) => {
    console.log('box1');
});

box2.addEventListener('click', (e) => {
    // e.preventDefault();
    e.stopImmediatePropagation();
    console.log('box2');
});
