/* ═══════════════════════════════════════
   TYPED TEXT
═══════════════════════════════════════ */
const phrases = [
  "Full-Stack Developer",
  "React & Spring Boot Engineer",
  "MERN Stack Developer",
  "Java & Kotlin Developer",
  "Cloud-Certified Developer ☁️",
  "BSc IT Graduate — SLIIT 🎓",
  "Building for the web 🚀",
];
let pi = 0, ci = 0, deleting = false;
const typedEl = document.getElementById('typed');

function type() {
  if (!typedEl) return;
  const phrase = phrases[pi];
  if (!deleting) {
    typedEl.textContent = phrase.slice(0, ++ci);
    if (ci === phrase.length) { deleting = true; setTimeout(type, 2000); return; }
  } else {
    typedEl.textContent = phrase.slice(0, --ci);
    if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
  }
  setTimeout(type, deleting ? 42 : 75);
}
type();

/* ═══════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ═══════════════════════════════════════
   NAVBAR — active link + scroll shrink
═══════════════════════════════════════ */
const navbar  = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navAs   = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  // Shrink navbar on scroll
  navbar.style.height = window.scrollY > 50 ? '56px' : '68px';

  // Active link
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 140) cur = s.id; });
  navAs.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--cyan)' : '';
  });
});

/* ═══════════════════════════════════════
   HAMBURGER
═══════════════════════════════════════ */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

/* ═══════════════════════════════════════
   BLOB PARALLAX
═══════════════════════════════════════ */
window.addEventListener('scroll', () => {
  document.querySelectorAll('.blob').forEach((b, i) => {
    b.style.transform = `translateY(${window.scrollY * (0.06 + i * 0.03)}px)`;
  });
});