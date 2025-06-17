document.querySelectorAll('input[type="file"]').forEach((input) => {
  input.addEventListener("change", function () {
    if (this.files.length > 0) {
      alert(`selected file: ${this.files[0].name}`);
    }
  });
});

const form = document.getElementById("applyForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  // Collect form data
  const data = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    fatherName: formData.get("fatherName"),
    college: formData.get("college"),
    registration: formData.get("registration"),
    course: formData.get("course"),
    semester: formData.get("semester"),
    domain: formData.get("domain"),
    imageLink: "Uploaded Separately", 
    resumeLink: "Uploaded Separately",
  };


  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwEiKHx-MQoiIi6w5tOgxSgoyDmKQKcEyMc9F0gAdbSOHCKcSiy-thdXEK541PyoDRF/exec", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (result.result === "success") {
      alert("✅ Application submitted successfully!");
      form.reset();
    } else {
      alert("❌ Failed to submit. Try again later.");
    }
  } catch (err) {
    console.error(err);
    alert("❌ Error submitting form.");
  }
});
