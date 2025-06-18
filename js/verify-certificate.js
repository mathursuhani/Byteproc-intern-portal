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
      "https://script.google.com/macros/s/AKfycby0o3mPzafQtTWd15pEWBF1u4jehGRG0DY6appTtWG0QxIkrdFDfeXGQpEc6PDGr-7_/exec";
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
      const [
        fullName,
        email,
        phone,
        
        college,
        registration,
        course,
        semester,
        title,
        domain,
        
        certNumber,
        issueDate
      ] = matched;

      detailsDiv.innerHTML = `
        <div class="bg-white shadow-lg rounded-xl p-6 space-y-2 text-gray-800 text-sm border border-green-400">
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          
          <p><strong>College:</strong> ${college}</p>
          <p><strong>Registration Number:</strong> ${registration}</p>
          <p><strong>Course:</strong> ${course}</p>
          <p><strong>Semester:</strong> ${semester}</p>
          <p><strong>Internship Title:</strong> ${title}</p>
          <p><strong>Domain:</strong> ${domain}</p>
          <p><strong>Certificate Number:</strong> ${certNumber}</p>
          <p><strong>Issued On:</strong> ${issueDate}</p>
          <p class="text-green-600 font-semibold mt-2">✅ Certificate Verified Successfully</p>
        </div>
      `;
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
