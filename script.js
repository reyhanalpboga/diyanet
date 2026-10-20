// Yetenekler Veri Dizisi
const skills = [
  { name: "HTML5 & CSS3", level: "İleri Seviye", desc: "Semantik HTML yapısı ve modern CSS düzenleri.", badgeClass: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" },
  { name: "Bootstrap 5", level: "Orta Seviye", desc: "Responsive mobil uyumlu arayüz geliştirme.", badgeClass: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" },
  { name: "JavaScript", level: "Temel / Orta", desc: "DOM manipülasyonu ve olay dinleyicileri.", badgeClass: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" },
  { name: "Git & GitHub", level: "Orta Seviye", desc: "Branching, commit ve versiyon kontrolü.", badgeClass: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300" }
];

function renderSkills() {
  const container = document.getElementById('skills-container');
  if (container) {
    container.innerHTML = skills.map(skill => `
      <div class="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 transition-colors">
        <div>
          <h5 class="font-bold text-gray-800 dark:text-gray-100 text-sm mb-1">${skill.name}</h5>
          <p class="text-xs text-gray-500 dark:text-gray-400 m-0">${skill.desc}</p>
        </div>
        <span class="text-xs px-2.5 py-1 rounded-full font-semibold ${skill.badgeClass}">${skill.level}</span>
      </div>
    `).join('');
  }
}

// Eğitimler Veri Dizisi
const courses = [
  { title: "Web Geliştirme Temelleri", category: "Frontend", desc: "HTML5, CSS3 ve responsive tasarım prensipleri.", badgeClass: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" },
  { title: "JavaScript ile DOM Manipülasyonu", category: "Programlama", desc: "Dinamik içerik üretimi ve dizi metotları.", badgeClass: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" },
  { title: "Versiyon Kontrolü (Git & GitHub)", category: "Araçlar", desc: "Branch yönetimi ve proje yayınlama.", badgeClass: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300" }
];

function renderCourses() {
  const container = document.getElementById('courses-container');
  if (container) {
    container.innerHTML = courses.map(course => `
      <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 mb-2 transition-colors">
        <div class="flex justify-between items-center mb-1">
          <h5 class="font-bold text-blue-600 dark:text-blue-400 text-sm m-0">${course.title}</h5>
          <span class="text-xs px-2 py-0.5 rounded font-medium ${course.badgeClass}">${course.category}</span>
        </div>
        <p class="text-xs text-gray-500 dark:text-gray-400 m-0">${course.desc}</p>
      </div>
    `).join('');
  }
}

// SAYFA YÜKLENDİĞİNDE ÇALIŞACAK KODLAR
document.addEventListener('DOMContentLoaded', () => {

  // 1. Dinamik Verileri Yükle
  renderSkills();
  renderCourses();

  // 2. Koyu Mod (Dark Mode) Kontrolü
  const darkModeToggle = document.getElementById('darkModeToggle');
  const htmlElement = document.documentElement;

  if (localStorage.getItem('theme') === 'dark') {
    htmlElement.classList.add('dark');
    if (darkModeToggle) darkModeToggle.textContent = '☀️ Açık Mod';
  } else {
    htmlElement.classList.remove('dark');
    if (darkModeToggle) darkModeToggle.textContent = '🌙 Koyu Mod';
  }

  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      htmlElement.classList.toggle('dark');
      if (htmlElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        darkModeToggle.textContent = '☀️ Açık Mod';
      } else {
        localStorage.setItem('theme', 'light');
        darkModeToggle.textContent = '🌙 Koyu Mod';
      }
    });
  }

  // 3. Sekme (Tab) Değiştirme Mantığı ve Buton Renk Yönetimi
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTabId = button.getAttribute('data-tab');

      // Bütün içerikleri gizle
      tabContents.forEach(content => {
        content.classList.add('hidden');
      });

      // Seçilen içeriği göster
      const selectedContent = document.getElementById(targetTabId);
      if (selectedContent) {
        selectedContent.classList.remove('hidden');
      }

      // Tüm butonların renklerini pasif yap, tıklananı mavi yap
      tabButtons.forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-800', 'dark:text-gray-200');
      });

      button.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-800', 'dark:text-gray-200');
      button.classList.add('bg-blue-600', 'text-white');
    });
  });

  // 4. CV İndir Butonu Alert İşlemi
  const cvBtn = document.getElementById('cvDownloadBtn');
  if (cvBtn) {
    cvBtn.addEventListener('click', () => {
      alert("Teşekkürler! CV indirme işlemi başlatılıyor...");
    });
  }

  // 5. İletişim Formu Gönderildiğinde Alert İşlemi
  const contactForm = document.querySelector('#iletisim form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Mesajınız başarıyla gönderildi!");
      contactForm.reset();
    });
  }
});