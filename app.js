document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('ul').classList.toggle('open');
});

// Add this to your CSS for the open class
ul.open {
    display: block;
}