'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/',        label: 'Start'   },
  { href: '/menu',    label: 'Menu'    },
  { href: '/o-nas',   label: 'O nas'   },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const bg = isScrolled ? 'rgba(10,8,5,0.96)' : 'transparent';
  const border = isScrolled ? '1px solid rgba(201,151,62,0.1)' : '1px solid transparent';

  return (
    <>
      <style>{`
        @media (min-width: 768px) { .navbar-inner { padding: 0 2.5rem !important; height: 80px !important; } }
        .navbar-logo { width: 56px !important; height: 56px !important; }
        @media (min-width: 768px) { .navbar-logo { width: 135px !important; height: 135px !important; } }
        .nav-mobile-brand { display: flex; }
        @media (min-width: 768px) { .nav-mobile-brand { display: none !important; } }
      `}</style>

      {/* ── HEADER BAR ─────────────────────────────────────────────── */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          transition: 'background 0.4s, border 0.4s',
          background: bg,
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: border,
        }}
      >
        <div
          className="navbar-inner"
          style={{
            maxWidth: '72rem', margin: '0 auto', padding: '0 1.25rem',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px',
          }}
        >
          {/* Logo — only after scroll */}
          <Link href="/" style={{
            display: 'flex', textDecoration: 'none', flexShrink: 0,
            opacity: isScrolled ? 1 : 0,
            pointerEvents: isScrolled ? 'auto' : 'none',
            transition: 'opacity 0.4s ease',
          }}>
            <Image src="/images/logo.png" alt="Manufaktura Pizzy" width={135} height={135} className="rounded-full navbar-logo" />
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="hidden md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} style={{
                  padding: '0.5rem 1.1rem 0.4rem',
                  fontSize: '13px', letterSpacing: '0.05em',
                  fontWeight: active ? 600 : 400,
                  color: active ? '#C9973E' : 'rgba(237,232,223,0.55)',
                  textDecoration: 'none', transition: 'color 0.2s',
                  borderBottom: active ? '1px solid #C9973E' : '1px solid transparent',
                }}
                onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.color = 'rgba(237,232,223,0.9)'; }}
                onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.color = 'rgba(237,232,223,0.55)'; }}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop right: phone + CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }} className="hidden md:flex">
            <a href="tel:+48733355075" style={{ color: 'rgba(237,232,223,0.35)', fontSize: '13px', textDecoration: 'none', letterSpacing: '0.03em', transition: 'color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(237,232,223,0.75)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(237,232,223,0.35)'; }}>
              733 355 075
            </a>
            <a href="https://zamow.online" target="_blank" rel="noopener noreferrer" style={{
              background: '#C9973E', color: '#0C0A07',
              padding: '0.55rem 1.4rem',
              fontSize: '11.5px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              textDecoration: 'none', borderRadius: '2px', transition: 'background 0.25s, color 0.25s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#7D2030'; (e.currentTarget as HTMLElement).style.color = '#EDE8DF'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#C9973E'; (e.currentTarget as HTMLElement).style.color = '#0C0A07'; }}>
              Zamów
            </a>
          </div>

          {/* Mobile: brand name + hamburger */}
          <div className="nav-mobile-brand" style={{ alignItems: 'center', gap: '0.75rem', marginLeft: 'auto' }}>
            <span style={{
              fontFamily: 'var(--font-playfair, serif)',
              fontSize: '13px', letterSpacing: '0.1em',
              color: 'rgba(237,232,223,0.7)',
              opacity: isScrolled ? 0 : 1,
              transition: 'opacity 0.3s ease',
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
            }}>
              Manufaktura Pizzy
            </span>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#EDE8DF', padding: '0.4rem', display: 'flex', alignItems: 'center' }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={open ? 'x' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  {open ? <X size={22} /> : <Menu size={22} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── MOBILE DRAWER + BACKDROP ────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              style={{
                position: 'fixed', inset: 0, zIndex: 55,
                background: 'rgba(0,0,0,0.65)',
                backdropFilter: 'blur(3px)',
              }}
            />

            {/* Drawer */}
            <motion.nav
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0,
                width: 'min(300px, 82vw)',
                background: '#0D0B08',
                borderLeft: '1px solid rgba(201,151,62,0.12)',
                zIndex: 60,
                display: 'flex', flexDirection: 'column',
                overflowY: 'auto',
              }}
            >
              {/* Drawer header */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '1.25rem 1.5rem',
                borderBottom: '1px solid rgba(237,232,223,0.07)',
                flexShrink: 0,
              }}>
                <Link href="/" onClick={() => setOpen(false)} style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none',
                }}>
                  <div style={{ position: 'relative', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                    <Image src="/images/logo.png" alt="Manufaktura Pizzy" fill style={{ objectFit: 'cover' }} />
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-playfair, serif)',
                    fontSize: '13px', color: 'rgba(237,232,223,0.8)', letterSpacing: '0.06em',
                  }}>
                    Manufaktura Pizzy
                  </span>
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Zamknij menu"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(237,232,223,0.4)', padding: '0.25rem', display: 'flex' }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <div style={{ flex: 1, padding: '0.25rem 0' }}>
                {navLinks.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 + i * 0.07 }}
                    >
                      <Link href={link.href} onClick={() => setOpen(false)} style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '1rem 1.5rem',
                        borderBottom: '1px solid rgba(237,232,223,0.05)',
                        color: active ? '#C9973E' : 'rgba(237,232,223,0.7)',
                        fontSize: '17px', letterSpacing: '0.03em',
                        textDecoration: 'none', fontWeight: active ? 600 : 400,
                      }}>
                        {link.label}
                        {active && (
                          <span style={{
                            width: '5px', height: '5px', borderRadius: '50%',
                            background: '#C9973E', flexShrink: 0,
                          }} />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom: phone + CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.32 }}
                style={{
                  padding: '1.25rem 1.5rem',
                  borderTop: '1px solid rgba(237,232,223,0.07)',
                  display: 'flex', flexDirection: 'column', gap: '0.75rem',
                  flexShrink: 0,
                }}
              >
                <a href="tel:+48733355075" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  border: '1px solid rgba(237,232,223,0.12)',
                  color: 'rgba(237,232,223,0.55)',
                  padding: '0.8rem', fontSize: '14px', letterSpacing: '0.05em',
                  textDecoration: 'none', borderRadius: '2px',
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  733 355 075
                </a>
                <a href="https://zamow.online" target="_blank" rel="noopener noreferrer" style={{
                  display: 'block', textAlign: 'center',
                  background: '#C9973E', color: '#0C0A07',
                  padding: '0.9rem', fontSize: '12px', fontWeight: 700,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  textDecoration: 'none', borderRadius: '2px',
                }}>
                  Zamów Online
                </a>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
