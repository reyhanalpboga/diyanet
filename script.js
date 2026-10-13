console.log("JavaScript dosyası başarıyla bağlandı!");

// CV İndir butonunu yakalayalım ve tıklama olayı ekleyelim
const cvButton = document.querySelector('button');

if (cvButton) {
  cvButton.addEventListener('click', () => {
    alert("Teşekkürler! CV indirme işlemi başlatılıyor...");
  });
}