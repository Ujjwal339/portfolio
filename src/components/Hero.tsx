import { motion } from 'framer-motion'

const INK = '#ffffff'
const ACCENT = '#C98A54'

const stats = [
  { value: '+5.174 ns', label: 'FPGA Timing Slack' },
  { value: '80%', label: 'ASIC Power Reduction' },
  { value: 'R\u00b2=0.95', label: 'Edge AI Model' },
  { value: '8.02', label: 'CGPA' },
]

export default function Hero() {
  return (
    <section style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      {/* Ambient glow */}
      <div style={{ position: 'absolute', top: '-15%', right: '-5%', width: '760px', height: '760px', background: 'radial-gradient(ellipse at 50% 50%, rgba(201,138,84,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />

      {/* Circuit / signal trace background */}
      <svg
        viewBox="0 0 800 700"
        style={{ position: 'absolute', right: '-12%', top: '50%', transform: 'translateY(-50%)', width: 'min(46vw, 640px)', height: 'auto', opacity: 0.55 }}
        fill="none"
      >
        <motion.path
          d="M120 90 H360 V220 H620" stroke="rgba(255,255,255,0.22)" strokeWidth="1.4"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
          transition={{ pathLength: { duration: 1.8, delay: 0.2, ease: 'easeInOut' }, opacity: { duration: 0.3, delay: 0.2 } }}
        />
        <motion.path
          d="M80 400 H260 V300 H520 V180" stroke="rgba(255,255,255,0.16)" strokeWidth="1.4"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
          transition={{ pathLength: { duration: 1.8, delay: 0.4, ease: 'easeInOut' }, opacity: { duration: 0.3, delay: 0.4 } }}
        />
        <motion.path
          d="M150 620 H400 V520 H700" stroke="rgba(255,255,255,0.16)" strokeWidth="1.4"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
          transition={{ pathLength: { duration: 1.8, delay: 0.6, ease: 'easeInOut' }, opacity: { duration: 0.3, delay: 0.6 } }}
        />
        {[[120,90],[360,90],[360,220],[620,220],[260,400],[260,300],[520,300],[400,620],[400,520]].map(([cx,cy],i)=>(
          <circle key={i} cx={cx} cy={cy} r="3.2" fill="rgba(255,255,255,0.3)" />
        ))}
        <motion.path
          d="M40 460 L140 460 L170 380 L210 540 L250 420 L290 460 L740 460"
          stroke={ACCENT}
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
          transition={{ pathLength: { duration: 1.8, delay: 0.9, ease: 'easeInOut' }, opacity: { duration: 0.3, delay: 0.9 } }}
        />
      </svg>

      <div
        className="flex flex-col lg:flex-row lg:items-center"
        style={{ position: 'relative', zIndex: 10, width: '100%', padding: '14vh 6vw 6vh', gap: '48px' }}
      >
        {/* Left content */}
        <div style={{ maxWidth: '640px' }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', marginBottom: '20px', padding: '6px 14px 6px 10px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.16)', background: 'rgba(255,255,255,0.05)' }}
          >
            <span className="animate-pulse" style={{ width: '7px', height: '7px', borderRadius: '999px', background: ACCENT }} />
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>Open to VLSI &amp; Embedded Systems roles</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.22, ease: 'easeOut' }}
            style={{ margin: 0, fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500, fontSize: 'clamp(2.4rem, 5.4vw, 4.4rem)', lineHeight: 1.04, letterSpacing: '-0.01em', color: INK }}
          >
            Designing <em style={{ fontStyle: 'italic', fontWeight: 500, color: ACCENT }}>Silicon</em>,<br />
            Building Systems
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            style={{ margin: '20px 0 0', maxWidth: '480px', fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)' }}
          >
            I design at the boundary of silicon and software — from RTL-to-GDSII ASIC flows on 90nm CMOS to bare-metal firmware on ESP32 and ATmega. B.Tech ECE at IIIT Manipur, specializing in VLSI and embedded systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.48, ease: 'easeOut' }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '28px', marginTop: '30px' }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: '22px', fontWeight: 700, color: INK, fontFamily: "'Playfair Display', Georgia, serif" }}>{s.value}</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '2px', letterSpacing: '0.02em' }}>{s.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '32px' }}
          >
            <motion.a
              href="#work"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '7px 22px 7px 7px', borderRadius: '14px', background: '#17171b', border: '1px solid rgba(255,255,255,0.16)', textDecoration: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.4)' }}
            >
              <span style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'rgba(201,138,84,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
              </span>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>View Projects</span>
            </motion.a>
            <a
              href="#contact"
              style={{ fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.75)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.28)', paddingBottom: '2px', transition: 'color 0.2s ease, border-color 0.2s ease' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = INK; (e.currentTarget as HTMLAnchorElement).style.borderColor = INK }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.75)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.28)' }}
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          className="hidden lg:flex"
          initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          style={{ flexDirection: 'column', alignItems: 'center', gap: '14px', flexShrink: 0, marginLeft: 'auto', marginRight: '20vw' }}
        >
          <div style={{ position: 'relative', width: '260px', height: '260px', borderRadius: '999px', padding: '3px', background: `conic-gradient(from 210deg, ${ACCENT}, rgba(255,255,255,0.5), ${ACCENT})`, boxShadow: '0 0 44px rgba(201,138,84,0.25)' }}>
            <div style={{ width: '100%', height: '100%', borderRadius: '999px', overflow: 'hidden', border: '3px solid #050506', background: 'radial-gradient(circle at 40% 30%, #1a1512 0%, #0a0908 60%, #050506 100%)' }}>
              <img
                src="/photo.jpg"
                alt="Ujjwal Kumar"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
              />
            </div>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '11px', fontWeight: 600, letterSpacing: '0.04em', color: ACCENT, border: '1px solid rgba(201,138,84,0.3)', background: 'rgba(201,138,84,0.08)', padding: '5px 14px', borderRadius: '999px' }}>
            <span className="animate-pulse" style={{ width: '6px', height: '6px', borderRadius: '999px', background: ACCENT }} />
            Open to Work
          </span>
        </motion.div>
      </div>
    </section>
  )
}
