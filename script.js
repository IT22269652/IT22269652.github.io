/* ═══════════════════════════════════════
   TYPED TEXT
═══════════════════════════════════════ */
const phrases = [
  "Full-Stack Web Developer",
  "React & Spring Boot Engineer",
  "BSc IT Undergraduate @ SLIIT",
  "Java & Kotlin Developer",
  "MERN Stack Developer",
  "Call me Nura 😄"
];
let pi = 0, ci = 0, deleting = false;
const el = document.getElementById('typed');

function type() {
  const phrase = phrases[pi];
  if (!deleting) {
    el.textContent = phrase.slice(0, ++ci);
    if (ci === phrase.length) { deleting = true; setTimeout(type, 2200); return; }
  } else {
    el.textContent = phrase.slice(0, --ci);
    if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
  }
  setTimeout(type, deleting ? 45 : 80);
}
type();

/* ═══════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════ */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ═══════════════════════════════════════
   ACTIVE NAV HIGHLIGHT
═══════════════════════════════════════ */
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
  navAs.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--cyan)' : '';
  });
});

/* ═══════════════════════════════════════
   HAMBURGER
═══════════════════════════════════════ */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ═══════════════════════════════════════
   SMOOTH HERO PARALLAX
═══════════════════════════════════════ */
window.addEventListener('scroll', () => {
  const blobs = document.querySelectorAll('.blob');
  const y = window.scrollY;
  blobs.forEach((b, i) => {
    b.style.transform = `translateY(${y * (0.08 + i * 0.04)}px)`;
  });
});
