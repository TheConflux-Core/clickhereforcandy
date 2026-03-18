import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCategoryBySlug, categories } from '@/lib/data/categories';
import { getArticlesByCategory } from '@/lib/data/articles';
import ArticleCard from '@/components/ui/ArticleCard';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug
  }));
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = getCategoryBySlug(params.category);
  
  if (!category) {
    return {};
  }

  return genMeta({
    title: `${category.title} - Candy Guides & Reviews`,
    description: category.description,
    url: `/${category.slug}`
  });
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = getCategoryBySlug(params.category);
  const articles = getArticlesByCategory(params.category);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Category Header */}
      <section
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${category.color}20 0%, ${category.color}40 100%)`
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <span className="text-7xl lg:text-8xl mb-6 block">{category.emoji}</span>
          <h1 className="font-heading font-black text-5xl lg:text-6xl mb-4" style={{ color: category.color }}>
            {category.title}
          </h1>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto">
            {category.description}
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-2xl text-gray-600">More articles coming soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
