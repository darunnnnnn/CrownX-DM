import { initCounters } from '../animations.js';

export function renderHome(container) {
  container.innerHTML = `
    <!-- HERO -->
    <header class="hero" id="hero">
      <div class="hero-content reveal">
        <h1 class="hero-title">
          We don't create content.<br/>
          <span class="accent">We create impact.</span>
        </h1>
        <p class="hero-subtitle reveal delay-2">
          Elevating digital narratives through architectural design and high-performance strategy.
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
          <div class="counter-value" data-counter data-target="500" data-suffix="+">0</div>
          <div class="counter-label">Projects Delivered</div>
        </div>
        <div class="counter-item reveal delay-1">
          <div class="counter-value" data-counter data-target="10" data-suffix="M+">0</div>
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
        <a href="#/credits" class="btn btn-primary btn-lg">Start Your Project</a>
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
      <div class="footer-copy">© 2026 CROWNX DIGITAL. ALL RIGHTS RESERVED.</div>
    </footer>
  `;

  setTimeout(() => initCounters(), 200);
}
