document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});

const certificates = [
    {
        certNum: "2025/123",
        regNum: "23106107001",
        name: "Suhani Mathur",
        email: "mathur.suhani324@gmail.com",
        internship: "Frontend Web Developer",
        duration: "1 Month",

        issueDate: "29 June 2025"

    },
    {
        certNum: "2025/116",
        regNum: "427201119401623",
        name: "Khushi Singh",
        email: "khushisinghchoti20@gmail.com",
        internship: "MERN Stack Developer",
        duration: "1 Month",

        issueDate: "03 June 2025"
    }
]
function verifyCertificate(){
    const certNum = document.getElementById("certNum").value.trim();
    const regNum = document.getElementById("regNum").value.trim();
    const detailsDiv = document.getElementById("details");
    detailsDiv.innerHTML = "";
    detailsDiv.classList.add("hidden");
    if(!certNum && !regNum) return;
    const match = certificates.find(
        (c) => c.certNum === certNum && c.regNum === regNum
    );
    if(match){
        //add real validation / API Call here
        detailsDiv.className = "mt-6 p-6 sm:p-8 rounded-xl shadow-lg bg-gradient-to-r from-green-100 via-green-50 to-green-100 border border-green-400 text-green-900 animate-fade-in transition-all duration-500"
        
        detailsDiv.innerHTML = `
            <p class="mb-3 font-bold text-green-800 text-lg">Certificate Verified!</p>
            <p class="break-words whitespace-normal"><strong>Name: </strong>${match.name}</p>
            <p class="break-words whitespace-normal"><strong>Email: </strong>${match.email}</p>
            <p class="break-words whitespace-normal"><strong>Internship: </strong>${match.internship}</p>
            <p class="break-words whitespace-normal"><strong>Duration: </strong>${match.duration}</p>
            <p class="break-words whitespace-normal"><strong>Date of Issue: </strong>${match.issueDate}</p>
        `;
    }else{
        detailsDiv.className = "mt-6 p-6 sm:p-8 rounded-xl shadow-lg bg-gradient-to-r from-red-100 via-red-50 to-red-100 border border-red-400 text-red-900 animate-fade-in transition-all duration-500";
        detailsDiv.innerHTML = `
            <p class="mb-2 font-semibold text-red-800">Certificate Not Found!</p>
            <p class="text-black">Please check your Certificate Number and Registration Number.</p>
        `;
    }
}