let title = document.getElementById('title');
let p = document.getElementsByClassName('text');
let imgs = document.getElementsByTagName('img');

title = document.querySelector('#title');
p = document.querySelectorAll('.text');
imgs = document.querySelectorAll('img');

title.style.color = 'blue';

// for (let i = 0; i < p.length; i++) {
//     console.log(p[i]);
// }

// for (let img of imgs) {
//     console.log(img);
// }

const newP1 = document.createElement('p');
newP1.textContent = 'New paragraph 1';
newP1.style.color = 'orange';
document.body.appendChild(newP1);

const newP2 = document.createElement('p');
newP2.textContent = 'New paragraph 2';
newP2.style.color = 'green';
document.body.appendChild(newP2);
document.body.removeChild(newP1);

const newUl = document.createElement('ul');
for (let i = 0; i < 5; i++) {
    const newLi = document.createElement('li');
    newLi.textContent = `Created li ${i}`;
    newUl.appendChild(newLi);
}
document.body.appendChild(newUl);

const newImg = document.createElement('img');
newImg.setAttribute('src', 'https://loremflickr.com/640/360');
newImg.classList.add('img');
newImg.classList.remove('img');
document.body.appendChild(newImg);
