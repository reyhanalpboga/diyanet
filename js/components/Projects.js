export function createProjects() {
  return `
    <div id="projeler" class="tab-content hidden">
      <section class="card p-4 p-md-5 shadow-sm">
        <div class="mb-4">
          <p class="project-eyebrow text-primary fw-semibold small mb-2">ÇALIŞMALARIM</p>
          <h2 class="h4 fw-bold mb-2">Projeler</h2>
          <p class="text-muted mb-0">Geliştirdiğim projelerden bir seçki.</p>
        </div>
        <div class="row g-4">
          <div class="col-12 col-md-6">
            <article class="project-card h-100 border rounded-3 overflow-hidden">
              <div class="project-preview" role="img" aria-label="Portfolyo web sitesi önizlemesi">
                <div class="project-preview-bar"><span></span><span></span><span></span></div>
                <div class="project-preview-content">
                  <div class="project-preview-nav"></div>
                  <div class="project-preview-heading"></div>
                  <div class="project-preview-line"></div>
                  <div class="project-preview-line short"></div>
                  <div class="project-preview-button"></div>
                </div>
              </div>
              <div class="p-3 p-md-4">
                <div class="d-flex flex-wrap gap-2 mb-3">
                  <span class="badge text-bg-primary">HTML</span>
                  <span class="badge text-bg-primary">CSS</span>
                  <span class="badge text-bg-primary">JavaScript</span>
                  <span class="badge text-bg-secondary">Bootstrap</span>
                </div>
                <h3 class="h5 fw-bold">Kişisel Portfolyo</h3>
                <p class="text-muted small">Yeteneklerimi, eğitimlerimi ve çalışmalarımı tanıtan responsive portfolyo sitesi.</p>
                <a class="btn btn-outline-primary btn-sm" href="https://github.com/reyhanalpboga/diyanet" target="_blank" rel="noopener noreferrer">
                  GitHub'da görüntüle
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  `;
}
