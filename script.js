// Handle Contact Form Submission
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent actual form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please fill in all fields.';
        return;
    }

    // Simulate form submission (you can replace this with actual form handling)
    formMessage.style.color = 'green';
    formMessage.textContent = `Thank you, ${name}! Your message has been received.`;

    // Reset the form
    form.reset();
});

// Optional: Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60, // Adjust for fixed header
            behavior: 'smooth'
        });
    });
});


const show_bar = document.querySelector(".nav_bar");

function myFunction(x) {
    x.classList.toggle("change");
    show_bar.classList.toggle("nav_bar_active");
}
