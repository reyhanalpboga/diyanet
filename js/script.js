import { createNavbar } from './components/Navbar.js';
import { createHero } from './components/Hero.js';
import { createCard } from './components/Card.js';
import { createFooter } from './components/Footer.js';
import { createProjects } from './components/Projects.js';

const skills = [
  { name: "HTML5 & CSS3", level: "İleri Seviye", desc: "Modern ve semantik web yapıları", badge: "bg-primary" },
  { name: "Bootstrap 5", level: "İleri Seviye", desc: "Responsive ve hızlı arayüz tasarımı", badge: "bg-success" },
  { name: "JavaScript (ES6+)", level: "Orta Seviye", desc: "Dinamik DOM ve SPA mantığı", badge: "bg-warning text-dark" }
];

const courses = [
  { name: "Frontend Web Geliştirme Stajı", level: "Tamamlandı", desc: "15 Günlük Yoğun Pratik Eğitimi", badge: "bg-info text-dark" },
  { name: "Modern JavaScript & SPA Mimarisi", level: "İleri Düzey", desc: "Modüler kodlama ve DOM yönetimi", badge: "bg-secondary" }
];

document.addEventListener('DOMContentLoaded', () => {
  // Bileşenleri yerleştirme
  document.getElementById('navbar-container').innerHTML = createNavbar();
  document.getElementById('hero-container').innerHTML = createHero();
  document.getElementById('footer-container').innerHTML = createFooter();
  document.querySelector('main').insertAdjacentHTML('beforeend', createProjects());

  // Kartları basma
  document.getElementById('skills-container').innerHTML = skills.map(skill => createCard(skill)).join('');
  document.getElementById('courses-container').innerHTML = courses.map(course => createCard(course)).join('');

  // Sekme Geçiş Mantığı
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  const tabList = document.querySelector('.nav-container nav');

  tabList.setAttribute('role', 'tablist');
  tabButtons.forEach((button, index) => {
    const targetId = button.dataset.tab;
    const isSelected = index === 0;

    button.id = `tab-${targetId}`;
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-controls', targetId);
    button.setAttribute('aria-selected', String(isSelected));
    button.tabIndex = isSelected ? 0 : -1;

    const content = document.getElementById(targetId);
    content.setAttribute('role', 'tabpanel');
    content.setAttribute('aria-labelledby', button.id);
    content.tabIndex = 0;

    button.addEventListener('click', () => selectTab(button));
  });

  function selectTab(selectedButton, moveFocus = false) {
    tabButtons.forEach(button => {
      const isSelected = button === selectedButton;
      const panel = document.getElementById(button.dataset.tab);

      button.setAttribute('aria-selected', String(isSelected));
      button.tabIndex = isSelected ? 0 : -1;
      button.classList.toggle('btn-primary', isSelected);
      button.classList.toggle('btn-outline-secondary', !isSelected);
      panel.classList.toggle('hidden', !isSelected);
    });

    if (moveFocus) {
      selectedButton.focus();
    }
  }

  tabList.addEventListener('keydown', event => {
    const currentIndex = Array.from(tabButtons).indexOf(document.activeElement);
    if (currentIndex === -1) return;

    let nextIndex;
    if (event.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % tabButtons.length;
    } else if (event.key === 'ArrowLeft') {
      nextIndex = (currentIndex - 1 + tabButtons.length) % tabButtons.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = tabButtons.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    selectTab(tabButtons[nextIndex], true);
  });

  // Koyu Mod Mantığı
  const darkModeToggle = document.getElementById('darkModeToggle');
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    darkModeToggle.textContent = "☀️ Açık Mod";
  }

  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    darkModeToggle.textContent = isDark ? "☀️ Açık Mod" : "🌙 Koyu Mod";
  });

  // CV İndir
  const cvBtn = document.getElementById('cvDownloadBtn');
  if (cvBtn) {
    cvBtn.addEventListener('click', () => {
      alert("CV indirme simülasyonu: Dosya hazırlanıyor...");
    });
  }

  // İletişim Formu
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Mesajınız başarıyla gönderildi!");
      contactForm.reset();
    });
  }
});