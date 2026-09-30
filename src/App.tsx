import { useState, useEffect } from 'react';

const WA_BASE = 'https://wa.me/919266133030';

function waLink(msg: string) {
  return `${WA_BASE}?text=${encodeURIComponent(msg)}`;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Locations', href: '#locations' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES = [
  {
    icon: '🏛️',
    title: 'Luxury Residential Properties',
    desc: 'Apartments, villas, independent homes and luxury residences across our service areas.',
    msg: 'Hello! I am interested in Luxury Residential Properties. Please help me explore options.',
  },
  {
    icon: '🏢',
    title: 'Commercial Real Estate',
    desc: 'Office spaces, commercial complexes and retail properties for businesses.',
    msg: 'Hello! I am looking for Commercial Real Estate. Please share available options.',
  },
  {
    icon: '📈',
    title: 'Property Investment',
    desc: 'Expert assistance for real estate investors seeking high-value opportunities.',
    msg: 'Hello! I want to explore Property Investment opportunities. Please guide me.',
  },
  {
    icon: '🔑',
    title: 'Property Buying Assistance',
    desc: 'Personalized guidance based on your location preferences, requirements and budget.',
    msg: 'Hello! I need assistance with Buying a Property. Please help me find the right one.',
  },
  {
    icon: '💼',
    title: 'Property Selling Assistance',
    desc: 'Professional assistance for property owners looking to sell at the best value.',
    msg: 'Hello! I want assistance with Selling my Property. Please get in touch.',
  },
  {
    icon: '🌴',
    title: 'Goa Properties',
    desc: 'Villas, apartments, holiday homes and investment opportunities in Goa.',
    msg: 'Hello! I am interested in Goa Properties — villas, apartments or holiday homes. Please share details.',
  },
];

const LOCATIONS = [
  {
    name: 'Delhi',
    tagline: 'The Capital\'s Finest Addresses',
    desc: 'Premium residential and commercial real estate opportunities across Delhi.',
    img: 'https://images.unsplash.com/photo-1569560346548-488e1f821687?w=800&h=600&fit=crop&auto=format',
    alt: 'Aerial view of Delhi',
    msg: 'Hello! I am looking for properties in Delhi. Please share available options.',
  },
  {
    name: 'NCR',
    tagline: 'Gurgaon, Noida & Beyond',
    desc: 'Property opportunities across Gurgaon, Noida, Greater Noida and the wider NCR region.',
    img: 'https://images.unsplash.com/photo-1583143874828-de3d288be51a?w=800&h=600&fit=crop&auto=format',
    alt: 'Modern architecture NCR',
    msg: 'Hello! I am interested in properties in NCR — Gurgaon, Noida or Greater Noida. Please help.',
  },
  {
    name: 'Goa',
    tagline: 'Coastal Luxury Living',
    desc: 'Luxury villas, apartments, holiday homes and investment opportunities in Goa.',
    img: 'https://images.unsplash.com/photo-1642516864726-a243f416fc00?w=800&h=600&fit=crop&auto=format',
    alt: 'Goa coastal luxury',
    msg: 'Hello! I am looking for Goa properties — villas, holiday homes or investments. Please share details.',
  },
  {
    name: 'Uttarakhand',
    tagline: 'Himalayan Retreats & Estates',
    desc: 'Homes, villas, land and investment opportunities across Uttarakhand.',
    img: 'https://images.unsplash.com/photo-1782022536202-7adbb78756ff?w=800&h=600&fit=crop&auto=format',
    alt: 'Uttarakhand mountain retreat',
    msg: 'Hello! I want to explore properties in Uttarakhand — homes, villas or land. Please assist.',
  },
];

