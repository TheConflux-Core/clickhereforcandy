import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';

export const metadata: Metadata = genMeta({
  title: 'Terms of Service - ClickHereForCandy',
  description: 'Terms of use for ClickHereForCandy.com. By using our site, you agree to these terms.',
  url: '/terms-of-service'
});

export default function TermsOfServicePage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-black text-5xl lg:text-6xl mb-8 text-center">
            Terms of Service
          </h1>

          <div className="prose lg:prose-lg max-w-none">
            <p><strong>Last Updated: January 2026</strong></p>

            <h2>Acceptance of Terms</h2>
            <p>By accessing and using ClickHereForCandy.com, you accept and agree to be bound by these Terms of Service.</p>

            <h2>Use of Site</h2>
            <p>You may use our site for lawful purposes only. You agree not to:</p>
            <ul>
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful code or malware</li>
              <li>Scrape or copy content without permission</li>
            </ul>

            <h2>Content and Intellectual Property</h2>
            <p>All content on this site (text, images, logos) is owned by ClickHereForCandy.com or licensed to us. You may not reproduce, distribute, or create derivative works without permission.</p>

            <h2>Affiliate Links</h2>
            <p>This site contains affiliate links. We earn commissions from qualifying purchases. See our <a href="/affiliate-disclosure">Affiliate Disclosure</a> for details.</p>

            <h2>Disclaimer</h2>
            <p><strong>No Warranty:</strong> Content is provided "as is" without warranties of any kind.</p>
            <p><strong>Not Professional Advice:</strong> Our content is for informational purposes only and should not be considered professional advice.</p>

            <h2>Limitation of Liability</h2>
            <p>We are not liable for any damages arising from your use of this site, including but not limited to direct, indirect, incidental, or consequential damages.</p>

            <h2>External Links</h2>
            <p>Our site contains links to external websites. We are not responsible for the content or practices of third-party sites.</p>

            <h2>Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Continued use of the site constitutes acceptance of updated terms.</p>

            <h2>Contact</h2>
            <p>Questions about these terms? Contact us at <a href="mailto:legal@clickhereforcandy.com">legal@clickhereforcandy.com</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
