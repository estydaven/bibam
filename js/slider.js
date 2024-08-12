$('.main-slider__inner').slick({
    infinite: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-main slick-main_prev"></button>',
    nextArrow: '<button type="button" class="slick-main slick-main_next"></button>'
});

$('.about-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-main slick-main_prev"></button>',
    nextArrow: '<button type="button" class="slick-main slick-main_next"></button>',
});

$('.slider-design').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: false,
    dotsClass: 'slick-dots reviews-slider__dots slider-design__dots'
});

$('.reviews-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: false,
    dotsClass: 'slick-dots reviews-slider__dots',
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
});