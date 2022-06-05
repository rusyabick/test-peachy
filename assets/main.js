"use strict";

$(document).ready(function () {
  function programSlider() {
    var sliderLabels = '.p-slider__label';
    var swiper = new Swiper('.p-slider__list', {
      slidesPerView: 1,
      direction: 'vertical',
      autoHeight: true,
      breakpoints: {
        992: {
          slidesPerView: 'auto',
          spaceBetween: 80
        }
      }
    });
    $(sliderLabels).click(function () {
      $(sliderLabels).removeClass('active');
      $(this).addClass('active');
      syncLabels();
    });
    swiper.on('slideChangeTransitionEnd', function () {
      var currentIndex = $('.swiper-slide-active').attr('data-index');
      $(".p-slider__label[data-index=\"".concat(currentIndex, "\"]")).click();
    });

    function syncLabels() {
      var currentLabel = $('.p-slider__label.active'),
          currentColor = currentLabel.attr('data-color'),
          currentIndex = currentLabel.attr('data-index');
      $('.p-slider__bg svg path').css('fill', currentColor);
      swiper.slideTo(currentIndex);
    }
  }

  programSlider();
});