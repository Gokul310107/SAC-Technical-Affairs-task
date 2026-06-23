// 1. COUNTDOWN CONTROLLER SYSTEM
const targetDate = new Date("September 15, 2026 00:00:00").getTime();

const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("mins").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("secs").innerText = seconds < 10 ? "0" + seconds : seconds;

    if (difference < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".clock-digits-grid").innerHTML = "<h3>REGISTRATION SLOT TERMINATED</h3>";
    }
}, 1000);


// 2. TIMELINE ROW SWITCH CONTROL
function switchDay(dayId) {
    const contents = document.querySelectorAll('.track-manifest');
    contents.forEach(content => content.classList.remove('active'));

    const buttons = document.querySelectorAll('.pill-trigger');
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(dayId).classList.add('active');
    event.currentTarget.classList.add('active');
}


// 3. SECURE FORM GATEWAY & DIRECT LOG
const modal = document.getElementById("customModal");
const closeModalBtn = document.getElementById("closeModalBtn");

document.getElementById("regForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const fullName = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const rollNo = document.getElementById("rollno").value.trim();

    const rollNoPattern = /^[A-Za-z0-9]{5,15}$/;

    if (!email.includes("@")) {
        alert("Validation Fault: Enter an authorized academic email record.");
        return;
    }

    if (!rollNoPattern.test(rollNo)) {
        alert("Validation Fault: Roll format configuration code mismatch.");
        return;
    }

    // Modern Neutral High Contrast Console Build Report
    console.clear(); 
    console.log("%c PROFILE SUBMISSION VERIFIED ", "background: #f06292; color: #fff; font-weight: bold; padding: 4px 8px; border-radius: 4px;");
    console.log("-----------------------------------------");
    console.log("Identity : " + fullName);
    console.log("Network  : " + email);
    console.log("Index ID : " + rollNo);
    console.log("-----------------------------------------");
    console.log("Status: 200 Database Ready Map Entry Passed");
    
    modal.classList.add("active");
    this.reset(); 
});

closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});