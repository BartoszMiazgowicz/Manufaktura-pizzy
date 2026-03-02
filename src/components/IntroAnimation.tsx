'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function IntroAnimation() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#0C0A07',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0,
          }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Image
              src="/images/logo.png"
              alt="Manufaktura Pizzy"
              width={1120}
              height={1120}
              className="rounded-full"
              priority
            />
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ textAlign: 'center', marginTop: '4rem' }}
          >
            <p style={{
              fontFamily: 'var(--font-playfair, serif)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              color: '#EDE8DF',
              letterSpacing: '-0.02em',
              lineHeight: 1,
              margin: 0,
            }}>
              Manufaktura
            </p>
            <p style={{
              fontFamily: 'var(--font-playfair, serif)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              fontStyle: 'italic',
              color: '#C9973E',
              letterSpacing: '-0.02em',
              lineHeight: 1,
              margin: '0.2rem 0 0',
            }}>
              Pizzy
            </p>
          </motion.div>

          {/* Gold line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              width: '48px',
              height: '1px',
              background: 'rgba(201,151,62,0.5)',
              marginTop: '1.5rem',
              transformOrigin: 'center',
            }}
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            style={{
              color: 'rgba(237,232,223,0.3)',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginTop: '1rem',
            }}
          >
            Autentyczna pizza neapolitańska
          </motion.p>

          {/* Bottom progress line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.6, ease: 'linear' }}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '1px',
              background: 'rgba(201,151,62,0.35)',
              transformOrigin: 'left',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
