'use client'
import { useState } from 'react'
import Link from 'next/link'

const stories = [
  {
    id: 'cole',
    name: 'Cole G.',
    tag: 'Patient',
    filters: ['all', 'young-men'],
    pull: 'Dr. Walters found all the reasons why I felt the way I did — hypogonadism, low testosterone, low vitamin D. He prescribed the right treatment and I felt better than I had felt in years.',
    full: `When I first came to Dr. Walters, I had been dismissed by multiple physicians who told me my labs were "normal." I was exhausted, couldn't build muscle despite training consistently, and felt like a shell of myself at 27 years old. Dr. Walters was the first physician who actually dug into why my testosterone was low — not just what the number was. He identified hypogonadism, low testosterone, and low Vitamin D as connected pieces of the same puzzle. He prescribed the appropriate treatment, counseled me on nutrition and chemical exposures, and within a few weeks I felt better than I had felt in years. I wish I had found him sooner.`,
  },
  {
    id: 'bob',
    name: 'Bob R.',
    tag: 'Retired US Navy SEAL Officer',
    filters: ['all', 'men', 'veterans'],
    pull: 'Doc Walters is more than my physician. He is one of my most trusted mentors. I have never had a doctor care as much or invest as much in me as he has over these last six years.',
    full: `I came to Dr. Walters after years of feeling like my body was working against me despite everything I had done in my career to stay physically elite. What I found was a physician who actually wanted to understand the root cause — not just manage symptoms. Over six years, he has transformed how I think about health, performance, and aging. He is constantly researching and finding new ways to live a healthier, stronger life — and that only benefits us, his lucky patients. Doc Walters is more than my physician. He is one of my most trusted mentors.`,
  },
  {
    id: 'william',
    name: 'William L.',
    tag: 'Veteran',
    filters: ['all', 'men', 'veterans'],
    pull: 'At 45 years old, I feel like and I\'m performing as if I am back in my late 20s. Lab tests show how much my medical health has improved — but I could never quantify how much more my quality of life has improved.',
    full: `Before working with Dr. Walters, I had accepted that how I felt was just what getting older looked like. I was wrong. At 45 years old, I feel like I'm performing as if I'm back in my late 20s. The lab tests confirm it — objective markers of health across the board have improved significantly. But numbers don't capture what this has actually meant for my daily life, my relationships, and my sense of self. I could never quantify how much my quality of life has improved. Dr. Walters gave me that.`,
  },
  {
    id: 'janet',
    name: 'Janet Z.',
    tag: 'Patient of 12+ Years',
    filters: ['all', 'women'],
    pull: 'Dr. Walters has unequivocally helped me with every condition I came to him with. He does not treat the symptom — he treats the root cause. He gives you hope and the tools for self-empowering control.',
    full: `I have been a patient of Dr. Walters for over twelve years. In that time, he has helped me with osteoporosis, extreme depression, insomnia, postmenopausal symptoms, and so much more. What sets him apart is that he doesn't just hand you a prescription and move on. He sits with you, listens deeply, and actually figures out why your body is struggling. He does not treat the symptom — he treats the root cause. He gives you hope and the tools for self-empowering control over your own health. I cannot imagine where I would be without his care.`,
  },
  {
    id: 'tammy',
    name: 'Tammy G.',
    tag: 'Patient',
    filters: ['all', 'women'],
    pull: 'Dr. Walters will really take the time to sit and listen to everything you tell him. You can tell he really cares. Besides being an outstanding doctor, he is one of the kindest people we\'ve ever known.',
    full: `Dr. Walters will really take the time to sit and listen to everything you tell him — and you can tell immediately that he actually cares. It's not a performance. He is genuinely invested in your health and wellbeing. My whole family has been touched by his care. Besides being an outstanding doctor with an incredible depth of knowledge, he is one of the kindest people we've ever known. We feel fortunate to have found him.`,
  },
  {
    id: 'mansoor',
    name: 'Mansoor S.',
    tag: 'Patient',
    filters: ['all', 'men'],
    pull: 'I now have more energy and feel healthier than at any earlier point in my life. Dr. Walters stopped the aging process. I owe him my gratitude for demonstrating what it means to be healthy in body, mind, and spirit.',
    full: `I came to Dr. Walters skeptical that anything could meaningfully change how I felt at my age. I was wrong. Under his care, I have experienced a transformation I would not have believed was possible. I now have more energy and feel healthier than at any earlier point in my life. Dr. Walters stopped the aging process for me. More than that, he changed how I think about health — as something active, achievable, and worth pursuing. I owe him my deepest gratitude for demonstrating what it truly means to be healthy in body, mind, and spirit.`,
  },
  {
    id: 'oris',
    name: 'Oris R.',
    tag: 'Veteran',
    filters: ['all', 'men', 'veterans'],
    pull: 'Dr. Walters has basically saved my sanity. He gave me my life back. I will always go to him for anything I might need.',
    full: `I don't say this lightly: Dr. Walters has basically saved my sanity. When I came to him, I was in a dark place — physically depleted and emotionally struggling in ways I didn't fully understand. He figured out what was happening when no one else had. He gave me my life back. The combination of his medical expertise, his genuine compassion, and his willingness to keep pushing until he found the answer has made all the difference. I will always go to him for anything I might need.`,
  },
]

