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

  `;
}
