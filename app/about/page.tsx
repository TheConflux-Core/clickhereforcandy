import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';

export const metadata: Metadata = genMeta({
  title: 'About ClickHereForCandy - Our Mission & Editorial Process',
  description: 'Learn about ClickHereForCandy.com, our mission to help you discover the best candy, and our rigorous editorial review process.',
  url: '/about'
});

export default function AboutPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-black text-5xl lg:text-6xl mb-8 text-center">
            About ClickHereForCandy
          </h1>

          <div className="prose lg:prose-lg max-w-none">
            <p className="text-xl text-gray-700 text-center mb-12">
              We're candy enthusiasts on a mission to help you discover the best sweets, make informed purchasing decisions, and find the perfect candy for every occasion.
            </p>

            <h2 className="font-heading font-bold text-3xl mt-12 mb-6">Our Mission</h2>
            <p>
              Candy brings joy to millions of people every day, but finding the right candy shouldn't be overwhelming. Whether you're searching for the perfect gift, comparing subscription boxes, or hunting down a specific treat, we're here to help.
            </p>
            <p>
              ClickHereForCandy.com exists to make candy discovery easier, more fun, and more informed. We test products, compare prices, and provide honest reviews so you can make confident decisions.
            </p>

            <h2 className="font-heading font-bold text-3xl mt-12 mb-6">Our Editorial Process</h2>
            <p>
              Every review and guide on this site follows a rigorous editorial process:
            </p>
            <ul>
              <li><strong>Real Testing:</strong> We purchase and test products ourselves</li>
              <li><strong>Blind Taste Tests:</strong> When possible, we conduct blind comparisons</li>
              <li><strong>Research-Backed:</strong> We research ingredients, sourcing, and value</li>
              <li><strong>Regular Updates:</strong> We update articles as products and prices change</li>
              <li><strong>Honest Opinions:</strong> We share what we really think, even for affiliate products</li>
            </ul>

            <h2 className="font-heading font-bold text-3xl mt-12 mb-6">How We Make Money</h2>
            <p>
              ClickHereForCandy.com earns revenue through:
            </p>
            <ul>
              <li><strong>Affiliate Marketing:</strong> We earn a commission when you purchase through our links at no extra cost to you</li>
              <li><strong>Display Advertising:</strong> We show ads from Google AdSense and premium networks</li>
            </ul>
            <p>
              Our editorial content is never influenced by affiliate partnerships. We recommend products we genuinely believe are the best options for you.
            </p>
            <p>
              Read our full <a href="/affiliate-disclosure">Affiliate Disclosure</a> for more details.
            </p>

            <h2 className="font-heading font-bold text-3xl mt-12 mb-6">Contact Us</h2>
            <p>
              Have a question, suggestion, or want to work with us? We'd love to hear from you.
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:hello@clickhereforcandy.com">hello@clickhereforcandy.com</a>
            </p>
            <p>
              Or visit our <a href="/contact">Contact Page</a> to send us a message.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
