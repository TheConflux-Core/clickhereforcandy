import { Article } from '@/types';
import ArticleCard from '@/components/ui/ArticleCard';

interface FeaturedArticlesProps {
  articles: Article[];
}

export default function FeaturedArticles({ articles }: FeaturedArticlesProps) {
  return (
    <section className="py-16 lg:py-24 bg-[#F5F0EB]">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-4xl lg:text-5xl text-center mb-4">
          Featured Articles
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Expert-tested reviews and buying guides
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.slice(0, 6).map((article, index) => (
            <ArticleCard
              key={article.slug}
              article={article}
              priority={index < 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
