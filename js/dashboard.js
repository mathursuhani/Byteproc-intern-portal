document.addEventListener("DOMContentLoaded", () => {
      const data = JSON.parse(localStorage.getItem("user"));
      const app = data.application;

      document.getElementById("userName").innerText = "👋 Welcome, " + data.user.name;

      const container = document.getElementById("applicationInfo");

      if (!app.applied) {
        container.innerHTML = `<p class="text-center text-red-600 font-semibold">❗ You have not applied for any internship yet.</p>`;
      } else {
        let html = `
          <p><strong>📧 Email:</strong> ${app.email}</p>
          <p><strong>📱 Phone:</strong> ${app.phone}</p>
          <p><strong>🎓 College:</strong> ${app.college}</p>
          <p><strong>📘 Course:</strong> ${app.course} | Semester: ${app.semester}</p>
          <p><strong>💼 Internship Title:</strong> ${app.title} (${app.domain})</p>
          <p><strong>📅 Duration:</strong> ${app.duration}</p>
          <p><strong>📌 Status:</strong> <span class="text-blue-600 font-semibold">${app.status}</span></p>
        `;

        if (app.status === "Completed" && app.certificate) {
          html += `
            <p><strong>📜 Certificate No:</strong> ${app.certificate}</p>
            <p><strong>🗓️ Issue Date:</strong> ${app.issueDate}</p>
            <a href="https://drive.google.com/uc?export=download&id=${app.certificate}" class="bg-green-500 text-white px-4 py-2 rounded-lg inline-block mt-2 hover:bg-green-600" download>
              🎓 Download Certificate
            </a>`;
        }

        container.innerHTML = html;
      }
    });