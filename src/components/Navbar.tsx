'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '/',        label: 'Start',   desc: 'Strona główna' },
  { href: '/menu',    label: 'Menu',    desc: 'Nasza oferta pizzy' },
  { href: '/o-nas',   label: 'O nas',   desc: 'Nasza historia' },
  { href: '/kontakt', label: 'Kontakt', desc: 'Znajdź nas' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const bg = isScrolled ? 'rgba(10,8,5,0.96)' : 'transparent';
  const border = isScrolled ? '1px solid rgba(201,151,62,0.1)' : '1px solid transparent';

  return (
    <>
    <style>{`
      @media (min-width: 768px) {
        .navbar-inner { padding: 0 2.5rem !important; height: 80px !important; }
        .navbar-logo  { width: 135px !important; height: 135px !important; }
      }
      .navbar-logo { width: 56px !important; height: 56px !important; }
    `}</style>

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
      {/* ─── Top bar ─────────────────────────────────────────────── */}
      <div
        className="navbar-inner"
        style={{
          maxWidth: '72rem', margin: '0 auto', padding: '0 1.25rem',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          height: '72px',
        }}
      >
        {/* Left: logo (after scroll) */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/" style={{
            display: 'flex', textDecoration: 'none', flexShrink: 0,
            opacity: isScrolled ? 1 : 0,
            pointerEvents: isScrolled ? 'auto' : 'none',
            transition: 'opacity 0.4s ease',
          }}>
            <Image
              src="/images/logo.png"
              alt="Manufaktura Pizzy"
              width={135} height={135}
              className="rounded-full navbar-logo"
            />
          </Link>
        </div>

        {/* Center: desktop nav OR mobile brand name */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="hidden md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} style={{
                  padding: '0.5rem 1.1rem',
                  fontSize: '13px',
                  letterSpacing: '0.05em',
                  fontWeight: active ? 600 : 400,
                  color: active ? '#C9973E' : 'rgba(237,232,223,0.55)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  borderBottom: active ? '1px solid #C9973E' : '1px solid transparent',
                  paddingBottom: '0.4rem',
                }}
                onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.color = 'rgba(237,232,223,0.9)'; }}
                onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.color = 'rgba(237,232,223,0.55)'; }}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile brand name */}
          <span className="md:hidden" style={{
            fontFamily: 'var(--font-playfair, serif)',
            fontSize: '13px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(237,232,223,0.7)',
            opacity: isScrolled ? 0 : 1,
            transition: 'opacity 0.4s ease',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
          }}>
            Manufaktura Pizzy
          </span>
        </div>

        {/* Right: desktop CTA + phone / mobile hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '1rem' }}>
          {/* Desktop right */}
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
              textDecoration: 'none', borderRadius: '2px',
              transition: 'background 0.25s, color 0.25s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#7D2030'; (e.currentTarget as HTMLElement).style.color = '#EDE8DF'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#C9973E'; (e.currentTarget as HTMLElement).style.color = '#0C0A07'; }}>
              Zamów
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
            style={{
              background: open ? 'rgba(201,151,62,0.12)' : 'rgba(237,232,223,0.06)',
              border: '1px solid rgba(201,151,62,0.2)',
              borderRadius: '6px',
              cursor: 'pointer',
              color: open ? '#C9973E' : '#EDE8DF',
              padding: '0.45rem 0.6rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s, color 0.2s, border-color 0.2s',
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={open ? 'x' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ─── Mobile dropdown ────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              background: 'rgba(8,6,3,0.99)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              borderTop: '1px solid rgba(201,151,62,0.15)',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '1.25rem 1.5rem 2rem' }}>

              {/* Nav links */}
              <div style={{ marginBottom: '1.75rem' }}>
                {navLinks.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, ease: 'easeOut' }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '1rem 0',
                          borderBottom: '1px solid rgba(237,232,223,0.06)',
                          textDecoration: 'none',
                        }}
                      >
                        <div>
                          <div style={{
                            fontSize: '17px',
                            fontWeight: active ? 600 : 400,
                            letterSpacing: '0.03em',
                            color: active ? '#C9973E' : 'rgba(237,232,223,0.85)',
                            marginBottom: '2px',
                          }}>
                            {link.label}
                          </div>
                          <div style={{
                            fontSize: '11px',
                            letterSpacing: '0.05em',
                            color: 'rgba(237,232,223,0.3)',
                            textTransform: 'uppercase',
                          }}>
                            {link.desc}
                          </div>
                        </div>
                        <div style={{
                          width: '28px', height: '28px',
                          borderRadius: '50%',
                          border: `1px solid ${active ? 'rgba(201,151,62,0.4)' : 'rgba(237,232,223,0.1)'}`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: active ? '#C9973E' : 'rgba(237,232,223,0.2)',
                          fontSize: '14px',
                          flexShrink: 0,
                        }}>
                          →
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.28 }}
                style={{
                  height: '1px',
                  background: 'linear-gradient(to right, transparent, rgba(201,151,62,0.3), transparent)',
                  marginBottom: '1.5rem',
                }}
              />

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
              >
                <a
                  href="https://zamow.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  style={{
                    display: 'block', textAlign: 'center',
                    background: '#C9973E', color: '#0C0A07',
                    padding: '1rem', fontSize: '12px', fontWeight: 700,
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    textDecoration: 'none', borderRadius: '4px',
                  }}
                >
                  Zamów Online
                </a>
                <a
                  href="tel:+48733355075"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                    border: '1px solid rgba(237,232,223,0.12)',
                    color: 'rgba(237,232,223,0.55)',
                    padding: '0.85rem', fontSize: '13px', letterSpacing: '0.08em',
                    textDecoration: 'none', borderRadius: '4px',
                  }}
                >
                  <Phone size={13} strokeWidth={1.5} />
                  733 355 075
                </a>
              </motion.div>

              {/* Bottom label */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.42 }}
                style={{
                  textAlign: 'center',
                  marginTop: '1.5rem',
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(237,232,223,0.18)',
                }}
              >
                Manufaktura Pizzy · Kraków
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
    </>
  );
}
