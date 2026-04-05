import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Telemedicine — South Dakota & Colorado',
  description: 'You don\'t have to live near a good doctor to have one. Dr. Walters offers secure telemedicine for SD patients (no in-person required) and CO patients (one visit, then telemedicine).',
}

export default function TelemedPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-wide">
          <div className="label animate-fade-up animate-delay-1" style={{ marginBottom: '1.5rem' }}>Telemedicine</div>
          <h1 className="animate-fade-up animate-delay-2" style={{
            fontFamily: 'var(--font-dm-serif)',
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            maxWidth: '700px',
            marginBottom: '1.5rem',
          }}>
            You don't have to live near a good doctor<br/>
            <span style={{ color: 'var(--sage)' }}>to have one.</span>
          </h1>
          <p className="animate-fade-up animate-delay-3" style={{ fontSize: '1.1rem', color: '#A8A39C', maxWidth: '580px', lineHeight: '1.7' }}>
            Dr. David Walters offers secure telemedicine appointments for patients in South Dakota and Colorado. South Dakota patients can establish care entirely online — no in-person visit required.
          </p>
        </div>
      </section>

      {/* Who qualifies */}
      <section className="section-pad" style={{ background: '#0A0A0A', borderBottom: '1px solid var(--border)' }}>
        <div className="container-wide">
          <div className="label" style={{ marginBottom: '1.5rem' }}>Who Qualifies</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(122,158,126,0.3)', borderRadius: '4px', padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--sage)' }}/>
                <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '0.7rem', color: 'var(--sage)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>South Dakota Patients</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>Full telemedicine from day one</h3>
              <p style={{ color: '#C8C3BC', fontSize: '0.9rem', lineHeight: '1.7' }}>
                If you are located in South Dakota, Dr. Walters can establish a complete physician-patient relationship via secure video. No in-person visit is required. You can receive a full consultation, have labs ordered locally, and begin treatment without leaving home. You may also be seen in person in his Hot Springs, SD clinic.
              </p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(212,147,58,0.3)', borderRadius: '4px', padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--amber)' }}/>
                <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '0.7rem', color: 'var(--amber)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Colorado Patients</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>One in-person visit, then telemedicine</h3>
              <p style={{ color: '#C8C3BC', fontSize: '0.9rem', lineHeight: '1.7' }}>
                Colorado law requires a physician to see a new patient in person at least once before establishing a telemedicine relationship. Dr. Walters holds a two-day in-person clinic in Colorado Springs, CO once per month. Colorado patients attend one in-person visit, after which all follow-up care is via telemedicine.
              </p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '4px', padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--muted)' }}/>
                <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Other States</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>Call the office</h3>
              <p style={{ color: '#C8C3BC', fontSize: '0.9rem', lineHeight: '1.7' }}>
                Dr. Walters is currently licensed in Colorado and South Dakota. If you are in another state, please call the office — we will let you know whether we can help or provide a referral recommendation.
              </p>
              <a href="tel:7195440199" style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '0.75rem', color: 'var(--off-white)', textDecoration: 'none', letterSpacing: '0.05em' }}>(719) 544-0199</a>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-pad">
        <div className="container-narrow">
          <div className="accent-line"/>
          <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '2rem' }}>How a telemedicine visit works</h2>
          {[
            { step: '01', title: 'Book', desc: 'Schedule online below or call (719) 544-0199. Jennifer Thompson, Office Manager, will help you.' },
            { step: '02', title: 'Prepare', desc: 'Receive a secure video link before your appointment. Complete intake paperwork (approximately 15 minutes).' },
            { step: '03', title: 'Connect', desc: 'Join at your scheduled time from any device — phone, tablet, or computer. Dr. Walters uses Signal for secure video.' },
            { step: '04', title: 'Investigate', desc: 'Dr. Walters conducts a full consultation: health history, symptom review, exposure history, and goals. Lab orders are sent to a laboratory near you.' },
            { step: '05', title: 'Review', desc: 'You have your blood drawn locally. Dr. Walters reviews results and follows up to discuss findings and your treatment plan.' },
            { step: '06', title: 'Begin', desc: 'Prescriptions are sent to one of our compounding pharmacies. Most patients notice improvement within 3–4 weeks.' },
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '2rem', padding: '1.5rem 0', borderBottom: i < 5 ? '1px solid var(--border)' : 'none' }}>
              <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '0.7rem', color: 'var(--coral)', letterSpacing: '0.1em', width: '24px', flexShrink: 0, marginTop: '2px' }}>{s.step}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-dm-serif)', fontSize: '1.1rem', color: 'var(--off-white)', marginBottom: '0.35rem' }}>{s.title}</div>
                <div style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech + Payment */}
      <section style={{ background: '#0A0A0A', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }} className="section-pad">
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div>
              <div className="label" style={{ marginBottom: '1rem' }}>Technology</div>
              <p style={{ color: '#C8C3BC', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '0.5rem' }}>
                Any smartphone, tablet, or computer with a camera and microphone. A reliable internet connection.
              </p>
              <p style={{ color: '#C8C3BC', fontSize: '0.9rem', lineHeight: '1.7' }}>
                Dr. Walters uses Signal for secure video appointments.
              </p>
            </div>
            <div>
              <div className="label" style={{ marginBottom: '1rem' }}>Payment</div>
              <p style={{ color: '#C8C3BC', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                Dr. Walters operates a 100% cash-pay practice and does not accept insurance, Medicare, or Medicaid.
              </p>
              <div style={{ display: 'flex', gap: '2rem' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-dm-serif)', fontSize: '1.8rem', color: 'var(--off-white)' }}>$195</div>
                  <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '0.62rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Initial consultation</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-dm-serif)', fontSize: '1.8rem', color: 'var(--off-white)' }}>$125</div>
                  <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '0.62rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Follow-up visits</div>
                </div>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '0.8rem', marginTop: '0.75rem' }}>Accepted: cash, check, credit/debit card, CareCredit</p>
            </div>
            <div>
              <div className="label" style={{ marginBottom: '1rem' }}>Labs</div>
              <p style={{ color: '#C8C3BC', fontSize: '0.9rem', lineHeight: '1.7' }}>
                Labs are ordered through major national laboratories. For insured patients, the lab bills insurance directly. For cash-pay patients, Dr. Walters offers a discounted in-clinic blood draw sent to Access Medical Laboratory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book */}
      <section className="section-pad">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <div className="label" style={{ marginBottom: '1rem' }}>Book an Appointment</div>
          <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1rem' }}>Ready to get started?</h2>
          <p style={{ color: 'var(--muted)', lineHeight: '1.7', marginBottom: '2.5rem', fontSize: '0.95rem' }}>
            Call us to schedule, or email Jennifer Thompson, Office Manager, to arrange your first appointment.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <a href="tel:7195440199" className="btn-primary">(719) 544-0199</a>
          </div>
          <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.05em' }}>
            Jennifer Thompson, Office Manager · Mon–Fri, business hours
          </p>
        </div>
      </section>
    </>
  )
}
