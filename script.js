const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');

// Remember the user's last choice so it persists on refresh.
const STORAGE_KEY = 'compass-sidebar-collapsed';

function applyState(collapsed) {
  sidebar.classList.toggle('collapsed', collapsed);
  toggleBtn.setAttribute('aria-expanded', String(!collapsed));
  toggleBtn.setAttribute('aria-label', collapsed ? 'Expand sidebar' : 'Collapse sidebar');
}

// Restore previous state on load
const savedState = localStorage.getItem(STORAGE_KEY) === 'true';
applyState(savedState);

toggleBtn.addEventListener('click', () => {
  const nowCollapsed = !sidebar.classList.contains('collapsed');
  applyState(nowCollapsed);
  localStorage.setItem(STORAGE_KEY, String(nowCollapsed));
});

// Simple active-link handling so clicking a nav item highlights it
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.nav-link').forEach((l) => l.classList.remove('active'));
    link.classList.add('active');
  });
});