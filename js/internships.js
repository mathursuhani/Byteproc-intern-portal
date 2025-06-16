document.addEventListener("DOMContentLoaded", function () {
  const internships = [
    {
      title: "Frontend Web Developer",
      domain: "Web Development",
      duration: "1 Month",
      stipend: "Paid",
      date: "2025-06-10",
      amount: 2000,
    },
    {
      title: "Frontend Web Developer",
      domain: "Web Development",
      duration: "3 Months",
      stipend: "Paid",
      date: "2025-07-01",
      amount: 3000,
    },
    {
      title: "Backend Web Developer",
      domain: "Web Development",
      duration: "3 Months",
      stipend: "Paid",
      date: "2025-07-01",
      amount: 3000,
    },
    {
      title: "Backend Web Developer",
      domain: "Web Development",
      duration: "1 Month",
      stipend: "Paid",
      date: "2025-06-01",
      amount: 2000,
    },
    {
      title: "App Developer",
      domain: "App Development",
      duration: "1 Month",
      stipend: "Paid",
      date: "2025-06-01",
      amount: 2000,
    },
    {
      title: "Frontend Web Developer",
      domain: "Web Development",
      duration: "1 Month",
      stipend: "UnPaid",
      date: "2025-06-01",
      amount: 0,
    },
    {
      title: "Full Stack Developer",
      domain: "Web Development",
      duration: "6 Month",
      stipend: "Paid",
      date: "2025-05-01",
      amount: 2000,
    },
    {
      title: "UI/UX Designer",
      domain: "UI/UX Design",
      duration: "3 Months",
      stipend: "Paid",
      date: "2025-05-01",
      amount: 3000,
    },
    {
      title: "Data Science",
      domain: "Data Science",
      duration: "6 Months",
      stipend: "Paid",
      date: "2025-05-01",
      amount: 5000,
    },
    {
      title: "Graphic Designer",
      domain: "Graphic Design",
      duration: "1 Month",
      stipend: "UnPaid",
      date: "2025-06-01",
      amount: 0,
    },
    {
      title: "Marketing",
      domain: "Marketing",
      duration: "3 Months",
      stipend: "UnPaid",
      date: "2025-05-01",
      amount: 0,
    },
    {
      title: "Digital Marketing",
      domain: "Marketing",
      duration: "3 Months",
      stipend: "Paid",
      date: "2025-07-01",
      amount: 2000,
    },
    {
      title: "Business Development",
      domain: "Business Development",
      duration: "2 Months",
      stipend: "Paid",
      date: "2025-06-01",
      amount: 2000,
    },
  ];

  const internshipContainer = document.getElementById("internshipContainer");
  const domainFilter = document.getElementById("domainFilter");
  const durationFilter = document.getElementById("filterDuration");
  const stipendFilter = document.getElementById("stipendFilter");
  const sortFilter = document.getElementById("sortFilter");
  const clearFilters = document.getElementById("clearFilters");

  function renderInternships(data) {
    internshipContainer.innerHTML = "";
    data.forEach((item) => {
      internshipContainer.innerHTML += `
          <div class="bg-white border rounded-lg shadow hover:shadow-lg p-5 transition">
            <h3 class="text-lg font-semibold">${item.title}</h3>
            <p class="text-sm text-gray-600">${item.domain}</p>
            <p class="mt-2 text-sm">🕒 ${item.duration}</p>
            <p class="text-sm">💰 ₹${item.amount} / month</p>
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

    if (sortFilter.value === "newest") {
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortFilter.value === "oldest") {
      filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortFilter.value === "highest") {
      filtered.sort((a, b) => b.amount - a.amount);
    }
    console.log("Filtered Data", filtered);
    renderInternships(filtered);
  }

  domainFilter.addEventListener("change", filterAndSort);
  durationFilter.addEventListener("change", filterAndSort);
  stipendFilter.addEventListener("change", filterAndSort);
  sortFilter.addEventListener("change", filterAndSort);

  clearFilters.addEventListener("click", () => {
    domainFilter.selectedIndex = 0;
    durationFilter.selectedIndex = 0;
    stipendFilter.selectedIndex = 0;
    sortFilter.selectedIndex = 0;
    renderInternships(internships);
  });

  renderInternships(internships);
});
