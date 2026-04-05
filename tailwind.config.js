import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'For Physicians — Referrals & Collegial Consultation',
  description: 'Dr. David Walters welcomes referrals and collegial consultation from physicians. PhD in reproductive endocrinology, 25 years clinical experience, EDC/clomiphene framework.',
}

export default function ForPhysiciansPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-wide">
          <div className="label animate-fade-up animate-delay-1" style={{ marginBottom: '1.5rem' }}>For Physicians</div>
          <h1 className="animate-fade-up animate-delay-2" style={{
            fontFamily: 'var(--font-dm-serif)',
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            maxWidth: '720px',
            marginBottom: '1.5rem',
          }}>
            Referrals &<br/>collegial consultation
          </h1>
          <p className="animate-fade-up animate-delay-3" style={{ fontSize: '1.05rem', color: '#A8A39C', maxWidth: '580px', lineHeight: '1.7' }}>
            Dr. David Walters welcomes referrals and collegial consultation from physicians across the country. He is available to discuss complex hormonal cases, share his clinical framework for EDC-induced HPG axis suppression, and accept appropriate patient referrals.
          </p>
        </div>
      </section>

      {/* Credentials */}
      <section style={{ background: '#0A0A0A', borderBottom: '1px solid var(--border)', padding: '3rem 0' }}>
        <div className="container-wide">
          <div className="label" style={{ marginBottom: '1.5rem' }}>Clinical Credentials</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: 'var(--border)' }}>
            {[
              { label: 'Doctor of Osteopathic Medicine (DO)' },
              { label: 'PhD, Reproductive Endocrinology', note: 'Post-doctoral research on ovarian oxytocin; findings that reclassified oxytocin from an exclusively brain-derived peptide to one also produced by the ovary' },
              { label: 'MBA, Healthcare Administration', note: 'Former CEO of a rural hospital' },
              { label: 'Family Practice Residency' },
              { label: '25+ Years Clinical Practice', note: 'Specializing in hormonal optimization in male and female patients of all ages' },
            ].map((c, i) => (
              <div key={i} style={{ background: '#0A0A0A', padding: '1.5rem 2rem' }}>
                <div style={{ color: 'var(--off-white)', fontSize: '0.95rem', fontWeight: 500, marginBottom: c.note ? '0.5rem' : 0 }}>{c.label}</div>
                {c.note && <div style={{ color: 'var(--muted)', fontSize: '0.825rem', lineHeight: '1.6' }}>{c.note}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical focus */}
      <section className="section-pad">
        <div className="container-narrow">
          <div className="accent-line"/>
          <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '1.5rem' }}>Clinical focus</h2>
          <p className="prose-dark">
            Dr. Walters' primary clinical and research focus is the hypothesis that population-level testosterone decline is driven in significant part by EDC-induced suppression of the HPG axis via estrogen receptor binding in the hypothalamus and pituitary.
          </p>
          <p className="prose-dark">
            His published work examines clomiphene citrate as a mechanistically targeted intervention: one that blocks the xenoestrogen signal at the receptor, restores normal HPG axis signaling, and allows endogenous testosterone production to resume without the fertility and dependency consequences of exogenous testosterone replacement.
          </p>
        </div>
      </section>

      {/* Literature */}
      <section style={{ background: '#0A0A0A', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }} className="section-pad">
        <div className="container-wide">
          <div className="label" style={{ marginBottom: '1rem' }}>Key Literature</div>
          <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', marginBottom: '2rem' }}>Foundational evidence base</h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {[
              {
                authors: 'Levine H, et al.',
                title: 'Temporal trends in sperm count: a systematic review and meta-regression analysis of 185 studies.',
                journal: 'Human Reproduction Update.',
                year: '2017',
                summary: 'Sperm counts in Western men fell by more than 52% between 1973 and 2011, with no sign of leveling off.',
                href: 'https://pubmed.ncbi.nlm.nih.gov/28981654/',
              },
              {
                authors: 'Travison TG, et al.',
                title: 'A population-level decline in serum testosterone levels in American men.',
                journal: 'Journal of Clinical Endocrinology & Metabolism.',
                year: '2007',
                summary: 'Average testosterone levels fell significantly between 1987 and 2004, independent of age.',
                href: 'https://pubmed.ncbi.nlm.nih.gov/17062768/',
              },
              {
                authors: 'Carlsen E, et al.',
                title: 'Evidence for decreasing quality of semen during the past 50 years.',
                journal: 'BMJ.',
                year: '1992',
                summary: 'The landmark meta-analysis that first documented sperm count decline and prompted decades of subsequent research.',
                href: 'https://pubmed.ncbi.nlm.nih.gov/1393072/',
              },
              {
                authors: 'Swan SH & Colino S.',
                title: 'Count Down.',
                journal: 'Scribner.',
                year: '2021',
                summary: 'Accessible synthesis of 20+ years of EDC research by one of the leading researchers in reproductive epidemiology.',
                href: null,
              },
            ].map((ref, i) => (
              <div key={i} className="card" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '0.7rem', color: 'var(--muted)', width: '40px', flexShrink: 0, marginTop: '2px' }}>{ref.year}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.925rem', color: 'var(--off-white)', marginBottom: '0.25rem' }}>
                    <em>{ref.authors}</em> {ref.title} <span style={{ color: 'var(--muted)' }}>{ref.journal}</span>
                  </div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: '1.5', marginTop: '0.25rem' }}>{ref.summary}</div>
                </div>
                {ref.href && (
                  <a href={ref.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '0.65rem', color: 'var(--sage)', textDecoration: 'none', letterSpacing: '0.08em', flexShrink: 0 }}>PubMed →</a>
                )}
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/from-the-research" className="btn-secondary">See full research library →</Link>
          </div>
        </div>
      </section>

      {/* Referral */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="label" style={{ marginBottom: '1rem' }}>Referral Information</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', marginBottom: '1.5rem' }}>Appropriate referral candidates</h2>
              {[
                'Young men (18–40) with low testosterone or hypogonadism not appropriate for conventional TRT',
                'Men of any age with suspected EDC-related HPG axis suppression',
                'Women with low testosterone and symptoms of hormonal imbalance at any age',
                'Complex hormonal presentations requiring comprehensive panel evaluation',
                'Patients seeking root-cause evaluation of fatigue, metabolic dysregulation, or reproductive concerns',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', padding: '0.6rem 0', borderBottom: i < 4 ? '1px solid var(--border)' : 'none' }}>
                  <span style={{ color: 'var(--coral)', fontFamily: 'var(--font-dm-mono)', fontSize: '0.75rem', marginTop: '2px', flexShrink: 0 }}>→</span>
                  <span style={{ color: '#C8C3BC', fontSize: '0.9rem', lineHeight: '1.5' }}>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', marginBottom: '1.5rem' }}>How to refer</h2>
              <div className="card" style={{ marginBottom: '1rem' }}>
                <div className="label" style={{ marginBottom: '0.5rem' }}>Phone</div>
                <a href="tel:7195440199" style={{ fontFamily: 'var(--font-dm-serif)', fontSize: '1.4rem', color: 'var(--off-white)', textDecoration: 'none' }}>(719) 544-0199</a>
                <p style={{ color: 'var(--muted)', fontSize: '0.875rem', marginTop: '0.5rem' }}>Jennifer Thompson, Office Manager, handles all referral intake and scheduling.</p>
              </div>
              <div className="card">
                <div className="label" style={{ marginBottom: '0.5rem' }}>Geographic reach</div>
                <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: '1.6' }}>Licensed in Colorado and South Dakota. SD patients establish care via telemedicine. CO patients require one initial in-person visit (monthly clinic in Colorado Springs), then continue via telemedicine.</p>
              </div>
              <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '4px', fontSize: '0.875rem', color: 'var(--muted)', lineHeight: '1.6' }}>
                For complex cases, Dr. Walters is available for a collegial phone consultation prior to formal referral. Please call the office to arrange.
              </div>
            </div>
          </div>
          <style>{`@media (max-width: 768px) { .ref-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* Further reading */}
      <section style={{ background: '#0A0A0A', borderTop: '1px solid var(--border)', padding: '4rem 0' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <div className="label" style={{ marginBottom: '1rem' }}>Further Reading</div>
          <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', marginBottom: '1rem' }}>Medical Anarchy on Substack</h2>
          <p style={{ color: 'var(--muted)', lineHeight: '1.7', marginBottom: '2rem' }}>
            Physicians interested in Dr. Walters' EDC/clomiphene framework will find a substantial body of referenced writing at Medical Anarchy on Substack, including his 20-part series "The Testosterone Crisis."
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://drdavidwalters.substack.com" target="_blank" rel="noopener noreferrer" className="btn-primary">Read on Substack</a>
            <Link href="/from-the-research" className="btn-secondary">Research library →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
