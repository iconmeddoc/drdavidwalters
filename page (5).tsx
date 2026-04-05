@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #0E0E0E;
  --bg-card: #141414;
  --bg-elevated: #1A1A1A;
  --coral: #E8614A;
  --amber: #D4933A;
  --sage: #7A9E7E;
  --off-white: #F2EDE6;
  --muted: #8A8A8A;
  --border: #2A2A2A;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--bg);
  color: var(--off-white);
  font-family: var(--font-instrument-sans), sans-serif;
  font-size: 1rem;
  line-height: 1.6;
}

/* ── Typography ── */
h1, h2, h3, .font-serif {
  font-family: var(--font-dm-serif), Georgia, serif;
  font-weight: 400;
}

.font-mono, code {
  font-family: var(--font-dm-mono), monospace;
}

/* ── Grain overlay ── */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9999;
  opacity: 0.35;
}

/* ── Utility classes ── */
.section-pad {
  padding: 6rem 0;
}

.container-wide {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

.container-narrow {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 2rem;
}

.label {
  font-family: var(--font-dm-mono), monospace;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--coral);
}

.divider {
  border: none;
  border-top: 1px solid var(--border);
  margin: 4rem 0;
}

/* ── Cards ── */
.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 2rem;
  transition: border-color 0.2s, transform 0.2s;
}

.card:hover {
  border-color: #3A3A3A;
  transform: translateY(-2px);
}

/* ── Buttons ── */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--coral);
  color: #fff;
  font-family: var(--font-dm-mono), monospace;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.85rem 1.75rem;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, transform 0.15s;
}

.btn-primary:hover {
  background: #d14f38;
  transform: translateY(-1px);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: var(--off-white);
  font-family: var(--font-dm-mono), monospace;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.85rem 1.75rem;
  border-radius: 2px;
  border: 1px solid var(--border);
  cursor: pointer;
  text-decoration: none;
  transition: border-color 0.2s, transform 0.15s;
}

.btn-secondary:hover {
  border-color: var(--off-white);
  transform: translateY(-1px);
}

/* ── Accent line ── */
.accent-line {
  width: 40px;
  height: 2px;
  background: var(--coral);
  margin-bottom: 1.5rem;
}

/* ── Page hero ── */
.page-hero {
  padding: 9rem 0 5rem;
  border-bottom: 1px solid var(--border);
}

/* ── Prose ── */
.prose-dark {
  color: #C8C3BC;
  line-height: 1.75;
}

.prose-dark p {
  margin-bottom: 1.25rem;
}

.prose-dark ul {
  list-style: none;
  padding: 0;
}

.prose-dark ul li {
  padding: 0.4rem 0 0.4rem 1.5rem;
  position: relative;
  color: #C8C3BC;
}

.prose-dark ul li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--coral);
  font-family: var(--font-dm-mono), monospace;
  font-size: 0.85em;
}

/* ── Animations ── */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fadeUp 0.7s ease forwards;
}

.animate-delay-1 { animation-delay: 0.1s; opacity: 0; }
.animate-delay-2 { animation-delay: 0.25s; opacity: 0; }
.animate-delay-3 { animation-delay: 0.4s; opacity: 0; }
.animate-delay-4 { animation-delay: 0.55s; opacity: 0; }

/* ── Horizontal rule ── */
.hr-coral {
  border: none;
  border-top: 1px solid var(--coral);
  opacity: 0.3;
}

/* ── Quote ── */
blockquote {
  border-left: 3px solid var(--coral);
  padding-left: 1.5rem;
  margin: 2rem 0;
  font-family: var(--font-dm-serif), Georgia, serif;
  font-size: 1.2rem;
  color: var(--off-white);
  line-height: 1.5;
}

/* ── Tag chip ── */
.chip {
  display: inline-block;
  font-family: var(--font-dm-mono), monospace;
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.25rem 0.6rem;
  border-radius: 2px;
  background: rgba(232,97,74,0.12);
  color: var(--coral);
  border: 1px solid rgba(232,97,74,0.25);
}

.chip-amber {
  background: rgba(212,147,58,0.12);
  color: var(--amber);
  border-color: rgba(212,147,58,0.25);
}

.chip-sage {
  background: rgba(122,158,126,0.12);
  color: var(--sage);
  border-color: rgba(122,158,126,0.25);
}
