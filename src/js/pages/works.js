const projects = [
  // Normal
  { id: 1,  title: 'Normal #1',  category: 'Normal',  desc: 'Story-driven content built for real engagement and brand growth.', color: '#7c3aed', video: 'https://drive.google.com/file/d/1oRXeyFxTcNuYoer1Nt3K418S9Sf_6n_w/preview', thumb: 'https://drive.google.com/thumbnail?id=1oRXeyFxTcNuYoer1Nt3K418S9Sf_6n_w&sz=w800' },
  { id: 2,  title: 'Normal #2',  category: 'Normal',  desc: 'Authentic content crafted to connect brands with their audience.', color: '#ec4899', video: 'https://drive.google.com/file/d/11T0DtF9O_IfNsx4MqZhgoD5JL5Dn-HDp/preview', thumb: 'https://drive.google.com/thumbnail?id=11T0DtF9O_IfNsx4MqZhgoD5JL5Dn-HDp&sz=w800' },
  { id: 3,  title: 'Normal #3',  category: 'Normal',  desc: 'High-retention content designed to drive awareness and conversions.', color: '#06b6d4', video: 'https://drive.google.com/file/d/1-YOQ3DNOGKz1TX6R7yk7qqwOfBbBIiSu/preview', thumb: 'https://drive.google.com/thumbnail?id=1-YOQ3DNOGKz1TX6R7yk7qqwOfBbBIiSu&sz=w800' },
  { id: 4,  title: 'Normal #4',  category: 'Normal',  desc: 'Compelling brand content built for credibility and reach.', color: '#f59e0b', video: 'https://drive.google.com/file/d/1cZcU2Cc39apU_4Hsle8IU3K8h5mtwcNi/preview', thumb: 'https://drive.google.com/thumbnail?id=1cZcU2Cc39apU_4Hsle8IU3K8h5mtwcNi&sz=w800' },
  { id: 5,  title: 'Normal #5',  category: 'Normal',  desc: 'Short-form content engineered for social media growth and virality.', color: '#10b981', video: 'https://drive.google.com/file/d/1OdWR7H7t24C-FJpL08TZCwSqyjxHVEC3/preview', thumb: 'https://drive.google.com/thumbnail?id=1OdWR7H7t24C-FJpL08TZCwSqyjxHVEC3&sz=w800' },
  { id: 6,  title: 'Normal #6',  category: 'Normal',  desc: 'Performance-focused content that turns views into real results.', color: '#3b82f6', video: 'https://drive.google.com/file/d/1sSCDpQR9VF56yxKNQUa0ueGGliJjbW2t/preview', thumb: 'https://drive.google.com/thumbnail?id=1sSCDpQR9VF56yxKNQUa0ueGGliJjbW2t&sz=w800' },
  // Concept
  { id: 7,  title: 'Concept #1',  category: 'Concept', desc: 'A bold concept piece that pushes creative boundaries for the brand.', color: '#8b5cf6', video: 'https://drive.google.com/file/d/1kugFon92a437FhRgI7TWnKxLPjIYNckn/preview', thumb: 'https://drive.google.com/thumbnail?id=1kugFon92a437FhRgI7TWnKxLPjIYNckn&sz=w800' },
  { id: 8,  title: 'Concept #2',  category: 'Concept', desc: 'Visually striking concept content built to stop the scroll.', color: '#f59e0b', video: 'https://drive.google.com/file/d/1NEgm8ptwAswFbSVu_nQ92pXEuRmS3SeK/preview', thumb: 'https://drive.google.com/thumbnail?id=1NEgm8ptwAswFbSVu_nQ92pXEuRmS3SeK&sz=w800' },
  { id: 9,  title: 'Concept #3',  category: 'Concept', desc: 'Creative-first storytelling that makes the brand impossible to ignore.', color: '#06b6d4', video: 'https://drive.google.com/file/d/1wKJGwrnFHLi9WNpwC36-HnIBFC7gfPrt/preview', thumb: 'https://drive.google.com/thumbnail?id=1wKJGwrnFHLi9WNpwC36-HnIBFC7gfPrt&sz=w800' },
  { id: 10, title: 'Concept #4',  category: 'Concept', desc: 'Concept-driven campaign content designed for maximum brand impact.', color: '#ec4899', video: 'https://drive.google.com/file/d/1uqvUqPeykqTWeujgQgm-W4dzNFLZok2D/preview', thumb: 'https://drive.google.com/thumbnail?id=1uqvUqPeykqTWeujgQgm-W4dzNFLZok2D&sz=w800' },
  { id: 11, title: 'Concept #5',  category: 'Concept', desc: 'High-concept visual storytelling that elevates brand perception.', color: '#10b981', video: 'https://drive.google.com/file/d/1kxcAXHlm43fNNtxUedAoohbQzCFxb0ED/preview', thumb: 'https://drive.google.com/thumbnail?id=1kxcAXHlm43fNNtxUedAoohbQzCFxb0ED&sz=w800' },
  { id: 12, title: 'Concept #6',  category: 'Concept', desc: 'A cinematic concept piece crafted to build brand authority.', color: '#7c3aed', video: 'https://drive.google.com/file/d/13OlFWTkfKOQ4mZAZE2C9iBFR_0wclEVc/preview', thumb: 'https://drive.google.com/thumbnail?id=13OlFWTkfKOQ4mZAZE2C9iBFR_0wclEVc&sz=w800' },
  { id: 13, title: 'Concept #7',  category: 'Concept', desc: 'Story-led concept content that connects emotionally with the audience.', color: '#3b82f6', video: 'https://drive.google.com/file/d/12_1U6dFn6CRomgmd3puzYu8WkzxBMyI4/preview', thumb: 'https://drive.google.com/thumbnail?id=12_1U6dFn6CRomgmd3puzYu8WkzxBMyI4&sz=w800' },
  { id: 14, title: 'Concept #8',  category: 'Concept', desc: 'Bold creative execution that turns brand ideas into viral moments.', color: '#f59e0b', video: 'https://drive.google.com/file/d/1kZnvJ0qQMtL05Hol_wqIiGNUwA9zHrjl/preview', thumb: 'https://drive.google.com/thumbnail?id=1kZnvJ0qQMtL05Hol_wqIiGNUwA9zHrjl&sz=w800' },
  { id: 15, title: 'Concept #9',  category: 'Concept', desc: 'Concept-first content strategy that drives both reach and revenue.', color: '#06b6d4', video: 'https://drive.google.com/file/d/1NLzSEVaI4cOhlDhblltHLkHKuV9O9LrW/preview', thumb: 'https://drive.google.com/thumbnail?id=1NLzSEVaI4cOhlDhblltHLkHKuV9O9LrW&sz=w800' },
  { id: 16, title: 'Concept #10', category: 'Concept', desc: 'Premium concept content built to position the brand as a market leader.', color: '#8b5cf6', video: 'https://drive.google.com/file/d/1qteW6j79orK92S15Eyv-fY5QLIu3cxAM/preview', thumb: 'https://drive.google.com/thumbnail?id=1qteW6j79orK92S15Eyv-fY5QLIu3cxAM&sz=w800' },
];

const categories = ['All', 'Normal', 'Concept'];

export function renderWorks(container) {
  let activeFilter = 'All';

  function getFiltered() {
    return activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);
  }

  function renderGrid() {
    const grid = container.querySelector('.works-grid');
    grid.classList.toggle('portrait', activeFilter === 'Normal');
    const filtered = getFiltered();
    grid.innerHTML = filtered.map((p, i) => `
      <div class="work-card reveal delay-${(i % 4) + 1}" data-id="${p.id}" style="background: linear-gradient(135deg, ${p.color}22, ${p.color}08); ${p.category === 'Normal' ? 'aspect-ratio:9/16;' : ''}">
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
