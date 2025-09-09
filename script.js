// ==========================
// Part 1: Event Handling
// ==========================

// Theme toggle button
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Counter game
let count = 0;
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('increment-btn');

incrementBtn.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
});

// FAQ section toggle
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('visible');
    });
});

// ==========================
// Part 3: Form Validation
// ==========================
const form = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    formMessage.textContent = '';
    let valid = true;

    // Name validation: at least 2 characters
    if (nameInput.value.trim().length < 2) {
        valid = false;
        formMessage.textContent += "Name must be at least 2 characters long. ";
    }

    // Email validation: simple regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        valid = false;
        formMessage.textContent += "Enter a valid email address. ";
    }

    // Password validation: at least 6 characters
    if (passwordInput.value.length < 6) {
        valid = false;
        formMessage.textContent += "Password must be at least 6 characters. ";
    }

    if (valid) {
        formMessage.textContent = "Form submitted successfully! ✅";
        formMessage.style.color = "green";
        form.reset();
    } else {
        formMessage.style.color = "red";
    }
});
