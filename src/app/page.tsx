'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import AnimatedSection from '@/components/AnimatedSection';
import { AnimatedStagger, AnimatedItem } from '@/components/AnimatedSection';
import { ArrowRight } from 'lucide-react';

const featuredPizzas = [
  { name: 'Margherita', description: 'Sos pomidorowy, mozzarella fior di latte, grana padano, bazylia, oliwa EVO', price: '34,90', image: '/images/a.jpg' },
  { name: 'Burrata',    description: 'Sos pomidorowy, kulka burraty, suszone pomidory, bazylia, oliwa EVO',          price: '40,90', image: '/images/f.jpg' },
  { name: 'Diavola',   description: 'Sos pomidorowy, mozzarella, pepperoni, nduja calabrese, jalapeño',             price: '39,90', image: '/images/g.jpg' },
];

const hours = [
  { day: 'Poniedziałek',       time: 'Zamknięte',     closed: true  },
  { day: 'Wtorek – Czwartek',  time: '12:00 – 21:00', closed: false },
  { day: 'Piątek – Sobota',    time: '12:00 – 22:00', closed: false },
  { day: 'Niedziela',          time: '12:00 – 21:00', closed: false },
];

const S = {
  /* reusable inline style tokens */
  gold:    '#C9973E',
  bg:      '#0C0A07',
  surface: '#141109',
  text:    '#EDE8DF',
  muted:   'rgba(237,232,223,0.45)',
  border:  'rgba(201,151,62,0.12)',
} as const;

