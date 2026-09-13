const INK = '#ffffff'
const ACCENT = '#C98A54'

type Stat = { value: string; label: string }

type Project = {
  category: string
  title: string
  description: string
  tags: string[]
  stats?: Stat[]
  link?: { label: string; href: string }
}

const projects: Project[] = [
  {
    category: 'RTL Design',
    title: '5-Stage Pipelined RV32I RISC-V Processor',
    description:
      'A RISC-V RV32I core in Verilog implementing the full base ISA \u2014 all instruction types, all six branch conditions, JAL/JALR, LUI, AUIPC \u2014 with dual forwarding paths, load-use hazard detection, and branch resolution in EX with a 2-instruction flush. Self-checking testbench, TCL-scripted Vivado build, targeting a Zybo Z7 FPGA.',
    tags: ['Verilog', 'RISC-V', 'Xilinx Vivado', 'Zybo Z7', 'TCL'],
    stats: [
      { value: '+5.174 ns', label: 'WNS @ 125MHz' },
      { value: '15 LUT', label: 'FPGA LUTs' },
      { value: '37 FF', label: 'Flip-Flops' },
    ],
    link: { label: 'View on GitHub', href: 'https://github.com/Ujjwal339/RISC-V' },
  },
  {
    category: 'ASIC Design',
    title: 'CSHM FIR Filter \u2014 RTL to GDSII',
    description:
      'An 11-tap FIR filter (CSHM architecture) taken through a complete RTL-to-GDSII tape-out on 90nm CMOS \u2014 floorplanning, placement, CTS, routing, and DRC/LVS sign-off using Cadence Genus and Innovus. Reached 200 MHz with an 80% power reduction and a fully DRC-clean layout.',
    tags: ['Verilog', 'Cadence Genus', 'Cadence Innovus', '90nm CMOS'],
    stats: [
      { value: '200 MHz', label: 'Target Freq' },
      { value: '80%', label: 'Power Reduction' },
      { value: 'DRC \u2713', label: 'Sign-Off' },
    ],
    link: { label: 'View on GitHub', href: 'https://github.com/Ujjwal339/cshm-fir-filter-asic' },
  },
  {
    category: 'Machine Learning',
    title: 'Soil NPK Prediction from Drone Imagery',
    description:
      'Predicts soil nitrogen, phosphorus, and potassium from UAV-mounted multispectral sensor data using an XGBoost + PLS pipeline trained on the LUCAS 2015 dataset. Group K-Fold spatial cross-validation, Kriging interpolation with GeoTIFF export, and a Streamlit demo. Supervised by Dr. D. Neelamegam.',
    tags: ['Python', 'XGBoost', 'Kriging', 'Streamlit'],
    stats: [
      { value: 'R\u00b2=0.950', label: 'N Prediction' },
      { value: '40,788', label: 'Samples' },
      { value: '4,200', label: 'Spectral Bands' },
    ],
    link: { label: 'View on GitHub', href: 'https://github.com/Ujjwal339/Multi-spectral-image-processing-for-NPK-prediction' },
  },
  {
    category: 'Embedded Systems',
    title: 'ESP32 Smart Home Automation',
    description:
      'A 4-relay home automation system on ESP32 with three simultaneous control modes \u2014 Arduino IoT Cloud, BLE/IR remote, and manual physical switches \u2014 all kept in real-time bidirectional sync via dual MQTT stacks (Arduino IoT Cloud and PubSubClient on HiveMQ). DHT11 telemetry every 4 seconds.',
    tags: ['ESP32', 'MQTT', 'BLE', 'Arduino IoT Cloud', 'HiveMQ'],
    link: { label: 'View on GitHub', href: 'https://github.com/Ujjwal339/home-automation' },
  },
  {
    category: 'Machine Learning',
    title: 'Probabilistic Revenue Forecasting',
    description:
      'Quantile XGBoost models (P10/P50/P90) forecasting e-commerce ad revenue across Google, Bing, and Meta Ads, with SHAP explainability and a live Streamlit demo with budget sliders. Finished Top 10 at NetElixir\u2019s AIgnition 3.0 hackathon.',
    tags: ['XGBoost', 'SHAP', 'Streamlit', 'Gemini API'],
    stats: [{ value: 'Top 10', label: 'AIgnition 3.0' }],
  },
  {
    category: 'Embedded C',
    title: 'Bare-Metal Game Engine \u2014 ATmega2560',
    description:
      'A 16\u00d72 LCD Dino game written in bare-metal Embedded C \u2014 no HAL, no libraries. Direct register manipulation (DDRB, PORTC, OCR1A) for GPIO and display, a hardware Timer1 ISR driving the game loop, GPIO interrupt-driven jump control, and custom animated sprites via CGRAM encoding.',
    tags: ['ATmega2560', 'Embedded C', 'AVR ISR', 'CGRAM'],
    link: { label: 'View on GitHub', href: 'https://github.com/Ujjwal339/Dino_game_atmega2560' },
  },
  {
    category: 'FPGA Design',
    title: 'HLS-Based 8-Operation ALU',
    description:
      'An arithmetic logic unit designed in C++ with Vitis HLS and pipelined for II=1 throughput, implemented on an AMD Artix-7 FPGA with zero timing violations.',
    tags: ['Vitis HLS', 'C++', 'Xilinx Artix-7', 'Vivado'],
  },
  {
    category: 'IoT',
    title: 'Raspberry Pi Surveillance System',
    description:
      'End-to-end IoT surveillance on a Raspberry Pi 3 \u2014 a libcamera image-acquisition pipeline in Python paired with the Telegram Bot API for real-time cross-network transmission, plus an auto-restart watchdog for unattended uptime.',
    tags: ['Raspberry Pi 3', 'Python', 'libcamera', 'Telegram Bot API'],
    link: { label: 'View on GitHub', href: 'https://github.com/Ujjwal339/servillance-camera-using-telegram-bot-and-rasberry-pi3' },
  },
]

