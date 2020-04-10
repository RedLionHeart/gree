(function () {
    function findVideos() {
        let videos = document.querySelectorAll('.video-container');
        for (let i = 0; i < videos.length; i++) {
            setupVideo(videos[i]);
        }
    }

    function setupVideo(video) {
        let link = video.querySelector('.video__link');
        let media = video.querySelector('.video__media');
        let button = video.querySelector('.video__button');
        //let id = parseMediaURL(media);

        video.addEventListener('click', () => {
            let iframe = createIframe('RxIx8ApM0Ss');

            link.remove();
            button.remove();
            video.appendChild(iframe);
        });

        link.removeAttribute('href');
        video.classList.add('video--enabled');
    }

    function parseMediaURL(media) {
        let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
        let url = media.src;
        let match = url.match(regexp);

        return match[1];
    }

    function createIframe(id) {
        let iframe = document.createElement('iframe');

        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('allow', 'autoplay');
        iframe.setAttribute('src', generateURL(id));
        iframe.classList.add('video__media');

        return iframe;
    }

    function generateURL(id) {
        let query = '?rel=0&showinfo=0&autoplay=1';

        return 'https://www.youtube.com/embed/' + id + query;
    }

    findVideos();
})();


(function () {
        var parentElement = document.querySelector('.who-we__adv-container');
        if(parentElement){
            var imageElement = parentElement.querySelector('.who-we__image-big');

            parentElement.addEventListener('click', function (evt) {
                var targetElem = evt.target.closest('.who-we__adv-item');
                var openElement = parentElement.querySelector('.who-we__adv-item-open');

                if (!evt.target.closest('.who-we__adv-item-open') && targetElem) {
                    if (imageElement.classList.contains('animate-img')) {
                        imageElement.classList.remove('animate-img');
                        setTimeout(function () {
                            imageElement.classList.add('animate-img');
                        }, 1);
                    } else {
                        imageElement.classList.add('animate-img');
                    }
                }
                /*imageElement.classList.add('animate-img');
                setTimeout(function () {
                    imageElement.classList.remove('animate-img');
                }, 3000);*/
                if (targetElem) {
                    openElement.classList.toggle('who-we__adv-item-open');
                    targetElem.classList.toggle('who-we__adv-item-open');
                    imageElement.src = './images/about-us/big-img' + targetElem.dataset.image + '.png';
                }
            })
        }
})();

(function () {
    var menuIcon = document.querySelector('.burger-menu');
    var mobileMenu = document.querySelector('.mobile-menu__container');
    var checkboxElement = menuIcon.querySelector('input');

    menuIcon.addEventListener('click', function () {
        if (mobileMenu.classList.contains('animate-block')) {
            //mobileMenu.style.display = 'none';
            mobileMenu.classList.remove('animate-block');
            mobileMenu.classList.add('animate-block-off');
        } else {
            //mobileMenu.style.display = 'block';
            mobileMenu.classList.remove('animate-block-off');
            mobileMenu.classList.add('animate-block');
        }
    });
    document.addEventListener('click', function (evt) {
        if (mobileMenu.classList.contains('animate-block') && !evt.target.closest('.burger-menu')) {
            checkboxElement.click();
            mobileMenu.classList.remove('animate-block');
            mobileMenu.classList.add('animate-block-off');
        }
    })
})();

(function () {
    var showFiltersButton = document.querySelector('.mobile-filters');
    var filtersContainer = document.querySelector('.catalog-page__aside');

    if(filtersContainer){
    var closeFiltersButton = filtersContainer.querySelector('.close-button');

    var closeWindowOnEsq = function (evt){
        if(evt.keyCode === 27){
            filtersContainer.classList.remove('show-filters');
        }
        document.removeEventListener('keydown', closeWindowOnEsq);
    };

    showFiltersButton.addEventListener('click', function () {
        filtersContainer.classList.add('show-filters');
        document.addEventListener('click', function (evt) {
            if (evt.target !== filtersContainer &&
                filtersContainer.classList.contains('show-filters') &&
                !evt.target.closest('.mobile-filters') &&
                !evt.target.closest('.catalog-page__aside')) {
                filtersContainer.classList.remove('show-filters');
            }
        });
        document.addEventListener('keydown', closeWindowOnEsq);
    });

    closeFiltersButton.addEventListener('click', function () {
        filtersContainer.classList.remove('show-filters');
    });
    }
})();

