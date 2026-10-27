export function createNavbar() {
  return `
    <div class="nav-container bg-white p-3 rounded shadow-sm border mb-4 d-flex flex-wrap justify-content-between align-items-center gap-2">
      <nav class="d-flex flex-wrap gap-2" aria-label="Sayfa bölümleri">
        <button type="button" data-tab="profil" class="tab-btn btn btn-primary">Profil</button>
        <button type="button" data-tab="projeler" class="tab-btn btn btn-outline-secondary">Projeler</button>
        <button type="button" data-tab="yetenekler" class="tab-btn btn btn-outline-secondary">Yetenekler</button>
        <button type="button" data-tab="ilerleme" class="tab-btn btn btn-outline-secondary">İlerleme</button>
        <button type="button" data-tab="egitimler" class="tab-btn btn btn-outline-secondary">Eğitimler</button>
        <button type="button" data-tab="iletisim" class="tab-btn btn btn-outline-secondary">İletişim</button>
      </nav>
      <button id="darkModeToggle" class="btn btn-dark">🌙 Koyu Mod</button>
    </div>
  `;
}