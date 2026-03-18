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

  const bg = isScrolled ? 'rgba(10,8,5,0.96)' : 'transparent';
  const border = isScrolled ? '1px solid rgba(201,151,62,0.1)' : '1px solid transparent';

  return (
    <>
    <style>{`
      @media (min-width: 768px) { .navbar-inner { padding: 0 2.5rem !important; height: 80px !important; } }
      .navbar-logo { width: 56px !important; height: 56px !important; }
      @media (min-width: 768px) { .navbar-logo { width: 135px !important; height: 135px !important; } }
    `}</style>
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, transition: 'background 0.4s, border 0.4s', background: bg, backdropFilter: isScrolled ? 'blur(20px)' : 'none', WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none', borderBottom: border }}
    >
      <div className="navbar-inner" style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

        {/* Logo — pojawia się tylko po przewinięciu */}
        <Link href="/" style={{
          display: 'flex', textDecoration: 'none', flexShrink: 0,
          opacity: isScrolled ? 1 : 0,
          pointerEvents: isScrolled ? 'auto' : 'none',
          transition: 'opacity 0.4s ease',
        }}>
          <Image src="/images/logo.png" alt="Manufaktura Pizzy" width={135} height={135} className="rounded-full navbar-logo" />
        </Link>

        {/* Desktop nav — center */}
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

        {/* Right: phone + CTA */}
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

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#EDE8DF', padding: '0.4rem' }}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={open ? 'x' : 'menu'} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
              {open ? <X size={22} /> : <Menu size={22} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ background: 'rgba(10,8,5,0.98)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(201,151,62,0.1)', overflow: 'hidden' }}
          >
            <div style={{ padding: '1rem 1.25rem 2rem' }}>
              {navLinks.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.div key={link.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                    <Link href={link.href} onClick={() => setOpen(false)} style={{
                      display: 'block', padding: '0.9rem 0',
                      borderBottom: '1px solid rgba(237,232,223,0.06)',
                      color: active ? '#C9973E' : 'rgba(237,232,223,0.6)',
                      fontSize: '15px', letterSpacing: '0.04em', textDecoration: 'none',
                      fontWeight: active ? 600 : 400,
                    }}>
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} style={{ marginTop: '1.5rem' }}>
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
    </>
  );
}
