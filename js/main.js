$(document).ready(function (){
var swiper = new Swiper('.benifit .swiper-container', {
  loop: true,
  centeredSlides: true,
  slidesPerView:3,
  navigation: {
    nextEl: '.benifit .swiper-button-next',
    prevEl: '.benifit .swiper-button-prev',
  },
})
var swiper = new Swiper('.lesson .swiper-container', {
  loop: true,
  navigation: {
nextEl: '.lesson .swiper-button-next',
prevEl: '.lesson .swiper-button-prev',
},
  pagination: {
    el: '.lesson .swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
})
var swiper = new Swiper('.reviews .swiper-container', {
  loop: true,
  centeredSlides: true,
})
})