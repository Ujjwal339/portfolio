const INK = '#ffffff'
const ACCENT = '#C98A54'

const courses = ['Digital Design', 'VLSI Design', 'Embedded Systems', 'Analog ICs', 'Control Systems', 'Digital Communication']

export default function Education() {
  return (
    <section id="education" style={{ position: 'relative', padding: '6vh 6vw 10vh', maxWidth: '1280px', margin: '0 auto' }}>
      <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: INK, marginBottom: '48px' }}>
        Education
      </h2>

      <div style={{ borderRadius: '14px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', padding: '32px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 600, color: INK }}>Indian Institute of Information Technology, Manipur</h3>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', margin: '8px 0 24px' }}>
          B.Tech, Electronics &amp; Communication Engineering (VLSI &amp; Embedded Systems) &middot; Aug 2023 &ndash; Dec 2027
        </p>

        <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', marginBottom: '24px' }}>
          <div>
            <div style={{ fontSize: '24px', fontWeight: 700, color: ACCENT, fontFamily: "'Playfair Display', Georgia, serif" }}>8.02</div>
            <div style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '2px' }}>CGPA</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '9px' }}>
          {courses.map((c) => (
            <span key={c} style={{ fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.78)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: '8px', padding: '7px 12px' }}>
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
