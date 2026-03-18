import { Category } from '@/types';

export const categories: Category[] = [
  {
    slug: 'best-of',
    title: 'Best Of',
    description: 'Expert-tested roundups of the best candy in every category',
    color: '#E91E8C', // Hot Pink
    emoji: '🏆'
  },
  {
    slug: 'where-to-buy',
    title: 'Where To Buy',
    description: 'Find your favorite candies online and in stores',
    color: '#FF6B35', // Warm Orange
    emoji: '🛒'
  },
  {
    slug: 'subscription-boxes',
    title: 'Subscription Boxes',
    description: 'Reviews and comparisons of the best candy subscription boxes',
    color: '#6B21A8', // Deep Purple
    emoji: '📦'
  },
  {
    slug: 'gift-guides',
    title: 'Gift Guides',
    description: 'Perfect candy gifts for every occasion',
    color: '#FFD23F', // Sunny Yellow
    emoji: '🎁'
  },
  {
    slug: 'candy-stores',
    title: 'Candy Stores',
    description: 'Discover amazing local candy shops near you',
    color: '#14B8A6', // Teal
    emoji: '🏪'
  },
  {
    slug: 'trending',
    title: 'Trending',
    description: 'Viral candies and TikTok favorites',
    color: '#F97316', // Coral
    emoji: '🔥'
  }
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(cat => cat.slug === slug);
};
