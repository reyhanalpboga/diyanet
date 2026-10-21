const skills = [
  { name: "HTML5 & CSS3", level: "İleri Seviye", desc: "Semantik HTML yapısı ve modern CSS düzenleri.", badge: "bg-success" },
  { name: "Bootstrap 5", level: "Orta Seviye", desc: "Responsive mobil uyumlu arayüz geliştirme.", badge: "bg-primary" },
  { name: "JavaScript", level: "Temel / Orta", desc: "DOM manipülasyonu ve olay dinleyicileri.", badge: "bg-warning text-dark" },
  { name: "Git & GitHub", level: "Orta Seviye", desc: "Branching, commit ve versiyon kontrolü.", badge: "bg-secondary" }
];

function renderSkills() {
  const container = document.getElementById('skills-container');
  if (container) {
    container.innerHTML = skills.map(skill => `
      <div class="d-flex justify-content-between align-items-center p-3 bg-body-tertiary rounded border">
        <div>
          <h6 class="fw-bold mb-1 small">${skill.name}</h6>
          <p class="text-muted mb-0 small" style="font-size: 0.8rem;">${skill.desc}</p>
        </div>
        <span class="badge ${skill.badge}">${skill.level}</span>
      </div>
    `).join('');
  }
}

const courses = [
  { title: "Web Geliştirme Temelleri", category: "Frontend", desc: "HTML5, CSS3 ve responsive tasarım prensipleri.", badge: "bg-primary" },
  { title: "JavaScript ile DOM Manipülasyonu", category: "Programlama", desc: "Dinamik içerik üretimi ve dizi metotları.", badge: "bg-warning text-dark" },
  { title: "Versiyon Kontrolü (Git & GitHub)", category: "Araçlar", desc: "Branch yönetimi ve proje yayınlama.", badge: "bg-secondary" }
];

function renderCourses() {
  const container = document.getElementById('courses-container');
  if (container) {
    container.innerHTML = courses.map(course => `
      <div class="p-3 bg-body-tertiary rounded border mb-2">
        <div class="d-flex justify-content-between align-items-center mb-1">
          <h6 class="fw-bold text-primary mb-0 small">${course.title}</h6>
          <span class="badge ${course.badge}">${course.category}</span>
        </div>
        <p class="text-muted mb-0 small" style="font-size: 0.8rem;">${course.desc}</p>
      </div>
    `).join('');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderCourses();

  // 1. KOYU MOD (DARK MODE)
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    if (darkModeToggle) {
      darkModeToggle.textContent = '☀️ Açık Mod';
      darkModeToggle.className = 'btn btn-light';
    }
  }

  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-theme');
      if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        darkModeToggle.textContent = '☀️ Açık Mod';
        darkModeToggle.className = 'btn btn-light';
      } else {
        localStorage.setItem('theme', 'light');
        darkModeToggle.textContent = '🌙 Koyu Mod';
        darkModeToggle.className = 'btn btn-dark';
      }
    });
  }

  // 2. SEKMELER (TABS)
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTabId = button.getAttribute('data-tab');

      // Tüm sekmeleri gizle
      tabContents.forEach(content => content.classList.add('hidden'));

      // Tıklanan sekmeyi göster
      const selectedContent = document.getElementById(targetTabId);
      if (selectedContent) {
        selectedContent.classList.remove('hidden');
      }

      // Buton renklerini güncelle
      tabButtons.forEach(btn => {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-outline-secondary');
      });

      button.classList.remove('btn-outline-secondary');
      button.classList.add('btn-primary');
    });
  });

  // CV İndir
  const cvBtn = document.getElementById('cvDownloadBtn');
  if (cvBtn) {
    cvBtn.addEventListener('click', () => {
      alert("CV indirme işlemi başlatılıyor...");
    });
  }

  // İletişim Formu
  const contactForm = document.querySelector('#iletisim form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Mesajınız başarıyla gönderildi!");
      contactForm.reset();
    });
  }
});