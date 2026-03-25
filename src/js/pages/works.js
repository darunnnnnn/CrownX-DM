const projects = [
  { id: 1, title: 'High-Converting Instagram Reels', category: 'Reels', desc: 'Viral short-form content for a fashion DTC brand that generated 2.5M views in 48 hours.', color: '#7c3aed' },
  { id: 2, title: 'Performance-Driven Ad Creatives', category: 'Ads', desc: 'Multi-platform ad campaign for a SaaS startup achieving 340% ROAS within the first month.', color: '#3b82f6' },
  { id: 3, title: 'Brand Storytelling Campaign', category: 'Branding', desc: 'A cinematic brand film for a luxury wellness brand, premiered at a global lifestyle summit.', color: '#06b6d4' },
  { id: 4, title: 'Product Launch Teaser Series', category: 'Reels', desc: 'A five-part teaser series for a tech product launch that built 100K waitlist signups.', color: '#ec4899' },
  { id: 5, title: 'Social Media Overhaul', category: 'Branding', desc: 'Complete social presence redesign for a fintech brand — 4x engagement growth in 90 days.', color: '#f59e0b' },
  { id: 6, title: 'YouTube Pre-Roll Ads', category: 'Ads', desc: 'Snackable 6-second bumper ads that drove 1.8M impressions for a food delivery platform.', color: '#10b981' },
];

const categories = ['All', 'Reels', 'Ads', 'Branding'];

export function renderWorks(container) {
  let activeFilter = 'All';

  function getFiltered() {
    return activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);
  }

  function renderGrid() {
    const grid = container.querySelector('.works-grid');
    const filtered = getFiltered();
    grid.innerHTML = filtered.map((p, i) => `
      <div class="work-card reveal delay-${(i % 4) + 1}" data-id="${p.id}" style="background: linear-gradient(135deg, ${p.color}22, ${p.color}08);">
        <div class="work-thumb-placeholder" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:3rem;opacity:0.15;">🎬</div>
        <div class="work-overlay">
          <div class="work-play">
            <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
          <div class="work-category">${p.category}</div>
          <div class="work-title">${p.title}</div>
        </div>
      </div>
    `).join('');

    // Re-trigger animations
    setTimeout(() => {
      grid.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    }, 50);

    // Card click → modal
    grid.querySelectorAll('.work-card').forEach(card => {
      card.addEventListener('click', () => openModal(parseInt(card.dataset.id)));
    });
  }

  function openModal(id) {
    const project = projects.find(p => p.id === id);
    if (!project) return;
    const modal = container.querySelector('.modal-overlay');
    modal.querySelector('.modal-project-title').textContent = project.title;
    modal.querySelector('.modal-project-desc').textContent = project.desc;
    modal.querySelector('.modal-project-cat').textContent = project.category;
    modal.classList.add('active');
  }

  container.innerHTML = `
    <section class="section" style="padding-top: calc(var(--nav-height) + 60px);">
      <div class="works-header">
        <div class="section-label reveal">✦ Our Work</div>
        <h2 class="section-title reveal delay-1">Projects that<br/><span class="gradient-text">speak volumes</span></h2>
        <p class="section-subtitle reveal delay-2" style="margin: 0 auto;">A curated selection of campaigns, brand films, and viral content we've crafted for forward-thinking brands.</p>
        <div class="filter-bar reveal delay-3">
          ${categories.map(c => `<button class="filter-btn ${c === activeFilter ? 'active' : ''}" data-cat="${c}">${c}</button>`).join('')}
        </div>
      </div>
      <div class="works-grid"></div>
    </section>

    <!-- Modal -->
    <div class="modal-overlay" id="workModal">
      <div class="modal-content">
        <div class="modal-video">
          <svg viewBox="0 0 24 24" fill="rgba(255,255,255,0.2)"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </div>
        <div class="modal-info">
          <div class="work-category modal-project-cat"></div>
          <h3 class="modal-project-title"></h3>
          <p class="modal-project-desc"></p>
        </div>
      </div>
      <button class="modal-close" id="modalClose">✕</button>
    </div>

    <footer class="footer">
      <div class="footer-brand"><span class="logo-crown">Crown</span><span class="logo-x" style="background:var(--gradient-primary);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">X</span></div>
      <p>© 2026 CrownX Digital Agency. All rights reserved.</p>
    </footer>
  `;

  renderGrid();

  // Filter buttons
  container.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.cat;
      container.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === activeFilter));
      renderGrid();
    });
  });

  // Modal close
  const modal = container.querySelector('.modal-overlay');
  container.querySelector('#modalClose').addEventListener('click', () => modal.classList.remove('active'));
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });
}
