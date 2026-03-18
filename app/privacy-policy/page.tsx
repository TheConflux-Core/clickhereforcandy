import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';

export const metadata: Metadata = genMeta({
  title: 'Privacy Policy - ClickHereForCandy',
  description: 'Our privacy policy explains how we collect, use, and protect your personal information.',
  url: '/privacy-policy'
});

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-black text-5xl lg:text-6xl mb-8 text-center">
            Privacy Policy
          </h1>

          <div className="prose lg:prose-lg max-w-none">
            <p><strong>Last Updated: January 2026</strong></p>

            <h2>Information We Collect</h2>
            <p>We collect information you provide directly (email signups) and automatically (analytics, cookies).</p>

            <h3>Information You Provide</h3>
            <ul>
              <li>Email address (newsletter signups)</li>
              <li>Contact information (contact form)</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <ul>
              <li>Browsing behavior (Google Analytics)</li>
              <li>Device information</li>
              <li>IP address</li>
              <li>Cookies and similar technologies</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <ul>
              <li>Send newsletters and updates (with consent)</li>
              <li>Respond to inquiries</li>
              <li>Improve our website</li>
              <li>Analyze site usage</li>
              <li>Serve relevant advertisements</li>
            </ul>

            <h2>Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul>
              <li><strong>Google Analytics:</strong> Website analytics</li>
              <li><strong>Google AdSense:</strong> Display advertising</li>
              <li><strong>Affiliate Networks:</strong> Track affiliate referrals</li>
            </ul>

            <h2>Cookies</h2>
            <p>We use cookies to enhance your browsing experience and analyze site traffic. You can disable cookies in your browser settings.</p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Disable cookies</li>
            </ul>

            <h2>Children's Privacy</h2>
            <p>Our site is not directed to children under 13. We do not knowingly collect information from children.</p>

            <h2>Changes to This Policy</h2>
            <p>We may update this policy periodically. Check this page for the latest version.</p>

            <h2>Contact Us</h2>
            <p>Questions about this privacy policy? Contact us at <a href="mailto:privacy@clickhereforcandy.com">privacy@clickhereforcandy.com</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
