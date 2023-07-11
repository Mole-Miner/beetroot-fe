const navigation = document.getElementById('navigation');
const navigationLinks = document.querySelectorAll('#navigation > a');
const openNavigationBtn = document.getElementById('open-navigation');
const closeNavigationBtn = document.getElementById('close-navigation');

function openNavigation() {
  navigation.classList.add('navigation--open');
}

function closeNavigation() {
  navigation.classList.remove('navigation--open');
}

openNavigationBtn.addEventListener('click', openNavigation);
closeNavigationBtn.addEventListener('click', closeNavigation);

for (const link of navigationLinks) {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    closeNavigation();
  });
}