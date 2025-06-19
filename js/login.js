document.addEventListener("DOMContentLoaded", function () {
  AOS.init();

  const showRegister = document.getElementById("showRegister");
  const showLogin = document.getElementById("showLogin");
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  const endpoint = "https://script.google.com/macros/s/AKfycbxNTGe4rpfpArTcj0GtuzdBuJ5ldPcXC_JswKQUoKzxNFawRVJEElIzMONXDhY0BW-r0Q/exec"; // <-- Replace this with your deployed Web App URL

  showRegister.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
  });

  showLogin.addEventListener("click", (e) => {
    e.preventDefault();
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
  });

  
  
});

