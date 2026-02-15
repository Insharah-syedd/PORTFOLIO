// --- 1. SIDEBAR NAVIGATION ---
const menuOpenBtn = document.getElementById("open");
const menuCloseBtn = document.getElementById("close");
const sidebar = document.querySelector(".sidebar");
const sidebarLinks = document.querySelectorAll('#side-li');

// Open Sidebar
menuOpenBtn.addEventListener("click", () => {
    sidebar.style.display = "block";
});

// Close Sidebar
menuCloseBtn.addEventListener("click", () => {
    sidebar.style.display = "none";
});

// Close Sidebar when any link is clicked
sidebarLinks.forEach(link => {
    link.addEventListener("click", () => {
        sidebar.style.display = "none";
    });
});


// --- 2. EMAILJS CONTACT FORM ---
const contactModal = document.querySelector(".modal");
const closeModalBtn = document.getElementById("closeModal");
const contactForm = document.getElementById("contactForm");

// Initialize EmailJS with your Public Key
emailjs.init("oC6gwPMuflwUPFdex");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Change button text to show progress
    const submitBtn = this.querySelector("button");
    const originalBtnText = submitBtn.innerText;
    submitBtn.innerText = "Sending...";
    submitBtn.disabled = true;

    /**
     * emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, FORM_ELEMENT)
     * Updated with your correct Template ID: template_bevapn
     */
    emailjs.sendForm("service_vf47ch5", "template_bevapn", this)
        .then(() => {
            // Success: Show Modal and Reset Form
            contactModal.style.display = "flex";
            contactForm.reset();
            submitBtn.innerText = originalBtnText;
            submitBtn.disabled = false;
        })
        .catch((error) => {
            // Error: Log to console and alert user
            console.error("EmailJS Error:", error);
            alert("Failed to send message. Please check your internet connection and try again.");
            submitBtn.innerText = originalBtnText;
            submitBtn.disabled = false;
        });
});

// Close Success Modal
closeModalBtn.addEventListener("click", () => {
    contactModal.style.display = "none";
});


// --- 3. CUSTOM CURSOR ANIMATION ---
const cursor = document.querySelector(".cursor");
const cursorBlur = document.querySelector(".cursorblur");

document.addEventListener("mousemove", (event) => {
    // Basic Cursor
    cursor.style.left = `${event.x}px`;
    cursor.style.top = `${event.y}px`;

    // Blur Effect (Offset by 150px to center it)
    cursorBlur.style.left = `${event.x - 150}px`;
    cursorBlur.style.top = `${event.y - 150}px`;
});