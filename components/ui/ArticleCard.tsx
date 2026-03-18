import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types';
import { formatDate } from '@/lib/utils/helpers';
import { getCategoryBySlug } from '@/lib/data/categories';

interface ArticleCardProps {
  article: Article;
  priority?: boolean;
}

export default function ArticleCard({ article, priority = false }: ArticleCardProps) {
  const category = getCategoryBySlug(article.category);

  return (
    <Link
      href={`/${article.category}/${article.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-md card-hover"
    >
      {/* Image */}
      <div className="relative h-48 lg:h-56 overflow-hidden bg-gray-200">
        {article.featuredImage ? (
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            priority={priority}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl">
            {category?.emoji || '🍬'}
          </div>
        )}
        
        {/* Category Badge */}
        {category && (
          <div
            className="absolute top-4 left-4 px-4 py-1.5 rounded-full text-white text-sm font-semibold"
            style={{ backgroundColor: category.color }}
          >
            {category.emoji} {category.title}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading font-bold text-xl lg:text-2xl mb-2 group-hover:text-[#E91E8C] transition-colors">
          {article.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{formatDate(article.publishedDate)}</span>
          <span className="text-[#E91E8C] font-semibold group-hover:underline">
            Read More →
          </span>
        </div>
      </div>
    </Link>
  );
}
