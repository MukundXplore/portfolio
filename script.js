
const goToTopButton = document.getElementById('goToTop');
const scrollPercentage = document.getElementById('scrollPercentage');

// Show/hide "Go to Top" button and update scroll percentage
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        goToTopButton.style.display = 'flex';
    } else {
        goToTopButton.style.display = 'none';
    }

    // Update scroll percentage dynamically
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentageValue = (window.scrollY / scrollHeight) * 100;
    scrollPercentage.textContent = `${Math.round(scrollPercentageValue)}%`;
});

// Smooth scroll to top when "Go to Top" button is clicked
goToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scroll to sections with header offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
        const header = document.querySelector('header');
        const headerHeight = header.offsetHeight;
        
        window.scrollTo({
            top: target.offsetTop - headerHeight,
            behavior: 'smooth'
        });
    }
});
});

// Add scroll-margin-top to all sections
function setScrollMargin() {
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;
document.querySelectorAll('section').forEach(section => {
    section.style.scrollMarginTop = `${headerHeight}px`;
});
}

// Set initial margin and update on resize
setScrollMargin();
window.addEventListener('resize', setScrollMargin);
