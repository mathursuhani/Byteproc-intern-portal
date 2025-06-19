AOS.init();

const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 1500,
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
    name: "Aarav Kumar",
    college: "NIT Patna",
    message:
      "The internship at Byteproc gave me hands-on experience with APIs and React.js. The mentors were incredibly supportive and guided me at every step.",
  },
  {
    name: "Suhani Mathur",
    college: "MIT Muzaffarpur",
    message:
      "Byteproc helped me gain real-world frontend skills. The feedback and support were amazing throughout. I feel much more confident now.",
  },
  {
    name: "Riya Sen",
    college: "BITS Pilani",
    message:
      "I worked on a live project during my internship at Byteproc, and it boosted my resume tremendously. The environment is great for learning and growing.",
  },
  {
    name: "Aditya Verma",
    college: "IIIT Hyderabad",
    message:
      "I learned how to work in a team and deliver under deadlines. Byteproc’s guidance prepared me for real-world challenges.",
  },
];

const container = document.getElementById("testimonial-container");
testimonials.forEach((t,i) => {
  const card = document.createElement("div");
  card.className = "bg-gradient-to-r from-indigo-900 to-blue-900 p-6 rounded-xl shadow hover:shadow-lg transition";
  card.setAttribute("data-aos", "fade-up");
  card.innerHTML = `
    <div class="flex items-center gap-4 mb-4">
        <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="Avatar" class="w-12 h-12 rounded-full object-cover" />
        <div>
          <h4 class="font-semibold text-white">${t.name}</h4>
          <p class="text-sm text-gray-200">- ${t.college}</p>
        </div>
    </div>
    <p class="text-gray-100">“${t.message}”</p>
  `;
  container.appendChild(card);
});
