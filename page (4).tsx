'use client'
import { useState } from 'react'
import Link from 'next/link'

const sections = [
  {
    section: 'About Dr. Walters & the Practice',
    color: 'var(--coral)',
    items: [
      {
        q: 'What makes Dr. Walters different from other hormone clinics?',
        a: 'Most hormone clinics measure a testosterone number and prescribe testosterone. Dr. Walters evaluates the entire HPG axis to understand why your hormones are dysregulated. He holds a PhD in reproductive endocrinology — a credential virtually no other hormone clinic physician holds — and has 25 years of clinical experience treating the root cause of hormonal decline, not just the symptoms.',
      },
      {
        q: 'Does Dr. Walters treat both men and women?',
        a: 'Yes. Dr. Walters treats male and female patients of all ages. His practice includes hormone optimization for menopause, andropause, low testosterone in young men, and complex hormonal presentations across the lifespan.',
      },
      {
        q: 'Where is Dr. Walters located?',
        a: 'Dr. Walters is based in South Dakota and holds a monthly two-day clinic in Colorado Springs, Colorado. South Dakota patients are seen via telemedicine or in person in his Hot Springs, SD clinic. Colorado patients are seen in person for their first visit, then via telemedicine. See the Telemedicine page for details.',
      },
      {
        q: 'Is Dr. Walters accepting new patients?',
        a: 'Yes. South Dakota patients can book a telemedicine appointment by calling (719) 544-0199. Colorado patients are seen at the monthly Colorado Springs clinic. Contact Jennifer Thompson, Office Manager, to schedule.',
      },
    ],
  },
  {
    section: 'For Young Men',
    color: 'var(--amber)',
    items: [
      {
        q: "I'm in my 20s and my testosterone is low. Can Dr. Walters help?",
        a: "Yes — and this is one of Dr. Walters' primary areas of focus. Low testosterone in young men is increasingly common and is often driven by endocrine-disrupting chemical (EDC) exposure that suppresses the HPG axis. For most young men, Dr. Walters uses clomiphene citrate rather than testosterone replacement — an approach that restores natural production without suppressing fertility or creating long-term dependency.",
      },
      {
        q: "Why won't Dr. Walters just give me testosterone?",
        a: "Exogenous testosterone signals your body to stop producing its own. For a young man, this typically results in testicular atrophy, reduced sperm production, and potential permanent fertility consequences. If your low testosterone is caused by EDC-induced HPG axis suppression, clomiphene addresses the mechanism of suppression rather than bypassing it. It is a fundamentally more appropriate treatment for most young men.",
      },
      {
        q: 'Will my insurance cover treatment?',
        a: 'Dr. Walters is a cash-pay practice and does not bill insurance. Lab work is ordered through major laboratories that bill insurance directly for insured patients.',
      },
    ],
  },
  {
    section: 'Telemedicine',
    color: 'var(--sage)',
    items: [
      {
        q: 'Can I see Dr. Walters without traveling to Colorado?',
        a: 'Yes. South Dakota patients can establish a complete physician-patient relationship via secure video telemedicine — no in-person visit required. Colorado patients require one in-person visit to the Colorado Springs clinic, after which all follow-up care can be via telemedicine.',
      },
      {
        q: 'What technology do I need?',
        a: 'Any device with a camera and microphone — smartphone, tablet, or computer. Dr. Walters uses Signal for secure video appointments.',
      },
      {
        q: 'Can Dr. Walters order labs remotely?',
        a: 'Yes. Labs are ordered through major national laboratories. You have your blood drawn at a local lab near you and the results are sent to Dr. Walters for review.',
      },
    ],
  },
  {
    section: 'Visits & Payment',
    color: 'var(--off-white)',
    items: [
      {
        q: 'What happens at my first appointment?',
        a: 'New patients complete intake paperwork (approximately 15 minutes before the appointment). The initial consultation with Dr. Walters takes 30–45 minutes: complete health and exposure history, symptom review, goal discussion, and lab orders. Initial visit: $195. Follow-up visits: $125.',
      },
      {
        q: 'Do you accept insurance?',
        a: 'No. Dr. Walters is a 100% cash-pay practice. He does not accept insurance, Medicare, or Medicaid. Accepted payment: cash, check, credit/debit card, CareCredit.',
      },
      {
        q: 'How many visits will I need?',
        a: 'Most patients need one to five visits for initial evaluation and protocol establishment. Ongoing monitoring typically involves quarterly or semi-annual follow-ups. More intensive programs (such as IV chelation) may involve 20 or more visits.',
      },
    ],
  },
  {
    section: 'Additional Services',
    color: 'var(--muted)',
    items: [
      {
        q: 'Do you offer prolotherapy for joint pain?',
        a: 'Yes. Dr. Walters has used prolotherapy — a non-surgical injection treatment for chronic joint pain — since 2001 and has personally used it to restore his own shoulder and back to full function. It is offered as part of a comprehensive health optimization approach, secondary to his primary focus on hormonal medicine.',
      },
      {
        q: 'Do you offer IV therapies?',
        a: 'Yes. IV nutritional therapies are available for energy, immune support, and detoxification as part of a broader health optimization plan.',
      },
    ],
  },
]

function AccordionItem({ q, a, accent }: { q: string; a: string; accent: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '1.25rem 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '1rem',
          textAlign: 'left',
        }}
      >
        <span style={{ fontFamily: 'var(--font-dm-serif)', fontSize: '1.05rem', color: 'var(--off-white)', lineHeight: '1.4', flex: 1 }}>{q}</span>
        <span style={{ color: accent, fontFamily: 'var(--font-dm-mono)', fontSize: '1rem', flexShrink: 0, marginTop: '2px', transition: 'transform 0.2s', transform: open ? 'rotate(45deg)' : 'none', display: 'inline-block' }}>+</span>
      </button>
      {open && (
        <div style={{ paddingBottom: '1.25rem', paddingRight: '2rem' }}>
          <p style={{ color: '#C8C3BC', lineHeight: '1.75', fontSize: '0.925rem' }}>{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-wide">
          <div className="label animate-fade-up animate-delay-1" style={{ marginBottom: '1.5rem' }}>FAQ</div>
          <h1 className="animate-fade-up animate-delay-2" style={{
            fontFamily: 'var(--font-dm-serif)',
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            maxWidth: '600px',
            marginBottom: '1.5rem',
          }}>
            Frequently asked questions
          </h1>
          <p className="animate-fade-up animate-delay-3" style={{ fontSize: '1rem', color: '#A8A39C', maxWidth: '520px', lineHeight: '1.7' }}>
            Real pre-visit questions, answered directly. Organized by audience.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-narrow">
          {sections.map((sec, i) => (
            <div key={i} style={{ marginBottom: '3.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '3px', height: '24px', background: sec.color, borderRadius: '2px' }}/>
                <div className="label" style={{ color: sec.color, marginBottom: 0 }}>{sec.section}</div>
              </div>
              {sec.items.map((item, j) => (
                <AccordionItem key={j} q={item.q} a={item.a} accent={sec.color} />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0A0A0A', borderTop: '1px solid var(--border)', padding: '4rem 0' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', marginBottom: '1rem' }}>Still have questions?</h2>
          <p style={{ color: 'var(--muted)', lineHeight: '1.7', marginBottom: '2rem' }}>Call the office directly — Jennifer Thompson will help you.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:7195440199" className="btn-primary">(719) 544-0199</a>
            <Link href="/telemedicine" className="btn-secondary">Book a consultation →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
