// navigation scroll into view
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const section = document.querySelector(link.getAttribute('href'));
        section.scrollIntoView({ behaviour: 'smooth'});
    });
});


// menu toggle
const openMenu = document.querySelector('.btn-nav i');
const dropdownMenu = document.querySelector('.dropdown_menu');

document.querySelector('.btn-nav').addEventListener('click', () => {
    openMenu.classList.toggle('bi-list');
    openMenu.classList.toggle('bi-x');
    dropdownMenu.classList.toggle('show');
});

const navItems = document.querySelectorAll('.links-wrapper a');

navItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
        dropdownMenu.classList.remove('show');
    });
});
