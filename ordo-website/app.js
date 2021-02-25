const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navClose = document.querySelector('.nav-close');

hamburger.addEventListener('click', () => {
    navLinks.classList.add('toggle-nav');
});

navClose.addEventListener('click', () => {
    navLinks.classList.remove('toggle-nav');
})
