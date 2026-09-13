const INK = '#ffffff'
const ACCENT = '#C98A54'

const certifications = [
  {
    title: 'Online Internship \u2014 RTL Design using Verilog HDL',
    org: 'NIELIT Virtual Academy \u00b7 MeitY, Government of India',
    meta: '20 May \u2013 01 Jul 2026 \u00b7 Cert. No. NVA-C-IN13-12-5218',
  },
  {
    title: 'Online Internship \u2014 HLS Programming (C/C++ based HDL Design)',
    org: 'NIELIT Virtual Academy \u00b7 MeitY, Government of India',
    meta: '20 May \u2013 01 Jul 2026 \u00b7 Cert. No. NVA-C-IN14-12-5243',
  },
  {
    title: 'Bootcamp \u2014 Electronics for Unmanned Aerial Systems',
    org: 'IIT (ISM) Dhanbad',
    meta: '19 \u2013 23 Jul 2025',
  },
  {
    title: 'Workshop \u2014 IoT and Autonomous Systems',
    org: 'IoT Architecture \u00b7 Digital Twin \u00b7 MQTT hands-on',
    meta: '14 \u2013 18 Jan 2026',
  },
]

const placements = [
  { place: '2nd', event: 'Circuit Design Competition', org: 'NIELIT Imphal \u00b7 2025' },
  { place: '3rd', event: 'Line Follower Robot', org: 'Manipur Technical University \u00b7 2025' },
  { place: '3rd', event: 'Innovation Expo', org: 'Manipur Technical University \u00b7 2025' },
]

export default function Achievements() {
  return (
    <section id="achievements" style={{ position: 'relative', padding: '6vh 6vw 10vh', maxWidth: '1280px', margin: '0 auto' }}>
      <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: INK, marginBottom: '48px' }}>
        Training &amp; Recognition
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
        {certifications.map((c) => (
          <div
            key={c.title}
            style={{ display: 'flex', gap: '18px', alignItems: 'flex-start', borderRadius: '12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', padding: '20px 24px' }}
          >
            <span style={{ width: '38px', height: '38px', flexShrink: 0, borderRadius: '10px', background: 'rgba(201,138,84,0.12)', border: '1px solid rgba(201,138,84,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: ACCENT, fontWeight: 700 }}>
              &#9099;
            </span>
            <div>
              <div style={{ fontSize: '14.5px', fontWeight: 600, color: INK }}>{c.title}</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginTop: '3px' }}>{c.org}</div>
              <div style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>{c.meta}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '16px' }}>
        {placements.map((p) => (
          <div key={p.event} style={{ borderRadius: '12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', padding: '20px 22px' }}>
            <div style={{ fontSize: '30px', fontWeight: 700, color: ACCENT, fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1 }}>{p.place}</div>
            <div style={{ fontSize: '14px', color: INK, marginTop: '10px', fontWeight: 600 }}>{p.event}</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', marginTop: '3px' }}>{p.org}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
