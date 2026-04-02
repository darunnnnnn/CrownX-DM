import { initCounters } from '../animations.js';

export function renderHome(container) {
  container.innerHTML = `
    <!-- HERO -->
    <header class="hero" id="hero">
      <div class="hero-content reveal">
        <h1 class="hero-title">
          Good podcasts exist.<br/>
          <span class="accent">We get yours attention.</span>
        </h1>
        <p class="hero-subtitle reveal delay-2">
          Premium video-driven social media strategy for brands and creators at scale.
        </p>
      </div>
      <div class="hero-image-wrap reveal delay-3">
        <iframe src="https://my.spline.design/chips-mi0XsXCT7QZqOC9NVraN6uYi/" frameborder="0" width="100%" height="100%" style="border:none;" allow="autoplay" loading="lazy"></iframe>
      </div>
    </header>

    <!-- BOLD STATEMENT 1 -->
    <section class="bold-statement left">
      <div class="bold-statement-inner">
        <h2 class="reveal">
          We build brands that people <span class="muted">remember.</span>
        </h2>
      </div>
    </section>

    <!-- COUNTERS -->
    <section class="counters-section">
      <div class="counters-grid">
        <div class="counter-item reveal">
          <div class="counter-value" data-counter data-target="1000" data-suffix="+">0</div>
          <div class="counter-label">Projects Delivered</div>
        </div>
        <div class="counter-item reveal delay-1">
          <div class="counter-value" data-counter data-target="200" data-suffix="M+">0</div>
          <div class="counter-label">Global Views</div>
        </div>
        <div class="counter-item reveal delay-2">
          <div class="counter-value" data-counter data-target="100" data-suffix="+">0</div>
          <div class="counter-label">Active Brands</div>
        </div>
      </div>
    </section>

    <!-- BOLD STATEMENT 2 -->
    <section class="bold-statement right">
      <div class="bold-statement-inner" style="display:flex;justify-content:flex-end;">
        <h2 class="reveal" style="text-align:right;max-width:900px;">
          Content that performs, <span class="accent">not just exists.</span>
        </h2>
      </div>
    </section>

    <!-- CLIENT SUCCESS -->
    <section class="client-success-section" id="clientSuccess">
      <div class="client-success-inner">
        <div class="client-success-header">
          <h2 class="client-success-title reveal">Client Success<span class="accent-dot">.</span></h2>
          <p class="client-success-tagline reveal delay-1">MEASURED RESULTS IN A CROWDED DIGITAL LANDSCAPE</p>
        </div>
        <div class="carousel-wrapper reveal delay-2">
          <div class="carousel-track" id="clientCarouselTrack">
            <div class="client-card" data-tilt>
              <div class="client-card-glow"></div>
              <div class="client-card-content">
                <h3 class="client-card-metric">Scaled revenue by <span class="metric-highlight">300%</span></h3>
                <p class="client-card-desc">Through aggressive omnichannel scaling and premium content redirection for the global launch.</p>
                <div class="client-card-footer">
                  <span class="client-card-name">LUMINA LUXE</span>
                  <span class="client-card-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></span>
                </div>
              </div>
            </div>
            <div class="client-card" data-tilt>
              <div class="client-card-glow"></div>
              <div class="client-card-content">
                <h3 class="client-card-metric"><span class="metric-highlight">1.2M+</span> Community Growth</h3>
                <p class="client-card-desc">A complete brand overhaul that resonated with high-net-worth audiences across social platforms.</p>
                <div class="client-card-footer">
                  <span class="client-card-name">ZENITH COLLECTIVE</span>
                  <span class="client-card-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></span>
                </div>
              </div>
            </div>
            <div class="client-card" data-tilt>
              <div class="client-card-glow"></div>
              <div class="client-card-content">
                <h3 class="client-card-metric">Series B Ready in <span class="metric-highlight">6 Months</span></h3>
                <p class="client-card-desc">Strategic positioning and high-fidelity product visualization that captured investor attention.</p>
                <div class="client-card-footer">
                  <span class="client-card-name">QUANTUM PAY</span>
                  <span class="client-card-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></span>
                </div>
              </div>
            </div>
            <div class="client-card" data-tilt>
              <div class="client-card-glow"></div>
              <div class="client-card-content">
                <h3 class="client-card-metric"><span class="metric-highlight">5x</span> ROAS in 90 Days</h3>
                <p class="client-card-desc">Data-driven ad creative strategy combined with precise audience targeting that shattered industry benchmarks.</p>
                <div class="client-card-footer">
                  <span class="client-card-name">NOVA ATHLETICS</span>
                  <span class="client-card-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></span>
                </div>
              </div>
            </div>
            <div class="client-card" data-tilt>
              <div class="client-card-glow"></div>
              <div class="client-card-content">
                <h3 class="client-card-metric">From <span class="metric-highlight">0 to 500K</span> Followers</h3>
                <p class="client-card-desc">Full-funnel social media launch strategy with viral-first content architecture and influencer partnerships.</p>
                <div class="client-card-footer">
                  <span class="client-card-name">ECLAT BEAUTY</span>
                  <span class="client-card-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></span>
                </div>
              </div>
            </div>
            <div class="client-card" data-tilt>
              <div class="client-card-glow"></div>
              <div class="client-card-content">
                <h3 class="client-card-metric"><span class="metric-highlight">$12M</span> Pipeline Generated</h3>
                <p class="client-card-desc">Enterprise-grade thought leadership content and LinkedIn-first demand gen that converted C-suite attention.</p>
                <div class="client-card-footer">
                  <span class="client-card-name">APEX VENTURES</span>
                  <span class="client-card-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CAPABILITIES / SERVICES -->
    <section class="capabilities-section">
      <div class="capabilities-inner">
        <div class="capabilities-header reveal">
          <h3>Capabilities</h3>
          <p>Refined solutions for the modern digital landscape.</p>
        </div>
        <div class="capabilities-grid">
          <div class="capability-card reveal delay-1">
            <div class="capability-icon">
              <span class="material-symbols-outlined">brush</span>
            </div>
            <h4>Visual Identity</h4>
            <p>Crafting high-end aesthetics that define market leaders.</p>
          </div>
          <div class="capability-card reveal delay-2">
            <div class="capability-icon">
              <span class="material-symbols-outlined">videocam</span>
            </div>
            <h4>Content Strategy</h4>
            <p>Purpose-driven narrative architectures for scale.</p>
          </div>
          <div class="capability-card reveal delay-3">
            <div class="capability-icon">
              <span class="material-symbols-outlined">monitoring</span>
            </div>
            <h4>Growth Labs</h4>
            <p>Aggressive performance metrics backed by data.</p>
          </div>
          <div class="capability-card reveal delay-4">
            <div class="capability-icon">
              <span class="material-symbols-outlined">cloud_done</span>
            </div>
            <h4>Distribution</h4>
            <p>Securing eyes where they matter the most.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="final-cta">
      <h2 class="reveal">Ready to evolve?</h2>
      <div class="btn-wrap reveal delay-1">
        <a href="https://calendly.com/crownx-enquiry/30min" target="_blank" class="btn btn-primary btn-lg">Book Your Call</a>
      </div>
      <p class="cta-note reveal delay-2">Private consultations by appointment only</p>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
        <a href="#">Twitter</a>
      </div>
      <div class="footer-copy">© 2026 CrownX DIGITAL. ALL RIGHTS RESERVED.</div>
    </footer>
  `;

  setTimeout(() => initCounters(), 200);
  setTimeout(() => initMarquee(), 300);
}

function initMarquee() {
  const track = document.getElementById('clientCarouselTrack');
  if (!track) return;

  // Clone all cards for seamless infinite loop
  const cards = Array.from(track.querySelectorAll('.client-card'));
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    track.appendChild(clone);
  });

  // Pause on hover
  const wrapper = track.closest('.carousel-wrapper');
  wrapper.addEventListener('mouseenter', () => {
    track.style.animationPlayState = 'paused';
  });
  wrapper.addEventListener('mouseleave', () => {
    track.style.animationPlayState = 'running';
  });

  // Tilt effect on all cards (original + clones)
  track.querySelectorAll('.client-card').forEach(card => {
    const glow = card.querySelector('.client-card-glow');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

      if (glow) {
        glow.style.opacity = '1';
        glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(175,162,255,0.15) 0%, transparent 60%)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      if (glow) {
        glow.style.opacity = '0';
      }
    });
  });
}
