import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Dr. David Walters',
  description: 'One of the only physicians in the United States with a PhD in reproductive endocrinology and 25 years of clinical experience in hormonal optimization.',
}

const credentials = [
  { abbr: 'DO', full: 'Doctor of Osteopathic Medicine' },
  { abbr: 'PhD', full: 'Reproductive Endocrinology' },
  { abbr: 'MBA', full: 'Healthcare Administration' },
  { abbr: '25+', full: 'Years Clinical Practice' },
  { abbr: '2×', full: 'CrossFit Games Competitor \'14 & \'16' },
  { abbr: 'Pub.', full: 'Published Research — Hormonal Health' },
]

const team = [
  {
    name: 'Dr. David Walters',
    role: 'Physician',
    creds: 'DO, PhD, MBA',
    bio: 'Dr. Walters sees patients in South Dakota via telemedicine and in Colorado at monthly in-person clinic visits in Colorado Springs. He personally uses and believes in every protocol he prescribes.',
  },
  {
    name: 'Jennifer Thompson',
    role: 'Office Manager',
    creds: 'Practice Administrator',
    bio: 'Jennifer manages the day-to-day administration of the clinic with precision and warmth. She handles scheduling, patient inquiries, paperwork, and the operational infrastructure that allows Dr. Walters to focus entirely on patient care.',
  },
  {
    name: 'Karlie',
    role: 'Medical Assistant',
    creds: 'MA, Phlebotomist, IV Technician',
    bio: 'Karlie serves as the clinical backbone of every in-person patient visit in South Dakota. Her energy, warmth, and clinical skill ensure every patient feels heard and well cared for. She has been a cornerstone of Dr. Walters\' practice for over 11 years.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container-wide">
          <div className="label animate-fade-up animate-delay-1" style={{ marginBottom: '1.5rem' }}>About</div>
          <blockquote className="animate-fade-up animate-delay-2" style={{ borderLeftColor: 'var(--coral)', fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', maxWidth: '800px', margin: '0 0 2rem 0' }}>
            One of the only physicians in the United States with a PhD in reproductive endocrinology and 25 years of clinical experience in hormonal optimization — for men and women of all ages.
          </blockquote>
        </div>
      </section>

      {/* Credential badges */}
      <section style={{ background: '#0A0A0A', borderBottom: '1px solid var(--border)', padding: '2rem 0' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1px', background: 'var(--border)' }}>
            {credentials.map((c, i) => (
              <div key={i} style={{ background: '#0A0A0A', padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-dm-serif)', fontSize: '1.8rem', color: 'var(--coral)', marginBottom: '0.25rem' }}>{c.abbr}</div>
                <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '0.62rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: '1.5' }}>{c.full}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="section-pad">
        <div className="container-narrow">
          {[
            {
              title: 'The research that changed everything',
              body: `Dr. Walters earned his PhD in reproductive endocrinology with a focus on ovarian oxytocin. At the time, oxytocin was classified exclusively as a brain peptide produced by the hypothalamus. His research demonstrated that the ovary also produces oxytocin — a finding that contradicted established medical teaching and contributed to a fundamental reclassification of the hormone. This early experience of following evidence against institutional consensus has defined his clinical philosophy ever since.`,
            },
            {
              title: 'From research to the bedside',
              body: `A drive to help people — not just study them — led Dr. Walters to leave academic research and earn an MBA. He took over management of a small rural hospital on the brink of financial failure and restored it to profitability within four years. So moved by the direct impact a single physician could have on a rural community, he enrolled in medical school at 40 years old.\n\nHe and his wife, along with their 10 children, relocated to Des Moines, Iowa, where Dr. Walters completed his medical degree (DO) and a Family Practice residency. The family then moved to southern Colorado, where his clinical career began.`,
            },
            {
              title: '25 years of hormonal medicine',
              body: `Over the course of his career, Dr. Walters' practice has evolved into a specialty clinic focused entirely on the restoration and optimization of hormones in male and female patients of all ages. His central focus is understanding why hormones become dysregulated in the first place — not simply replacing what has been lost.\n\nHis research and clinical experience converge on a clear answer: the population-level decline in testosterone that he has observed over 25 years is being driven, in significant part, by ubiquitous exposure to endocrine-disrupting chemicals (EDCs) that suppress the hypothalamic-pituitary-gonadal (HPG) axis. This is supported by decades of peer-reviewed research. And it demands a fundamentally different clinical response than prescribing testosterone replacement.`,
            },
            {
              title: 'Fitness as medicine',
              body: `Dr. Walters has used exercise as a clinical tool throughout his career. Fifteen years ago he discovered CrossFit and was so impressed by the results that he built his own CrossFit gym. He competed in the CrossFit Games in 2014 and 2016 in the 60+ age division. One of his patients who joined his gym in 2011 went on to win the 2015 CrossFit Games in the 60+ female division. He holds himself to the same standard he asks of his patients.`,
            },
          ].map((section, i) => (
            <div key={i} style={{ marginBottom: '3.5rem' }}>
              <div className="accent-line"/>
              <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', color: 'var(--off-white)', marginBottom: '1.25rem' }}>{section.title}</h2>
              {section.body.split('\n\n').map((para, j) => (
                <p key={j} className="prose-dark" style={{ marginBottom: '1rem' }}>{para}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Research */}
      <section style={{ background: '#0A0A0A', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }} className="section-pad">
        <div className="container-wide">
          <div className="label" style={{ marginBottom: '1rem' }}>Research & Publications</div>
          <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '2rem' }}>Key research areas</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {[
              'Endocrine-disrupting chemicals (EDCs) and HPG axis suppression in males',
              'Clomiphene citrate as a mechanistically targeted intervention for EDC-induced testosterone decline',
              'Population-level testosterone decline: causes, evidence, and clinical response',
              'Ovarian oxytocin: doctoral research findings',
            ].map((area, i) => (
              <div key={i} className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--coral)', fontFamily: 'var(--font-dm-mono)', fontSize: '0.8rem', marginTop: '2px', flexShrink: 0 }}>→</span>
                <span style={{ color: '#C8C3BC', fontSize: '0.925rem', lineHeight: '1.6' }}>{area}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/from-the-research" className="btn-secondary">See all research and key literature →</Link>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="label" style={{ marginBottom: '1rem' }}>The Team</div>
          <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '2.5rem' }}>Meet the practice</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {team.map((member, i) => (
              <div key={i} className="card">
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'var(--bg-elevated)',
                  border: '2px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-dm-serif)',
                  fontSize: '1.5rem',
                  color: 'var(--coral)',
                  marginBottom: '1.25rem',
                }}>
                  {member.name.charAt(0)}
                </div>
                <h3 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: '1.25rem', color: 'var(--off-white)', marginBottom: '0.25rem' }}>{member.name}</h3>
                <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '0.65rem', color: 'var(--coral)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{member.role}</div>
                <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.08em', marginBottom: '1rem' }}>{member.creds}</div>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: '1.65' }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Follow */}
      <section style={{ background: '#0A0A0A', borderTop: '1px solid var(--border)', padding: '4rem 0' }}>
        <div className="container-wide">
          <div className="label" style={{ marginBottom: '1rem' }}>Follow Dr. Walters</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            {[
              {
                platform: 'Substack — Medical Anarchy',
                desc: 'In-depth research, clinical perspective, and the unfiltered truth about hormonal health.',
                href: 'https://drdavidwalters.substack.com',
              },
              {
                platform: 'X — @DrDavidWalters1',
                desc: 'Daily commentary on hormonal medicine, EDC research, and the failures of mainstream medicine.',
                href: 'https://twitter.com/DrDavidWalters1',
              },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="card" style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '0.75rem', color: 'var(--coral)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>{s.platform}</div>
                <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: '1.6' }}>{s.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
