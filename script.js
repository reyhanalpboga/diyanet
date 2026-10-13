// "CV İndir" butonuna tıklandığında interaktif uyarı mesajı gösterir
const cvButton = document.querySelector('button');

if (cvButton) {
  cvButton.addEventListener('click', () => {
    alert("Teşekkürler! CV'niz başarıyla indiriliyor...");
  });
}