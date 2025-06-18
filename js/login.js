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

  // Login Form Submit
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = loginForm.querySelector('input[type="email"]').value.trim();
    const password = loginForm.querySelector('input[type="password"]').value.trim();

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "login",
          email,
          password,
        }),
      });

      const result = await response.json();

      if (result.success) {
        localStorage.setItem("user", JSON.stringify(result));
        window.location.href = "dashboard.html";
      } else {
        alert(result.message || "Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Something went wrong during login.");
    }
  });

  // Register Form Submit
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = registerForm.querySelector('input[placeholder="Full Name"]').value.trim();
    const email = registerForm.querySelector('input[type="email"]').value.trim();
    const phone = registerForm.querySelector('input[type="tel"]').value.trim();
    const password = registerForm.querySelector('input[placeholder="Password"]').value.trim();
    const confirmPassword = registerForm.querySelector('input[placeholder="Confirm Password"]').value.trim();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "register",
          name,
          email,
          phone,
          password,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert("Registered successfully! Please login.");
        showLogin.click(); // switch to login form
      } else {
        alert(result.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Registration Error:", error);
      alert("Something went wrong during registration.");
    }
  });
});

