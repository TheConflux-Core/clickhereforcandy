import Link from 'next/link';
import { NavItem } from '@/types';
import { SITE_NAME, CONTACT_EMAIL, SOCIAL_LINKS } from '@/lib/data/constants';

interface FooterProps {
  navItems: NavItem[];
}

export default function Footer({ navItems }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A2E] text-white mt-20">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-4xl">🍬</span>
              <span className="font-heading font-bold text-xl">
                {SITE_NAME}
              </span>
            </Link>
            <p className="text-gray-300 mb-4">
              Your trusted guide to discovering the best candy, subscription boxes, and sweet treats.
            </p>
            <p className="text-sm text-gray-400">
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[#E91E8C] transition-colors">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              {navItems.slice(0, 4).map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="text-gray-300 hover:text-[#E91E8C] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#E91E8C] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#E91E8C] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="text-gray-300 hover:text-[#E91E8C] transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-[#E91E8C] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-[#E91E8C] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
            {/* Social Links */}
            <div className="mt-6">
              <h3 className="font-heading font-bold text-lg mb-3">Follow Us</h3>
              <div className="flex gap-4">
                {/* Social icons would go here - placeholder for now */}
                <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">📘</span>
                <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">🐦</span>
                <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">📸</span>
                <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">📌</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <p className="mt-2">
            We earn a commission when you purchase through links on our site.{' '}
            <Link href="/affiliate-disclosure" className="underline hover:text-[#E91E8C]">
              Learn more
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
