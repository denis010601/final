$(document).ready(function (){
var swiper = new Swiper('.swiper-container', {
  loop: true,
  centeredSlides: true,

  slidesPerView:3,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var title = $('.swiper-slide-next');

  next.om(function(){
    title.toggelClass('swiper-slide-next')
  })
})