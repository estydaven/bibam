const up = document.querySelector('.up-btn');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        up.style.display = 'flex';
    } else {
        up.style.display = 'none';
    }
});

up.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
});