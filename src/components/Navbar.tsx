import { motion } from 'framer-motion'

const INK = '#ffffff'
const ACCENT = '#C98A54'
const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 40px' }}
    >
      {/* Logo — chip/IC line-mark */}
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="9" y="9" width="14" height="14" rx="2" stroke={INK} strokeWidth="1.5" />
          <circle cx="16" cy="16" r="2.4" fill={ACCENT} />
          <g stroke={INK} strokeWidth="1.3" strokeLinecap="round">
            <path d="M12 9V4M16 9V4M20 9V4" />
            <path d="M12 23v5M16 23v5M20 23v5" />
            <path d="M9 12H4M9 16H4M9 20H4" />
            <path d="M23 12h5M23 16h5M23 20h5" />
          </g>
        </svg>
        <span style={{ fontSize: '19px', fontWeight: 600, color: INK, letterSpacing: '-0.01em' }}>Ujjwal Kumar</span>
      </a>

      {/* Center links with dots */}
      <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: '18px' }}>
        {navLinks.map((link, i) => (
          <div key={link.label} style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            {i > 0 && <span style={{ width: '4px', height: '4px', borderRadius: '999px', background: 'rgba(255,255,255,0.4)' }} />}
            <a
              href={link.href}
              style={{ fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.78)', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = INK }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.78)' }}
            >
              {link.label}
            </a>
          </div>
        ))}
      </div>

      {/* Resume CTA */}
      <a
        href="/resume.pdf"
        download
        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.28)', fontSize: '13px', fontWeight: 600, color: INK, textDecoration: 'none', transition: 'border-color 0.2s ease, background 0.2s ease' }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = ACCENT; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(201,138,84,0.1)' }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.28)'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent' }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v13m0 0-4-4m4 4 4-4M4 20h16" /></svg>
        Resume
      </a>
    </motion.div>
  )
}
