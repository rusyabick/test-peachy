$(document).ready(() => {
    function programSlider() {
        let sliderLabels = '.p-slider__label'

        const swiper = new Swiper('.p-slider__list', {
            slidesPerView: 1,
            direction: 'vertical',
            autoHeight: true,
            breakpoints: {
                992: {
                    slidesPerView: 'auto',
                    spaceBetween: 80
                }
            }
        })

        $(sliderLabels).click(function() {
            $(sliderLabels).removeClass('active');
            $(this).addClass('active');
            syncLabels();
        })

        swiper.on('slideChangeTransitionEnd', function () {
            let currentIndex = $('.swiper-slide-active').attr('data-index');
            $(`.p-slider__label[data-index="${currentIndex}"]`).click();
        });

        function syncLabels() {
            let currentLabel = $('.p-slider__label.active'),
                currentColor = currentLabel.attr('data-color'),
                currentIndex = currentLabel.attr('data-index');
            $('.p-slider__bg svg path').css('fill', currentColor);
            swiper.slideTo(currentIndex);
        }

    }

    programSlider();
})