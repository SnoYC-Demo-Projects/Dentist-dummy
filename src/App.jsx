import { useEffect, useState } from 'react'
import dentalHero from './assets/dental-hero.png'
import doctorImage from './assets/doctor.png'
import './App.css'

const services = [
  { icon: '☼', title: 'Preventive Care', text: 'Keep your smile healthy with gentle cleanings, exams, and personalized guidance.' },
  { icon: '✦', title: 'Cosmetic Dentistry', text: 'Create the confident smile you have always wanted with natural-looking treatments.' },
  { icon: '⌁', title: 'Restorative Care', text: 'Comfortable, modern solutions that bring back your bite, health, and quality of life.' },
  { icon: '♡', title: 'Family Dentistry', text: 'A caring dental home for every age, from first visits to lifelong oral health.' },
]

const doctors = [
  { name: 'Dr. Anjali Mehata', role: 'Lead Dental Surgeon', image: doctorImage },
  { name: 'Dr. Komal Sharma', role: 'Restorative Dentist', image: doctorImage },
  { name: 'Dr. Priya Patel', role: 'Cosmetic Dentist', image: doctorImage },
]

function Icon({ children, size = 20 }) {
  return <span className="icon" style={{ fontSize: size }} aria-hidden="true">{children}</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [topbarSlide, setTopbarSlide] = useState(0)

  const topbarItems = [
    { icon: '◷', text: 'Mon–Sat: 8:00 AM – 8:00 PM' },
    { icon: '⌖', text: 'Pune · Mumbai · Bangalore' },
    { icon: '☎', text: 'Care line: +91 1234567890 ' },
  ]

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTopbarSlide((slide) => (slide + 1) % topbarItems.length)
    }, 3500)

    return () => window.clearInterval(interval)
  }, [topbarItems.length])

  const submitAppointment = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="site-shell">
      <div className="topbar">
        <div className="container topbar-inner">
          <span><Icon>◷</Icon> Mon–Sat: 8:00 AM – 8:00 PM</span>
          <span className="topbar-location"><Icon>⌖</Icon> Pune · Mumbai · Bangalore</span>
          <a href="tel:+911234567890"><Icon>☎</Icon> Care line: +91 1234567890</a>
          <span key={topbarSlide} className="topbar-carousel" aria-live="polite">
            <Icon>{topbarItems[topbarSlide].icon}</Icon> {topbarItems[topbarSlide].text}
          </span>
        </div>
      </div>

      <header className="navbar">
        <div className="container nav-inner">
          <a className="brand" href="#home" aria-label="Brightline Dental home">
            <span className="brand-mark"><span>✚</span></span>
            <span><strong>Brightline</strong><small>Dental Studio</small></span>
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>☰</button>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Our Services</a>
            <a href="#doctors" onClick={() => setMenuOpen(false)}>Our Doctors</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a className="nav-cta" href="#appointment" onClick={() => setMenuOpen(false)}>Book an Appointment <span>→</span></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-glow" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow light"><span /> A brighter kind of care</div>
              <h1>Smile with ease.<br /><em>Live boldly.</em></h1>
              <p>Thoughtful dental care, modern techniques, and a friendly team — all designed around your comfort and confidence.</p>
              <div className="hero-actions">
                <a className="button button-green" href="#appointment">Book an Appointment <span>→</span></a>
                <a className="button button-outline" href="#services"><Icon>▷</Icon> Explore our services</a>
              </div>
              <div className="trust-row">
                <div className="avatars"><span>PS</span><span>AM</span><span>NK</span><b>+</b></div>
                <div><strong>Loved by 2,400+ neighbors</strong><small>★★★★★ &nbsp; 4.8/5 showcase rating</small></div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="circle-outline" />
              <div className="hero-image-wrap"><img src={dentalHero} alt="Dentists providing professional dental care" /></div>
              <div className="float-card card-one"><span className="float-icon">✦</span><div><strong>10+ Years</strong><small>of thoughtful care</small></div></div>
              <div className="float-card card-two"><span className="check">✓</span><div><strong>Gentle care</strong><small>for every patient</small></div></div>
            </div>
          </div>
          <div className="hero-bottom container">
            <span>STATE-OF-THE-ART TECHNOLOGY</span><span>·</span><span>BOARD-CERTIFIED DENTISTS</span><span>·</span><span>PERSONALIZED CARE</span>
          </div>
        </section>

        <section className="intro section" id="about">
          <div className="container intro-grid">
            <div className="section-heading left">
              <div className="eyebrow"><span /> The Brightline difference</div>
              <h2>More than a dental clinic.<br /><em>A place to feel at ease.</em></h2>
            </div>
            <div className="intro-copy"><p>At Brightline Dental Studio, we believe dentistry should feel personal, clear, and comfortable. This fictional practice concept is designed to show how a warm digital experience can build trust before the first visit.</p><a className="text-link" href="#services">Discover our approach <span>→</span></a></div>
          </div>
          <div className="container stat-grid">
            <div className="stat"><strong>10<span>+</span></strong><p>Years of excellence</p></div>
            <div className="stat"><strong>2.4k<span>+</span></strong><p>Happy smiles imagined</p></div>
            <div className="stat"><strong>4.8<span>/5</span></strong><p>Showcase rating</p></div>
            <div className="stat"><strong>08<span>+</span></strong><p>Care specialists</p></div>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="container">
            <div className="section-heading center"><div className="eyebrow"><span /> What we do</div><h2>Complete care for<br /><em>your best smile</em></h2><p>From everyday check-ups to confident smile refreshes, our fictional specialists are here for every step.</p></div>
            <div className="service-grid">{services.map((service, index) => <article className="service-card" key={service.title}><div className="service-number">0{index + 1}</div><div className="service-content"><h3>{service.title}</h3><p>{service.text}</p></div><a className="service-arrow" href="#appointment" aria-label={`Learn more about ${service.title}`}>↗</a></article>)}</div>
          </div>
        </section>

        <section className="doctors section" id="doctors">
          <div className="container">
            <div className="doctor-header"><div className="section-heading left"><div className="eyebrow"><span /> Meet your care team</div><h2>Experts who care<br /><em>like family</em></h2></div><p>Meet the fictional team behind this showcase concept — experienced specialists with a shared belief that great care starts with listening.</p></div>
            <div className="doctor-grid">{doctors.map(doctor => <article className="doctor-card" key={doctor.name}><div className="doctor-photo"><img src={doctor.image} alt={doctor.name} /><span>↗</span></div><h3>{doctor.name}</h3><p>{doctor.role}</p></article>)}</div>
          </div>
        </section>

        <section className="appointment section" id="appointment">
          <div className="container appointment-box">
            <div className="appointment-copy"><div className="eyebrow light"><span /> Take the first step</div><h2>Ready for a healthier<br /><em>smile?</em></h2><p>Tell us a little about yourself and our fictional care coordinator will get back to you within one business day.</p><div className="contact-line"><Icon>☎</Icon><span>Prefer to call? <strong>+91 1234567890</strong></span></div></div>
            {submitted ? <div className="success-message"><span>✓</span><h3>Thank you for reaching out!</h3><p>Our care coordinator will call you shortly to confirm your appointment.</p><button className="button button-green" onClick={() => setSubmitted(false)}>Send another request</button></div> : <form className="appointment-form" onSubmit={submitAppointment}><div className="form-row"><label>Full name<input required type="text" placeholder="Your name" /></label><label>Phone number<input required type="tel" placeholder="+91 00000 00000" /></label></div><div className="form-row"><label>Email address<input required type="email" placeholder="you@example.com" /></label><label>Preferred service<select defaultValue=""><option value="" disabled>Select a service</option><option>Preventive care</option><option>Cosmetic dentistry</option><option>Restorative care</option><option>Family dentistry</option></select></label></div><button className="button button-green form-submit" type="submit">Request an appointment <span>→</span></button><small>By submitting, you agree to our privacy policy.</small></form>}
          </div>
        </section>
      </main>

      <footer id="contact"><div className="container footer-grid"><div><a className="brand footer-brand" href="#home"><span className="brand-mark"><span>✚</span></span><span><strong>Brightline</strong><small>Dental Studio</small></span></a><p>Thoughtful dental care for<br />healthier, happier lives.</p></div><div><h4>Explore</h4><a href="#about">About us</a><a href="#services">Our services</a><a href="#doctors">Our doctors</a></div><div><h4>Visit us</h4><p>100 Example Avenue, Suite 04<br />Pune, ST 00000</p><a className="text-link" href="#appointment">Get directions →</a></div><div><h4>Contact</h4><a href="tel:+911234567890">+91 1234567890</a><a href="mailto:hello@brightline.example">hello@brightline.example</a><p>Mon–Sat, 8:00 AM–8:00 PM</p></div></div><div className="container copyright"><span>© 2026 Brightline Dental Studio. Demo concept.</span><span>Website crafted by <strong>SnoYC</strong> &nbsp; · &nbsp; Privacy policy</span></div></footer>
    </div>
  )
}

export default App
