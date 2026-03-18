'use client';

import { useState } from 'react';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Placeholder for email service integration
    // TODO: Integrate with Mailchimp, ConvertKit, or Beehiiv
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E91E8C] via-[#FF6B35] to-[#6B21A8] opacity-90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-6xl mb-6 block">📬</span>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4">
            Never Miss a Sweet Deal
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get the latest candy reviews, exclusive discounts, and gift ideas delivered to your inbox
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-full text-lg focus:outline-none focus:ring-4 focus:ring-white/50"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-4 bg-[#1A1A2E] text-white font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 disabled:opacity-50"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-white font-semibold">
              ✅ Thanks for subscribing! Check your inbox.
            </p>
          )}

          {status === 'error' && (
            <p className="mt-4 text-white font-semibold">
              ❌ Something went wrong. Please try again.
            </p>
          )}

          <p className="mt-6 text-sm text-white/80">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
