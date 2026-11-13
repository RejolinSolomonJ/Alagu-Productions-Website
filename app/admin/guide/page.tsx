import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BookOpen,
  ArrowLeft,
  Key,
  Film,
  MessageSquare,
  ShieldCheck,
  Globe,
  Upload,
  Server,
  Code,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'CMS Handover Guide | Alagu Production Staff Portal',
  description: 'Operations guide for Alagu Production staff to manage content, bookings, and CMS schemas.',
};

export default function CMSGuidePage() {
  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 text-xs font-semibold text-cinema-400 hover:text-gold transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Admin Dashboard</span>
        </Link>

        <div className="p-8 sm:p-12 rounded-3xl bg-cinema-850 border border-cinema-750 shadow-2xl space-y-8">
          <div className="flex items-center gap-3 border-b border-cinema-800 pb-6">
            <div className="w-12 h-12 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Staff CMS Handover Guide
              </h1>
              <p className="text-xs text-cinema-400 mt-1">
                Alagu Production Website &bull; Content Operations &bull; Deployment Guide
              </p>
            </div>
          </div>

          <div className="space-y-8 text-sm text-cinema-200 leading-relaxed">
            {/* Section 1: Access */}
            <div className="space-y-3 p-5 rounded-2xl bg-cinema-900 border border-cinema-800">
              <h2 className="text-base font-bold text-gold flex items-center gap-2">
                <Key className="w-4 h-4" />
                <span>1. Admin Portal Access</span>
              </h2>
              <p className="text-cinema-300">
                Staff can access the dashboard at <code className="text-gold font-mono">/admin</code> using the assigned PIN:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-cinema-300">
                <li><strong className="text-white">Admin PIN:</strong> <code className="text-gold font-mono">alagu2025</code> (Full create, edit, delete, export rights)</li>
                <li><strong className="text-white">Editor PIN:</strong> <code className="text-gold font-mono">admin</code> (Content editing &amp; enquiry review)</li>
              </ul>
            </div>

            {/* Section 2: Managing Enquiries */}
            <div className="space-y-3 p-5 rounded-2xl bg-cinema-900 border border-cinema-800">
              <h2 className="text-base font-bold text-gold flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span>2. Managing Exhibitor Enquiries</span>
              </h2>
              <p className="text-cinema-300">
                Whenever a cinema operator fills out the partnership form on the website:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-cinema-300">
                <li>The enquiry appears instantly under the <strong>&ldquo;Exhibitor Enquiries&rdquo;</strong> tab.</li>
                <li>You can update the enquiry status: <em>New &rarr; In Discussion &rarr; Confirmed &rarr; Archived</em>.</li>
                <li>Click <strong>&ldquo;Reply on WhatsApp&rdquo;</strong> to start an instant encrypted discussion with the cinema manager.</li>
                <li>Click <strong>&ldquo;Export as CSV&rdquo;</strong> anytime to download all submissions for internal reporting or Google Sheets.</li>
              </ul>
            </div>

            {/* Section 3: Movies & Posters */}
            <div className="space-y-3 p-5 rounded-2xl bg-cinema-900 border border-cinema-800">
              <h2 className="text-base font-bold text-gold flex items-center gap-2">
                <Film className="w-4 h-4" />
                <span>3. Managing Theatrical Movies</span>
              </h2>
              <p className="text-cinema-300">
                Under the <strong>&ldquo;Movies &amp; Slate&rdquo;</strong> tab:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-cinema-300">
                <li>Click <strong>&ldquo;Add New Movie&rdquo;</strong> to introduce new upcoming titles to the slate.</li>
                <li>Toggle <strong>&ldquo;Published / Hidden&rdquo;</strong> to reveal or withdraw titles from public exhibition.</li>
                <li>All 16 initial titles come with high-definition styled gradient cards. Official distributor poster images can be uploaded directly once licensed.</li>
              </ul>
            </div>

            {/* Section 4: Compliance & Approvals */}
            <div className="space-y-3 p-5 rounded-2xl bg-cinema-900 border border-cinema-800">
              <h2 className="text-base font-bold text-gold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>4. Compliance &amp; Claims Verification</span>
              </h2>
              <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 text-xs text-amber-200">
                <strong>Important Rule:</strong> The &ldquo;16+ projects&rdquo; claim is currently marked on the website as subject to internal audit reconciliation. Once verified against historical company records, staff can remove the disclaimer flag in CMS settings.
              </div>
              <p className="text-xs text-cinema-300">
                Similarly, all operator testimonials remain in a pending state until formal written approval is logged via the toggle under <strong>&ldquo;Testimonial Approvals&rdquo;</strong>.
              </p>
            </div>

            {/* Section 5: Sanity CMS Deployment */}
            <div className="space-y-3 p-5 rounded-2xl bg-cinema-900 border border-cinema-800">
              <h2 className="text-base font-bold text-gold flex items-center gap-2">
                <Server className="w-4 h-4" />
                <span>5. Deploying to Sanity Studio (Optional Enterprise Upgrade)</span>
              </h2>
              <p className="text-cinema-300">
                Full enterprise Sanity schemas are included in the repository at <code className="text-gold font-mono">/sanity</code>. To deploy Sanity Studio to your own domain, simply run:
              </p>
              <pre className="p-3 rounded-xl bg-black/60 border border-cinema-700 text-xs font-mono text-cinema-200 overflow-x-auto">
                npm install sanity @sanity/client{'\n'}
                npx sanity init --dataset production
              </pre>
            </div>

            {/* Section 6: Engineering & Maintenance */}
            <div className="space-y-3 p-5 rounded-2xl bg-cinema-900 border border-cinema-800">
              <h2 className="text-base font-bold text-gold flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>6. Platform Engineering &amp; Maintenance</span>
              </h2>
              <p className="text-cinema-300">
                Developed by{' '}
                <a
                  href="https://www.linsinfotech.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gold font-semibold underline underline-offset-4 transition-colors"
                  title="www.linsinfotech.in"
                >
                  Lin&apos;s Infotech Company Ltd. (www.linsinfotech.in)
                </a>
                . For platform enhancements, security audits, and infrastructure support, reach out to Lin&apos;s Infotech engineering team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

