// Smooth scrolling for navigation links
// Get the button and hidden content elements
// script.js

document.addEventListener('DOMContentLoaded', function() {
  const hireMeSection = document.getElementById('hire-me-section');
  const hireMeButton = hireMeSection.querySelector('.hire-me-btn');
  const contactForm = document.getElementById('contactForm');

  hireMeButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevents default link behavior
    contactForm.style.display = 'block';
  });
});

const toggleButton = document.getElementById('toggleContent');
const hiddenContent = document.getElementById('hiddenContent');

// Add event listener to the button
toggleButton.addEventListener('click', function() {
  // Toggle the display of the hidden content
  if (hiddenContent.style.display === 'none') {
    hiddenContent.style.display = 'block';
    toggleButton.textContent = 'Read Less';
  } else {
    hiddenContent.style.display = 'none';
    toggleButton.textContent = 'Read More';
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
