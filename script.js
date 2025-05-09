
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
// Mobile menu toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Scroll-triggered animations
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));
sliders.forEach(slider => appearOnScroll.observe(slider));

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
