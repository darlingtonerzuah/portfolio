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
const mobileNav = document.getElementById('mobile-nav');
menuToggle.addEventListener('click', () => {
  const isOpen = !mobileNav.hidden;
  mobileNav.hidden = isOpen;
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
});
mobileNav.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => {
    mobileNav.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
  });
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
