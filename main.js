const menu = document.querySelector(".menu");
const navigation = document.querySelector(".primary-nav");
const hamburgerButton = document.querySelector(".mobile-nav-toggle");

hamburgerButton.addEventListener('click', () => {
    menu.hasAttribute('is-expanded') ? hamburgerButton.setAttribute('aria-expanded', false): hamburgerButton.setAttribute('aria-expanded', true)
    menu.toggleAttribute('is-expanded');
    navigation.toggleAttribute('is-expanded')
})