const filters = [
  { id: 'all', label: 'All Stories' },
  { id: 'young-men', label: 'Young Men' },
  { id: 'men', label: 'Men' },
  { id: 'women', label: 'Women' },
  { id: 'veterans', label: 'Veterans' },
]

function StoryCard({ story }: { story: typeof stories[0] }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ color: 'var(--coral)', fontSize: '2rem', fontFamily: 'var(--font-dm-serif)', lineHeight: 1, marginBottom: '1rem' }}>"</div>
      <p style={{ color: '#C8C3BC', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '1.25rem', fontFamily: 'var(--font-dm-serif)', fontStyle: 'italic' }}>
        {story.pull}
      </p>
      {expanded && (
        <p style={{ color: 'var(--muted)', lineHeight: '1.75', fontSize: '0.875rem', marginBottom: '1.25rem', borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
          {story.full}
        </p>
      )}
      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-dm-serif)', fontSize: '1rem', color: 'var(--off-white)' }}>{story.name}</div>
          <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '0.62rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '2px' }}>{story.tag}</div>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-dm-mono)', fontSize: '0.7rem', color: 'var(--coral)', letterSpacing: '0.05em' }}
        >
          {expanded ? 'Show less ↑' : 'Read full story →'}
        </button>
      </div>
    </div>
  )
}

export default function PatientStoriesPage() {
  const [active, setActive] = useState('all')
  const filtered = stories.filter(s => s.filters.includes(active))

  return (
    <>
      <section className="page-hero">
        <div className="container-wide">
          <div className="label animate-fade-up animate-delay-1" style={{ marginBottom: '1.5rem' }}>Patient Stories</div>
          <h1 className="animate-fade-up animate-delay-2" style={{
            fontFamily: 'var(--font-dm-serif)',
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            maxWidth: '700px',
            marginBottom: '1.5rem',
          }}>
            Real patients. Real results.<br/>
            <span style={{ color: 'var(--coral)' }}>Real words.</span>
          </h1>
          <p className="animate-fade-up animate-delay-3" style={{ fontSize: '1rem', color: '#A8A39C', maxWidth: '580px', lineHeight: '1.7' }}>
            These are unedited, unsolicited accounts from patients who were dismissed, mismanaged, or under-served by mainstream medicine — and found a different outcome here.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide">
          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {filters.map(f => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                style={{
                  background: active === f.id ? 'var(--coral)' : 'transparent',
                  border: `1px solid ${active === f.id ? 'var(--coral)' : 'var(--border)'}`,
                  color: active === f.id ? '#fff' : 'var(--muted)',
                  fontFamily: 'var(--font-dm-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '0.5rem 1rem',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >{f.label}</button>
            ))}
          </div>

          {/* Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {filtered.map(story => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* Submit */}
      <section style={{ background: '#0A0A0A', borderTop: '1px solid var(--border)', padding: '4rem 0' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <div className="label" style={{ marginBottom: '1rem' }}>Share Your Story</div>
          <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', marginBottom: '1rem' }}>Has Dr. Walters helped you?</h2>
          <p style={{ color: 'var(--muted)', lineHeight: '1.7', marginBottom: '2rem', fontSize: '0.95rem' }}>
            We'd love to share your story — with your permission — to help other patients who are looking for someone who truly understands what they're going through.
          </p>
          <a href="tel:7195440199" className="btn-secondary">(719) 544-0199 — mention it at your next appointment</a>
        </div>
      </section>
    </>
  )
}
