"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "AI Infrastructure Development",
    details: "",
    agree: false,
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.agree) return;

    setStatus("sending");
    try {
      // Mock network latency for transmission visual feedback
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStatus("success");
      setFormState({
        name: "",
        email: "",
        subject: "AI Infrastructure Development",
        details: "",
        agree: false,
      });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("error");
    }
  };

  const phoneDisplay = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+234 915 762 1035";
  const phoneTel = phoneDisplay.replace(/\s+/g, "");

  return (
    <>
      <main className="pt-32 pb-24 px-5 md:px-16 max-w-[1280px] mx-auto">
        {/* Hero Header */}
        <header className="mb-16 md:mb-24 text-center">
          <ScrollReveal>
            <h1 className="font-[var(--font-heading)] text-[40px] md:text-[64px] leading-[48px] md:leading-[72px] font-bold mb-6 max-w-4xl mx-auto leading-tight text-white">
              Let&apos;s Build Something <span className="text-[var(--color-secondary)]">Amazing</span> Together
            </h1>
            <p className="font-[var(--font-body)] text-[18px] leading-[28px] text-[var(--color-on-surface-variant)] max-w-2xl mx-auto">
              Ready to engineer the future of your enterprise? Our team of specialists is standing by to translate your vision into industrial-grade intelligence.
            </p>
          </ScrollReveal>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Contact Methods */}
          <aside className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="left">
              <div className="grid grid-cols-1 gap-4">
                {/* WhatsApp */}
                <a
                  className="glass-card p-6 rounded-xl group hover:border-[var(--color-secondary)] transition-all flex items-start gap-4"
                  href={`https://wa.me/${phoneTel.replace("+", "")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="p-3 rounded-lg bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">
                    <span className="material-symbols-outlined text-2xl">chat</span>
                  </div>
                  <div>
                    <p className="font-[var(--font-body)] text-xs font-semibold text-[var(--color-secondary)] uppercase tracking-wider">
                      WhatsApp
                    </p>
                    <h3 className="font-[var(--font-heading)] text-xl font-medium text-white mb-1">
                      {phoneDisplay}
                    </h3>
                    <p className="text-[var(--color-on-surface-variant)] text-sm">
                      Instant technical consultation.
                    </p>
                  </div>
                </a>

                {/* Email */}
                <div className="glass-card p-6 rounded-xl flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[var(--color-tertiary)]/10 text-[var(--color-tertiary)]">
                    <span className="material-symbols-outlined text-2xl">mail</span>
                  </div>
                  <div>
                    <p className="font-[var(--font-body)] text-xs font-semibold text-[var(--color-tertiary)] uppercase tracking-wider">
                      Email
                    </p>
                    <h3 className="font-[var(--font-heading)] text-xl font-medium text-white mb-1">
                      hello@runalabs.io
                    </h3>
                    <p className="text-[var(--color-on-surface-variant)] text-sm">
                      General inquiries &amp; partnerships.
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <a
                  href={`tel:${phoneTel}`}
                  className="glass-card p-6 rounded-xl flex items-start gap-4 hover:border-[var(--color-primary)] transition-all"
                >
                  <div className="p-3 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    <span className="material-symbols-outlined text-2xl">call</span>
                  </div>
                  <div>
                    <p className="font-[var(--font-body)] text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider">
                      Phone
                    </p>
                    <h3 className="font-[var(--font-heading)] text-xl font-medium text-white mb-1">
                      {phoneDisplay}
                    </h3>
                    <p className="text-[var(--color-on-surface-variant)] text-sm">
                      Available Mon-Fri, 9am - 6pm.
                    </p>
                  </div>
                </a>
              </div>
            </ScrollReveal>

            {/* Location & Map */}
            <ScrollReveal direction="left" delay={0.15}>
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-symbols-outlined text-[var(--color-secondary)]">
                    location_on
                  </span>
                  <h4 className="font-[var(--font-heading)] text-lg font-semibold text-white">
                    Office Location
                  </h4>
                </div>
                <p className="text-sm text-[var(--color-on-surface-variant)] mb-6">
                  742 Innovation Drive, Suite 500
                  <br />
                  Palo Alto, CA 94301, USA
                </p>
                <div className="h-48 rounded-lg overflow-hidden relative border border-[var(--color-outline-variant)]">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSqYlSMBMi8-oTgsJSOLpPBYDr7B3-cnfg-dP6-gFyfJh8tfY99wYsqDThm0UvSWfiLnlvNvRwPGVX2YjCL8xYmH5miEGEphqSQ-PPJqH3lNvG-0qwKOzR50qyC0_A4f0Nw24GyHNSpeJruJszIohUymD3jb9dqarq4DTzlu165Qntwfv6yCo2-wxCi86DZ6NHCW9_MVPTbdNqjIr5jk4kEAVA4AKBTUtKHGIM3gT6L6NBr9VGY1Usd1a6z0E4nkczA34AanE8fNQ"
                    alt="Palo Alto Map"
                    fill
                    className="object-cover grayscale opacity-50 contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-[var(--color-primary-container)] px-3 py-1 rounded-full border border-[var(--color-primary)]/20">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)] animate-pulse" />
                    <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-wider text-white">
                      Live HQ
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </aside>

          {/* Right Column: Contact Form */}
          <section className="lg:col-span-7">
            <ScrollReveal direction="right">
              <div className="glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden">
                {/* Floating Tech Decor */}
                <div className="absolute top-4 right-4 opacity-20 pointer-events-none float-animation">
                  <span className="material-symbols-outlined text-[64px] text-[var(--color-secondary)]">
                    deployed_code
                  </span>
                </div>
                <h2 className="font-[var(--font-heading)] text-[28px] leading-[36px] font-semibold mb-2 text-white">
                  Initialize Contact
                </h2>
                <p className="text-[var(--color-on-surface-variant)] mb-10 text-sm">
                  Briefly describe your project requirements to start the engine.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block font-semibold text-xs text-white uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-4 focus:outline-none focus:ring-1 focus:ring-[var(--color-secondary)] focus:border-[var(--color-secondary)] transition-all placeholder:text-[var(--color-outline)] text-white text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block font-semibold text-xs text-white uppercase tracking-wider">
                        Corporate Email
                      </label>
                      <input
                        required
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-4 focus:outline-none focus:ring-1 focus:ring-[var(--color-secondary)] focus:border-[var(--color-secondary)] transition-all placeholder:text-[var(--color-outline)] text-white text-sm"
                        placeholder="john@enterprise.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block font-semibold text-xs text-white uppercase tracking-wider">
                      Subject of Interest
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-4 focus:outline-none focus:ring-1 focus:ring-[var(--color-secondary)] focus:border-[var(--color-secondary)] transition-all text-[var(--color-on-surface-variant)] text-sm"
                    >
                      <option>AI Infrastructure Development</option>
                      <option>Cloud Systems Migration</option>
                      <option>Edge Computing Solutions</option>
                      <option>Cybersecurity Engineering</option>
                      <option>Other Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block font-semibold text-xs text-white uppercase tracking-wider">
                      Project Details
                    </label>
                    <textarea
                      required
                      value={formState.details}
                      onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                      className="w-full bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded-lg p-4 focus:outline-none focus:ring-1 focus:ring-[var(--color-secondary)] focus:border-[var(--color-secondary)] transition-all placeholder:text-[var(--color-outline)] resize-none text-white text-sm"
                      placeholder="Tell us about the challenge you're solving..."
                      rows={6}
                    />
                  </div>

                  <div className="flex items-center gap-4 py-4">
                    <input
                      required
                      id="privacy"
                      type="checkbox"
                      checked={formState.agree}
                      onChange={(e) => setFormState({ ...formState, agree: e.target.checked })}
                      className="rounded border-[var(--color-outline-variant)] bg-[var(--color-surface-container)] text-[var(--color-secondary)] focus:ring-[var(--color-secondary)] h-4 w-4"
                    />
                    <label className="text-xs text-[var(--color-on-surface-variant)]" htmlFor="privacy">
                      I agree to the{" "}
                      <a href="#" className="text-[var(--color-secondary)] hover:underline">
                        Privacy Policy
                      </a>{" "}
                      and allow RUNA LABS to process my data for communication purposes.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending" || !formState.agree}
                    className={`w-full font-semibold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-3 text-sm active:scale-[0.98] ${
                      status === "success"
                        ? "bg-green-600 text-white"
                        : "glow-button text-white disabled:opacity-55"
                    }`}
                  >
                    {status === "idle" && (
                      <>
                        Transmit Message
                        <span className="material-symbols-outlined text-sm">send</span>
                      </>
                    )}
                    {status === "sending" && (
                      <>
                        Transmitting...
                        <span className="material-symbols-outlined text-sm animate-spin">sync</span>
                      </>
                    )}
                    {status === "success" && (
                      <>
                        Data Transmitted
                        <span className="material-symbols-outlined text-sm">check_circle</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Security Trust Badge */}
            <ScrollReveal delay={0.15}>
              <div className="mt-8 flex items-center justify-center gap-8 opacity-60">
                <div className="flex items-center gap-2 text-[var(--color-on-surface-variant)]">
                  <span className="material-symbols-outlined text-[20px]">encrypted</span>
                  <span className="text-[10px] font-semibold uppercase tracking-widest">
                    AES-256 Encrypted
                  </span>
                </div>
                <div className="w-px h-4 bg-[var(--color-outline-variant)]" />
                <div className="flex items-center gap-2 text-[var(--color-on-surface-variant)]">
                  <span className="material-symbols-outlined text-[20px]">verified_user</span>
                  <span className="text-[10px] font-semibold uppercase tracking-widest">
                    GDPR Compliant
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </section>
        </div>
      </main>
    </>
  );
}
