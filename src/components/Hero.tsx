'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <style>{`
        .hero-root {
          display: grid;
          grid-template-columns: 42% 58%;
          height: 100vh;
          min-height: 600px;
        }
        .hero-left {
          background: #0C0A07;
          display: flex;
          flex-direction: column;
          padding: 2.5rem 3rem;
          position: relative;
          overflow: hidden;
          z-index: 2;
        }
        .hero-right {
          position: relative;
          overflow: hidden;
        }
        .hero-title {
          font-family: var(--font-playfair, serif);
          font-size: clamp(2.4rem, 5vw, 5rem);
          font-weight: 700;
          line-height: 0.95;
          letter-spacing: -0.03em;
          margin: 0;
        }
        .hero-big-temp {
          font-family: var(--font-playfair, serif);
          font-size: clamp(4rem, 8vw, 7.5rem);
          font-weight: 700;
          color: #C9973E;
          line-height: 1;
          letter-spacing: -0.04em;
        }
        @media (max-width: 768px) {
          .hero-root {
            grid-template-columns: 1fr;
            grid-template-rows: 52vh 1fr;
            height: auto;
            min-height: 100svh;
          }
          .hero-left {
            padding: 2rem 1.75rem 2.5rem;
            order: 2;
          }
          .hero-right {
            order: 1;
          }
          .hero-title {
            font-size: clamp(2.75rem, 11vw, 4rem);
          }
          .hero-big-temp {
            font-size: clamp(3rem, 12vw, 5rem);
          }
          .hero-vertical-label {
            display: none !important;
          }
        }
      `}</style>

      <section className="hero-root">

        {/* ── LEFT: text panel ─────────────────────────── */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Logo */}
          <div style={{ marginBottom: 'auto' }}>
            <Image
              src="/images/logo.png"
              alt="Manufaktura Pizzy"
              width={480}
              height={480}
              className="rounded-full"
            />
          </div>

          {/* Main title block */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem 0' }}>
            <h1 className="hero-title">
              <span style={{ display: 'block', color: '#EDE8DF', whiteSpace: 'nowrap' }}>Manufaktura</span>
              <em style={{ display: 'block', color: '#C9973E', fontStyle: 'italic' }}>Pizzy</em>
            </h1>

            <div style={{
              width: '48px', height: '1px',
              background: 'rgba(201,151,62,0.45)',
              margin: '2rem 0',
            }} />

            <p style={{
              color: 'rgba(237,232,223,0.45)',
              fontSize: '13.5px',
              lineHeight: 1.7,
              letterSpacing: '0.03em',
              maxWidth: '240px',
            }}>
              Autentyczna pizza neapolitańska.<br />
              Certyfikat AVPN. Zielona Góra.
            </p>
          </div>

          {/* Bottom CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            <Link href="/menu" style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              background: '#C9973E', color: '#0C0A07',
              padding: '0.875rem 0',
              fontSize: '11.5px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
              textDecoration: 'none', borderRadius: '2px',
              transition: 'background 0.25s, color 0.25s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#7D2030'; (e.currentTarget as HTMLElement).style.color = '#EDE8DF'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#C9973E'; (e.currentTarget as HTMLElement).style.color = '#0C0A07'; }}>
              Zobacz menu
            </Link>
            <a href="https://zamow.online" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid rgba(201,151,62,0.3)',
              color: 'rgba(237,232,223,0.6)',
              padding: '0.85rem 0',
              fontSize: '11.5px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
              textDecoration: 'none', borderRadius: '2px',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,151,62,0.7)'; (e.currentTarget as HTMLElement).style.color = '#C9973E'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,151,62,0.3)'; (e.currentTarget as HTMLElement).style.color = 'rgba(237,232,223,0.6)'; }}>
              Zamów online
            </a>
          </div>
        </motion.div>

        {/* ── RIGHT: image panel ───────────────────────── */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.15 }}
        >
          <Image
            src="/images/c.jpg"
            alt="Piec z Neapolu"
            fill
            className="object-cover"
            priority
            style={{ objectPosition: 'center center' }}
          />

          {/* Dark vignette */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(12,10,7,0.5) 0%, rgba(12,10,7,0.05) 40%, transparent 100%)',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(12,10,7,0.7) 0%, transparent 50%)',
          }} />

          {/* 500°C — big design element */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              position: 'absolute',
              bottom: '2.5rem',
              left: '2.5rem',
            }}
          >
            <div className="hero-big-temp">500°C</div>
            <div style={{ color: 'rgba(237,232,223,0.4)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '0.25rem' }}>
              temperatura pieca
            </div>
          </motion.div>

          {/* Vertical label — right edge */}
          <div
            className="hero-vertical-label"
            style={{
              position: 'absolute',
              right: '1.5rem',
              top: '50%',
              transform: 'translateY(-50%) rotate(90deg)',
              transformOrigin: 'center center',
              color: 'rgba(237,232,223,0.2)',
              fontSize: '10px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            Zielona Góra · AVPN Certified
          </div>
        </motion.div>

      </section>
    </>
  );
}
