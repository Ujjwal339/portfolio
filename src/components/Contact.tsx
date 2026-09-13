import { motion } from 'framer-motion'

const INK = '#ffffff'
const ACCENT = '#C98A54'

const links = [
  {
    label: 'kaushalujjwal261@gmail.com',
    href: 'mailto:kaushalujjwal261@gmail.com',
    icon: (
      <>
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
      </>
    ),
  },
  {
    label: 'github.com/Ujjwal339',
    href: 'https://github.com/Ujjwal339',
    icon: <path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.9 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.3-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 22 12c0-5.5-4.5-10-10-10z" />,
  },
  {
    label: 'linkedin.com/in/ujjwal-kumar',
    href: 'https://www.linkedin.com/in/ujjwal-kumar-07b4322a6',
    icon: <path d="M6.94 8.5H4V20h2.94V8.5zM5.47 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4zM20 13.5c0-2.9-1.5-4.3-3.6-4.3-1.6 0-2.4.9-2.8 1.5V8.5H10.7V20h2.94v-6.4c0-.6 0-1.2.2-1.6.4-.6 1-1.3 2.1-1.3 1.5 0 2.1 1.1 2.1 2.8V20H21v-6.5h-1z" />,
  },
]

const moreLinks = [
  { label: 'Certificates', href: 'https://github.com/Ujjwal339/certificates' },
  { label: 'TCL scripting repo', href: 'https://github.com/Ujjwal339/tcl-vlsi-programming' },
  { label: 'Perl scripting repo', href: 'https://github.com/Ujjwal339/perl-vlsi-programming' },
]

export default function Contact() {
  return (
    <section id="contact" style={{ position: 'relative', padding: '10vh 6vw 6vh', maxWidth: '1280px', margin: '0 auto' }}>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500, fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: INK, maxWidth: '600px', lineHeight: 1.15 }}
      >
        Let&rsquo;s build <em style={{ fontStyle: 'italic', color: ACCENT }}>something</em>.
      </motion.h2>

      <p style={{ marginTop: '18px', maxWidth: '460px', fontSize: '15px', lineHeight: 1.65, color: 'rgba(255,255,255,0.68)' }}>
        Open to RTL, physical design, FPGA, and embedded roles — internships or full-time. Reach out directly, or find the work on GitHub.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '36px' }}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontSize: '15px', fontWeight: 500, color: 'rgba(255,255,255,0.8)', textDecoration: 'none', width: 'fit-content', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = INK }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.8)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">{link.icon}</svg>
            {link.label}
          </a>
        ))}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 24px', marginTop: '24px' }}>
        {moreLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: '12.5px', fontWeight: 500, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '1px', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = ACCENT }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.45)' }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div style={{ marginTop: '80px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
        <span style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.4)' }}>&copy; {new Date().getFullYear()} Ujjwal Kumar</span>
        <span style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.4)' }}>IIIT Manipur &middot; B.Tech ECE</span>
      </div>
    </section>
  )
}
