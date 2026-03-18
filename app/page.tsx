import Hero from '@/components/home/Hero';
import CategoryPreview from '@/components/home/CategoryPreview';
import FeaturedArticles from '@/components/home/FeaturedArticles';
import EmailSignup from '@/components/home/EmailSignup';
import { getFeaturedArticles } from '@/lib/data/articles';

export default function HomePage() {
  const featuredArticles = getFeaturedArticles(6);

  return (
    <>
      <Hero />
      <CategoryPreview />
      {featuredArticles.length > 0 && (
        <FeaturedArticles articles={featuredArticles} />
      )}
      <EmailSignup />
    </>
  );
}
