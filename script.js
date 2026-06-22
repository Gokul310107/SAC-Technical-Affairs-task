// 1. COUNTDOWN TIMER LOGIC
const targetDate = new Date("December 31, 2026 00:00:00").getTime();

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
        document.querySelector(".countdown-container").innerHTML = "<h3>Fest Events Active!</h3>";
    }
}, 1000);


// 2. DAY TAB SWITCHING LOGIC
function switchDay(dayId) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Deactivate all tab buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Show selected day content and activate matching button
    document.getElementById(dayId).classList.add('active');
    event.currentTarget.classList.add('active');
}


// 3. INPUT VALIDATION & CUSTOM SUCCESS DIALOG CONTROL
const modal = document.getElementById("customModal");
const closeModalBtn = document.getElementById("closeModalBtn");

document.getElementById("regForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const fullName = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const rollNo = document.getElementById("rollno").value.trim();

    const rollNoPattern = /^[A-Za-z0-9]{5,15}$/;

    if (!email.includes("@")) {
        alert("Verification Error: Please submit a valid institutional email address.");
        return;
    }

    if (!rollNoPattern.test(rollNo)) {
        alert("Verification Error: Please input an authentic Alphanumeric Roll Number configuration.");
        return;
    }

    // Displays data via standard inspector developer console
    console.log("=================================");
    console.log("IIITDM KANCHEEPURAM REGISTRATION");
    console.log("=================================");
    console.log("Attendee: " + fullName);
    console.log("Contact: " + email);
    console.log("ID Metric: " + rollNo);
    console.log("Status: Form Validated.");
    console.log("=================================");
    
    modal.classList.add("active");
    this.reset(); 
});

closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});