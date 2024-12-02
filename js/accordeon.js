const accordeonBlocks = document.querySelectorAll('.show');
accordeonBlocks.forEach(function(block){
    const accordeonBtn = block.querySelector('.show__button');
    const accordeonInfo = block.querySelector('.show-close');
    const accordeonBtnUp = block.querySelector('.up');
    const sliderFairy = block.querySelector('.gallery-fairytale');
    const sliderOffice = block.querySelector('.gallery-office');

    block.addEventListener('click', function(event) {
        if (!event.target.closest('.up')) {
            event.stopPropagation();
            accordeonBtn.classList.add('hidden');
            accordeonInfo.classList.remove('hidden');
            block.classList.add('visible');
            block.classList.remove('show_pdn');

            // Проверяем, инициализирован ли слайдер, и если нет, то инициализируем
            if (sliderFairy && !$(sliderFairy).hasClass('slick-initialized')) {
                $(sliderFairy).slick({
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                    dotsClass: 'slick-dots reviews-slider__dots reviews-slider__dots_show',
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            }
                        }
                    ]
                });
            }
            if (sliderOffice && !$(sliderOffice).hasClass('slick-initialized')) {
                $(sliderOffice).slick({
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                    dotsClass: 'slick-dots reviews-slider__dots reviews-slider__dots_show',
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            }
                        }
                    ]
                });
            }
            // После того как блок раскрылся, пересчитываем позиции слайдера
            if (sliderFairy) {
                $(sliderFairy).slick('setPosition');
            }
            if (sliderOffice) {
                $(sliderOffice).slick('setPosition');
            }
        }
    });

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