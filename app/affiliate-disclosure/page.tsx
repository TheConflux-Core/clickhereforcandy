import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';

export const metadata: Metadata = genMeta({
  title: 'Affiliate Disclosure - ClickHereForCandy',
  description: 'ClickHereForCandy.com is supported by readers. When you purchase through links on our site, we may earn an affiliate commission.',
  url: '/affiliate-disclosure'
});

export default function AffiliateDisclosurePage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-black text-5xl lg:text-6xl mb-8 text-center">
            Affiliate Disclosure
          </h1>

          <div className="prose lg:prose-lg max-w-none">
            <p className="text-lg text-gray-700">
              <strong>Last Updated: January 2026</strong>
            </p>

            <h2 className="font-heading font-bold text-3xl mt-12 mb-6">FTC Disclosure</h2>
            <p>
              ClickHereForCandy.com is a participant in various affiliate marketing programs, including the Amazon Services LLC Associates Program. This means we earn advertising fees by advertising and linking to products on Amazon.com and other partner sites.
            </p>

            <h2 className="font-heading font-bold text-3xl mt-12 mb-6">How Affiliate Links Work</h2>
            <p>
              When you click on a link marked as an affiliate link (or any product link on our site) and make a purchase, we may earn a commission at no additional cost to you. This helps us keep creating helpful content and maintaining this website.
            </p>
            <p>
              <strong>Important:</strong> Clicking affiliate links and making purchases does not increase the price you pay. The price remains the same whether you use our link or visit the store directly.
            </p>

            <h2 className="font-heading font-bold text-3xl mt-12 mb-6">Our Affiliate Partners</h2>
            <p>
              We partner with the following affiliate networks and companies:
            </p>
            <ul>
              <li>Amazon Associates</li>
              <li>Candy Club</li>
              <li>Sugarwish</li>
              <li>Universal Yums</li>
              <li>Bokksu</li>
              <li>ShareASale</li>
              <li>Impact Radius</li>
              <li>Rakuten Advertising</li>
              <li>CJ Affiliate (Commission Junction)</li>
              <li>Other specialty candy and gift retailers</li>
            </ul>

            <h2 className="font-heading font-bold text-3xl mt-12 mb-6">Editorial Independence</h2>
            <p>
              Our editorial content is never influenced by affiliate partnerships. We recommend products based on our honest evaluation, testing, and research—not based on commission rates.
            </p>
            <p>
              We may earn different commission rates from different partners, but this does not affect our rankings or recommendations. The best product for you is always our top priority.
            </p>

            <h2 className="font-heading font-bold text-3xl mt-12 mb-6">Product Testing</h2>
            <p>
              We purchase and test many of the products we review. In some cases, companies may provide products for review at no cost, but this does not guarantee a positive review or ranking.
            </p>
            <p>
              All opinions expressed are our own, and we maintain full editorial control over all content.
            </p>

            <h2 className="font-heading font-bold text-3xl mt-12 mb-6">Transparency</h2>
            <p>
              We believe in transparency. Throughout our site, you'll see:
            </p>
            <ul>
              <li>Affiliate disclosure notices on articles with affiliate links</li>
              <li>Clear labeling of sponsored content (if applicable)</li>
              <li>This dedicated Affiliate Disclosure page</li>
            </ul>

            <h2 className="font-heading font-bold text-3xl mt-12 mb-6">Questions?</h2>
            <p>
              If you have any questions about our affiliate relationships or how we earn revenue, please contact us at <a href="mailto:hello@clickhereforcandy.com">hello@clickhereforcandy.com</a>.
            </p>

            <p className="mt-12 text-sm text-gray-600">
              This disclosure is provided in accordance with the Federal Trade Commission's 16 CFR, Part 255: "Guides Concerning the Use of Endorsements and Testimonials in Advertising."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
