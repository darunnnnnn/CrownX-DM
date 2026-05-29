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
      <h2 class="section-title reveal delay-1">Let's build something<br/><span class="gradient-text">great together</span></h2>
      <p class="section-subtitle reveal delay-2" style="margin: 0 auto;">We don't do fixed packages — every brand is different. Reach out and let's talk about what works for you.</p>
    </section>

    <!-- Packages -->
    <section class="section" style="padding-top: 0;">
      <div class="packages-grid">

        <!-- ESSENTIAL -->
        <div class="package-card reveal delay-1">
          <div class="package-name">Essential</div>
          <div class="package-tagline">Starter Growth System</div>
          <p class="package-desc">For brands that want consistent digital presence without full-scale growth ops.</p>
          <ul class="package-features">
            <li class="included">Brand story development (foundation)</li>
            <li class="included">12 short-form content pieces (Reels/Shorts/TikTok)</li>
            <li class="included">Basic content scheduling</li>
            <li class="included">Light strategy guidance (monthly call)</li>
            <li class="included">Basic analytics report (monthly)</li>
            <li class="included">2 revisions per deliverable</li>
            <li class="included">Turnaround: 72 hours</li>
            <li class="not-included">Full account management</li>
            <li class="not-included">Paid ads management</li>
            <li class="not-included">Dedicated manager</li>
          </ul>
          <a href="https://calendly.com/crownx-enquiry/30min" target="_blank" class="btn btn-secondary" style="width:100%;">Book a Call</a>
        </div>

        <!-- PREMIUM -->
        <div class="package-card popular reveal delay-2">
          <div class="package-badge">Most Popular</div>
          <div class="package-name">Premium</div>
          <div class="package-tagline">Growth Engine</div>
          <p class="package-desc">For brands serious about growing their audience, sales, and digital presence.</p>
          <ul class="package-features">
            <li class="included">Full brand story development</li>
            <li class="included">24 short-form content pieces</li>
            <li class="included">Paid ads creative (Meta/Google)</li>
            <li class="included">Platform-specific growth strategy</li>
            <li class="included">Content calendar + scheduling</li>
            <li class="included">Bi-weekly strategy calls</li>
            <li class="included">Advanced analytics + insights</li>
            <li class="included">Dedicated account manager</li>
            <li class="included">Unlimited revisions</li>
            <li class="included">Turnaround: 48 hours</li>
          </ul>
          <a href="https://calendly.com/crownx-enquiry/30min" target="_blank" class="btn btn-primary" style="width:100%;">Book a Call</a>
        </div>

        <!-- GOLD -->
        <div class="package-card reveal delay-3">
          <div class="package-name">Gold</div>
          <div class="package-tagline">Full Brand Growth System</div>
          <p class="package-desc">For founders and brands who want end-to-end digital marketing domination — story, content, ads, and sales.</p>
          <ul class="package-features">
            <li class="included">Complete brand story + positioning</li>
            <li class="included">40+ content pieces across platforms</li>
            <li class="included">Full paid ads management (Meta, Google, TikTok)</li>
            <li class="included">Full content + distribution system (5 platforms)</li>
            <li class="included">Posting + platform management</li>
            <li class="included">Deep analytics + performance optimization</li>
            <li class="included">Sales funnel strategy + execution</li>
            <li class="included">Dedicated account manager + priority support</li>
            <li class="included">Weekly strategy calls</li>
            <li class="included">Unlimited revisions</li>
            <li class="included">Turnaround: 24–36 hours</li>
          </ul>
          <a href="https://calendly.com/crownx-enquiry/30min" target="_blank" class="btn btn-secondary" style="width:100%;">Book a Call</a>
        </div>

      </div>
    </section>

    <!-- Contact Strip -->
    <section class="section" style="padding-top: 0; padding-bottom: 80px;">
      <div class="contact-strip reveal">
        <div class="contact-strip-text">
          <div class="section-label" style="margin-bottom:12px;">✦ Get in Touch</div>
          <h3 class="contact-strip-heading">Not sure where to start?<br/>Just give us a call.</h3>
        </div>
        <div class="contact-strip-numbers">
          <a href="tel:7339223955" class="contact-number">+91 73392 23955</a>
          <a href="tel:7845142572" class="contact-number">+91 78451 42572</a>
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
          <h3 class="quick-title">Want to see what we can do?</h3>
          <p class="quick-desc">Let's hop on a quick call and figure out what your brand needs.</p>
          <a href="https://calendly.com/crownx-enquiry/30min" target="_blank" class="btn btn-secondary" style="width:100%; margin-top: auto;">Book a Call</a>
        </div>
        <div class="quick-card">
          <div class="quick-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.06-1.06a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          </div>
          <h3 class="quick-title">Contact us directly</h3>
          <p class="quick-desc">Reach out and we'll get back to you within 24 hours.</p>
          <a href="tel:7339223955" class="btn btn-secondary" style="width:100%; margin-top: auto;">Call Now</a>
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
              <li><span class="diff-icon bad">×</span>Just content creation, no real strategy</li>
              <li><span class="diff-icon bad">×</span>No focus on sales or revenue growth</li>
              <li><span class="diff-icon bad">×</span>Generic, templated content with no story</li>
              <li><span class="diff-icon bad">×</span>One-platform focus (no real positioning)</li>
              <li><span class="diff-icon bad">×</span>No understanding of brand identity</li>
              <li><span class="diff-icon bad">×</span>Outsourced, inconsistent quality</li>
            </ul>
          </div>
        </div>
        <div class="diff-col">
          <div class="diff-col-label gradient-text" style="font-weight:900;">CrownX</div>
          <div class="diff-card diff-good">
            <ul class="diff-list">
              <li><span class="diff-icon good">✓</span>Fast, proactive communication (we move with you)</li>
              <li><span class="diff-icon good">✓</span>We build stories — not just content</li>
              <li><span class="diff-icon good">✓</span>Strategy built around increasing your sales</li>
              <li><span class="diff-icon good">✓</span>Multi-platform growth (YouTube, LinkedIn, X, Instagram, TikTok)</li>
              <li><span class="diff-icon good">✓</span>Content built for attention, retention, and conversions</li>
              <li><span class="diff-icon good">✓</span>In-house creative team with a performance focus</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  `;
}
