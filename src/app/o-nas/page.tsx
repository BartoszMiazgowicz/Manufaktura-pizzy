'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection, { AnimatedStagger, AnimatedItem } from '@/components/AnimatedSection';
import { Award, Flame, Timer, Wheat, ThermometerSun, Heart } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Certyfikat AVPN',
    description: 'Jestesmy dumnym czlonkiem Associazione Verace Pizza Napoletana - miedzynarodowego stowarzyszenia gwarantujacego autentycznosc pizzy neapolitanskiej.'
  },
  {
    icon: Flame,
    title: 'Piec z Neapolu',
    description: 'Nasz piec zostal sprowadzony prosto z Neapolu, kolebki pizzy. To wlasnie on nadaje naszej pizzy niepowtarzalny smak i charakterystyczne, lekko przypalone brzegi.'
  },
  {
    icon: ThermometerSun,
    title: '500°C',
    description: 'Temperatura pieczenia to klucz do sukcesu. W 500 stopniach Celsjusza pizza piecze sie zaledwie 60 sekund, zachowujac soczyste skladniki i aromatyczne ciasto.'
  },
  {
    icon: Timer,
    title: '24-72h Fermentacji',
    description: 'Nasze ciasto fermentuje od 24 do 72 godzin. Dzieki temu jest lekkie, latwo strawne i ma niepowtarzalny smak prawdziwego wloskiego chleba.'
  },
  {
    icon: Wheat,
    title: 'Wloskie Skladniki',
    description: 'Uzywamy tylko oryginalnych wloskich produktow - maki typu "00", San Marzano, mozzarelli di bufala i najlepszej oliwy z pierwszego tloczenia.'
  },
  {
    icon: Heart,
    title: 'Pasja i Tradycja',
    description: 'Kazda pizza to dla nas dzielo sztuki. Laczymy wielowiekowa tradycje z pasja do doskonalosci, by dostarczyc Ci niezapomniane doznaania kulinarne.'
  }
];

const gallery = [
  { src: '/images/a.jpg', alt: 'Pizza Margherita' },
  { src: '/images/b.jpg', alt: 'Pizza ze swiezymi skladnikami' },
  { src: '/images/c.jpg', alt: 'Piec neapolitanski' },
  { src: '/images/f.jpg', alt: 'Pizza Burrata' },
  { src: '/images/g.jpg', alt: 'Pizza z szynka' }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/c.jpg"
            alt="Piec do pizzy"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-text">Nasza</span>{' '}
              <span className="text-primary">Historia</span>
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              Manufaktura Pizzy to miejsce, gdzie tradycja spotyka sie z pasja.
              Tworzymy autentyczna pizze neapolitanska wedlug kilkusetletniej receptury,
              uzywajac tylko najlepszych wloskich skladnikow.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <Image
                  src="/images/f.jpg"
                  alt="Pizza Burrata"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-8 -left-8 bg-surface border border-primary/30 p-4 rounded-2xl shadow-2xl about-logo-overlay"
                >
                  <div style={{ width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden', position: 'relative' }}>
                    <Image
                      src="/images/logo.png"
                      alt="Manufaktura Pizzy Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-text">
                  Certyfikat <span className="text-primary">AVPN</span>
                </h2>
                <p className="text-text-muted text-lg leading-relaxed">
                  <strong className="text-text">Associazione Verace Pizza Napoletana</strong> to
                  miedzynarodowa organizacja zalozoona w Neapolu w 1984 roku. Jej celem jest promowanie
                  i ochrona prawdziwej pizzy neapolitanskiej na calym swiecie.
                </p>
                <p className="text-text-muted text-lg leading-relaxed">
                  Aby uzyskac ten prestizowy certyfikat, musielismy spelnic rygorystyczne wymagania
                  dotyczace skladnikow, techniki przygotowania ciasta oraz sposobu pieczenia.
                  To gwarancja, ze nasza pizza jest autentyczna i przygotowana zgodnie z tradycja.
                </p>
                <div className="pt-4">
                  <a
                    href="https://www.pizzanapoletana.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition-colors font-medium"
                  >
                    Dowiedz sie wiecej o AVPN →
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-text">Co nas</span>{' '}
              <span className="text-primary">wyroznia?</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Kazdy szczegol ma znaczenie w tworzeniu doskonalej pizzy neapolitanskiej
            </p>
          </AnimatedSection>

          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <AnimatedItem key={feature.title}>
                <div className="bg-background rounded-2xl p-8 h-full hover:bg-surface-light transition-colors duration-300 group">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-background transition-all duration-300">
                    <feature.icon size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-text">Nasza</span>{' '}
              <span className="text-primary">Galeria</span>
            </h2>
          </AnimatedSection>

          <AnimatedStagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {gallery.map((image, index) => (
              <AnimatedItem key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:brightness-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-text text-sm font-medium">
                      {image.alt}
                    </span>
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-secondary to-primary rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
                Przekonaj sie sam!
              </h2>
              <p className="text-background/80 text-lg mb-8 max-w-lg mx-auto">
                Odwiedz nas i poczuj smak prawdziwej Neapolitanskiej pizzy
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/menu"
                  className="bg-background text-primary px-8 py-4 rounded-full font-semibold hover:bg-text transition-colors"
                >
                  Zobacz Menu
                </a>
                <a
                  href="/kontakt"
                  className="border-2 border-background text-background px-8 py-4 rounded-full font-semibold hover:bg-background hover:text-primary transition-colors"
                >
                  Jak do nas trafic
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
