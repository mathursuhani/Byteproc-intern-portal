function initHeaderMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!menuToggle || !mobileMenu) return;
  menuToggle.addEventListener("click", () => {
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
      setTimeout(() => mobileMenu.classList.remove("scale-y-0"), 10);
      setTimeout(() => {
        mobileMenu.classList.add("scale-y-100");
      }, 10);
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

  let currentPage = window.location.pathname.split("/").pop().toLowerCase();
  if (!currentPage || currentPage === "") currentPage = "index.html";
  console.log("Current Page", currentPage);
  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href").toLowerCase();
    const underline = link.querySelector("span");
    if (underline) {
      underline.classList.remove("w-full");
      underline.classList.add("w-0");
    }
    if (href === currentPage) {
      underline.classList.remove("w-0");
      underline.classList.add("w-full");
    }
  });
  window.addEventListener("scroll", () => {
    const topBar = document.getElementById("top-bar");
    const header = document.getElementById("main-header");

    if (window.scrollY > 0) {
      topBar.classList.add("opacity-0", "-translate-y-full");
      header.classList.remove("top-[40px]");
      header.classList.add("top-0");
    } else {
      topBar.classList.remove("opacity-0", "-translate-y-full");
      header.classList.remove("top-0");
      header.classList.add("top-[40px]");
    }
  });
}
