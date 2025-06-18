document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});

async function verifyCertificate() {
  const certNum = document.getElementById("certNum").value.trim();
  const regNum = document.getElementById("regNum").value.trim();
  const detailsDiv = document.getElementById("details");

  // Clear previous result
  detailsDiv.innerHTML = "";
  detailsDiv.classList.remove("hidden");

  // Validation
  if (!certNum || !regNum) {
    detailsDiv.innerHTML = `<p class="text-red-500 font-medium">❗ Both fields are required.</p>`;
    return;
  }

  try {
    const url =
      "https://script.google.com/macros/s/AKfycbyTuWu6CWXJLZio-Im1LqLp6F3_Rpyqz-HWwzLn-CarB5kcbrqjekQyVv3yNKL8juCU/exec";
    const res = await fetch(url);

    if (!res.ok) throw new Error("Network response was not OK");

    const data = await res.json();

    // Get headers and relevant column indexes
    const headers = data[0];
    const certIndex = headers.indexOf("Certificate Number");
    const regIndex = headers.indexOf("Registration Number");

    const matched = data
      .slice(1)
      .find(
        (row) =>
          String(row[certIndex]).toLowerCase() === certNum.toLowerCase() &&
          String(row[regIndex]).toLowerCase() === regNum.toLowerCase()
      );

    if (matched) {
      const skipIndexes = [10, 11, 12]; 
      let html = `<div class="bg-white shadow-lg rounded-xl p-6 space-y-2 text-gray-800 text-sm border border-green-400">`;

      headers.forEach((header, index) => {
        if (skipIndexes.includes(index)) return;
        html += `<p><strong>${header}:</strong> ${matched[index]}</p>`;
      });

      html += `<p class="text-green-600 font-semibold mt-2">✅ Certificate Verified Successfully</p></div>`;
      detailsDiv.innerHTML = html;
      
    } else {
      detailsDiv.innerHTML = `
        <div class="text-red-600 font-medium text-center mt-4">❌ Certificate not found. Please check the details again.</div>
      `;
    }
  } catch (error) {
    console.error("Error verifying:", error);
    detailsDiv.innerHTML = `<p class="text-red-600">❗ Something went wrong. Please try again later.</p>`;
  }
}
