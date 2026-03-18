// Type definitions for ClickHereForCandy.com

export interface NavItem {
  label: string;
  path: string;
}

export interface Category {
  slug: string;
  title: string;
  description: string;
  color: string;
  emoji: string;
}

export interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  publishedDate: string;
  updatedDate: string;
  author: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  content: string;
  faqs?: FAQ[];
  relatedArticles?: string[];
  featured?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Product {
  productId: string;
  name: string;
  description: string;
  image: string;
  price?: string;
  affiliateLink: string;
  affiliateProgram: string;
  ctaText: string;
}

export interface ComparisonItem {
  name: string;
  rating: number;
  price: string;
  pros: string[];
  cons: string[];
  affiliateLink: string;
  image: string;
}

export interface Breadcrumb {
  label: string;
  path: string;
}

export interface Heading {
  id: string;
  text: string;
  level: number;
}

export interface SEOMetadata {
  title: string;
  description: string;
  image?: string;
  url: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  keywords?: string[];
}
