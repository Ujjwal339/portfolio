const INK = '#ffffff'
const ACCENT = '#C98A54'

const groups = [
  {
    title: 'HDL & RTL',
    items: ['Verilog HDL', 'SystemVerilog', 'HLS (C/C++)', 'Pipeline Design', 'FSM', 'Hazard Detection'],
  },
  {
    title: 'ASIC & FPGA',
    items: ['Cadence Genus', 'Cadence Innovus', 'Xilinx Vivado', 'RTL-to-GDSII', 'STA', 'DRC/LVS', 'LTspice'],
  },
  {
    title: 'Embedded & Firmware',
    items: ['ESP32', 'ATmega2560', 'Raspberry Pi', 'Pixhawk', 'ArduPilot', 'Bare-Metal AVR', 'ISR Design'],
  },
  {
    title: 'Protocols & IoT',
    items: ['UART', 'SPI', 'I2C', 'BLE', 'CAN Bus', 'MQTT', 'Wi-Fi'],
  },
  {
    title: 'Programming',
    items: ['C', 'C++', 'Embedded C', 'Python', 'TCL', 'Shell', 'Perl'],
  },
  {
    title: 'ML & Tools',
    items: ['XGBoost', 'PLS', 'SHAP', 'Streamlit', 'Git', 'GNU Octave'],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{ position: 'relative', padding: '6vh 6vw 10vh', maxWidth: '1280px', margin: '0 auto' }}>
      <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: INK, marginBottom: '48px' }}>
        What I Work With
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '32px 36px' }}>
        {groups.map((group) => (
          <div key={group.title}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '18px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '999px', background: ACCENT }} />
              <h3 style={{ fontSize: '15px', fontWeight: 600, color: INK }}>{group.title}</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '9px' }}>
              {group.items.map((item) => (
                <span
                  key={item}
                  style={{ fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.78)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: '8px', padding: '7px 12px' }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
