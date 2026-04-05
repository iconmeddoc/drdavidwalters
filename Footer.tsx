import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Young Men & Low Testosterone',
  description: 'You\'re 25 years old. Your testosterone is low. And your doctor told you you\'re fine. You\'re not fine. Low testosterone in young men is not rare, not mysterious, and not untreatable.',
}

export default function YoungMenPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ background: 'linear-gradient(180deg, #0D0805 0%, var(--bg) 100%)' }}>
        <div className="container-wide">
          <div className="label animate-fade-up animate-delay-1" style={{ marginBottom: '1.5rem' }}>Young Men & Low Testosterone</div>
          <h1 className="animate-fade-up animate-delay-2" style={{
            fontFamily: 'var(--font-dm-serif)',
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            maxWidth: '820px',
            marginBottom: '1.5rem',
          }}>
            You're 25 years old. Your testosterone is low. And your doctor told you{' '}
            <span style={{ color: 'var(--coral)' }}>you're fine.</span>
          </h1>
          <p className="animate-fade-up animate-delay-3" style={{ fontSize: '1.1rem', color: '#A8A39C', maxWidth: '600px', lineHeight: '1.7', marginBottom: '2.5rem' }}>
            You're not fine. And you're not alone. Low testosterone in young men is not rare, not mysterious, and not untreatable. But it requires a physician who actually understands why it's happening — and most don't.
          </p>
          <div className="animate-fade-up animate-delay-4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/telemedicine" className="btn-primary">Book a consultation</Link>
            <Link href="/from-the-research" className="btn-secondary">Read the research →</Link>
          </div>
        </div>
      </section>

      {/* You are not imagining this */}
      <section className="section-pad">
        <div className="container-wide" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
          <div>
            <div className="accent-line"/>
            <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '1.5rem' }}>You are not imagining this</h2>
            <p className="prose-dark">
              If you are in your 20s or 30s and experiencing any of the symptoms listed here, your hormonal system may be significantly compromised.
            </p>
            <p className="prose-dark">
              These symptoms are real. They are measurable. And the medical profession is failing young men by either dismissing them or responding with a solution — testosterone replacement therapy — that is wrong for most young men and potentially harmful to long-term health.
            </p>
          </div>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '4px', padding: '2rem' }}>
            <div className="label" style={{ marginBottom: '1.25rem' }}>Symptoms</div>
            {[
              'Fatigue that sleep doesn\'t fix',
              'Difficulty building muscle despite consistent training',
              'Accumulating body fat, especially around your abdomen',
              'Low sex drive or erectile dysfunction',
              'Brain fog, difficulty concentrating, or memory problems',
              'Mood swings, irritability, anxiety, or depression',
              'Poor recovery from exercise',
              'Feeling like a 50-year-old in a 25-year-old body',
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.75rem', padding: '0.6rem 0', borderBottom: i < 7 ? '1px solid var(--border)' : 'none', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--coral)', fontFamily: 'var(--font-dm-mono)', fontSize: '0.75rem', marginTop: '2px', flexShrink: 0 }}>→</span>
                <span style={{ color: '#C8C3BC', fontSize: '0.9rem', lineHeight: '1.5' }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .two-col { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Why is this happening */}
      <section style={{ background: '#0A0A0A', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }} className="section-pad">
        <div className="container-narrow">
          <div className="accent-line"/>
          <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '1.5rem' }}>Why is this happening?</h2>
          <p className="prose-dark">
            The population-level testosterone decline in young men is one of the most significant underreported public health developments of the past 40 years. Multiple large studies document a decline of more than 1% per year in average testosterone levels since the 1980s. Sperm counts in Western men have fallen by more than 50% over the same period.
          </p>
          <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(232,97,74,0.3)', borderRadius: '4px', padding: '2rem', margin: '2rem 0' }}>
            <p style={{ fontFamily: 'var(--font-dm-serif)', fontSize: '1.3rem', color: 'var(--off-white)', lineHeight: '1.5', margin: 0 }}>
              This is not aging. This is not genetics. <span style={{ color: 'var(--coral)' }}>This is chemistry.</span>
            </p>
          </div>
          <p className="prose-dark">
            The scientific evidence points strongly to endocrine-disrupting chemicals (EDCs) — synthetic compounds found in plastics, food packaging, pesticides, tap water, and personal care products — that mimic estrogen and bind to receptors in the hypothalamus and pituitary. When these xenoestrogens bind to those receptors, they suppress the hormonal signals that tell your testes to produce testosterone. Your body is not broken. It is being chemically suppressed.
          </p>
          <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'var(--bg-elevated)', borderRadius: '4px', fontFamily: 'var(--font-dm-mono)', fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.05em' }}>
            Key studies: Levine et al. 2017 · Travison et al. 2007 · Swan et al. 2021 · <Link href="/from-the-research" style={{ color: 'var(--coral)', textDecoration: 'none' }}>See full literature →</Link>
          </div>
        </div>
      </section>

      {/* TRT vs Clomiphene */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="label" style={{ marginBottom: '1rem' }}>Treatment</div>
          <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)', marginBottom: '3rem', maxWidth: '600px', lineHeight: '1.2' }}>
            Why testosterone replacement is the wrong answer for most young men
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(232,97,74,0.2)', borderRadius: '4px', padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--coral)' }}/>
                <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '0.7rem', color: 'var(--coral)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Testosterone Replacement (TRT)</span>
              </div>
              {[
                'Signals the pituitary to stop producing LH and FSH',
                'Your testes shrink from disuse',
                'Natural testosterone production ceases',
                'Sperm count often drops to zero — functional infertility',
                'Stopping TRT is difficult; many men become permanently dependent',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', padding: '0.5rem 0', borderBottom: i < 4 ? '1px solid var(--border)' : 'none' }}>
                  <span style={{ color: 'var(--coral)', flexShrink: 0, marginTop: '2px' }}>✕</span>
                  <span style={{ color: '#C8C3BC', fontSize: '0.9rem', lineHeight: '1.5' }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(122,158,126,0.3)', borderRadius: '4px', padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--sage)' }}/>
                <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '0.7rem', color: 'var(--sage)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Clomiphene Citrate</span>
              </div>
              {[
                'Targets the mechanism of suppression, not the symptom',
                'Your testes continue to function normally',
                'Your own testosterone rises to optimal levels',
                'Fertility is preserved',
                'No external hormones — no permanent dependency',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', padding: '0.5rem 0', borderBottom: i < 4 ? '1px solid var(--border)' : 'none' }}>
                  <span style={{ color: 'var(--sage)', flexShrink: 0, marginTop: '2px' }}>✓</span>
                  <span style={{ color: '#C8C3BC', fontSize: '0.9rem', lineHeight: '1.5' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media (max-width: 640px) { .compare-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* Mechanism explainer */}
      <section style={{ background: '#0A0A0A', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }} className="section-pad">
        <div className="container-narrow">
          <div className="accent-line"/>
          <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '1.5rem' }}>The right answer: clomiphene citrate</h2>
          <p className="prose-dark">
            Clomiphene citrate takes a completely different approach. Instead of replacing your testosterone, it targets the mechanism causing your suppression.
          </p>
          <p className="prose-dark">
            EDCs suppress your testosterone by binding to estrogen receptors in your hypothalamus and pituitary. Clomiphene blocks those same receptors. When the xenoestrogen signal is blocked, your hypothalamus and pituitary resume normal function. They send LH and FSH to your testes. Your testes produce testosterone. <em>Your own testosterone. Naturally.</em>
          </p>
          <p className="prose-dark">
            Dr. Walters is among a small number of physicians who have articulated this framework publicly and applied it in clinical practice over many years. This is not experimental medicine. This is the correct application of established endocrinology to a modern problem.
          </p>
        </div>
      </section>

      {/* What to expect */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="label" style={{ marginBottom: '1rem' }}>What to Expect</div>
          <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '2.5rem' }}>As a patient</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              {
                step: '01',
                title: 'Your first visit',
                body: 'Dr. Walters takes a complete history — your symptoms, diet, environment, and chemical exposure history. He orders a comprehensive hormone panel including testosterone (total and free), LH, FSH, estradiol, SHBG, Vitamin D, thyroid, and other relevant markers.',
              },
              {
                step: '02',
                title: 'Your treatment plan',
                body: 'If clomiphene is appropriate for your situation, Dr. Walters will explain why, how it works, what to expect, and how your response will be monitored. Your plan is built for your biology, not a template.',
              },
              {
                step: '03',
                title: 'Where and how',
                body: 'South Dakota patients can establish care via secure video telemedicine — no in-person visit required. Colorado patients begin with one in-person visit at the monthly Colorado Springs clinic, then continue via telemedicine.',
              },
            ].map((s, i) => (
              <div key={i} className="card">
                <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '0.65rem', color: 'var(--coral)', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>{s.step}</div>
                <h3 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>{s.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: '1.65' }}>{s.body}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/telemedicine" className="btn-primary">Book your consultation</Link>
          </div>
        </div>
      </section>

      {/* Patient story */}
      <section style={{ background: '#0D0A09', borderTop: '1px solid rgba(232,97,74,0.15)', padding: '4rem 0' }}>
        <div className="container-narrow">
          <div className="label" style={{ marginBottom: '1.5rem' }}>Patient Story</div>
          <blockquote style={{ borderLeftColor: 'var(--coral)', fontSize: '1.15rem', lineHeight: '1.6' }}>
            "Dr. Walters found all the reasons why I felt the way I did — hypogonadism, low testosterone, low vitamin D. He prescribed the appropriate treatment, counseled me on nutrition, and I felt better than I had in years."
          </blockquote>
          <div style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
            <div style={{ fontFamily: 'var(--font-dm-serif)', fontSize: '1rem', color: 'var(--off-white)' }}>Cole G.</div>
            <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '2px' }}>Patient</div>
          </div>
          <div style={{ marginTop: '2rem', paddingLeft: '1.5rem' }}>
            <Link href="/patient-stories" style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '0.75rem', color: 'var(--coral)', textDecoration: 'none', letterSpacing: '0.05em' }}>Read all patient stories →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