const WHY_US = [
  { icon: '🎯', title: 'Personalized Search', desc: 'We listen first, then find properties that genuinely match your needs and aspirations.' },
  { icon: '💎', title: 'Premium Opportunities', desc: 'Access to carefully selected residential and commercial properties across our regions.' },
  { icon: '🗺️', title: 'Local Knowledge', desc: 'Deep understanding of local markets, neighborhoods and price dynamics.' },
  { icon: '🤝', title: 'Client-First Service', desc: 'Your goals guide every step of our process, from first inquiry to final handover.' },
  { icon: '📊', title: 'Investment Guidance', desc: 'Thoughtful insights to help you make confident, well-informed real estate decisions.' },
  { icon: '💬', title: 'Dedicated Assistance', desc: 'Direct WhatsApp access to our team for queries, visits and updates at any time.' },
];

const INQUIRY_CATEGORIES = [
  { label: 'Buy', msg: 'Hello! I am looking to Buy a property. Please help me explore options.' },
  { label: 'Sell', msg: 'Hello! I want to Sell my property. Please get in touch.' },
  { label: 'Invest', msg: 'Hello! I want to Invest in real estate. Please guide me on opportunities.' },
  { label: 'Residential', msg: 'Hello! I am looking for Residential properties. Please share options.' },
  { label: 'Commercial', msg: 'Hello! I need Commercial property options. Please assist.' },
  { label: 'Delhi', msg: 'Hello! I am interested in Delhi properties. Please share details.' },
  { label: 'NCR', msg: 'Hello! I am looking for properties in NCR (Gurgaon/Noida). Please assist.' },
  { label: 'Goa', msg: 'Hello! I want to explore Goa properties. Please help.' },
  { label: 'Uttarakhand', msg: 'Hello! I am looking for properties in Uttarakhand. Please share options.' },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(INQUIRY_CATEGORIES[0]);

  const [active, setActive] = useState('home');

  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.slice(1));
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    const onResize = () => window.innerWidth > 900 && close();
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize); };
  }, []);

  return (
    <div className="font-sans" style={{ backgroundColor: '#f5f0e8', color: '#0f0f0f' }}>

      {/* ── STICKY HEADER ── */}
      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          transition: 'background 0.4s, box-shadow 0.4s',
          background: scrolled ? 'rgba(15,15,15,0.97)' : 'transparent',
          boxShadow: scrolled ? '0 2px 30px rgba(0,0,0,0.35)' : 'none',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          {/* Logo */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <img src="/logo-mark.jpeg" alt="Billionaires Tree Realty logo" width={56} height={56} style={{ width: 56, height: 56, objectFit: 'contain', background: '#fff', borderRadius: 6, padding: 2, display: 'block' }} />
            <div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 600, color: '#c9a84c', letterSpacing: '0.04em', lineHeight: 1.1 }}>
                Billionaires Tree
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 400, color: '#e0c87a', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                Realty
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden-mobile">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} className={`nav-link${active === l.href.slice(1) ? ' active' : ''}`}>
                {l.label}
              </a>
            ))}
            <a href={WA_BASE} target="_blank" rel="noopener noreferrer"
              style={{ background: '#c9a84c', color: '#0f0f0f', padding: '9px 20px', borderRadius: 2, fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.target as HTMLElement).style.background = '#e0c87a'}
              onMouseLeave={e => (e.target as HTMLElement).style.background = '#c9a84c'}>
              WhatsApp Us
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8 }} className="show-mobile" aria-label="Toggle menu" aria-expanded={menuOpen}>
            <div style={{ width: 24, height: 2, background: '#c9a84c', marginBottom: 5 }} />
            <div style={{ width: 18, height: 2, background: '#c9a84c', marginBottom: 5 }} />
            <div style={{ width: 24, height: 2, background: '#c9a84c' }} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: '#0f0f0f', padding: '20px 24px 28px', borderTop: '1px solid #333' }}>
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
                style={{ display: 'block', color: '#f5f0e8', padding: '12px 0', fontSize: 14, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid #222' }}>
                {l.label}
              </a>
            ))}
            <a href={WA_BASE} target="_blank" rel="noopener noreferrer"
              style={{ display: 'block', marginTop: 20, background: '#c9a84c', color: '#0f0f0f', padding: '13px 20px', textAlign: 'center', fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: 2 }}>
              WhatsApp Us
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section id="home" style={{ position: 'relative', height: '100vh', minHeight: 640, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: '#0f0f0f' }}>
          <img src="https://images.unsplash.com/photo-1711110065918-388182f86e00?w=1600&h=900&fit=crop&auto=format"
            alt="Luxury pool and villa"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45 }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(15,15,15,0.75) 0%, rgba(15,15,15,0.4) 60%, rgba(15,15,15,0.6) 100%)' }} />

        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 24px', paddingTop: 72 }}>
          <div style={{ maxWidth: 700 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
              <div style={{ width: 40, height: 1, background: '#c9a84c' }} />
              <span style={{ color: '#c9a84c', fontSize: 11, fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase' }}>Premium Real Estate</span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(42px, 7vw, 80px)', fontWeight: 600, color: '#f5f0e8', lineHeight: 1.1, marginBottom: 20, fontStyle: 'italic' }}>
              Find Your<br />
              <span style={{ color: '#c9a84c' }}>Exceptional</span> Address
            </h1>

            <p style={{ color: '#e0c87a', fontSize: 16, fontWeight: 400, letterSpacing: '0.04em', marginBottom: 14 }}>
              Premium Real Estate Across Delhi, NCR, Goa &amp; Uttarakhand
            </p>
            <p style={{ color: '#f5f0e8cc', fontSize: 15, lineHeight: 1.7, marginBottom: 36, maxWidth: 560 }}>
              We connect buyers, sellers and investors with premium residential and commercial opportunities across Delhi, NCR, Goa and Uttarakhand.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}>
              <GoldButton href={waLink('Hello! I would like to explore premium properties. Please share available listings across Delhi, NCR, Goa and Uttarakhand.')}>
                Explore Properties on WhatsApp
              </GoldButton>
              <OutlineButton href={waLink('Hello! I would like to speak with a Property Expert at Billionaires Tree Realty.')}>
                Talk to a Property Expert
              </OutlineButton>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#f5f0e888', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              {['Delhi', 'NCR', 'Goa', 'Uttarakhand'].map((loc, i) => (
                <span key={loc} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  {i > 0 && <span style={{ color: '#c9a84c66' }}>•</span>}
                  <span style={{ color: '#f5f0e8bb' }}>{loc}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, transparent, #c9a84c)' }} />
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#c9a84c' }} />
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section style={{ background: '#0f0f0f', borderBottom: '1px solid #c9a84c22' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '20px 24px', display: 'flex', gap: 0, overflowX: 'auto' }}>
          {[
            { label: 'Delhi • NCR • Goa • Uttarakhand', sub: 'Areas We Serve' },
            { label: 'Residential & Commercial', sub: 'Property Solutions' },
            { label: 'Personalized', sub: 'Client Assistance' },
            { label: 'Direct WhatsApp', sub: 'Property Consultation' },
          ].map((item, i) => (
            <div key={i} style={{ flex: '1 0 200px', padding: '12px 24px', borderRight: i < 3 ? '1px solid #c9a84c22' : 'none', textAlign: 'center' }}>
              <div style={{ color: '#c9a84c', fontSize: 13, fontWeight: 600, letterSpacing: '0.05em', marginBottom: 2 }}>{item.label}</div>
              <div style={{ color: '#f5f0e866', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ background: '#faf8f4', padding: 'clamp(64px, 8vw, 112px) 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }} className="grid-responsive">
          {/* Image */}
          <div style={{ position: 'relative' }}>
            <div style={{ aspectRatio: '4/5', overflow: 'hidden', background: '#1a1a1a' }}>
              <img src="https://images.unsplash.com/photo-1565623833408-d77e39b88af6?w=700&h=875&fit=crop&auto=format"
                alt="Luxury property interior"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
            </div>
            <div style={{ position: 'absolute', bottom: -24, right: -24, width: 160, height: 160, border: '1px solid #c9a84c44', zIndex: 0 }} />
            <div style={{ position: 'absolute', top: -24, left: -24, width: 80, height: 80, background: '#c9a84c', opacity: 0.08 }} />
          </div>

          {/* Content */}
          <div>
            <SectionLabel>About Us</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 600, color: '#0f0f0f', lineHeight: 1.15, marginBottom: 24, fontStyle: 'italic' }}>
              Real Estate, With a Vision for Better Living
            </h2>
            <p style={{ color: '#333', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
              At Billionaires Tree Realty, we help clients discover exceptional residential and commercial opportunities through personalized assistance, deep local market knowledge and transparent, direct communication.
            </p>
            <p style={{ color: '#555', fontSize: 15, lineHeight: 1.8, marginBottom: 36 }}>
              Whether you are seeking a luxury home in Delhi, a commercial space in NCR, a villa in Goa or a retreat in Uttarakhand, our team is here to guide you with clarity and commitment at every step.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px', marginBottom: 40 }}>
              {['Personalized Assistance', 'Premium Opportunities', 'Local Knowledge', 'Transparent Communication', 'Client Focus', 'Direct WhatsApp Access'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 16, height: 1, background: '#c9a84c', flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: '#333', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>

            <GoldButton href={waLink('Hello! I would like to speak with your Property Team at Billionaires Tree Realty.')}>
              Speak With Our Property Team
            </GoldButton>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ background: '#0f0f0f', padding: 'clamp(64px, 8vw, 112px) 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <SectionLabel light>Our Services</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 600, color: '#f5f0e8', lineHeight: 1.15, fontStyle: 'italic' }}>
              End-to-End Property Solutions
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 2 }}>
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATIONS ── */}
      <section id="locations" style={{ background: '#faf8f4', padding: 'clamp(64px, 8vw, 112px) 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <SectionLabel>Where We Operate</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 600, color: '#0f0f0f', lineHeight: 1.15, fontStyle: 'italic' }}>
              Four Premium Markets
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
            {LOCATIONS.map(loc => (
              <LocationCard key={loc.name} loc={loc} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section id="why-us" style={{ background: '#0f0f0f', padding: 'clamp(64px, 8vw, 112px) 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 72, alignItems: 'start' }} className="grid-responsive">
            <div>
              <SectionLabel light>Why Choose Us</SectionLabel>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 600, color: '#f5f0e8', lineHeight: 1.15, fontStyle: 'italic', marginBottom: 24 }}>
                Your Goals.<br />Our Priority.
              </h2>
              <p style={{ color: '#f5f0e888', fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>
                At Billionaires Tree Realty, every client relationship is built on trust, transparency and genuine commitment to helping you find the right property.
              </p>
              <GoldButton href={waLink('Hello! I would like to know more about Billionaires Tree Realty and how you can help me.')}>
                Learn More on WhatsApp
              </GoldButton>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              {WHY_US.map(item => (
                <div key={item.title}
                  style={{ padding: '32px 28px', border: '1px solid #c9a84c18', transition: 'border-color 0.3s, background 0.3s', cursor: 'default' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#c9a84c55'; (e.currentTarget as HTMLElement).style.background = '#ffffff05'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#c9a84c18'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
                  <div style={{ fontSize: 28, marginBottom: 16 }}>{item.icon}</div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 600, color: '#c9a84c', marginBottom: 10, fontStyle: 'italic' }}>{item.title}</div>
                  <div style={{ fontSize: 14, color: '#f5f0e877', lineHeight: 1.7 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROPERTY INQUIRY ── */}
      <section id="contact" style={{ position: 'relative', padding: 'clamp(64px, 8vw, 112px) 24px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: '#0f0f0f' }}>
          <img src="https://images.unsplash.com/photo-1702411200201-3061d0eea802?w=1600&h=800&fit=crop&auto=format"
            alt="Luxury property"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2 }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(15,15,15,0.8), rgba(15,15,15,0.95))' }} />

        <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <SectionLabel light>Get in Touch</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 600, color: '#f5f0e8', lineHeight: 1.15, fontStyle: 'italic', marginBottom: 20 }}>
            Looking for Your<br /><span style={{ color: '#c9a84c' }}>Next Property?</span>
          </h2>
          <p style={{ color: '#f5f0e8aa', fontSize: 16, lineHeight: 1.7, marginBottom: 48, maxWidth: 520, margin: '0 auto 48px' }}>
            Tell us what you need and our team will help you explore opportunities across Delhi, NCR, Goa and Uttarakhand.
          </p>

          {/* Category selector */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 40 }}>
            {INQUIRY_CATEGORIES.map(cat => (
              <button key={cat.label} onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '9px 22px', borderRadius: 2, fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s',
                  background: selectedCategory.label === cat.label ? '#c9a84c' : 'transparent',
                  color: selectedCategory.label === cat.label ? '#0f0f0f' : '#f5f0e8aa',
                  border: selectedCategory.label === cat.label ? '1px solid #c9a84c' : '1px solid #f5f0e822',
                }}>
                {cat.label}
              </button>
            ))}
          </div>

          <a href={waLink(selectedCategory.msg)} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: '#25D366', color: '#fff', padding: '18px 40px', fontSize: 15, fontWeight: 600, letterSpacing: '0.05em', textDecoration: 'none', borderRadius: 2, transition: 'background 0.2s, transform 0.2s' }}
            onMouseEnter={e => { (e.currentTarget).style.background = '#1ebe5a'; (e.currentTarget).style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { (e.currentTarget).style.background = '#25D366'; (e.currentTarget).style.transform = 'translateY(0)'; }}>
            <WhatsAppIcon size={20} color="#fff" />
            Chat With Billionaires Tree Realty on WhatsApp
          </a>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ position: 'relative', padding: 'clamp(80px, 10vw, 140px) 24px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: '#0f0f0f' }}>
          <img src="https://images.unsplash.com/photo-1776964176656-5d56fcd01a6e?w=1600&h=800&fit=crop&auto=format"
            alt="Luxury rooftop pool"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(15,15,15,0.9) 0%, rgba(15,15,15,0.6) 60%, rgba(15,15,15,0.75) 100%)' }} />

        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ maxWidth: 600 }}>
            <div style={{ width: 60, height: 1, background: '#c9a84c', marginBottom: 32 }} />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 68px)', fontWeight: 600, color: '#f5f0e8', lineHeight: 1.1, fontStyle: 'italic', marginBottom: 24 }}>
              Your Next Address<br />
              <span style={{ color: '#c9a84c' }}>Starts Here.</span>
            </h2>
            <p style={{ color: '#f5f0e8aa', fontSize: 16, lineHeight: 1.8, marginBottom: 48, maxWidth: 480 }}>
              Whether buying, selling or investing, connect with Billionaires Tree Realty for personalized real estate assistance across Delhi, NCR, Goa and Uttarakhand.
            </p>
            <a href={waLink('Hello! I found Billionaires Tree Realty and would like to discuss my property requirements.')} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: '#c9a84c', color: '#0f0f0f', padding: '18px 40px', fontSize: 14, fontWeight: 700, letterSpacing: '0.08em', textDecoration: 'none', borderRadius: 2, transition: 'background 0.2s, transform 0.2s', textTransform: 'uppercase' }}
              onMouseEnter={e => { (e.currentTarget).style.background = '#e0c87a'; (e.currentTarget).style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { (e.currentTarget).style.background = '#c9a84c'; (e.currentTarget).style.transform = 'translateY(0)'; }}>
              <WhatsAppIcon size={18} color="#0f0f0f" />
              WhatsApp +91 92661 33030
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#070707', borderTop: '1px solid #c9a84c22', padding: 'clamp(48px, 6vw, 72px) 24px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, marginBottom: 48 }} className="grid-responsive-3">
            {/* Brand */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <img src="/logo-mark.jpeg" alt="Billionaires Tree Realty logo" width={56} height={56} style={{ width: 56, height: 56, objectFit: 'contain', background: '#fff', borderRadius: 6, padding: 2, display: 'block' }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 600, color: '#c9a84c', letterSpacing: '0.04em' }}>Billionaires Tree</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 400, color: '#e0c87a', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Realty</div>
                </div>
              </div>
              <p style={{ color: '#f5f0e855', fontSize: 14, lineHeight: 1.7, marginBottom: 20, maxWidth: 320 }}>
                Premium Real Estate Across Delhi, NCR, Goa &amp; Uttarakhand
              </p>
              <a href={WA_BASE} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#25D366', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>
                <WhatsAppIcon size={16} color="#25D366" />
                +91 92661 33030
              </a>
            </div>

            {/* Navigation */}
            <div>
              <div style={{ color: '#c9a84c', fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20 }}>Navigation</div>
              {NAV_LINKS.map(l => (
                <a key={l.label} href={l.href} style={{ display: 'block', color: '#f5f0e855', fontSize: 13, marginBottom: 10, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = '#c9a84c'}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = '#f5f0e855'}>
                  {l.label}
                </a>
              ))}
            </div>

            {/* Locations */}
            <div>
              <div style={{ color: '#c9a84c', fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20 }}>Service Areas</div>
              {['Delhi', 'NCR', 'Goa', 'Uttarakhand'].map(loc => (
                <a key={loc} href={waLink(`Hello! I am looking for properties in ${loc}. Please share options.`)} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'block', color: '#f5f0e855', fontSize: 13, marginBottom: 10, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = '#c9a84c'}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = '#f5f0e855'}>
                  {loc}
                </a>
              ))}
            </div>
          </div>

          <div style={{ borderTop: '1px solid #c9a84c18', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <div style={{ color: '#f5f0e833', fontSize: 12 }}>
              © 2026 Billionaires Tree Realty. All Rights Reserved.
            </div>
            <div style={{ color: '#f5f0e833', fontSize: 12 }}>
              Delhi • NCR • Goa • Uttarakhand
            </div>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ── */}
      <a href={WA_BASE} target="_blank" rel="noopener noreferrer"
        style={{ position: 'fixed', bottom: 28, right: 28, zIndex: 200, display: 'flex', alignItems: 'center', gap: 10, background: '#25D366', color: '#fff', borderRadius: 50, padding: '14px 22px', boxShadow: '0 4px 24px rgba(37,211,102,0.35)', textDecoration: 'none', fontWeight: 600, fontSize: 14, transition: 'transform 0.2s, box-shadow 0.2s' }}
        onMouseEnter={e => { (e.currentTarget).style.transform = 'scale(1.07)'; (e.currentTarget).style.boxShadow = '0 6px 32px rgba(37,211,102,0.5)'; }}
        onMouseLeave={e => { (e.currentTarget).style.transform = 'scale(1)'; (e.currentTarget).style.boxShadow = '0 4px 24px rgba(37,211,102,0.35)'; }}>
        <WhatsAppIcon size={22} color="#fff" />
        <span className="wa-label">Chat on WhatsApp</span>
      </a>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
          .grid-responsive { grid-template-columns: 1fr !important; gap: 40px !important; }
          .grid-responsive-3 { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (min-width: 901px) {
          .show-mobile { display: none !important; }
        }
        @media (max-width: 640px) {
          .wa-label { display: none; }
        }
      `}</style>
    </div>
  );
}

/* ── Sub-components ── */

function WhatsAppIcon({ size = 24, color = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, justifyContent: 'inherit' }}>
      <div style={{ width: 28, height: 1, background: '#c9a84c' }} />
      <span style={{ color: '#c9a84c', fontSize: 11, fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase' }}>{children}</span>
      <div style={{ width: 28, height: 1, background: '#c9a84c' }} />
    </div>
  );
}

function GoldButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#c9a84c', color: '#0f0f0f', padding: '15px 32px', fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: 2, transition: 'background 0.2s, transform 0.2s' }}
      onMouseEnter={e => { (e.currentTarget).style.background = '#e0c87a'; (e.currentTarget).style.transform = 'translateY(-2px)'; }}
      onMouseLeave={e => { (e.currentTarget).style.background = '#c9a84c'; (e.currentTarget).style.transform = 'translateY(0)'; }}>
      {children}
    </a>
  );
}

function OutlineButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'transparent', color: '#f5f0e8', padding: '14px 32px', fontSize: 13, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: 2, border: '1px solid #f5f0e855', transition: 'border-color 0.2s, color 0.2s, transform 0.2s' }}
      onMouseEnter={e => { (e.currentTarget).style.borderColor = '#c9a84c'; (e.currentTarget).style.color = '#c9a84c'; (e.currentTarget).style.transform = 'translateY(-2px)'; }}
      onMouseLeave={e => { (e.currentTarget).style.borderColor = '#f5f0e855'; (e.currentTarget).style.color = '#f5f0e8'; (e.currentTarget).style.transform = 'translateY(0)'; }}>
      {children}
    </a>
  );
}

function ServiceCard({ service }: { service: typeof SERVICES[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? '#1a1a1a' : '#141414', padding: '40px 32px', border: '1px solid', borderColor: hovered ? '#c9a84c44' : '#ffffff08', transition: 'all 0.3s', cursor: 'default' }}>
      <div style={{ fontSize: 32, marginBottom: 20 }}>{service.icon}</div>
      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 600, color: hovered ? '#c9a84c' : '#f5f0e8', marginBottom: 14, lineHeight: 1.3, transition: 'color 0.3s', fontStyle: 'italic' }}>
        {service.title}
      </h3>
      <p style={{ color: '#f5f0e866', fontSize: 14, lineHeight: 1.75, marginBottom: 28 }}>{service.desc}</p>
      <a href={waLink(service.msg)} target="_blank" rel="noopener noreferrer"
        style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#c9a84c', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', transition: 'gap 0.2s' }}
        onMouseEnter={e => (e.currentTarget as HTMLElement).style.gap = '12px'}
        onMouseLeave={e => (e.currentTarget as HTMLElement).style.gap = '8px'}>
        Enquire on WhatsApp
        <span style={{ fontSize: 16, lineHeight: 1 }}>→</span>
      </a>
    </div>
  );
}

function LocationCard({ loc }: { loc: typeof LOCATIONS[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4', background: '#1a1a1a', cursor: 'pointer' }}>
      <img src={loc.img} alt={loc.alt}
        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease, opacity 0.4s', transform: hovered ? 'scale(1.08)' : 'scale(1)', opacity: hovered ? 0.5 : 0.7 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,15,15,0.95) 0%, rgba(15,15,15,0.3) 60%, transparent 100%)' }} />
      {hovered && <div style={{ position: 'absolute', inset: 0, background: 'rgba(201,168,76,0.06)' }} />}

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 32 }}>
        <div style={{ width: 24, height: 1, background: '#c9a84c', marginBottom: 14, transition: 'width 0.3s', ...(hovered ? { width: 40 } : {}) }} />
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 30, fontWeight: 600, color: '#f5f0e8', marginBottom: 6, fontStyle: 'italic', lineHeight: 1.1 }}>{loc.name}</h3>
        <p style={{ color: '#c9a84c', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>{loc.tagline}</p>
        <p style={{ color: '#f5f0e877', fontSize: 13, lineHeight: 1.6, marginBottom: 24 }}>{loc.desc}</p>
        <a href={waLink(loc.msg)} target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#c9a84c', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}
          onClick={e => e.stopPropagation()}>
          <WhatsAppIcon size={14} color="#c9a84c" />
          Enquire Now
        </a>
      </div>
    </div>
  );
}
