'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '/',        label: 'Start',   },
  { href: '/menu',    label: 'Menu',    },
  { href: '/o-nas',   label: 'O nas',   },
  { href: '/kontakt', label: 'Kontakt', },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const bg = isScrolled ? 'rgba(10,8,5,0.96)' : 'transparent';
  const border = isScrolled ? '1px solid rgba(201,151,62,0.1)' : '1px solid transparent';

  return (
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
              style={{ width: '56px', height: '56px' }}
              className="rounded-full"
            />
          </Link>
        </div>

        {/* Center: nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '1.5rem' }}>
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
      </div>
    </motion.header>
  );
}
