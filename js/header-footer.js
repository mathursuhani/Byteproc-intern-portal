

function initHeaderMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!menuToggle || !mobileMenu) return;
  menuToggle.addEventListener("click", () => {
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
      setTimeout(() => mobileMenu.classList.remove(scale - y - 0), 10);
      setTimeout(() => {
        mobileMenu.classList.add("scale-y-100", 300);
      });
    } else {
      mobileMenu.classList.add("scale-y-0");
      mobileMenu.classList.remove("scale-y-100");
      setTimeout(() => mobileMenu.classList.add("hidden"), 300);
    }
  });
  document.querySelectorAll("#mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("scale-y-0");
      mobileMenu.classList.remove("scale-y-100");
      setTimeout(() => {
        mobileMenu.classList.add("hidden", 300);
      });
    });
  });

  const currentPage = window.location.pathname.split("/").pop().toLowerCase() || "index.html";
  document.querySelectorAll(".nav-link").forEach((link) => {
      const href = link.getAttribute("href").toLowerCase();
      const underline = link.querySelector("span");
      if(underline){
        underline.classList.remove("w-full");
        underline.classList.add("w-0");
      }
      if(href === currentPage){
        underline.classList.remove("w-0");
        underline.classList.add("w-full");
      }
    
  });
  document.addEventListener('DOMContentLoaded', () => {
  const topBar = document.getElementById("top-bar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      topBar.classList.add("opacity-0", "-translate-y-full");
    } else {
      topBar.classList.remove("opacity-0", "-translate-y-full");
    }
  });
});
}




