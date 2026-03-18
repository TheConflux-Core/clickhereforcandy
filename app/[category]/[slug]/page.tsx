import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getArticleBySlug, getAllArticles } from '@/lib/data/articles';
import { getCategoryBySlug } from '@/lib/data/categories';
import { formatDate } from '@/lib/utils/helpers';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import ArticleSchema from '@/components/seo/ArticleSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import FAQSection from '@/components/article/FAQSection';

export async function generateStaticParams() {
  const allArticles = getAllArticles();
  return allArticles.map((article) => ({
    category: article.category,
    slug: article.slug
  }));
}

export async function generateMetadata({ params }: { params: { category: string; slug: string } }): Promise<Metadata> {
  const article = getArticleBySlug(params.slug, params.category);
  
  if (!article) {
    return {};
  }

  return genMeta({
    title: article.metaTitle,
    description: article.metaDescription,
    image: article.featuredImage,
    url: `/${article.category}/${article.slug}`,
    type: 'article',
    publishedTime: article.publishedDate,
    modifiedTime: article.updatedDate,
    author: article.author,
    keywords: article.keywords
  });
}

export default function ArticlePage({ params }: { params: { category: string; slug: string } }) {
  const article = getArticleBySlug(params.slug, params.category);
  const category = getCategoryBySlug(params.category);

  if (!article || !category) {
    notFound();
  }

  return (
    <>
      <ArticleSchema article={article} />
      {article.faqs && <FAQSchema faqs={article.faqs} />}

      <article className="py-12 lg:py-16">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 mb-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E91E8C]">Home</Link>
            <span>→</span>
            <Link href={`/${category.slug}`} className="hover:text-[#E91E8C]">{category.title}</Link>
            <span>→</span>
            <span className="text-gray-900">{article.title}</span>
          </nav>
        </div>

        {/* Article Header */}
        <header className="container mx-auto px-4 mb-12">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <Link
              href={`/${category.slug}`}
              className="inline-block px-4 py-2 rounded-full text-white font-semibold mb-6 hover:opacity-90 transition-opacity"
              style={{ backgroundColor: category.color }}
            >
              {category.emoji} {category.title}
            </Link>

            <h1 className="font-heading font-black text-4xl lg:text-6xl mb-6 text-balance">
              {article.title}
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              {article.excerpt}
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span className="font-medium">By {article.author}</span>
              <span>•</span>
              <time dateTime={article.publishedDate}>{formatDate(article.publishedDate)}</time>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {article.featuredImage && (
          <div className="container mx-auto px-4 mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="relative h-64 lg:h-96 rounded-3xl overflow-hidden bg-gray-200">
                <div className="flex items-center justify-center h-full text-6xl">
                  {category.emoji}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Article Content */}
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="article-content prose lg:prose-lg max-w-none">
              {/* Affiliate Disclosure */}
              <div className="bg-[#F5F0EB] border-l-4 border-[#E91E8C] p-6 rounded-r-2xl mb-12">
                <p className="text-sm text-gray-700 m-0">
                  <strong>Affiliate Disclosure:</strong> We earn a commission when you purchase through links on this page.
                  This helps us keep creating helpful content at no cost to you.{' '}
                  <Link href="/affiliate-disclosure" className="text-[#E91E8C] no-underline hover:underline">
                    Learn more
                  </Link>
                </p>
              </div>

              {/* Article Body */}
              <div
                className="whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        {article.faqs && article.faqs.length > 0 && (
          <div className="container mx-auto px-4 mb-12">
            <div className="max-w-4xl mx-auto">
              <FAQSection faqs={article.faqs} />
            </div>
          </div>
        )}

        {/* Author CTA */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#E91E8C] to-[#6B21A8] rounded-3xl p-8 lg:p-12 text-center text-white">
              <h3 className="font-heading font-bold text-3xl mb-4">
                Want More Candy Guides?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Subscribe to get the latest reviews, gift guides, and exclusive deals
              </p>
              <Link
                href="/"
                className="inline-block px-8 py-4 bg-white text-[#E91E8C] font-bold text-lg rounded-full hover:scale-105 transition-all duration-300"
              >
                Explore More Articles
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
