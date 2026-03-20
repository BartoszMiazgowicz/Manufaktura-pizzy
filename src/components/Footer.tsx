'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Facebook, Instagram } from 'lucide-react';

const hours = [
  { day: 'Poniedziałek',       time: 'Zamknięte',      closed: true },
  { day: 'Wtorek – Czwartek',  time: '12:00 – 21:00',  closed: false },
  { day: 'Piątek – Sobota',    time: '12:00 – 22:00',  closed: false },
  { day: 'Niedziela',          time: '12:00 – 21:00',  closed: false },
];

export default function Footer() {
  const col: React.CSSProperties = {
    display: 'flex', flexDirection: 'column',
  };
  const label: React.CSSProperties = {
    color: '#C9973E', fontSize: '10px', fontWeight: 500,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    marginBottom: '1.5rem',
    paddingBottom: '0.875rem',
    borderBottom: '1px solid rgba(201,151,62,0.15)',
  };
  const link: React.CSSProperties = {
    color: 'rgba(237,232,223,0.45)', fontSize: '13.5px',
    textDecoration: 'none', lineHeight: 1,
    transition: 'color 0.2s',
    display: 'block',
  };

  return (
    <footer style={{ background: '#0C0A07', borderTop: '1px solid rgba(201,151,62,0.1)' }}>
      {/* Top section */}
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '5rem 2rem 4rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div style={{ ...col }}>
            <Link href="/" className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', marginBottom: '1.5rem' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                <Image
                  src="/images/logo.png"
                  alt="Manufaktura Pizzy"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div style={{ color: '#EDE8DF', fontSize: '1rem', fontWeight: 700, lineHeight: 1.2, fontFamily: 'var(--font-playfair, serif)' }}>Manufaktura</div>
                <div style={{ color: '#C9973E', fontSize: '9px', fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Pizzy</div>
              </div>
            </Link>
            <p style={{ color: 'rgba(237,232,223,0.4)', fontSize: '13px', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Autentyczna pizza neapolitańska pieczona w 500°C przez 60 sekund. Certyfikat AVPN.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { href: 'https://facebook.com/manufakturapizzy', Icon: Facebook, label: 'Facebook' },
                { href: 'https://instagram.com/manufakturapizzy', Icon: Instagram, label: 'Instagram' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: '34px', height: '34px', border: '1px solid rgba(201,151,62,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(237,232,223,0.4)',
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,151,62,0.6)';
                    (e.currentTarget as HTMLElement).style.color = '#C9973E';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,151,62,0.2)';
                    (e.currentTarget as HTMLElement).style.color = 'rgba(237,232,223,0.4)';
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div style={{ ...col }}>
            <p style={{ ...label }}>Nawigacja</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                { href: '/', text: 'Strona Główna' },
                { href: '/menu', text: 'Menu' },
                { href: '/o-nas', text: 'O Nas' },
                { href: '/kontakt', text: 'Kontakt' },
              ].map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{ ...link }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#C9973E'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(237,232,223,0.45)'; }}
                >
                  {l.text}
                </Link>
              ))}
              <a
                href="https://zamow.online"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...link, color: '#C9973E', fontWeight: 500 }}
              >
                Zamów Online →
              </a>
            </div>
          </div>

          {/* Contact */}
          <div style={{ ...col }}>
            <p style={{ ...label }}>Kontakt</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={14} style={{ color: '#C9973E', marginTop: '3px', flexShrink: 0 }} />
                <span style={{ color: 'rgba(237,232,223,0.45)', fontSize: '13.5px', lineHeight: 1.7 }}>
                  Aleja Wojska Polskiego 112<br />65-762 Zielona Góra
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone size={14} style={{ color: '#C9973E', flexShrink: 0 }} />
                <a href="tel:+48733355075" style={{ ...link }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#C9973E'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(237,232,223,0.45)'; }}>
                  733 355 075
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div style={{ ...col }}>
            <p style={{ ...label }}>Godziny otwarcia</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {hours.map(item => (
                <div key={item.day} style={{ display: 'flex', justifyContent: 'space-between', opacity: item.closed ? 0.35 : 1 }}>
                  <span style={{ color: 'rgba(237,232,223,0.55)', fontSize: '12.5px' }}>{item.day}</span>
                  <span style={{ color: item.closed ? '#7D2030' : '#C9973E', fontSize: '12.5px', fontWeight: 500 }}>{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(201,151,62,0.08)', padding: '1.5rem 2rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <p style={{ color: 'rgba(237,232,223,0.25)', fontSize: '12px' }}>
            &copy; {new Date().getFullYear()} Manufaktura Pizzy. Wszystkie prawa zastrzeżone.
          </p>
          <a href="https://manufakturapizzy.pl" style={{ color: 'rgba(237,232,223,0.2)', fontSize: '12px', textDecoration: 'none', letterSpacing: '0.04em' }}>
            manufakturapizzy.pl
          </a>
        </div>
      </div>
    </footer>
  );
}
