import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Alagu Production',
  description: 'Terms of service for Alagu Production theatrical distribution website.',
};

export default function TermsPage() {
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
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Terms of Service
              </h1>
              <p className="text-xs text-cinema-400 mt-1">
                Theatrical Exhibition &amp; Distribution Terms
              </p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none text-sm text-cinema-300 space-y-6 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-white mb-2">1. Theatrical Enquiries &amp; Non-Binding Nature</h2>
              <p>
                Submitting an enquiry via this website constitutes an expression of interest to exhibit Indian theatrical titles distributed by Alagu Production. It does not constitute a confirmed theatrical booking or grant of public exhibition rights until a formal Theatrical Licensing Agreement and KDM schedule have been signed by both parties.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">2. Intellectual Property &amp; Placeholder Notices</h2>
              <p>
                All trademarks, movie titles, and brand insignia displayed on this website belong to their respective copyright holders and studio producers. Visual placeholders are utilized pending formal certification and promotional asset delivery from content licensors.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">3. DCI Compliance &amp; KDM Key Issuance</h2>
              <p>
                All exhibition partners must operate DCI-compliant digital cinema servers with valid trusted device certificates. KDM keys will be issued strictly corresponding to verified server serial numbers and approved showtimes.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">4. Applicable Jurisdiction</h2>
              <p>
                These terms and any disputes arising out of the website or business engagements shall be governed by European and applicable international copyright laws.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

