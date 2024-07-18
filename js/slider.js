$('.main-slider__inner').slick({
    infinite: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-main slick-main_prev"></button>',
    nextArrow: '<button type="button" class="slick-main slick-main_next"></button>'
});

$('.about-slider__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-main slick-main_prev"></button>',
    nextArrow: '<button type="button" class="slick-main slick-main_next"></button>',
});

$('.reviews-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: false,
    dotsClass: 'slick-dots reviews-slider__dots'
});