const openBtn = document.createElement('button');
openBtn.textContent = 'Open';
document.body.appendChild(openBtn);

const modalWrapper = document.createElement('section');
modalWrapper.style.width = innerWidth + 'px';
modalWrapper.style.height = innerHeight + 'px';
modalWrapper.classList.add('modal-wrapper');
document.body.appendChild(modalWrapper);

const modal = document.createElement('section');
modal.classList.add('modal');
modal.textContent = 'Modal';
modalWrapper.appendChild(modal);

const closeBtn = document.createElement('button');
closeBtn.textContent = 'Close';
modal.appendChild(closeBtn);

modalWrapper.addEventListener('click', () => {
    modalWrapper.style.display = 'none';
});

openBtn.addEventListener('click', () => {
    modalWrapper.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
   modalWrapper.style.display = 'none';
});
