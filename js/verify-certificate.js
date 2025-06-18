document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});

async function verifyCertificate() {
  const certNum = document.getElementById("certNum").value.trim();
  const regNum = document.getElementById("regNum").value.trim();
  const detailsDiv = document.getElementById("details");

  if (!certNum || !regNum) {
    detailsDiv.innerHTML = `<p class="text-red-500 font-medium">❗ Both fields are required.</p>`;
    detailsDiv.classList.remove("hidden");
    return;
  }

  try {
    const url = "https://script.google.com/macros/s/AKfycbxDzsXNBia9j6vxrjOu73xwIIqcCGXLhLTlKTkd7NEfMTQ-WO9_8d8xqFPtBvYORJnQ/exec";
    console.log("Fetching from URL:", url);
    
    const res = await fetch(url);
    console.log("Response Status:", res.status);

    if (!res.ok) throw new Error("Network response was not OK");

    const data = await res.json();
    console.log("Fetched data:", data);

    const headers = data[0];
    const certIndex = headers.indexOf("Certificate Number");
    const regIndex = headers.indexOf("Registration Number");

    const matched = data.slice(1).find(row =>
      row[certIndex]?.toLowerCase() === certNum.toLowerCase() &&
      row[regIndex]?.toLowerCase() === regNum.toLowerCase()
    );

    if (matched) {
      const [
        
        fullName,
        email,
        phone,
        fatherName,
        college,
        registration,
        course,
        semester,
        domain,
        resume,
        photo,
        timestamp,
        certNumber
      ] = matched;

      detailsDiv.innerHTML = `
        <div class="bg-white shadow-lg rounded-lg p-4 text-sm text-gray-700">
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>College:</strong> ${college}</p>
          <p><strong>College:</strong> ${registration}</p>
          <p><strong>College:</strong> ${semester}</p>
          <p><strong>Course:</strong> ${course}</p>
          <p><strong>Domain:</strong> ${domain}</p>
          <p><strong>Certificate Number:</strong> ${certNumber}</p>
          <p class="text-green-600 font-semibold mt-2">✅ Certificate Verified</p>
        </div>
      `;
    } else {
      detailsDiv.innerHTML = `
        <div class="text-red-600 font-medium text-center mt-4">❌ Certificate not found. Please check the details again.</div>
      `;
    }

    detailsDiv.classList.remove("hidden");
  } catch (error) {
    console.error("Error verifying:", error);
    detailsDiv.innerHTML = `<p class="text-red-600">❗ Something went wrong. Please try again later.</p>`;
    detailsDiv.classList.remove("hidden");
  }
}
