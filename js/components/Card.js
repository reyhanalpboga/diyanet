export function createCard(item) {
  return `
    <div class="d-flex justify-content-between align-items-center p-3 bg-body-tertiary rounded border mb-2">
      <div>
        <h6 class="fw-bold mb-1 small">${item.name}</h6>
        <p class="text-muted mb-0 small">${item.desc}</p>
      </div>
      <span class="badge ${item.badge}">${item.level}</span>
    </div>
  `;
}