const cargoSwiper = new Swiper('.reference__swiper-container--cargo', {
    spaceBetween: 16,

    slidesPerView: 'auto',

    loop: true,

    wrapperClass: 'reference__list',

    slideClass: 'reference__item',

    navigation: {
        nextEl: '.reference__list-next--cargo',
        prevEl: '.reference__list-prev--cargo',
    },
});

const glassSwiper = new Swiper('.reference__swiper-container--glass', {
    spaceBetween: 16,

    slidesPerView: 'auto',

    loop: true,

    wrapperClass: 'reference__list',

    slideClass: 'reference__item',

    navigation: {
        nextEl: '.reference__list-next--glass',
        prevEl: '.reference__list-prev--glass',
    },
});

const manipulationSwiper = new Swiper('.reference__swiper-container--manipulation', {
    spaceBetween: 16,

    slidesPerView: 'auto',

    loop: true,

    wrapperClass: 'reference__list',

    slideClass: 'reference__item',

    navigation: {
        nextEl: '.reference__list-next--manipulation',
        prevEl: '.reference__list-prev--manipulation',
    },
});
