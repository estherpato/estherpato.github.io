'use strict';

const menuButton = document.querySelector('.nav-btn');
const navBar = document.querySelector('.header-nav');
const navItems = navBar.querySelectorAll('li');

function handleNavButton() {
    if(menuButton.classList.contains('open')) {
        menuButton.classList.remove('open', 'fa-times');
        menuButton.classList.add('close', 'fa-bars');
        navBar.classList.add('hidden');
    } else {
        menuButton.classList.remove('close', 'fa-bars');
        menuButton.classList.add('open', 'fa-times');
        navBar.classList.remove('hidden');
    }
}

menuButton.addEventListener('click', handleNavButton);
navItems.forEach(item => item.addEventListener('click', handleNavButton));