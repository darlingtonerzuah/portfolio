// Header scroll state
const header = document.getElementById('site-header');
function onScroll() {
  if (window.scrollY > 24) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
}
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile nav toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileNav  = document.getElementById('mobile-nav');
const backdrop   = document.getElementById('nav-backdrop');

function openNav() {
  mobileNav.hidden = false;
  backdrop.hidden  = false;
  menuToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden'; // prevent page scroll while open
}

function closeNav() {
  mobileNav.hidden = true;
  backdrop.hidden  = true;
  menuToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

menuToggle.addEventListener('click', () => {
  mobileNav.hidden ? openNav() : closeNav();
});

// Close when a nav link is tapped
mobileNav.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', closeNav);
});

// Close when backdrop is tapped
backdrop.addEventListener('click', closeNav);

// Close on Escape key (accessibility)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !mobileNav.hidden) {
    closeNav();
    menuToggle.focus(); // return focus to the trigger
  }
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => io.observe(el));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