$( function() {
    if($( "#tabs1" )){
        $( "#tabs1" ).tabs();
    }
} );

$(window).on('resize', function(){
    $('.card-product__main-slider').slick('unslick');
    $('.card-product__main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<span class='card-product__slick-prev'></span>",
        nextArrow: "<span class='card-product__slick-next'></span>",
        fade: true,
        asNavFor: '.card-product__second-slider',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            },
        ]
    });
});
$('.card-product__main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: "<span class='card-product__slick-prev'></span>",
    nextArrow: "<span class='card-product__slick-next'></span>",
    fade: true,
    asNavFor: '.card-product__second-slider',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
            }
        },
    ]
});

$(window).on('resize', function(){
    $('.card-product__second-slider').slick('unslick');
    $('.card-product__second-slider').slick({
        slidesToScroll: 1,
        asNavFor: '.card-product__main-slider',
        arrows: false,
        focusOnSelect: true,
        slidesToShow: 4,
        variableWidth:true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    variableWidth:false,
                    slidesToShow:4,
                }
            },
        ]
    });
});

$('.card-product__second-slider').slick({
    slidesToScroll: 1,
    asNavFor: '.card-product__main-slider',
    arrows: false,
    focusOnSelect: true,
    slidesToShow: 4,
    variableWidth:true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                variableWidth:false,
                slidesToShow:4,
            }
        },
    ]
});

// Обработка input type tel.
(function () {
    $(document).ready(function () {
        $('input[type="tel"]').inputmask("+375999999999");
    });
})();

/*Попап quiz форма*/
(function () {
    var quizStepItems = document.querySelectorAll('.popup__form-container');
    var quizLastStep = document.querySelector('.popup__last-form-container');
    var numberOfElements = 3;

    quizStepItems.forEach(function (current, index) {
        var currentInputRadioOfQuiz = current.querySelectorAll('.question-quiz__form-type-home-input');
        var currentStepOfQuiz = current;
        var buttonNext = current.querySelector('.question-quiz__form-button-next-container');
        var buttonSkip = current.querySelector('.question-quiz__form-button-skip');

        buttonNext.addEventListener('click', function () {
            currentInputRadioOfQuiz.forEach(function (current) {
                if(current.checked && index<numberOfElements) {
                    currentStepOfQuiz.classList.remove('active-flex');
                    quizStepItems[index + 1].classList.add('active-flex');
                }
                if(current.checked && index === numberOfElements){
                    quizStepItems[numberOfElements].classList.remove('active-flex');
                    quizLastStep.classList.add('active-flex');
                }
            })
        });

        buttonSkip.addEventListener('click', function () {
            if(index<numberOfElements){
                currentStepOfQuiz.classList.remove('active-flex');
                quizStepItems[index + 1].classList.add('active-flex');
            } else{
                quizStepItems[numberOfElements].classList.remove('active-flex');
                quizLastStep.classList.add('active-flex');
            }
        });

        if(index > 0 && index <=numberOfElements){
            var buttonBack = current.querySelector('.question-quiz__form-button-back-container');
            buttonBack.addEventListener('click', function () {
                if(index<=numberOfElements){
                    currentStepOfQuiz.classList.remove('active-flex');
                    quizStepItems[index - 1].classList.add('active-flex');
                }
            })
        }
    });
})();

// Планый переход по ссылкам в меню.
(function(){
    $('.main-menu a[href*="#"]').click(function () {
        var el = "#" + $(this).attr('href').split("#")[1];
        var top = $(el).offset().top - 110;

        $('body,html').animate({scrollTop: top}, 1500);
        return false;
    });
    $('.mobile-menu__list a[href*="#"]').click(function () {
        var element = document.querySelector('.burger-menu');
        var mobileMenu = document.querySelector('.mobile-menu__container');
        var checkboxElement = element.querySelector('input');

        checkboxElement.click();
        mobileMenu.style.display = 'none';
        var el = "#" + $(this).attr('href').split("#")[1];
        var top = $(el).offset().top - 80;

        $('body,html').animate({scrollTop: top}, 1000);
        return false;
    });
})();
