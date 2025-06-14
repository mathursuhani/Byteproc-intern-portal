AOS.init();
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".swiper")) {
    new Swiper(".swiper", {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
});
