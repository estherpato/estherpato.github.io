'use strict';

const menuButton = document.querySelector('.nav-btn');
const navBar = document.querySelector('.header-nav');

function handleNavButton() {
    if(this.classList.contains('open')) {
        this.classList.remove('open', 'fa-times');
        this.classList.add('close', 'fa-bars');
        navBar.classList.add('hidden');
    } else {
        this.classList.remove('close', 'fa-bars');
        this.classList.add('open', 'fa-times');
        navBar.classList.remove('hidden');
    }
}

menuButton.addEventListener('click', handleNavButton);