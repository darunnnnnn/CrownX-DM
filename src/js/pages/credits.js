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
      <div class="section-label reveal">✦ Pricing</div>
      <h2 class="section-title reveal delay-1">Simple, transparent<br/><span class="gradient-text">pricing</span></h2>
      <p class="section-subtitle reveal delay-2" style="margin: 0 auto;">Choose the plan that fits your growth stage. Every plan includes a strategy call to get you started.</p>
    </section>

    <!-- Packages -->
    <section class="section" style="padding-top: 0;">
      <div class="packages-grid">

        <!-- ESSENTIAL -->
        <div class="package-card reveal delay-1">
          <div class="package-name">Essential</div>
          <div class="package-tagline">Starter Growth System</div>
          <div class="package-price">$799 <span>/ month</span></div>
          <p class="package-desc">For creators who want consistency without full-scale growth ops.</p>
          <ul class="package-features">
            <li class="included">Podcast video editing (4 episodes/month)</li>
            <li class="included">12 short-form clips (Reels/Shorts)</li>
            <li class="included">Basic content scheduling</li>
            <li class="included">Light strategy guidance (monthly call)</li>
            <li class="included">Basic analytics report (monthly)</li>
            <li class="included">2 revisions per video</li>
            <li class="included">Turnaround: 72 hours</li>
            <li class="not-included">Full account management</li>
            <li class="not-included">Advanced growth strategy</li>
            <li class="not-included">Dedicated manager</li>
          </ul>
          <a href="https://calendly.com/crownx-enquiry/30min" target="_blank" class="btn btn-secondary" style="width:100%;">Get Started</a>
        </div>

        <!-- PREMIUM -->
        <div class="package-card popular reveal delay-2">
          <div class="package-badge">Most Popular</div>
          <div class="package-name">Premium</div>
          <div class="package-tagline">Growth Engine</div>
          <div class="package-price">$1,199 <span>/ month</span></div>
          <p class="package-desc">For serious podcasters who want to grow audience + brand.</p>
          <ul class="package-features">
            <li class="included">Podcast editing (8 episodes/month)</li>
            <li class="included">24 short-form clips</li>
            <li class="included">Production assistance (virtual guidance)</li>
            <li class="included">Platform-specific growth strategy</li>
            <li class="included">Content calendar + scheduling</li>
            <li class="included">Bi-weekly strategy calls</li>
            <li class="included">Advanced analytics + insights</li>
            <li class="included">Dedicated account manager</li>
            <li class="included">Unlimited revisions</li>
            <li class="included">Turnaround: 48 hours</li>
          </ul>
          <a href="https://calendly.com/crownx-enquiry/30min" target="_blank" class="btn btn-primary" style="width:100%;">Get Started</a>
        </div>

        <!-- GOLD -->
        <div class="package-card reveal delay-3">
          <div class="package-name">Gold</div>
          <div class="package-tagline">Full Podcast Growth System</div>
          <div class="package-price">$1,999 <span>/ month</span></div>
          <p class="package-desc">For founders, brands, and serious creators who want end-to-end domination.</p>
          <ul class="package-features">
            <li class="included">Podcast editing (12–16 episodes/month)</li>
            <li class="included">40+ short-form clips</li>
            <li class="included">Full growth strategy + positioning</li>
            <li class="included">Full content + distribution system (5 platforms)</li>
            <li class="included">Posting + platform management</li>
            <li class="included">Deep analytics + performance optimization</li>
            <li class="included">Production consultation (remote guidance)</li>
            <li class="included">Dedicated account manager + priority support</li>
            <li class="included">Weekly strategy calls</li>
            <li class="included">Unlimited revisions</li>
            <li class="included">Turnaround: 24–36 hours</li>
          </ul>
          <a href="https://calendly.com/crownx-enquiry/30min" target="_blank" class="btn btn-secondary" style="width:100%;">Get Started</a>
        </div>

      </div>
    </section>

    <!-- Quick Action Cards -->
    <section class="section" style="padding-top: 0; padding-bottom: 80px;">
      <div class="quick-cards">
        <div class="quick-card">
          <div class="quick-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="2" y="7" width="15" height="10" rx="2"/><path d="M17 9l5-2v10l-5-2"/></svg>
          </div>
          <h3 class="quick-title">One-off Video <span style="text-decoration:line-through; color:var(--on-surface-variant); font-weight:400;">($199)</span><br/>Try for just <span class="gradient-text">$49.99</span></h3>
          <p class="quick-desc">Not sure about the subscription?</p>
          <a href="https://calendly.com/crownx-enquiry/30min" target="_blank" class="btn btn-secondary" style="width:100%; margin-top: auto;">Get your first video</a>
        </div>
        <div class="quick-card">
          <div class="quick-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.06-1.06a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          </div>
          <h3 class="quick-title">Book a call</h3>
          <p class="quick-desc">Learn more about how CrownX works.</p>
          <a href="https://calendly.com/crownx-enquiry/30min" target="_blank" class="btn btn-secondary" style="width:100%; margin-top: auto;">Book a call</a>
        </div>
      </div>
    </section>

    <!-- Differentiation -->
    <section class="section diff-section" style="padding-top: 0; padding-bottom: 120px;">
      <h2 class="diff-heading reveal">But, why would you<br/>want to work <span class="accent">with us?</span></h2>
      <div class="diff-grid reveal delay-1">
        <div class="diff-col">
          <div class="diff-col-label">Other Agencies</div>
          <div class="diff-card diff-bad">
            <ul class="diff-list">
              <li><span class="diff-icon bad">×</span>Slow, reactive communication</li>
              <li><span class="diff-icon bad">×</span>Just editing, no real growth strategy</li>
              <li><span class="diff-icon bad">×</span>One-platform focus (no real positioning)</li>
              <li><span class="diff-icon bad">×</span>Generic, templated content styles</li>
              <li><span class="diff-icon bad">×</span>No understanding of creator economy</li>
              <li><span class="diff-icon bad">×</span>Outsourced, inconsistent quality</li>
            </ul>
          </div>
        </div>
        <div class="diff-col">
          <div class="diff-col-label gradient-text" style="font-weight:900;">CrownX</div>
          <div class="diff-card diff-good">
            <ul class="diff-list">
              <li><span class="diff-icon good">✓</span>Fast, proactive communication (we move with you)</li>
              <li><span class="diff-icon good">✓</span>Strategy + execution (not just editing)</li>
              <li><span class="diff-icon good">✓</span>Multi-platform growth (YouTube, LinkedIn, X, Instagram, TikTok, Substack, Bluesky)</li>
              <li><span class="diff-icon good">✓</span>Content built for attention, retention, and virality</li>
              <li><span class="diff-icon good">✓</span>Deep understanding of creators, podcasts, and tech space</li>
              <li><span class="diff-icon good">✓</span>In-house creative team with performance focus</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  `;
}
