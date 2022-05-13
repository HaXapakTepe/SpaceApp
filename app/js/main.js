const swiper = new Swiper('.slider__wrap', {
  pagination: {
    el: '.swiper-pagination-bullets',
    clickable: true,
  },
});







$('.analytics__item').on('click', function () {
  $(this).toggleClass('analytics__item--active');
  $('.analytics__item').not($(this)).removeClass('analytics__item--active');
});