const alsoBuilt = [
  'Pixhawk-based quadcopter (IIT Dhanbad UAV bootcamp)',
  'SGP4 satellite tracker with dual stepper motors',
  'Interactive cinematic-scroll birthday website (vanilla HTML/CSS/JS, canvas animation)',
]

export default function Projects() {
  return (
    <section id="work" style={{ position: 'relative', padding: '10vh 6vw 8vh', maxWidth: '1280px', margin: '0 auto' }}>
      <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: INK, marginBottom: '48px' }}>
        Featured Work
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '20px' }}>
        {projects.map((p) => (
          <div
            key={p.title}
            style={{ borderRadius: '14px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            <span style={{ fontSize: '12.5px', fontWeight: 600, color: ACCENT }}>{p.category}</span>
            <h3 style={{ fontSize: '19px', fontWeight: 600, color: INK, lineHeight: 1.3 }}>{p.title}</h3>
            <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.68)', flexGrow: 1 }}>{p.description}</p>

            {p.stats && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', padding: '12px 14px', background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px' }}>
                {p.stats.map((s) => (
                  <div key={s.label}>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>{s.value}</div>
                    <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', marginTop: '1px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            )}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
              {p.tags.map((tag) => (
                <span key={tag} style={{ fontSize: '11.5px', fontWeight: 500, color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.16)', borderRadius: '999px', padding: '4px 11px' }}>
                  {tag}
                </span>
              ))}
            </div>
            {p.link && (
              <a
                href={p.link.href}
                target="_blank"
                rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '6px', fontSize: '13px', fontWeight: 600, color: INK, textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '2px', alignSelf: 'flex-start' }}
              >
                {p.link.label}
              </a>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '40px', paddingTop: '28px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.5)' }}>Also built</span>
        <ul style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {alsoBuilt.map((item) => (
            <li key={item} style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.6)', listStyle: 'none' }}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
