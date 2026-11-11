import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Alagu Production',
  description: 'Privacy policy for Alagu Production theatrical distribution website.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-cinema-400 hover:text-gold transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="p-8 sm:p-12 rounded-3xl bg-cinema-850 border border-cinema-750 shadow-xl space-y-8">
          <div className="flex items-center gap-3 border-b border-cinema-800 pb-6">
            <div className="w-12 h-12 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-xs text-cinema-400 mt-1">
                Last updated: January 2025 &bull; GDPR &amp; UK DPA Compliant
              </p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none text-sm text-cinema-300 space-y-6 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-white mb-2">1. Overview</h2>
              <p>
                Alagu Production (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting your privacy. This policy explains how we collect, store, and process business contact information submitted by cinema owners, theatre operators, and exhibition partners through our website.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">2. Information We Collect</h2>
              <p>When you submit an exhibition partnership enquiry, we collect:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Contact person name, job title, and cinema/theatre venue name.</li>
                <li>Business email address and telephone/WhatsApp number.</li>
                <li>Geographical details (country and city of exhibition).</li>
                <li>Film preferences, screening specifications, and scheduling requirements.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">3. Purpose and Legal Basis for Processing</h2>
              <p>
                We process your personal and business data strictly on the basis of legitimate business interests and entering into theatrical distribution contracts:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Evaluating exhibition requests and issuing KDM licensing terms.</li>
                <li>Coordinating DCP physical and satellite logistics.</li>
                <li>Communicating premiere schedules and promotional materials.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">4. Data Retention and Security</h2>
              <p>
                We maintain appropriate administrative and technical safeguards to protect your information against unauthorized access, loss, or disclosure. We do not sell, rent, or trade your contact details to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">5. Your Rights (GDPR)</h2>
              <p>
                Under European and UK data protection regulations, you have the right to request access to, rectification of, or erasure of your personal data held in our CMS. To exercise these rights, please contact our Data Protection Officer at{' '}
                <a href="mailto:alaguproduction@gmail.com" className="text-gold underline">
                  alaguproduction@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

