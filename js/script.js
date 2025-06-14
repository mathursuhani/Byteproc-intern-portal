AOS.init();

  const swiper = new Swiper(".mySwiper", {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 1500,   
    disableOnInteraction: false
  },
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});