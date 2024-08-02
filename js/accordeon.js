const accordeonBlocks = document.querySelectorAll('.show');
accordeonBlocks.forEach(function(block){
    const accordeonBtn = block.querySelector('.show__button');
    const accordeonInfo = block.querySelector('.show-close');
    const accordeonBtnUp = block.querySelector('.up');

    block.addEventListener('click', function(event) {
        if (!event.target.closest('.up')) {
            event.stopPropagation();
            accordeonBtn.classList.add('hidden');
            accordeonInfo.classList.remove('hidden');
            block.classList.add('visible');
            block.classList.remove('show_pdn');
        }
    })

    if (accordeonBtnUp) {
        accordeonBtnUp.addEventListener('click', function(event) {
            event.stopPropagation();
            accordeonBtn.classList.remove('hidden');
            accordeonInfo.classList.add('hidden');
            block.classList.remove('visible');
            block.classList.add('show_pdn');
        })
    }
})