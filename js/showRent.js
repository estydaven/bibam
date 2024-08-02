const moreBtns = document.querySelectorAll('.more');
moreBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        const rentalsContainer = btn.previousElementSibling;
        const hiddenRentals = Array.from(rentalsContainer.querySelectorAll('.rental.hidden'));

        hiddenRentals.slice(0, 4).forEach(function(elem) {
            elem.classList.remove('hidden');
            elem.classList.add('visible');
        });

        if (hiddenRentals.length <= 4) {
            btn.classList.add('hidden');
        }

    });
})