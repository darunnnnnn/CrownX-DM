import { renderHome } from './pages/home.js';
import { renderWorks } from './pages/works.js';
import { renderCredits } from './pages/credits.js';
import { renderDashboard } from './pages/dashboard.js';
import { renderComingSoon } from './pages/comingsoon.js';
import { initAnimations } from './animations.js';

const routes = {
  '/': renderHome,
  '/works': renderWorks,
  '/credits': renderCredits,
  '/dashboard': renderComingSoon,
  '/dashboard-preview': renderDashboard,
};

let currentPath = '';

export function initRouter() {
  window.addEventListener('hashchange', () => navigateTo(getPath()));
  navigateTo(getPath());
}

function getPath() {
  return window.location.hash.slice(1) || '/';
}

async function navigateTo(path) {
  if (path === currentPath) return;
  const app = document.getElementById('app');
  const transition = document.getElementById('pageTransition');

  // Transition out
  transition.classList.add('active');
  await sleep(400);

  // Render new page
  const render = routes[path] || routes['/'];
  app.innerHTML = '';
  render(app);
  currentPath = path;

  // Update active nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkPage = link.getAttribute('data-page');
    const isActive = (path === '/' && linkPage === 'home') ||
                     path === '/' + linkPage;
    link.classList.toggle('active', isActive);
  });

  // Scroll to top
  window.scrollTo(0, 0);

  // Transition in
  await sleep(50);
  transition.classList.remove('active');

  // Reinitialize animations
  setTimeout(() => initAnimations(), 100);
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}
