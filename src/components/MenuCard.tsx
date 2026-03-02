'use client';

import { motion } from 'framer-motion';
import { MenuItem, dietaryLabels, DietaryTag } from '@/data/menu';
import { Flame, Leaf } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  const getTagIcon = (tag: DietaryTag) => {
    switch (tag) {
      case 'spicy':
        return <Flame size={14} />;
      case 'vegetarian':
      case 'vegan':
        return <Leaf size={14} />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-surface rounded-xl p-6 hover:bg-surface-light transition-colors duration-300 group"
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <h3 className="text-xl font-semibold text-text group-hover:text-primary transition-colors">
              {item.name}
            </h3>
            {item.tags && item.tags.map((tag) => (
              <span
                key={tag}
                className={`${dietaryLabels[tag].color} text-white text-xs px-2 py-1 rounded-full flex items-center gap-1`}
              >
                {getTagIcon(tag)}
                {dietaryLabels[tag].label}
              </span>
            ))}
          </div>
          <p className="text-text-muted text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
        <div className="text-right flex-shrink-0">
          <span className="text-2xl font-bold text-primary">
            {item.price.toFixed(2).replace('.', ',')}
          </span>
          <span className="text-text-muted text-sm ml-1">zl</span>
        </div>
      </div>
    </motion.div>
  );
}
