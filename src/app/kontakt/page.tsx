'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { MapPin, Phone, Clock, Mail, Send, CheckCircle, Truck } from 'lucide-react';

const hours = [
  { day: 'Poniedzialek', time: 'Zamkniete', closed: true },
  { day: 'Wtorek', time: '12:00 - 21:00', closed: false },
  { day: 'Sroda', time: '12:00 - 21:00', closed: false },
  { day: 'Czwartek', time: '12:00 - 21:00', closed: false },
  { day: 'Piatek', time: '12:00 - 22:00', closed: false },
  { day: 'Sobota', time: '12:00 - 22:00', closed: false },
  { day: 'Niedziela', time: '12:00 - 21:00', closed: false }
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setFormState({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <div className="bg-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="text-text">Skontaktuj sie</span>{' '}
              <span className="text-primary">z nami</span>
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Masz pytania? Chcesz zarezerwowac stolik? Napisz do nas lub zadzwon!
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <AnimatedSection>
              <div className="bg-surface rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-text mb-6 flex items-center gap-3">
                  <MapPin className="text-primary" />
                  Adres
                </h2>
                <p className="text-text-muted text-lg mb-4">
                  Aleja Wojska Polskiego 112<br />
                  65-762 Zielona Gora
                </p>
                <a
                  href="https://maps.google.com/?q=Aleja+Wojska+Polskiego+112+Zielona+Gora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium"
                >
                  Pokaz na mapie Google →
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-surface rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-text mb-6 flex items-center gap-3">
                  <Phone className="text-primary" />
                  Telefon
                </h2>
                <a
                  href="tel:+48733355075"
                  className="text-2xl text-primary hover:text-secondary transition-colors font-semibold"
                >
                  733 355 075
                </a>
                <p className="text-text-muted mt-2">
                  Zadzwon, zeby zamowic lub zarezerwowac stolik
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-surface rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-text mb-6 flex items-center gap-3">
                  <Clock className="text-primary" />
                  Godziny otwarcia
                </h2>
                <div className="space-y-3">
                  {hours.map((item) => (
                    <div
                      key={item.day}
                      className={`flex justify-between items-center py-2 border-b border-surface-light last:border-0 ${
                        item.closed ? 'opacity-50' : ''
                      }`}
                    >
                      <span className="text-text">{item.day}</span>
                      <span
                        className={
                          item.closed
                            ? 'text-secondary'
                            : 'text-primary'
                        }
                      >
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-surface rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-text mb-6 flex items-center gap-3">
                  <Truck className="text-primary" />
                  Dostawa
                </h2>
                <p className="text-text-muted mb-4">
                  Dostarczamy w promieniu do <strong className="text-text">8 km</strong> od lokalu.
                </p>
                <a
                  href="https://zamow.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-full font-semibold hover:bg-secondary transition-colors"
                >
                  Zamow online →
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <AnimatedSection delay={0.2}>
            <div className="bg-surface rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-text mb-6 flex items-center gap-3">
                <Mail className="text-primary" />
                Napisz do nas
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle
                    size={64}
                    className="text-green-500 mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold text-text mb-2">
                    Wiadomosc wyslana!
                  </h3>
                  <p className="text-text-muted">
                    Dziekujemy za kontakt. Odpowiemy najszybciej jak to mozliwe.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-primary hover:text-secondary transition-colors"
                  >
                    Wyslij kolejna wiadomosc
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-text font-medium mb-2"
                    >
                      Imie i nazwisko *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-surface-light text-text focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="Jan Kowalski"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-text font-medium mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-surface-light text-text focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="jan@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-text font-medium mb-2"
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-surface-light text-text focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="123 456 789"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-text font-medium mb-2"
                    >
                      Wiadomosc *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-surface-light text-text focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                      placeholder="Twoja wiadomosc..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-primary text-background px-6 py-4 rounded-xl font-semibold hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-background border-t-transparent rounded-full"
                        />
                        Wysylanie...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Wyslij wiadomosc
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>

        {/* Map */}
        <AnimatedSection className="mt-16">
          <div className="bg-surface rounded-2xl p-4 overflow-hidden contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.8876!2d15.5067!3d51.9356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47069bae!2sAleja+Wojska+Polskiego+112%2C+65-762+Zielona+G%C3%B3ra!5e0!3m2!1spl!2spl!4v1"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
              title="Lokalizacja Manufaktura Pizzy"
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
