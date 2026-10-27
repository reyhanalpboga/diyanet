export function createHero() {
  return `
    <section class="card p-4 shadow-sm">
      <div class="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
        <div class="d-flex align-items-center gap-3">
          <div class="profile-avatar rounded-circle border border-primary border-2" aria-hidden="true">RA</div>
          <div>
            <h1 class="h4 mb-1 fw-bold">Reyhan Alpboğa</h1>
            <p class="text-muted mb-0 small">Frontend Stajyeri & Yazılım Geliştirici</p>
          </div>
        </div>
        <button id="cvDownloadBtn" class="btn btn-primary">📄 CV İndir</button>
      </div>
    </section>
  `;
}