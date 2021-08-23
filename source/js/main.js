// sliders
const referenceList = document.querySelector('.reference__list');
const reviewsList = document.querySelector('.reviews__list');

const referenceListNextButton = document.querySelector('.reference__list-next');
const referenceListPrevButton = document.querySelector('.reference__list-prev');

if (referenceList) {
    const referenceSwiper = new Swiper('.reference__swiper-container', {
        on: {
            slideNextTransitionStart: function () {
                referenceListPrevButton.classList.remove('reference__list-prev--hide');
            },
            reachEnd: function () {
                referenceListNextButton.classList.add('reference__list-next--hide');
            },
            slidePrevTransitionStart: function () {
                referenceListNextButton.classList.remove('reference__list-next--hide');
            },
            reachBeginning: function () {
                referenceListPrevButton.classList.add('reference__list-prev--hide');
            },

        },

        spaceBetween: 16,

        slidesPerView: 'auto',

        wrapperClass: 'reference__list',

        slideClass: 'reference__item',

        navigation: {
            nextEl: '.reference__list-next',
            prevEl: '.reference__list-prev',
        },
    });
}

if (reviewsList) {
    const referenceSwiper = new Swiper('.reviews__swiper-container', {
        slidesPerView: 'auto',

        wrapperClass: 'reviews__list',

        slideClass: 'reviews__item',

        navigation: {
            nextEl: '.reviews__list-next',
            prevEl: '.reviews__list-prev',
        },
    });
}
