// Animate "fadeIn" for cards as they scroll into view using Intersection Observer
const animatedCards = document.querySelectorAll('.animated-card');
const cardObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

animatedCards.forEach(card => {
  // Pause the animation initially
  card.style.animationPlayState = 'paused';
  cardObserver.observe(card);
});

// Basic form pop-up
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Your message has been sent!');
});
// Animate get in touch section when in viewport
const contactSection = document.getElementById('contact');
const contactObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      contactSection.classList.add('visible');
      contactObserver.disconnect();
    }
  });
}, { threshold: 0.18 });
if(contactSection) contactObserver.observe(contactSection);

