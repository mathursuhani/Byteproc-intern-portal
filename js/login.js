document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});

const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

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

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const inputs = registerForm.querySelectorAll("input");
  const fullName = inputs[0].value;
  const email = inputs[1].value;
  const phone = inputs[2].value;
  const password = inputs[3].value;
  const confirmPassword = inputs[4].value;

  if (password !== confirmPassword) {
    alert("Password do not match!");
    return;
  }

  const res = await fetch(
    "https://script.google.com/macros/s/AKfycbxRYfBo3WtZHX_U_SjrJNs_olnuX0qQXbxWwydp5NAc96Q_D3BsGODv_QnbrhqWf44c/exec",
    {
      method: "POST",
      body: new URLSearchParams({
        action: "register",
        fullName,
        email,
        phone,
        password,
      }),
    }
  );

  const result = await res.json();
  alert(result.message);
  if (result.success) {
    registerForm.requestFullscreen();
    showLogin.click();
  }
});

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const inputs = loginForm.querySelectorAll("input");
    const email = inputs[0].value;
    const password = inputs[1].value;

    const res = await fetch("https://script.google.com/macros/s/AKfycbxRYfBo3WtZHX_U_SjrJNs_olnuX0qQXbxWwydp5NAc96Q_D3BsGODv_QnbrhqWf44c/exec", {
      method: "POST",
      body: new URLSearchParams({
        action: "login",
        email,
        password,
      }),
    });

    const result = await res.json();
    if (result.success) {
      localStorage.setItem("user", JSON.stringify(result.user));
      window.location.href = "dashboard.html";
    } else {
      alert(result.message);
    }
});

