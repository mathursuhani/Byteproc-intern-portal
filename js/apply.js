document.querySelectorAll('input[type="file"]').forEach((input) => {
  input.addEventListener("change", function () {
    if (this.files.length > 0) {
      
    }
  });
});

function handleSubmit(event) {
    event.preventDefault(); // stop form temporarily

    const form = document.getElementById("applyForm");
    // Trigger actual form submission after short delay
    setTimeout(() => {
      form.submit(); // continue actual submit to iframe
      Swal.fire({
        icon: "success",
        title: "Application Submitted!",
        text: "✅ Thank you for applying. We’ll get in touch soon.",
        confirmButtonColor: "#3085d6"
      });
      form.reset(); // optional: reset form after submit
    }, 2000); // adjust delay if needed
  }