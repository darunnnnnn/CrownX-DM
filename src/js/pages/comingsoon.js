export function renderComingSoon(container) {
  container.innerHTML = `
    <section style="
      min-height: 100vh; display: flex; flex-direction: column;
      align-items: center; justify-content: center; text-align: center;
      padding: 40px 24px;
    ">
      <div style="max-width: 640px;">
        <div style="
          font-family: var(--font-label); font-size: 0.75rem; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.2em; color: var(--primary);
          margin-bottom: 32px;
        ">✦ Coming Soon</div>
        <h1 style="
          font-family: var(--font-headline); font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 900; letter-spacing: -0.04em; line-height: 1.05;
          color: var(--on-surface); margin-bottom: 24px;
        ">Something big<br/><span style="color: var(--primary); font-style: italic;">is coming.</span></h1>
        <p style="
          font-family: var(--font-body); font-size: 1.1rem; color: var(--on-surface-variant);
          line-height: 1.7; font-weight: 300; margin-bottom: 48px;
        ">We're building something powerful for you. The dashboard is on its way — stay tuned.</p>
        <a href="#/" class="btn btn-primary">Back to Home</a>
      </div>
    </section>
  `;
}
