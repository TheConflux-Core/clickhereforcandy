import Link from 'next/link';
import { categories } from '@/lib/data/categories';

export default function CategoryPreview() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-4xl lg:text-5xl text-center mb-4">
          Explore by Category
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Find exactly what you're craving
        </p>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/${category.slug}`}
              className={`
                group relative overflow-hidden rounded-3xl p-8 lg:p-10 
                card-hover transition-all duration-300
                ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}
              `}
              style={{
                background: `linear-gradient(135deg, ${category.color}15 0%, ${category.color}30 100%)`
              }}
            >
              <div className="relative z-10">
                <span className="text-5xl lg:text-6xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                  {category.emoji}
                </span>
                <h3 className="font-heading font-bold text-2xl lg:text-3xl mb-2" style={{ color: category.color }}>
                  {category.title}
                </h3>
                <p className="text-gray-700 text-sm lg:text-base">
                  {category.description}
                </p>
              </div>

              {/* Hover Arrow */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-3xl" style={{ color: category.color }}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
