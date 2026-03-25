export function renderDashboard(container) {
  container.innerHTML = `
    <div class="dashboard-layout">
      <aside class="sidebar">
        <div style="font-family:var(--font-heading);font-size:0.85rem;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:1.5px;padding:0 16px;margin-bottom:8px;">Dashboard</div>
        <nav class="sidebar-nav">
          <a class="sidebar-link active" data-tab="overview">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
            Home
          </a>
          <a class="sidebar-link" data-tab="requests">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            My Requests
          </a>
          <a class="sidebar-link" data-tab="credits">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
            Credits
          </a>
          <a class="sidebar-link" data-tab="settings">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
            Settings
          </a>
        </nav>
      </aside>

      <div class="dash-main">
        <div class="dash-header">
          <h1 class="dash-title">Welcome back, Alex 👋</h1>
          <a href="#/credits" class="btn btn-primary btn-sm">Buy Credits</a>
        </div>

        <!-- Stats -->
        <div class="dash-grid">
          <div class="glass-card dash-stat-card">
            <div class="stat-label">Active Projects</div>
            <div class="stat-value gradient-text">4</div>
            <div class="stat-change">↑ 2 this week</div>
          </div>
          <div class="glass-card dash-stat-card">
            <div class="stat-label">Completed</div>
            <div class="stat-value">28</div>
            <div class="stat-change">↑ 5 this month</div>
          </div>
          <div class="glass-card dash-stat-card">
            <div class="stat-label">Credits Remaining</div>
            <div class="stat-value gradient-text">120</div>
            <div class="stat-change" style="color:var(--text-muted);">of 250 purchased</div>
          </div>
          <div class="glass-card dash-stat-card">
            <div class="stat-label">Avg. Turnaround</div>
            <div class="stat-value">18h</div>
            <div class="stat-change">↓ 4h improvement</div>
          </div>
        </div>

        <!-- Active Projects Table -->
        <div class="dash-table-section">
          <h3 class="dash-table-title">Active Projects</h3>
          <div class="glass-card" style="padding:0;overflow:hidden;">
            <table class="dash-table">
              <thead>
                <tr><th>Project</th><th>Type</th><th>Credits</th><th>Status</th><th>Due</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Summer Drop Reel</strong></td>
                  <td>Instagram Reel</td>
                  <td>20</td>
                  <td><span class="status-badge active">In Progress</span></td>
                  <td>Mar 28</td>
                </tr>
                <tr>
                  <td><strong>Meta Conversion Ad</strong></td>
                  <td>Video Ad</td>
                  <td>35</td>
                  <td><span class="status-badge active">In Progress</span></td>
                  <td>Mar 30</td>
                </tr>
                <tr>
                  <td><strong>Brand Story — Series 2</strong></td>
                  <td>Brand Video</td>
                  <td>50</td>
                  <td><span class="status-badge pending">Pending Review</span></td>
                  <td>Apr 2</td>
                </tr>
                <tr>
                  <td><strong>TikTok Ad Variants</strong></td>
                  <td>Video Ad</td>
                  <td>35</td>
                  <td><span class="status-badge active">In Progress</span></td>
                  <td>Apr 5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Completed Projects -->
        <div class="dash-table-section">
          <h3 class="dash-table-title">Recently Completed</h3>
          <div class="glass-card" style="padding:0;overflow:hidden;">
            <table class="dash-table">
              <thead>
                <tr><th>Project</th><th>Type</th><th>Credits</th><th>Status</th><th>Delivered</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Product Launch Teaser</strong></td>
                  <td>Launch Campaign</td>
                  <td>100</td>
                  <td><span class="status-badge completed">Completed</span></td>
                  <td>Mar 20</td>
                </tr>
                <tr>
                  <td><strong>Q1 Social Pack</strong></td>
                  <td>Social Content</td>
                  <td>15</td>
                  <td><span class="status-badge completed">Completed</span></td>
                  <td>Mar 18</td>
                </tr>
                <tr>
                  <td><strong>Brand Refresh Assets</strong></td>
                  <td>Brand Identity</td>
                  <td>80</td>
                  <td><span class="status-badge completed">Completed</span></td>
                  <td>Mar 12</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Credit Usage History -->
        <div class="dash-table-section">
          <h3 class="dash-table-title">Credit Usage — Last 6 Months</h3>
          <div class="glass-card">
            <div class="usage-bars" id="usageBars">
              <div class="usage-bar-item"><span class="usage-bar-label">Oct</span><div class="usage-bar-track"><div class="usage-bar-fill" data-width="45%"></div></div><span class="usage-bar-value">45</span></div>
              <div class="usage-bar-item"><span class="usage-bar-label">Nov</span><div class="usage-bar-track"><div class="usage-bar-fill" data-width="70%"></div></div><span class="usage-bar-value">70</span></div>
              <div class="usage-bar-item"><span class="usage-bar-label">Dec</span><div class="usage-bar-track"><div class="usage-bar-fill" data-width="55%"></div></div><span class="usage-bar-value">55</span></div>
              <div class="usage-bar-item"><span class="usage-bar-label">Jan</span><div class="usage-bar-track"><div class="usage-bar-fill" data-width="85%"></div></div><span class="usage-bar-value">85</span></div>
              <div class="usage-bar-item"><span class="usage-bar-label">Feb</span><div class="usage-bar-track"><div class="usage-bar-fill" data-width="60%"></div></div><span class="usage-bar-value">60</span></div>
              <div class="usage-bar-item"><span class="usage-bar-label">Mar</span><div class="usage-bar-track"><div class="usage-bar-fill" data-width="35%"></div></div><span class="usage-bar-value">35</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Animate usage bars on render
  setTimeout(() => {
    container.querySelectorAll('.usage-bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.width;
    });
  }, 300);

  // Sidebar tab switching
  container.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      container.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
}
