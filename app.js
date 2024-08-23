document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        const menu = document.querySelector('nav ul');
        menu.classList.toggle('open');
    });
});