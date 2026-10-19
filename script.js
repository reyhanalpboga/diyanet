

console.log("JavaScript dosyası başarıyla bağlandı!");

// 1. CV İndir Butonu Olayı
const cvButton = document.querySelector('nav button');
if (cvButton) {
  cvButton.addEventListener('click', () => {
    alert("Teşekkürler! CV indirme işlemi başlatılıyor...");
  });
}


// Yetenekler Veri Dizisi
const skills = [
  { name: "HTML5 & CSS3", level: "İleri Seviye", desc: "Semantik HTML yapısı ve modern CSS düzenleri.", badgeClass: "bg-green-100 text-green-700" },
  { name: "Bootstrap 5", level: "Orta Seviye", desc: "Responsive mobil uyumlu arayüz geliştirme.", badgeClass: "bg-blue-100 text-blue-700" },
  { name: "JavaScript", level: "Temel / Orta", desc: "DOM manipülasyonu ve olay dinleyicileri.", badgeClass: "bg-yellow-100 text-yellow-800" },
  { name: "Git & GitHub", level: "Orta Seviye", desc: "Branching, commit ve versiyon kontrolü.", badgeClass: "bg-purple-100 text-purple-700" }
];

function renderSkills() {
  const container = document.getElementById('skills-container');
  if (container) {
    container.innerHTML = skills.map(skill => `
      <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
        <div>
          <h5 class="font-bold text-gray-800 text-sm mb-1">${skill.name}</h5>
          <p class="text-xs text-gray-500 m-0">${skill.desc}</p>
        </div>
        <span class="text-xs px-2.5 py-1 rounded-full font-semibold ${skill.badgeClass}">${skill.level}</span>
      </div>
    `).join('');
  }
}

// Eğitimler Veri Dizisi
const courses = [
  { title: "Web Geliştirme Temelleri", category: "Frontend", desc: "HTML5, CSS3 ve responsive tasarım prensipleri.", badgeClass: "bg-blue-100 text-blue-700" },
  { title: "JavaScript ile DOM Manipülasyonu", category: "Programlama", desc: "Dinamik içerik üretimi ve dizi metotları.", badgeClass: "bg-yellow-100 text-yellow-800" },
  { title: "Versiyon Kontrolü (Git & GitHub)", category: "Araçlar", desc: "Branch yönetimi ve proje yayınlama.", badgeClass: "bg-purple-100 text-purple-700" }
];

function renderCourses() {
  const container = document.getElementById('courses-container');
  if (container) {
    container.innerHTML = courses.map(course => `
      <div class="p-3 bg-gray-50 rounded-lg border border-gray-100 mb-2">
        <div class="flex justify-between items-center mb-1">
          <h5 class="font-bold text-blue-600 text-sm m-0">${course.title}</h5>
          <span class="text-xs px-2 py-0.5 rounded font-medium ${course.badgeClass}">${course.category}</span>
        </div>
        <p class="text-xs text-gray-500 m-0">${course.desc}</p>
      </div>
    `).join('');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderCourses();
});