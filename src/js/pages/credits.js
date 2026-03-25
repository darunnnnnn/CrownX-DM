const creditCosts = {
  'instagram-reel': 20,
  'video-ad': 35,
  'brand-video': 50,
  'social-content': 15,
  'brand-identity': 80,
  'launch-campaign': 100,
};

export function renderCredits(container) {
  container.innerHTML = `
    <!-- Credit Hero -->
    <section class="section credits-hero">
      <div class="section-label reveal">✦ Credit System</div>
      <h2 class="section-title reveal delay-1">Power your vision with<br/><span class="gradient-text">CrownX Credits</span></h2>
      <p class="section-subtitle reveal delay-2" style="margin: 0 auto;">Purchase credits, request premium creative services, and track everything from one dashboard.</p>
      <div class="credit-balance-card reveal delay-3">
        <div>
          <div class="credit-balance-value gradient-text">120</div>
          <div class="credit-balance-label">Available Credits</div>
        </div>
        <a href="#" class="btn btn-primary">Buy More Credits</a>
      </div>
    </section>

    <!-- Packages -->
    <section class="section" style="padding-top: 0;">
      <div class="section-label reveal">✦ Credit Packages</div>
      <h2 class="section-title reveal delay-1">Choose your plan</h2>
      <div class="packages-grid">
        <div class="glass-card package-card reveal delay-1">
          <div class="package-credits">50 <span>credits</span></div>
          <div class="package-price">$99 <span>/ one-time</span></div>
          <ul class="package-features">
            <li>2–3 Instagram Reels</li>
            <li>Basic revisions included</li>
            <li>48-hour turnaround</li>
            <li>Standard support</li>
          </ul>
          <button class="btn btn-secondary" style="width:100%;">Select Plan</button>
        </div>
        <div class="glass-card package-card popular reveal delay-2">
          <div class="package-badge">Most Popular</div>
          <div class="package-credits">100 <span>credits</span></div>
          <div class="package-price">$179 <span>/ one-time</span></div>
          <ul class="package-features">
            <li>5–6 video projects</li>
            <li>Unlimited revisions</li>
            <li>24-hour priority turnaround</li>
            <li>Dedicated account manager</li>
          </ul>
          <button class="btn btn-primary" style="width:100%;">Select Plan</button>
        </div>
        <div class="glass-card package-card reveal delay-3">
          <div class="package-credits">250 <span>credits</span></div>
          <div class="package-price">$399 <span>/ one-time</span></div>
          <ul class="package-features">
            <li>12+ video projects</li>
            <li>Unlimited revisions</li>
            <li>Same-day turnaround</li>
            <li>VIP concierge support</li>
          </ul>
          <button class="btn btn-secondary" style="width:100%;">Select Plan</button>
        </div>
      </div>
    </section>

    <!-- Request Form -->
    <section class="section request-section" style="padding-top: 0;">
      <div class="works-header">
        <div class="section-label reveal">✦ Make a Request</div>
        <h2 class="section-title reveal delay-1">Request a <span class="gradient-text">creative service</span></h2>
        <p class="section-subtitle reveal delay-2" style="margin: 0 auto;">Select a service type, describe your vision, and we'll handle the rest.</p>
      </div>
      <div class="request-form-wrap reveal delay-3">
        <div class="form-group">
          <label class="form-label">Type of Video</label>
          <select class="form-select" id="serviceType">
            <option value="">Select a service...</option>
            <option value="instagram-reel">Instagram Reel</option>
            <option value="video-ad">Video Ad (Meta / Google / TikTok)</option>
            <option value="brand-video">Brand Storytelling Video</option>
            <option value="social-content">Social Media Content Pack</option>
            <option value="brand-identity">Brand Identity Package</option>
            <option value="launch-campaign">Product Launch Campaign</option>
          </select>
        </div>
        <div class="credit-cost-display" id="creditCostDisplay" style="display:none;">
          <span class="cost-label">This request will cost</span>
          <span class="cost-value" id="creditCostValue">0 credits</span>
        </div>
        <div class="form-group">
          <label class="form-label">Project Description</label>
          <textarea class="form-textarea" placeholder="Describe your vision, target audience, style references, and any specific requirements..."></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Upload Reference Files (Optional)</label>
          <div class="file-upload-area" id="fileUpload">
            <p>📁 Drag & drop files here or click to browse</p>
            <p style="margin-top: 6px; font-size: 0.8rem;">Supports images, videos, PDFs up to 50MB</p>
          </div>
        </div>
        <button class="btn btn-primary btn-lg" style="width: 100%;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
          Submit Request
        </button>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-brand"><span class="logo-crown">Crown</span><span class="logo-x" style="background:var(--gradient-primary);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">X</span></div>
      <p>© 2026 CrownX Digital Agency. All rights reserved.</p>
    </footer>
  `;

  // Dynamic credit cost
  const serviceSelect = container.querySelector('#serviceType');
  const costDisplay = container.querySelector('#creditCostDisplay');
  const costValue = container.querySelector('#creditCostValue');
  serviceSelect.addEventListener('change', () => {
    const cost = creditCosts[serviceSelect.value];
    if (cost) {
      costDisplay.style.display = 'flex';
      costValue.textContent = cost + ' credits';
    } else {
      costDisplay.style.display = 'none';
    }
  });
}
