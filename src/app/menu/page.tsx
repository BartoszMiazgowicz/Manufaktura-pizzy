'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems, categories, MenuCategory, DietaryTag } from '@/data/menu';
import MenuCard from '@/components/MenuCard';
import AnimatedSection from '@/components/AnimatedSection';
import { Filter, Leaf, Flame, X, ChevronDown } from 'lucide-react';

const filters: { key: DietaryTag | 'all'; label: string; icon?: React.ReactNode }[] = [
  { key: 'all', label: 'Wszystkie' },
  { key: 'vegetarian', label: 'Wege', icon: <Leaf size={14} /> },
  { key: 'vegan', label: 'Vegan', icon: <Leaf size={14} /> },
  { key: 'spicy', label: 'Pikantne', icon: <Flame size={14} /> }
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('pizze');
  const [activeFilter, setActiveFilter] = useState<DietaryTag | 'all'>('all');
  const [categoryOpen, setCategoryOpen] = useState(false);

  const filteredItems = useMemo(() => {
    let items = menuItems.filter((item) => item.category === activeCategory);

    if (activeFilter !== 'all') {
      items = items.filter((item) => item.tags?.includes(activeFilter));
    }

    return items;
  }, [activeCategory, activeFilter]);

  const activeCategoryLabel = categories.find(c => c.key === activeCategory)?.label || '';

  return (
    <div className="min-h-screen pt-24 pb-20">
      <style>{`
        .menu-category-tabs-desktop {
          display: flex;
          overflow-x: auto;
          padding: 1rem 0;
          gap: 0.5rem;
        }
        .menu-category-mobile {
          display: none;
        }
        .menu-filters {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .menu-filter-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        @media (max-width: 768px) {
          .menu-category-tabs-desktop {
            display: none;
          }
          .menu-category-mobile {
            display: block;
            padding: 0.75rem 0;
          }
          .menu-filters {
            gap: 0.5rem;
          }
          .menu-filter-label {
            display: none;
          }
        }
      `}</style>

      {/* Header */}
      <div className="bg-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="text-text">Nasze</span>{' '}
              <span className="text-primary">Menu</span>
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Odkryj smak autentycznej pizzy neapolitanskiej i innych wloskich specjalow
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-20 z-40 bg-background border-b border-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Desktop tabs */}
          <div className="menu-category-tabs-desktop scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => {
                  setActiveCategory(category.key);
                  setActiveFilter('all');
                }}
                className={`px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.key
                    ? 'bg-primary text-background'
                    : 'bg-surface text-text hover:bg-surface-light'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Mobile dropdown */}
          <div className="menu-category-mobile">
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setCategoryOpen(!categoryOpen)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.875rem 1.25rem',
                  background: '#141109',
                  border: '1px solid rgba(201,151,62,0.25)',
                  borderRadius: '0.75rem',
                  color: '#C9973E',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  letterSpacing: '0.02em',
                }}
              >
                {activeCategoryLabel}
                <ChevronDown
                  size={18}
                  style={{
                    transition: 'transform 0.2s',
                    transform: categoryOpen ? 'rotate(180deg)' : 'rotate(0)',
                  }}
                />
              </button>

              <AnimatePresence>
                {categoryOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 4px)',
                      left: 0,
                      right: 0,
                      background: '#141109',
                      border: '1px solid rgba(201,151,62,0.2)',
                      borderRadius: '0.75rem',
                      overflow: 'hidden',
                      zIndex: 50,
                      boxShadow: '0 12px 32px rgba(0,0,0,0.5)',
                    }}
                  >
                    {categories.map((category) => (
                      <button
                        key={category.key}
                        onClick={() => {
                          setActiveCategory(category.key);
                          setActiveFilter('all');
                          setCategoryOpen(false);
                        }}
                        style={{
                          display: 'block',
                          width: '100%',
                          textAlign: 'left',
                          padding: '0.875rem 1.25rem',
                          fontSize: '15px',
                          color: activeCategory === category.key ? '#C9973E' : '#EDE8DF',
                          fontWeight: activeCategory === category.key ? 600 : 400,
                          background: activeCategory === category.key ? 'rgba(201,151,62,0.1)' : 'transparent',
                          border: 'none',
                          borderBottom: '1px solid rgba(237,232,223,0.06)',
                          cursor: 'pointer',
                          transition: 'background 0.15s',
                        }}
                      >
                        {category.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>

      {/* Filters */}
      {activeCategory === 'pizze' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="menu-filters">
            <span className="menu-filter-label text-text-muted">
              <Filter size={18} />
              Filtruj:
            </span>
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-primary text-background'
                    : 'bg-surface text-text-muted hover:text-text hover:bg-surface-light'
                }`}
              >
                {filter.icon}
                {filter.label}
              </button>
            ))}
            {activeFilter !== 'all' && (
              <button
                onClick={() => setActiveFilter('all')}
                className="flex items-center gap-1 text-text-muted hover:text-primary transition-colors text-sm"
              >
                <X size={16} />
                Wyczysc
              </button>
            )}
          </div>
        </div>
      )}

      {/* Menu Items */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${activeFilter}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <MenuCard item={item} />
                </motion.div>
              ))
            ) : (
              <div className="col-span-2 text-center py-12">
                <p className="text-text-muted text-lg">
                  Brak pozycji spelniajacych kryteria filtrowania
                </p>
                <button
                  onClick={() => setActiveFilter('all')}
                  className="mt-4 text-primary hover:text-secondary transition-colors"
                >
                  Pokaz wszystkie
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Order CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection>
          <div className="bg-gradient-to-r from-secondary to-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
              Chcesz zamowic?
            </h2>
            <p className="text-background/80 mb-6 max-w-lg mx-auto">
              Zamow online lub zadzwon do nas. Dostarczamy w promieniu do 8 km!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://zamow.online"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background text-primary px-8 py-4 rounded-full font-semibold hover:bg-text transition-colors"
              >
                Zamow Online
              </a>
              <a
                href="tel:+48733355075"
                className="border-2 border-background text-background px-8 py-4 rounded-full font-semibold hover:bg-background hover:text-primary transition-colors"
              >
                Zadzwon: 733 355 075
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
