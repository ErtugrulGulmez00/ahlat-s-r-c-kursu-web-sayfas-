// =============================================
// ANA JS - Öz Ahlat Sürücü Kursu
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  initImageFallbacks();
  initNavbar();
  initTestimonials();
  initFAQ();
  initGallery();
  initBackToTop();
  initContactForm();
  initMobileMenu();
  initPlayLinks();
});

// ---------- NAVBAR ----------
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    updateActiveLink();
  });

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          closeMenu();
        }
      }
    });
  });
}

function updateActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}

// ---------- MOBILE MENU ----------
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) closeMenu();
  });
}

function closeMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');
  if (navMenu) navMenu.classList.remove('open');
  if (hamburger) { hamburger.classList.remove('open'); hamburger.setAttribute('aria-expanded', false); }
}

// ---------- KAYDIRMALı YORUMLAR ----------
function initTestimonials() {
  const track   = document.getElementById('testimonials-track');
  const prevBtn = document.getElementById('testimonials-prev');
  const nextBtn = document.getElementById('testimonials-next');
  if (!track) return;

  const cards = track.querySelectorAll('.testimonial-card');
  let index = 0;

  function getVisible() {
    if (window.innerWidth >= 992) return 3;
    if (window.innerWidth >= 600) return 2;
    return 1;
  }

  function update() {
    const visible = getVisible();
    const maxIndex = Math.max(0, cards.length - visible);
    index = Math.min(index, maxIndex);
    const w = 100 / visible;
    cards.forEach(c => { c.style.flex = `0 0 ${w}%`; });
    track.style.transform = `translateX(-${index * w}%)`;
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index >= maxIndex;
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { index = Math.max(0, index - 1); update(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { index++; update(); });

  window.addEventListener('resize', update);
  update();

  // otomatik kaydırma
  setInterval(() => {
    const visible = getVisible();
    const maxIndex = Math.max(0, cards.length - visible);
    index = index >= maxIndex ? 0 : index + 1;
    update();
  }, 5000);
}

// ---------- SSS AKORDEON ----------
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const open = item.classList.contains('open');

      document.querySelectorAll('.faq-item.open').forEach(other => {
        other.classList.remove('open');
        other.querySelector('.faq-answer').style.maxHeight = null;
      });

      if (!open) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

// ---------- GALERİ LIGHTBOX ----------
function initGallery() {
  const overlay = document.getElementById('lightbox-overlay');
  const img     = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  const closeBtn= document.getElementById('lightbox-close');
  if (!overlay) return;

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const src  = item.dataset.src  || '';
      const cap  = item.dataset.caption || '';
      if (!src) {
        // Gerçek fotoğraf yoksa sadece başlık göster
        img.style.display = 'none';
        caption.textContent = cap + ' (Fotoğraf yakında eklenecek)';
      } else {
        img.style.display = '';
        img.src = src;
        caption.textContent = cap;
      }
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    img.src = '';
    img.style.display = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
}

// ---------- YUKARI GİT BUTONU ----------
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ---------- İLETİŞİM FORMU ----------
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;

    btn.textContent = 'Gönderiliyor...';
    btn.disabled = true;

    setTimeout(() => {
      showFormSuccess();
      form.reset();
      btn.textContent = originalText;
      btn.disabled = false;
    }, 1200);
  });
}

function showFormSuccess() {
  const el = document.getElementById('form-success');
  if (!el) return;
  el.style.display = 'block';
  el.style.animation = 'slideIn 0.4s ease';
  setTimeout(() => { el.style.display = 'none'; }, 5000);
}

// ---------- PLAY STORE LİNKİ ----------
// Uygulama henüz yayında değil; link "#" iken tıklama sayfanın başına zıplamasın.
function initPlayLinks() {
  document.querySelectorAll('.play-link').forEach(a => {
    a.addEventListener('click', e => {
      if (a.getAttribute('href') === '#') e.preventDefault();
    });
  });
}

// ---------- GÖRSEL FALLBACK SİSTEMİ ----------
function initImageFallbacks() {

  // NAVBAR LOGO
  const navLogoImg = document.querySelector('.nav-logo-img');
  if (navLogoImg) {
    navLogoImg.addEventListener('error', function() {
      const link = this.closest('.nav-logo');
      link.innerHTML = `
        <div class="nav-logo-icon">🚗</div>
        <div class="nav-logo-text">
          <span class="nav-logo-name">Öz Ahlat</span>
          <span class="nav-logo-sub">Sürücü Kursu</span>
        </div>`;
    });
  }

  // FOOTER LOGO
  const footerLogoImg = document.querySelector('.footer-logo-img');
  if (footerLogoImg) {
    footerLogoImg.addEventListener('error', function() {
      this.closest('.footer-logo-wrap').innerHTML = `
        <div class="footer-logo-icon">🚗</div>
        <div>
          <div class="footer-brand-name">Özel Öz Ahlat</div>
          <div class="footer-brand-sub">Sürücü Kursu</div>
        </div>`;
    });
  }

  // HAKKIMIZDA SINIF FOTOĞRAFI
  const aboutImg = document.querySelector('.about-real-img');
  if (aboutImg) {
    aboutImg.addEventListener('error', function() {
      const wrap = this.closest('.about-img-wrap');
      wrap.classList.add('about-img-fallback');
      this.style.display = 'none';
    });
  }

  // GALERİ FOTOĞRAFLARI
  document.querySelectorAll('.gallery-img').forEach((img, i) => {
    img.addEventListener('error', function() {
      const item = this.closest('.gallery-item');
      const colors = [
        'linear-gradient(135deg,#0B3D91,#1a5cc8)',
        'linear-gradient(135deg,#1a237e,#283593)',
        'linear-gradient(135deg,#0d47a1,#1976D2)',
        'linear-gradient(135deg,#006064,#00838f)',
        'linear-gradient(135deg,#1b5e20,#388e3c)',
        'linear-gradient(135deg,#4a148c,#7b1fa2)',
      ];
      const icons = ['📢','🏫','🚗','🚛','🖥️','🏫'];
      const labels = [
        'Tanıtım Posteri','Eğitim Sınıfı','Sınav Aracı',
        'Kamyon Eğitimi','Simülatör','Eğitim Ortamı'
      ];
      this.style.display = 'none';
      const inner = document.createElement('div');
      inner.className = 'gallery-inner';
      inner.innerHTML = `<span class="gallery-emoji">${icons[i]}</span>
        <span class="gallery-label">${labels[i]}</span>`;
      inner.style.cssText = `background:${colors[i]};width:100%;height:100%;
        display:flex;flex-direction:column;align-items:center;
        justify-content:center;gap:.5rem;font-size:3rem;color:#fff;`;
      item.insertBefore(inner, item.firstChild);
    });
  });
}
