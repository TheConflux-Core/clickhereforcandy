import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';

export const metadata: Metadata = genMeta({
  title: 'Contact Us - ClickHereForCandy',
  description: 'Get in touch with ClickHereForCandy. Business inquiries, partnership opportunities, and feedback welcome.',
  url: '/contact'
});

export default function ContactPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-heading font-black text-5xl lg:text-6xl mb-8">
            Contact Us
          </h1>
          <p className="text-xl text-gray-700 mb-12">
            We'd love to hear from you! Whether you have a question, suggestion, or partnership inquiry, get in touch.
          </p>

          <div className="bg-[#F5F0EB] rounded-3xl p-8 lg:p-12 text-left mb-8">
            <h2 className="font-heading font-bold text-2xl mb-4">Email Us</h2>
            <p className="text-lg text-gray-700 mb-2">
              <strong>General Inquiries:</strong>
            </p>
            <p className="text-xl mb-6">
              <a href="mailto:hello@clickhereforcandy.com" className="text-[#E91E8C] hover:underline">
                hello@clickhereforcandy.com
              </a>
            </p>

            <p className="text-lg text-gray-700 mb-2">
              <strong>Business & Partnerships:</strong>
            </p>
            <p className="text-xl">
              <a href="mailto:partnerships@clickhereforcandy.com" className="text-[#E91E8C] hover:underline">
                partnerships@clickhereforcandy.com
              </a>
            </p>
          </div>

          <p className="text-gray-600">
            We typically respond within 24-48 hours during business days.
          </p>
        </div>
      </div>
    </div>
  );
}
