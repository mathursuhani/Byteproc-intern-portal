AOS.init();

const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
function initBackToTop() {
  const backToTop = document.getElementById("backToTopBtn");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      backToTop.classList.remove("opacity-0", "invisible");
    } else {
      backToTop.classList.add("opacity-0", "invisible");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const testimonials = [
  {
    name: "Ashish",
    college: "NIT Jalandhar",
    Domain: "Android Development",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "Working in the Android Development domain at Byteproc was a transformative experience. I built real apps, integrated APIs, and improved my Kotlin skills significantly.",
  },
  {
    name: "Suhani Mathur",
    college: "MIT Muzaffarpur",
    Domain: "Web Development",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=faces&fit=crop&h=200&w=200",
    message:
      "Byteproc helped me sharpen my frontend development skills. I worked with HTML, Tailwind CSS, and JavaScript to build production-ready web pages with real feedback from mentors.",
  },
  {
    name: "Jatin",
    college: "BMS Bangalore",
    Domain: "Web Development",
    avatar: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?crop=faces&fit=crop&h=200&w=200",
    message:
      "During my web development internship, I contributed to live project modules and learned responsive design and form handling. It was an amazing journey that boosted my confidence.",
  },
  {
    name: "Vipul",
    college: "MGCU Bihar",
    Domain: "Marketing",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=faces&fit=crop&h=200&w=200",
    message:
      "My internship in the marketing domain at Byteproc taught me how to craft strategies, run campaigns, and analyze audience engagement. I gained hands-on experience with real tools.",
  },
];



const carousel = document.getElementById("testimonial-carousel");
testimonials.forEach((t, i) => {
  const card = document.createElement("div");
  card.className =
    "item bg-gradient-to-r from-blue-800 via-indigo-900 to-blue-900 p-6 rounded-xl shadow hover:shadow-lg transition";

  card.innerHTML = `
    <div class="flex items-center gap-4 mb-4">
        <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-white shrink-0">
          <img
          src="${t.avatar}"
          alt="${t.name}'s Avatar"
          class="w-full h-full object-cover"
        />
    </div>

        <div>
          <h4 class="font-semibold text-white">${t.name}</h4>
          <p class="text-sm text-gray-100">- ${t.college}</p>
          <span class="text-xs inline-block mt-1 bg-white text-blue-900 px-2 py-0.5 rounded-full">${t.Domain}</span>
        </div>
    </div>
    <p class="text-white italic">“${t.message}”</p>
  `;
  carousel.appendChild(card);
});

$(document).ready(function () {
  $("#testimonial-carousel").owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 },
    },
  });
});
