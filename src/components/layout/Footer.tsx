"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-[var(--color-surface-container-lowest)] border-t border-[var(--color-outline-variant)]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-5 md:px-16 max-w-[1280px] mx-auto">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link href="/" className="font-[var(--font-heading)] text-[28px] leading-[36px] font-medium text-[var(--color-primary)] block mb-6">
            RUNA LABS
          </Link>
          <p className="text-[var(--color-on-surface-variant)] font-[var(--font-body)] text-[16px] leading-[24px] mb-8 max-w-xs">
            Architecting the neural substrate for modern governance and global commerce.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-all">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a href="#" className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-all">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a href="#" className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-all">
              <span className="material-symbols-outlined">terminal</span>
            </a>
          </div>
        </div>

        {/* Capabilities */}
        <div className="flex flex-col gap-4">
          <h4 className="font-[var(--font-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-[var(--color-on-surface)] uppercase mb-2">
            Capabilities
          </h4>
          <Link href="/services" className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-all font-[var(--font-body)] text-[16px] leading-[24px]">
            Intelligence Core
          </Link>
          <Link href="/services" className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-all font-[var(--font-body)] text-[16px] leading-[24px]">
            Edge Dynamics
          </Link>
          <Link href="/services" className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-all font-[var(--font-body)] text-[16px] leading-[24px]">
            Quant Security
          </Link>
          <Link href="/services" className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-all font-[var(--font-body)] text-[16px] leading-[24px]">
            Integration Labs
          </Link>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-4">
          <h4 className="font-[var(--font-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-[var(--color-on-surface)] uppercase mb-2">
            Company
          </h4>
          <Link href="/about" className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-all font-[var(--font-body)] text-[16px] leading-[24px]">
            About Us
          </Link>
          <Link href="/blog" className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-all font-[var(--font-body)] text-[16px] leading-[24px]">
            Insights
          </Link>
          <Link href="/careers" className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-all font-[var(--font-body)] text-[16px] leading-[24px]">
            Careers
          </Link>
          <Link href="/pricing" className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-all font-[var(--font-body)] text-[16px] leading-[24px]">
            Pricing
          </Link>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="font-[var(--font-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-[var(--color-on-surface)] uppercase mb-2">
            Contact
          </h4>
          <p className="text-[var(--color-on-surface-variant)] font-[var(--font-body)] text-[16px] leading-[24px]">
            info@runalabs.ai
          </p>
          <a href={`tel:${(process.env.NEXT_PUBLIC_CONTACT_PHONE || "+234 915 762 1035").replace(/\s+/g, "")}`} className="text-[var(--color-on-surface-variant)] font-[var(--font-body)] text-[16px] leading-[24px] hover:text-[var(--color-secondary)] transition-all">
            {process.env.NEXT_PUBLIC_CONTACT_PHONE || "+234 915 762 1035"}
          </a>
          {/* Newsletter */}
          <div className="mt-4">
            <p className="text-[var(--color-on-surface-variant)] text-[12px] leading-[16px] mb-3">
              Receive architectural updates and system logs.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address"
                className="bg-[var(--color-surface-variant)]/50 border border-[var(--color-outline-variant)] rounded-l-lg px-4 py-2 w-full text-[var(--color-on-surface)] text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
              />
              <button className="bg-[var(--color-primary)] text-[var(--color-on-primary)] px-4 py-2 rounded-r-lg font-semibold text-sm whitespace-nowrap">
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center px-5 md:px-16 max-w-[1280px] mx-auto">
        <p className="text-[var(--color-on-surface-variant)] font-[var(--font-body)] text-[16px] leading-[24px]">
          © {new Date().getFullYear()} RUNA LABS. Engineered for Intelligence.
        </p>
      </div>
    </footer>
  );
}
