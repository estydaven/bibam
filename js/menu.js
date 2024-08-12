const navigation = document.querySelector('.navigation');
const burger = document.querySelector('.burger');
const closeBtn = document.querySelector('.close');

function openMenu() {
    navigation.classList.add('navigation_open');
}

function closeMenu() {
    navigation.classList.remove('navigation_open');
}

burger.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);