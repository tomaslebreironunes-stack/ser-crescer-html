/* ═══════════════════════════════════════════════════════════════════════
   SER · Crescer na Aldeia — Main JS
   ═══════════════════════════════════════════════════════════════════════ */

/* ── Nav: scroll state ──────────────────────────────────────────────── */
const nav = document.getElementById('nav');

function updateNav() {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

/* ── Nav: mobile burger ─────────────────────────────────────────────── */
const burger = document.getElementById('navBurger');
const mobileMenu = document.getElementById('navMobile');

burger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
  const spans = burger.querySelectorAll('span');
  if (open) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
    burger.querySelectorAll('span').forEach(s => {
      s.style.transform = '';
      s.style.opacity = '';
    });
  });
});

/* ── Scroll reveal ──────────────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const siblings = [...el.parentElement.querySelectorAll('.reveal:not(.visible)')];
        const delay = siblings.indexOf(el) * 80;
        setTimeout(() => el.classList.add('visible'), Math.min(delay, 320));
        revealObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Hero image parallax & load ─────────────────────────────────────── */
const heroBgImg = document.querySelector('.hero__bg-img');
if (heroBgImg) {
  heroBgImg.addEventListener('load', () => heroBgImg.classList.add('loaded'));
  if (heroBgImg.complete) heroBgImg.classList.add('loaded');
}

window.addEventListener('scroll', () => {
  if (!heroBgImg) return;
  const scrolled = window.scrollY;
  heroBgImg.style.transform = `scale(1) translateY(${scrolled * 0.3}px)`;
}, { passive: true });

/* ── Smooth scroll for anchor links ────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH = nav.offsetHeight;
    const top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ── Form submit handler ────────────────────────────────────────────── */
const form = document.getElementById('inscricoesForm');
const formSuccess = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = form.querySelector('[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'A enviar...';
    btn.disabled = true;

    await new Promise(r => setTimeout(r, 1200));

    form.style.display = 'none';
    formSuccess.classList.add('visible');

    /* TODO: replace with real form endpoint (Formspree, Netlify Forms, etc.) */
    /* Example:
    const data = new FormData(form);
    const res = await fetch('https://formspree.io/f/YOUR_ID', {
      method: 'POST', body: data, headers: { Accept: 'application/json' }
    });
    if (res.ok) { form.style.display = 'none'; formSuccess.classList.add('visible'); }
    else { btn.textContent = original; btn.disabled = false; }
    */
  });
}

/* ── Galeria: lightbox (simple) ─────────────────────────────────────── */
const galItems = document.querySelectorAll('.galeria__item');

galItems.forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    const caption = item.querySelector('.galeria__overlay span')?.textContent || '';
    openLightbox(img.src, caption);
  });
});

function openLightbox(src, caption) {
  const lb = document.createElement('div');
  lb.style.cssText = `
    position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.92);
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    padding:2rem;cursor:zoom-out;animation:fadeIn 0.2s ease;
  `;

  const imgEl = document.createElement('img');
  imgEl.src = src.replace(/w=\d+/, 'w=1400');
  imgEl.style.cssText = `
    max-width:100%;max-height:80vh;object-fit:contain;
    border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,0.5);
  `;

  const cap = document.createElement('p');
  cap.textContent = caption;
  cap.style.cssText = `color:rgba(255,255,255,0.7);margin-top:1.2rem;font-size:0.95rem;letter-spacing:0.05em;`;

  const close = document.createElement('button');
  close.innerHTML = '✕';
  close.style.cssText = `
    position:absolute;top:1.5rem;right:1.5rem;color:rgba(255,255,255,0.7);
    font-size:1.5rem;background:none;border:none;cursor:pointer;padding:0.5rem;
    line-height:1;transition:color 0.2s;
  `;

  lb.append(imgEl, cap, close);
  document.body.append(lb);
  document.body.style.overflow = 'hidden';

  const teardown = () => {
    lb.remove();
    document.body.style.overflow = '';
  };
  lb.addEventListener('click', teardown);
  close.addEventListener('click', teardown);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') teardown(); }, { once: true });
}

/* ── Inject lightbox fadeIn keyframe once ───────────────────────────── */
const style = document.createElement('style');
style.textContent = '@keyframes fadeIn { from { opacity:0 } to { opacity:1 } }';
document.head.appendChild(style);
