AOS.init();
document.querySelectorAll('input[type="file"]').forEach((input) => {
  input.addEventListener("change", function () {
    if (this.files.length > 0) {
      
    }
  });
});

function handleSubmit(event) {
    event.preventDefault(); 

    const form = document.getElementById("applyForm");
    setTimeout(() => {
      form.submit(); // continue actual submit to iframe
      Swal.fire({
        icon: "success",
        title: "Application Submitted!",
        text: "✅ Thank you for applying. We'll get in touch soon.",
        confirmButtonColor: "#3085d6"
      });
      form.reset();
    }, 500);
}


window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const title = params.get("title");
  const domain = params.get("domain");

  if (title) {
    const titleInput = document.querySelector('input[name="title"]');
    if (titleInput) titleInput.value = title;
  }

  if (domain) {
    const domainSelect = document.querySelector('select[name="domain"]');
    if (domainSelect) domainSelect.value = domain;
  }
});
