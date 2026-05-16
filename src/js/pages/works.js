const projects = [
  { id: 1, title: 'Talking Head #1', category: 'Talking Head', desc: 'High-impact talking head content crafted for maximum audience retention.', color: '#7c3aed', video: 'https://drive.google.com/file/d/1Mq8DgGqt3i5WsgQfpwr_ORvB--bLHipP/preview', thumb: 'https://drive.google.com/thumbnail?id=1Mq8DgGqt3i5WsgQfpwr_ORvB--bLHipP&sz=w800' },
  { id: 2, title: 'Talking Head #2', category: 'Talking Head', desc: 'Engaging talking head video driving brand awareness and audience trust.', color: '#ec4899', video: 'https://drive.google.com/file/d/1tkBiIB_rM-OGAiepbRBKMsGpl4zDJaM-/preview', thumb: 'https://drive.google.com/thumbnail?id=1tkBiIB_rM-OGAiepbRBKMsGpl4zDJaM-&sz=w800' },
  { id: 3, title: 'Talking Head #3', category: 'Talking Head', desc: 'Premium talking head production delivering authentic storytelling at scale.', color: '#06b6d4', video: 'https://drive.google.com/file/d/1PnpSuTnnHsftqGbIZYRUTR_JxjzmEY05/preview', thumb: 'https://drive.google.com/thumbnail?id=1PnpSuTnnHsftqGbIZYRUTR_JxjzmEY05&sz=w800' },
  { id: 4, title: 'Talking Head #4', category: 'Talking Head', desc: 'Compelling talking head content built for conversion and credibility.', color: '#f59e0b', video: 'https://drive.google.com/file/d/1V8iaA7GddG5IoY81oMfV8vjKcSEmdp9v/preview', thumb: 'https://drive.google.com/thumbnail?id=1V8iaA7GddG5IoY81oMfV8vjKcSEmdp9v&sz=w800' },
  { id: 5, title: 'Talking Head #5', category: 'Talking Head', desc: 'Viral short-form talking head content crafted for social media growth.', color: '#10b981', video: 'https://drive.google.com/file/d/1QcUDPFXdyzJx1YQua0pJDZCCFK2OMK5J/preview', thumb: 'https://drive.google.com/thumbnail?id=1QcUDPFXdyzJx1YQua0pJDZCCFK2OMK5J&sz=w800' },
  { id: 6, title: 'Launch Vid', category: 'Launch Vids', desc: 'Multi-platform ad campaign for a SaaS startup achieving 340% ROAS within the first month.', color: '#3b82f6', video: 'https://drive.google.com/file/d/104dBD4oOOZ2ZUE37QoL0guYvhKKt-vqs/preview', thumb: 'https://drive.google.com/thumbnail?id=104dBD4oOOZ2ZUE37QoL0guYvhKKt-vqs&sz=w800' },
  { id: 7, title: 'Trailer #1', category: 'Trailers', desc: 'A cinematic brand film for a luxury wellness brand, premiered at a global lifestyle summit.', color: '#8b5cf6', video: 'https://drive.google.com/file/d/17iq4xHYmBVJDiHZ1TxXNqSKholwT4AaR/preview', thumb: 'https://drive.google.com/thumbnail?id=17iq4xHYmBVJDiHZ1TxXNqSKholwT4AaR&sz=w800' },
  { id: 8, title: 'Trailer #2', category: 'Trailers', desc: 'Complete social presence redesign for a fintech brand — 4x engagement growth in 90 days.', color: '#f59e0b', video: 'https://drive.google.com/file/d/1qWDHt-_4occmrma7AteALRmVUHe3d5s3/preview', thumb: 'https://drive.google.com/thumbnail?id=1qWDHt-_4occmrma7AteALRmVUHe3d5s3&sz=w800' },
  { id: 9, title: 'Trailer #3', category: 'Trailers', desc: 'A high-impact cinematic trailer crafted for maximum audience engagement.', color: '#06b6d4', video: 'https://drive.google.com/file/d/1p7eFy8GT3PLYExd4OUXV3ghQOm21RWVL/preview', thumb: 'https://drive.google.com/thumbnail?id=1p7eFy8GT3PLYExd4OUXV3ghQOm21RWVL&sz=w800' },
];

const categories = ['All', 'Talking Head', 'Launch Vids', 'Trailers'];

export function renderWorks(container) {
  let activeFilter = 'All';

  function getFiltered() {
    return activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);
  }

  function renderGrid() {
    const grid = container.querySelector('.works-grid');
    grid.classList.toggle('portrait', activeFilter === 'Talking Head');
    const filtered = getFiltered();
    grid.innerHTML = filtered.map((p, i) => `
      <div class="work-card reveal delay-${(i % 4) + 1}" data-id="${p.id}" style="background: linear-gradient(135deg, ${p.color}22, ${p.color}08); ${p.category === 'Talking Head' ? 'aspect-ratio:9/16;' : ''}">
        ${p.thumb
          ? `<img src="${p.thumb}" class="work-thumb" alt="${p.title}"/>`
          : `<div class="work-thumb-placeholder" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:3rem;opacity:0.15;">🎬</div>`
        }
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
    const videoEl = modal.querySelector('.modal-video');
    if (project.video) {
      videoEl.innerHTML = `<iframe src="${project.video}" width="100%" height="100%" allow="autoplay" style="border:none;"></iframe>`;
    } else {
      videoEl.innerHTML = `<svg viewBox="0 0 24 24" fill="rgba(255,255,255,0.2)"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
    }
    modal.classList.add('active');
  }

  container.innerHTML = `
    <section class="section" style="padding-top: calc(var(--nav-height) + 60px);">
      <div class="works-header">
        <div class="section-label reveal">✦ Our Work</div>
        <h2 class="section-title reveal delay-1">Work that<br/><span class="gradient-text">speaks volumes</span></h2>
        <p class="section-subtitle reveal delay-2" style="margin: 0 auto;">A curated selection of brand campaigns, story-driven content, and digital marketing work we've built for forward-thinking brands.</p>
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
  container.querySelector('#modalClose').addEventListener('click', () => {
    modal.classList.remove('active');
    modal.querySelector('.modal-video').innerHTML = '';
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      modal.querySelector('.modal-video').innerHTML = '';
    }
  });
}
