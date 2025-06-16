document.addEventListener("DOMContentLoaded", function () {
  const internships = [
    {
      title: "Frontend Web Developer",
      domain: "Web Development",
      duration: "1 Month",
      stipend: "Paid",
      date: "2025-06-10",
      amount: 2000,
      location:"Remote",
      skills:["React", "Tailwind CSS", "API"]
    },
    {
      title: "Frontend Web Developer",
      domain: "Web Development",
      duration: "3 Months",
      stipend: "Paid",
      date: "2025-07-01",
      amount: 3000,
      location:"Onsite",
      skills:["React", "Tailwind CSS", "API"]
    },
    {
      title: "Backend Web Developer",
      domain: "Web Development",
      duration: "3 Months",
      stipend: "Paid",
      date: "2025-07-01",
      amount: 3000,
      location:"Onsite",
      skills:["Node.js", "Express", "REST API", "GIT"]
    },
    {
      title: "Backend Web Developer",
      domain: "Web Development",
      duration: "1 Month",
      stipend: "Paid",
      date: "2025-06-01",
      amount: 2000,
      location:"Remote",
      skills:["Node.js", "MongoDB", "REST API"]
    },
    {
      title: "App Developer",
      domain: "App Development",
      duration: "1 Month",
      stipend: "Paid",
      date: "2025-06-01",
      amount: 2000,
      location:"Remote",
      skills:["Flutter", "Firebase", "Dart", "REST API", "Git"]
    },
    {
      title: "Frontend Web Developer",
      domain: "Web Development",
      duration: "1 Month",
      stipend: "UnPaid",
      date: "2025-06-01",
      amount: 0,
      location:"Remote",
      skills:["HTML", "CSS", "Tailwind CSS","JavaScript"]
    },
    {
      title: "Full Stack Developer",
      domain: "Full Stack Development",
      duration: "6 Months",
      stipend: "Paid",
      date: "2025-05-01",
      amount: 2000,
      location:"Onsite",
      skills:["React", "Node.js", "Express", "MongoDB", "REST API", "Git"]
    },
    {
      title: "UI/UX Designer",
      domain: "UI/UX Design",
      duration: "3 Months",
      stipend: "Paid",
      date: "2025-05-01",
      amount: 3000,
      location: "Remote",
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research", "Design Thinking"]
    },
    {
      title: "Data Science",
      domain: "Data Science",
      duration: "6 Months",
      stipend: "Paid",
      date: "2025-05-01",
      amount: 5000,
      location: "Onsite",
      skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "SQL", "Data Visualization", "Machine Learning"]
    },
    {
      title: "Graphic Designer",
      domain: "Graphic Design",
      duration: "1 Month",
      stipend: "UnPaid",
      date: "2025-06-01",
      amount: 0,
      location: "Remote",
      skills: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Creativity", "Branding", "Typography"]
    },
    {
      title: "Marketing",
      domain: "Marketing",
      duration: "3 Months",
      stipend: "UnPaid",
      date: "2025-05-01",
      amount: 2000,
      location: "Onsite",
      skills: ["Digital Marketing", "SEO", "Content Creation", "Social Media Marketing", "Email Marketing", "Analytics Tools"]
    },
    {
      title: "Digital Marketing",
      domain: "Digital Marketing",
      duration: "3 Months",
      stipend: "Paid",
      date: "2025-07-01",
      amount: 2000,
      location: "Remote",
      skills: ["SEO", "Google Ads", "Social Media Marketing", "Content Marketing", "Email Marketing", "Google Analytics"]
    },
    {
      title: "Business Development",
      domain: "Business Development",
      duration: "2 Months",
      stipend: "Paid",
      date: "2025-06-01",
      amount: 2000,
      location: "Remote",
      skills: ["Communication", "Lead Generation", "CRM Tools", "Sales Pitching", "Market Research", "Negotiation"]
    },
  ];

  const internshipContainer = document.getElementById("internshipContainer");
  const domainFilter = document.getElementById("domainFilter");
  const durationFilter = document.getElementById("filterDuration");
  const stipendFilter = document.getElementById("stipendFilter");
  const sortFilter = document.getElementById("sortFilter");
  const clearFilters = document.getElementById("clearFilters");
  const locationFilter = document.getElementById("locationFilter");

  function renderInternships(data) {
    internshipContainer.innerHTML = "";
    if (data.length === 0) {
      internshipContainer.innerHTML =
        "<p class='text-center col-span-full text-red-500'>❗ No internships match your filters.</p>";
      return;
    }
    data.forEach((item) => {
      internshipContainer.innerHTML += `
          <div class="bg-gray-50 border rounded-lg shadow hover:shadow-lg p-5 transition-transform transform hover:scale-105 hover:shadow-xl
          ">
            <h3 class="text-lg font-semibold">${item.title}</h3>
            <p class="text-sm text-gray-600">${item.domain}</p>
            <p class="mt-2 text-sm">🕒 ${item.duration}</p>
            <p class="text-sm">
                💰 ${item.amount === 0 ? "Unpaid" : `₹${item.amount} / month`}
            </p>
            <div class="mt-2 flex flex-wrap gap-2">
            ${item.skills
              .map(
                (skill) =>
                  `<span class="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">${skill}</span>`
              )
              .join("")}
            </div>

            <a href="apply.html?title=${encodeURIComponent(
              item.title
            )}&domain=${encodeURIComponent(item.domain)}" 
               class="inline-block mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
               Apply Now</a>
          </div>`;
    });
  }

  function filterAndSort() {
    let filtered = [...internships];

    if (domainFilter.value && !domainFilter.disabled)
      filtered = filtered.filter((i) => i.domain === domainFilter.value);
    if (durationFilter.value && !durationFilter.disabled)
      filtered = filtered.filter((i) => i.duration === durationFilter.value);
    if (stipendFilter.value && !stipendFilter.disabled)
      filtered = filtered.filter((i) => i.stipend === stipendFilter.value);
    if (locationFilter.value && !locationFilter.disabled)
      filtered = filtered.filter((i) => i.location === locationFilter.value);

    if (sortFilter.value === "newest") {
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortFilter.value === "oldest") {
      filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortFilter.value === "highest") {
      filtered.sort((a, b) => b.amount - a.amount);
    }
    
    renderInternships(filtered);
  }

  domainFilter.addEventListener("change", filterAndSort);
  durationFilter.addEventListener("change", filterAndSort);
  stipendFilter.addEventListener("change", filterAndSort);
  sortFilter.addEventListener("change", filterAndSort);
  locationFilter.addEventListener("change", filterAndSort);

  clearFilters.addEventListener("click", () => {
    domainFilter.selectedIndex = 0;
    durationFilter.selectedIndex = 0;
    stipendFilter.selectedIndex = 0;
    sortFilter.selectedIndex = 0;
    locationFilter.selectedIndex = 0;
    renderInternships(internships);
  });

  renderInternships(internships);
});
