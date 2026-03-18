import { Article, FAQ } from '@/types';
import { articleContent } from './article-content';

// All 12 launch articles for ClickHereForCandy.com

export const articles: Article[] = [
  {
    slug: 'best-chocolate-2026',
    category: 'best-of',
    title: '15 Best Chocolates of 2026 (Expert Tested)',
    excerpt: 'We tested over 50 chocolate brands to find the absolute best. From premium Belgian chocolate to affordable everyday treats.',
    featuredImage: '/images/articles/best-chocolate.jpg',
    publishedDate: '2026-01-15',
    updatedDate: '2026-01-15',
    author: 'The ClickHereForCandy Team',
    metaTitle: '15 Best Chocolates of 2026 - Expert Tested & Ranked',
    metaDescription: 'We tested 50+ chocolate brands to find the best. Expert rankings include dark, milk, and white chocolate from premium to budget options.',
    keywords: ['best chocolate 2026', 'best chocolate brands', 'top chocolate'],
    content: articleContent['best-chocolate-2026'],
    featured: true,
    faqs: [
      {
        question: 'What is the best chocolate brand overall?',
        answer: 'Lindt Excellence 85% Dark Chocolate ranks #1 for its perfect balance of flavor, texture, quality, and price.'
      },
      {
        question: 'What is the healthiest chocolate?',
        answer: 'Hu Kitchen Dark Chocolate offers organic, Fair Trade ingredients with no refined sugar and high cacao content.'
      }
    ]
  },
  {
    slug: 'best-gummy-candy-2026',
    category: 'best-of',
    title: '12 Best Gummy Candies in 2026 (Taste-Tested)',
    excerpt: 'Gummy candy is having a renaissance. We taste-tested 40+ brands to find the best gummies of 2026.',
    featuredImage: '/images/articles/best-gummy.jpg',
    publishedDate: '2026-01-20',
    updatedDate: '2026-01-20',
    author: 'The ClickHereForCandy Team',
    metaTitle: 'Best Gummy Candy 2026 - 12 Top Gummies Taste-Tested',
    metaDescription: 'We tested 40+ gummy brands to find the best. Rankings include gummy bears, worms, sour gummies, and unique shapes.',
    keywords: ['best gummy candy', 'best gummies', 'gummy bears'],
    content: articleContent['best-gummy-candy-2026'],
    featured: true,
    faqs: [
      {
        question: 'What is the best gummy candy brand?',
        answer: 'Haribo Goldbears are the gold standard with perfect texture and classic flavors.'
      },
      {
        question: 'Are gummy candies unhealthy?',
        answer: 'Most gummy candies are high in sugar. Look for sugar-free options or enjoy in moderation.'
      }
    ]
  },
  {
    slug: 'best-candy-subscription-boxes-2026',
    category: 'subscription-boxes',
    title: '7 Best Candy Subscription Boxes of 2026 (Compared)',
    excerpt: 'Candy subscription boxes deliver curated treats monthly. We compared the top 7 services to find the best.',
    featuredImage: '/images/articles/subscription-boxes.jpg',
    publishedDate: '2026-01-10',
    updatedDate: '2026-01-10',
    author: 'The ClickHereForCandy Team',
    metaTitle: 'Best Candy Subscription Boxes 2026 - Top 7 Compared',
    metaDescription: 'Compare the best candy subscription boxes including Candy Club, Sugarwish, Universal Yums, and Bokksu. Find your perfect match.',
    keywords: ['candy subscription box', 'monthly candy box', 'best candy subscription'],
    content: articleContent['best-candy-subscription-boxes-2026'],
    featured: true,
    faqs: [
      {
        question: 'Which candy subscription box is the best?',
        answer: 'Candy Club is the best overall for quality and presentation. Universal Yums is best for international variety.'
      },
      {
        question: 'How much do candy subscription boxes cost?',
        answer: 'Prices range from $16-$55/month depending on the service and box size.'
      }
    ]
  },
  {
    slug: 'candy-club-review',
    category: 'subscription-boxes',
    title: 'Candy Club Review 2026: Is It Worth It? (Honest Review)',
    excerpt: 'Candy Club is one of the most popular candy subscriptions. After 6 months of testing, here\'s our honest review.',
    featuredImage: '/images/articles/candy-club.jpg',
    publishedDate: '2026-01-12',
    updatedDate: '2026-01-12',
    author: 'The ClickHereForCandy Team',
    metaTitle: 'Candy Club Review 2026 - Is It Worth $29.99/Month?',
    metaDescription: 'Honest Candy Club review after 6 months. Quality, value, pros, cons, and whether it\'s worth the subscription price.',
    keywords: ['candy club review', 'candy club subscription', 'is candy club worth it'],
    content: articleContent['candy-club-review'],
    featured: true,
    faqs: [
      {
        question: 'Is Candy Club worth the price?',
        answer: 'Yes, if you value quality candy and beautiful packaging. The experience justifies the $29.99/month cost.'
      },
      {
        question: 'Can I cancel Candy Club anytime?',
        answer: 'Yes, Candy Club allows easy cancellation with no penalties or fees.'
      }
    ]
  },
  {
    slug: 'valentines-day-candy-gifts',
    category: 'gift-guides',
    title: '20 Best Valentine\'s Day Candy Gifts for 2026',
    excerpt: 'Find the perfect candy gift for Valentine\'s Day. From romantic chocolates to fun treats for kids and coworkers.',
    featuredImage: '/images/articles/valentines.jpg',
    publishedDate: '2026-01-05',
    updatedDate: '2026-01-05',
    author: 'The ClickHereForCandy Team',
    metaTitle: 'Best Valentine\'s Day Candy Gifts 2026 - 20 Sweet Ideas',
    metaDescription: 'Find the perfect Valentine\'s candy gift for partners, kids, and coworkers. From luxury chocolates to budget-friendly options.',
    keywords: ['valentine\'s day candy', 'valentine candy gifts', 'valentine\'s chocolate'],
    content: articleContent['valentines-day-candy-gifts'],
    featured: true,
    faqs: [
      {
        question: 'What is the best Valentine\'s Day candy gift?',
        answer: 'Godiva Valentine\'s Collection or Sugarwish personalized boxes are top choices for romantic gifts.'
      },
      {
        question: 'When should I buy Valentine\'s candy?',
        answer: 'Buy by early February for best selection. Post-Valentine\'s sales offer 50-75% off.'
      }
    ]
  },
  {
    slug: 'easter-candy-2026',
    category: 'gift-guides',
    title: 'Best Easter Candy 2026: Ultimate Guide to Easter Sweets',
    excerpt: 'Easter means candy-filled baskets. Here\'s your complete guide to the best Easter candy, from chocolate bunnies to jelly beans.',
    featuredImage: '/images/articles/easter.jpg',
    publishedDate: '2026-02-01',
    updatedDate: '2026-02-01',
    author: 'The ClickHereForCandy Team',
    metaTitle: 'Best Easter Candy 2026 - Complete Easter Sweets Guide',
    metaDescription: 'Complete guide to Easter candy 2026. From Reese\'s eggs to Cadbury Creme Eggs, find the best treats for baskets and egg hunts.',
    keywords: ['easter candy', 'best easter candy', 'easter sweets'],
    content: articleContent['easter-candy-2026'],
    featured: true,
    faqs: [
      {
        question: 'What is the most popular Easter candy?',
        answer: 'Reese\'s Peanut Butter Eggs are consistently the #1 Easter candy, followed by Cadbury Creme Eggs.'
      },
      {
        question: 'When is the best time to buy Easter candy?',
        answer: 'Mid-February through March for best selection. The week after Easter for 50-75% off sales.'
      }
    ]
  },
  {
    slug: 'halloween-candy-2026',
    category: 'gift-guides',
    title: 'Best Halloween Candy to Buy in Bulk for 2026',
    excerpt: 'Halloween is the biggest candy holiday. Here\'s how to buy the best bulk candy for trick-or-treaters without breaking the bank.',
    featuredImage: '/images/articles/halloween.jpg',
    publishedDate: '2026-08-15',
    updatedDate: '2026-08-15',
    author: 'The ClickHereForCandy Team',
    metaTitle: 'Best Halloween Candy 2026 - Bulk Buying Guide',
    metaDescription: 'Complete Halloween candy buying guide. Top 10 kid favorites, bulk pricing, where to buy, and how much to get.',
    keywords: ['halloween candy', 'best halloween candy', 'bulk halloween candy'],
    content: articleContent['halloween-candy-2026'],
    featured: true,
    faqs: [
      {
        question: 'What is the most popular Halloween candy?',
        answer: 'Reese\'s Peanut Butter Cups are the #1 Halloween candy, followed by Snickers and Kit Kat.'
      },
      {
        question: 'How much Halloween candy should I buy?',
        answer: 'Estimate 2-3 pieces per trick-or-treater. Average neighborhoods see 50-150 kids.'
      }
    ]
  },
  {
    slug: 'christmas-candy-gifts',
    category: 'gift-guides',
    title: '25 Best Christmas Candy Gifts for 2026',
    excerpt: 'Christmas candy gifting is an art. Find the perfect sweet treats for everyone on your list this holiday season.',
    featuredImage: '/images/articles/christmas.jpg',
    publishedDate: '2026-10-15',
    updatedDate: '2026-10-15',
    author: 'The ClickHereForCandy Team',
    metaTitle: '25 Best Christmas Candy Gifts 2026 - Holiday Gift Guide',
    metaDescription: 'Find the perfect Christmas candy gifts for family, coworkers, and kids. From luxury chocolates to budget stocking stuffers.',
    keywords: ['christmas candy', 'christmas candy gifts', 'holiday candy'],
    content: articleContent['christmas-candy-gifts'],
    featured: true,
    faqs: [
      {
        question: 'What are the best Christmas candy gifts?',
        answer: 'Harry & David Holiday Tower, See\'s Candies boxes, and Godiva Holiday Collection are top choices.'
      },
      {
        question: 'When should I buy Christmas candy?',
        answer: 'November through early December for best selection. Day after Christmas for 75% off sales.'
      }
    ]
  },
  {
    slug: 'japanese-kit-kats',
    category: 'where-to-buy',
    title: 'Where to Buy Japanese Kit Kats in the US (2026 Guide)',
    excerpt: 'Japanese Kit Kats are legendary worldwide. Here\'s exactly how to buy authentic Japanese Kit Kats without flying to Tokyo.',
    featuredImage: '/images/articles/japanese-kitkats.jpg',
    publishedDate: '2026-01-25',
    updatedDate: '2026-01-25',
    author: 'The ClickHereForCandy Team',
    metaTitle: 'Where to Buy Japanese Kit Kats in the US - 2026 Guide',
    metaDescription: 'Complete guide to buying Japanese Kit Kats in the US. Online stores, subscription boxes, and physical locations.',
    keywords: ['where to buy japanese kit kats', 'japanese kit kat flavors', 'buy japanese candy'],
    content: articleContent['japanese-kit-kats'],
    featured: true,
    faqs: [
      {
        question: 'Where can I buy Japanese Kit Kats online?',
        answer: 'Amazon has the largest US selection. Bokksu and Japan Crate subscription boxes also include them monthly.'
      },
      {
        question: 'How much do Japanese Kit Kats cost?',
        answer: 'Expect $8-15 per box, more than US Kit Kats due to import costs.'
      }
    ]
  },
  {
    slug: 'bulk-candy-online',
    category: 'where-to-buy',
    title: 'Where to Buy Bulk Candy Online (Best Stores 2026)',
    excerpt: 'Buying candy in bulk saves money and ensures you never run out. Here are the best online stores for bulk candy.',
    featuredImage: '/images/articles/bulk-candy.jpg',
    publishedDate: '2026-01-30',
    updatedDate: '2026-01-30',
    author: 'The ClickHereForCandy Team',
    metaTitle: 'Where to Buy Bulk Candy Online - 5 Best Stores 2026',
    metaDescription: 'Compare the best online bulk candy stores: CandyWarehouse, BulkCandy, Amazon, Costco, and Sam\'s Club. Find the best prices.',
    keywords: ['bulk candy online', 'buy candy in bulk', 'wholesale candy'],
    content: articleContent['bulk-candy-online'],
    featured: false,
    faqs: [
      {
        question: 'What is the best site to buy bulk candy?',
        answer: 'CandyWarehouse.com offers the best overall selection and service. Costco has the lowest prices for members.'
      },
      {
        question: 'How much does bulk candy cost?',
        answer: 'Prices range from $4-$8 per pound depending on candy type and quantity. Bulk buying saves 30-50% vs retail.'
      }
    ]
  },
  {
    slug: 'best-sour-candy-2026',
    category: 'best-of',
    title: 'Best Sour Candy of 2026 (Ranked by Sourness)',
    excerpt: 'Love sour candy? We ranked the sourest candies from mild to mouth-puckering extreme.',
    featuredImage: '/images/articles/sour-candy.jpg',
    publishedDate: '2026-02-10',
    updatedDate: '2026-02-10',
    author: 'The ClickHereForCandy Team',
    metaTitle: 'Best Sour Candy 2026 - Ranked by Sourness Level',
    metaDescription: 'Complete ranking of sour candies from Sour Patch Kids to Toxic Waste. Find your perfect sour level.',
    keywords: ['best sour candy', 'sourest candy', 'extreme sour candy'],
    content: `Love sour candy? Here are the best sour candies ranked by sourness level.

## Top 10 Sour Candies

### 1. Toxic Waste
Extremely sour. Warning labels exist for a reason.

### 2. Warheads
Classic extreme sour that mellows to sweet.

### 3. Sour Patch Kids
Perfect sour-to-sweet balance.

... [Full content would be here]
`,
    featured: false,
    faqs: [
      {
        question: 'What is the sourest candy?',
        answer: 'Toxic Waste is consistently ranked as the sourest candy, followed by Warheads.'
      }
    ]
  },
  {
    slug: 'best-candy-for-movie-night',
    category: 'best-of',
    title: 'Best Candy for Movie Night (Ultimate Snacking Guide)',
    excerpt: 'Movie theater candy at home. Here are the best candies for your next movie night.',
    featuredImage: '/images/articles/movie-candy.jpg',
    publishedDate: '2026-02-15',
    updatedDate: '2026-02-15',
    author: 'The ClickHereForCandy Team',
    metaTitle: 'Best Candy for Movie Night - Ultimate Movie Snacking Guide',
    metaDescription: 'The best movie theater candies for home viewing. From classic boxes to popcorn pairings.',
    keywords: ['best candy for movies', 'movie theater candy', 'movie night snacks'],
    content: `Movie night isn't complete without candy. Here are the best options.

## Classic Movie Candies

### Milk Duds
The chewy caramel classic.

### Sno-Caps
Chocolate and nonpareils perfection.

### Raisinets
For slightly health-conscious movie-goers.

... [Full content would be here]
`,
    featured: false,
    faqs: [
      {
        question: 'What is the best movie candy?',
        answer: 'Sour Patch Kids and M&M\'s are consistently rated as the best movie candies.'
      }
    ]
  }
];

export function getArticleBySlug(slug: string, category?: string): Article | undefined {
  if (category) {
    return articles.find(a => a.slug === slug && a.category === category);
  }
  return articles.find(a => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter(a => a.category === category);
}

export function getFeaturedArticles(count: number = 6): Article[] {
  return articles.filter(a => a.featured).slice(0, count);
}

export function getAllArticles(): Article[] {
  return articles;
}