export default function Home() {
  return (
    <>
      <style>{`
        @media (max-width: 767px) {
          .section-inner { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-cell { padding: 1.5rem 1rem !important; }
          .story-section { padding: 4rem 0 !important; }
          .story-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .story-img-el { height: 280px !important; }
          .story-caption-box { left: 0 !important; right: 0 !important; width: 100% !important; box-sizing: border-box !important; }
          .pizzas-section { padding: 4rem 0 !important; }
          .pizzas-heading-row { flex-direction: column !important; align-items: flex-start !important; }
          .pizzas-editorial { grid-template-columns: 1fr !important; }
          .pizzas-featured-wrap { grid-row: span 1 !important; }
          .pizzas-featured-inner { min-height: 320px !important; height: auto !important; }
          .pizzas-small-inner { height: 210px !important; }
          .visit-section { padding: 4rem 0 !important; }
          .visit-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .cta-section { padding: 3rem 1.25rem !important; }
          .cta-inner { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
      <Hero />

      {/* ── STATS STRIP ─────────────────────────────────────────── */}
      <section style={{ background: S.surface, borderTop: `1px solid ${S.border}`, borderBottom: `1px solid ${S.border}` }}>
        <div className="section-inner" style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 2.5rem' }}>
          <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderLeft: `1px solid ${S.border}` }}>
            {[
              { num: '500°C',    label: 'temperatura pieca'         },
              { num: '60 sek',   label: 'czas pieczenia'            },
              { num: 'AVPN',     label: 'certyfikat autentyczności' },
              { num: '24–72h',   label: 'fermentacja ciasta'        },
            ].map((s) => (
              <div key={s.num} className="stats-cell" style={{ padding: '2.25rem 2rem', borderRight: `1px solid ${S.border}` }}>
                <div style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, color: S.gold, letterSpacing: '-0.02em', lineHeight: 1 }}>
                  {s.num}
                </div>
                <div style={{ color: S.muted, fontSize: '12px', marginTop: '0.5rem', letterSpacing: '0.04em' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ───────────────────────────────────────────────── */}
      <section className="story-section" style={{ background: S.bg, padding: '8rem 0' }}>
        <div className="section-inner" style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 2.5rem' }}>
          <div className="story-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

            <AnimatedSection>
              <div style={{ position: 'relative' }}>
                <Image
                  src="/images/c.jpg"
                  alt="Piec z Neapolu"
                  width={580}
                  height={680}
                  className="object-cover story-img-el"
                  style={{ width: '100%', height: '580px', objectFit: 'cover', display: 'block' }}
                />
                {/* Overlapping caption */}
                <div className="story-caption-box" style={{
                  position: 'absolute', bottom: '2rem', left: '-1.5rem',
                  background: S.surface, padding: '1.25rem 1.75rem',
                  borderLeft: `2px solid ${S.gold}`,
                }}>
                  <span style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '2.75rem', fontWeight: 700, color: S.gold, lineHeight: 1, display: 'block' }}>500°C</span>
                  <span style={{ color: S.muted, fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.25rem', display: 'block' }}>temperatura pieczenia</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div style={{ paddingTop: '3rem' }}>
                <p style={{ color: S.gold, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2rem' }}>
                  Nasza historia
                </p>
                <h2 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 700, color: S.text, lineHeight: 1.05, letterSpacing: '-0.025em', marginBottom: '2rem' }}>
                  Tradycja<br />
                  <em style={{ color: S.gold, fontStyle: 'italic' }}>z Neapolu</em>
                </h2>

                {/* Pull quote */}
                <blockquote style={{
                  borderLeft: `1px solid rgba(201,151,62,0.3)`,
                  paddingLeft: '1.25rem',
                  marginBottom: '1.75rem',
                  color: 'rgba(237,232,223,0.7)',
                  fontFamily: 'var(--font-playfair, serif)',
                  fontStyle: 'italic',
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                }}>
                  "Ciasto fermentuje przez 24 do 72 godzin — lekkie, łatwo strawne, z charakterem."
                </blockquote>

                <p style={{ color: S.muted, fontSize: '15px', lineHeight: 1.85, marginBottom: '2.5rem' }}>
                  Piec sprowadzony prosto z Neapolu osiąga 500°C — pizza jest gotowa w zaledwie
                  60 sekund, z lekko przypalonymi brzegami pachnącymi świeżym chlebem.
                  Każdy składnik pochodzi z Włoch. Żadnych skrótów.
                </p>

                <Link href="/o-nas" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  color: S.gold, fontSize: '12px', fontWeight: 500,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(201,151,62,0.35)',
                  paddingBottom: '3px',
                  transition: 'color 0.2s, border-color 0.2s',
                }}>
                  Dowiedz się więcej <ArrowRight size={13} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── PIZZAS ──────────────────────────────────────────────── */}
      <section className="pizzas-section" style={{ background: S.surface, padding: '7rem 0' }}>
        <div className="section-inner" style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 2.5rem' }}>

          {/* Heading row */}
          <div className="pizzas-heading-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: 'clamp(2.25rem, 4vw, 3rem)', fontWeight: 700, color: S.text, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
              Z naszego pieca
            </h2>
            <Link href="/menu" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              color: S.muted, fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase',
              textDecoration: 'none', borderBottom: '1px solid rgba(237,232,223,0.15)', paddingBottom: '2px',
              transition: 'color 0.2s',
            }}>
              Pełne menu <ArrowRight size={12} />
            </Link>
          </div>

          {/* Editorial layout: one large + two small */}
          <div className="pizzas-editorial" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: '1.5px', background: S.border }}>

            {/* Large featured pizza */}
            <AnimatedSection className="pizzas-featured-wrap" style={{ gridRow: 'span 2' }}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
                className="pizzas-featured-inner group"
                style={{ position: 'relative', height: '100%', minHeight: '520px', overflow: 'hidden', cursor: 'default', background: S.bg }}
              >
                <Image src={featuredPizzas[0].image} alt={featuredPizzas[0].name} fill className="object-cover"
                  style={{ transition: 'transform 0.7s ease' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,10,7,0.95) 0%, rgba(12,10,7,0.3) 55%, transparent 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem' }}>
                  <div style={{ color: S.gold, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Klasyk</div>
                  <h3 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '2.25rem', fontWeight: 700, color: S.text, letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '0.625rem' }}>
                    {featuredPizzas[0].name}
                  </h3>
                  <p style={{ color: S.muted, fontSize: '13.5px', lineHeight: 1.6, marginBottom: '1rem' }}>{featuredPizzas[0].description}</p>
                  <span style={{ color: S.gold, fontSize: '1.25rem', fontWeight: 700, fontFamily: 'var(--font-playfair, serif)' }}>{featuredPizzas[0].price} zł</span>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Two smaller pizzas */}
            {featuredPizzas.slice(1).map((pizza) => (
              <AnimatedSection key={pizza.name}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.4 }}
                  className="pizzas-small-inner group"
                  style={{ position: 'relative', height: '255px', overflow: 'hidden', cursor: 'default', background: S.bg }}
                >
                  <Image src={pizza.image} alt={pizza.name} fill className="object-cover"
                    style={{ transition: 'transform 0.7s ease' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,10,7,0.9) 0%, rgba(12,10,7,0.2) 60%, transparent 100%)' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: '1.5rem', fontWeight: 700, color: S.text, letterSpacing: '-0.01em', marginBottom: '0.25rem' }}>
                      {pizza.name}
                    </h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <p style={{ color: S.muted, fontSize: '12.5px' }}>{pizza.description}</p>
                      <span style={{ color: S.gold, fontSize: '1rem', fontWeight: 700, marginLeft: '1rem', flexShrink: 0 }}>{pizza.price} zł</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISIT ───────────────────────────────────────────────── */}
      <section className="visit-section" style={{ background: S.bg, padding: '7rem 0' }}>
        <div className="section-inner" style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 2.5rem' }}>
          <div className="visit-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>

            <AnimatedSection>
              <p style={{ color: S.gold, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2.5rem' }}>
                Godziny otwarcia
              </p>
              <div>
                {hours.map((item, i) => (
                  <div key={item.day} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '1.1rem 0',
                    borderBottom: i < hours.length - 1 ? `1px solid rgba(237,232,223,0.07)` : 'none',
                    opacity: item.closed ? 0.35 : 1,
                  }}>
                    <span style={{ color: S.text, fontSize: '15px' }}>{item.day}</span>
                    <span style={{ color: item.closed ? 'rgba(237,232,223,0.3)' : S.gold, fontSize: '15px', fontWeight: 500, fontFamily: item.closed ? 'inherit' : 'var(--font-playfair, serif)' }}>
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p style={{ color: S.gold, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2.5rem' }}>
                Znajdź nas
              </p>
              <address style={{ fontStyle: 'normal', color: S.text, fontSize: '1.5rem', fontFamily: 'var(--font-playfair, serif)', lineHeight: 1.4, marginBottom: '2rem' }}>
                Aleja Wojska Polskiego 112<br />
                Zielona Góra
              </address>
              <a href="tel:+48733355075" style={{ display: 'block', color: S.muted, fontSize: '15px', textDecoration: 'none', marginBottom: '2.5rem', transition: 'color 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = S.gold; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = S.muted; }}>
                +48 733 355 075
              </a>
              <a href="https://maps.google.com/?q=Aleja+Wojska+Polskiego+112+Zielona+Gora" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: S.muted, fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid rgba(237,232,223,0.15)', paddingBottom: '2px', transition: 'color 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = S.gold; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = S.muted; }}>
                Otwórz mapę <ArrowRight size={12} />
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ───────────────────────────────────────────── */}
      <section className="cta-section" style={{ borderTop: `1px solid ${S.border}`, background: S.surface, padding: '5rem 2.5rem' }}>
        <div className="cta-inner" style={{ maxWidth: '72rem', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <AnimatedSection>
            <h2 style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 700, color: S.text, letterSpacing: '-0.02em' }}>
              Głodny? Zamów teraz.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <a href="https://zamow.online" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.625rem',
              background: S.gold, color: '#0C0A07',
              padding: '1rem 2.5rem',
              fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
              textDecoration: 'none', borderRadius: '2px',
              boxShadow: '0 4px 20px rgba(201,151,62,0.2)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = '#7D2030';
              (e.currentTarget as HTMLElement).style.color = '#EDE8DF';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = S.gold;
              (e.currentTarget as HTMLElement).style.color = '#0C0A07';
            }}>
              zamow.online <ArrowRight size={14} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
