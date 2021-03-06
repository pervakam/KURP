const referenceList = document.querySelector('.reference__list');
const reviewsList = document.querySelector('.reviews__list');

const referenceListNextButton = document.querySelector('.reference__list-next');
const referenceListPrevButton = document.querySelector('.reference__list-prev');

if (document.querySelector('.reference')) {
    const referenceSwiper = new Swiper('.reference__swiper-container--main', {
        on: {
            slideNextTransitionStart: function () {
                referenceListPrevButton.classList.remove('reference__list-prev--hide');
            },

        },

        slidesPerView: 'auto',

        loop: true,

        wrapperClass: 'reference__list',

        slideClass: 'reference__item',

        navigation: {
            nextEl: '.reference__list-next--main',
            prevEl: '.reference__list-prev--main',
        },
    });
}

if (reviewsList) {
    const reviewsSwiper = new Swiper('.reviews__swiper-container', {
        slidesPerView: 'auto',

        loop: true,

        wrapperClass: 'reviews__list',

        slideClass: 'reviews__item',

        navigation: {
            nextEl: '.reviews__list-next',
            prevEl: '.reviews__list-prev',
        },
    });
}

const membersList = document.querySelectorAll('.team__member');

if (window.innerWidth >= 1200) {
    membersList.forEach((it) => {
        const parallaxInstance = new Parallax(it, {
            relativeInput: true
        });
    })
}

const forms = document.querySelectorAll('.needs-validation')

Array.prototype.slice.call(forms)
    .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })

const modalOverlays = document.querySelectorAll('.modal__overlay');

modalOverlays.forEach((it) => {
    const modalCloseButton = it.querySelector('.modal__close');

    modalCloseButton.addEventListener('click', () => {
        it.classList.add('modal__overlay--hide')
    })
})

if (document.querySelector('.examples')) {
    const lightbox = GLightbox({
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
    });
}

