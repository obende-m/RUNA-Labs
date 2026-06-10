import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = {
  title: "Pricing",
  description:
    "Select the infrastructure tier that matches your agency's tactical needs. From rapid prototyping to global deployment, we power the future of intelligence.",
};

const tiers = [
  {
    protocol: "Protocol Alpha",
    name: "Starter",
    price: "$2,400",
    period: "/ month",
    features: [
      "Core ML Engine Access",
      "5 Active Neural Nodes",
      "Standard Data Ingestion",
      "48-Hour Tactical Support",
    ],
    buttonText: "Initialize Setup",
    recommended: false,
    icon: "deployed_code",
  },
  {
    protocol: "Protocol Beta",
    name: "Business",
    price: "$8,900",
    period: "/ month",
    features: [
      "Full Spectrum Neural Access",
      "50 Active Neural Nodes",
      "Real-time Stream Analysis",
      "Custom Model Retraining",
      "Dedicated Mission Success Lead",
    ],
    buttonText: "Deploy Infrastructure",
    recommended: true,
    icon: "verified",
  },
  {
    protocol: "Protocol Omega",
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Unlimited Neural Node Scaling",
      "Air-Gapped Local Deployment",
      "L0 Latency Infrastructure",
      "24/7 Global On-Site Support",
      "Custom SLA & Governance",
    ],
    buttonText: "Contact Command Center",
    recommended: false,
    icon: "api",
  },
];

export default function PricingPage() {
  return (
    <>
      <main className="relative z-10 pt-32 pb-20 px-5 md:px-16 max-w-[1280px] mx-auto">
        {/* Header Section */}
        <header className="text-center mb-20">
          <ScrollReveal>
            <h1 className="font-[var(--font-heading)] text-[40px] md:text-[64px] leading-[48px] md:leading-[72px] font-bold text-white mb-4">
              Precision Engineering, Scalable Investment.
            </h1>
            <p className="font-[var(--font-body)] text-[18px] leading-[28px] text-[var(--color-on-surface-variant)] max-w-2xl mx-auto">
              Select the infrastructure tier that matches your agency&apos;s tactical needs. From rapid prototyping to global deployment, we power the future of intelligence.
            </p>
          </ScrollReveal>
        </header>

        {/* Pricing Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.15} className="h-full">
              <div
                className={`${
                  tier.recommended
                    ? "bg-[var(--color-primary-container)] border-2 border-[var(--color-secondary)]/30 enterprise-glow"
                    : "glass-card border border-[var(--color-outline-variant)]"
                } p-10 rounded-xl flex flex-col justify-between h-full transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group`}
              >
                {tier.recommended && (
                  <div className="absolute top-0 right-0 px-4 py-1 bg-[var(--color-secondary)] text-black font-[var(--font-body)] text-xs font-semibold rounded-bl-lg">
                    RECOMMENDED
                  </div>
                )}
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-[var(--color-secondary)]/5 rounded-full blur-2xl group-hover:bg-[var(--color-secondary)]/10 transition-colors" />

                <div>
                  <div className="mb-8">
                    <span className="text-[var(--color-secondary)] font-[var(--font-body)] text-xs font-semibold tracking-widest uppercase block">
                      {tier.protocol}
                    </span>
                    <h2 className="font-[var(--font-heading)] text-[28px] leading-[36px] font-medium text-white mt-2">
                      {tier.name}
                    </h2>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      {tier.period && (
                        <span className="text-[var(--color-on-surface-variant)] ml-2 text-sm">
                          {tier.period}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 mb-10">
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-[var(--color-secondary)] text-lg">
                          check_circle
                        </span>
                        <p className="font-[var(--font-body)] text-sm text-[var(--color-on-surface-variant)]">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className={`w-full py-4 rounded-lg font-bold text-center block text-sm active:scale-95 transition-all ${
                    tier.recommended
                      ? "bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-on-tertiary-container)] text-white hover:shadow-lg hover:shadow-secondary/20"
                      : "border border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/10"
                  }`}
                >
                  {tier.buttonText}
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* FAQ comparison teaser */}
        <ScrollReveal>
          <section className="mt-32 glass-card p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-secondary),_transparent)]" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <h3 className="font-[var(--font-heading)] text-[24px] font-medium text-white mb-4">
                  Require a Tactical Customization?
                </h3>
                <p className="font-[var(--font-body)] text-[16px] leading-[24px] text-[var(--color-on-surface-variant)]">
                  Our engineering team specializes in bespoke neural integration for unique industrial constraints. Let&apos;s discuss your technical roadmap.
                </p>
              </div>
              <Link
                href="/contact"
                className="bg-[var(--color-surface-container-high)] px-8 py-3 rounded-lg font-semibold text-white border border-[var(--color-outline-variant)] hover:border-[var(--color-secondary)] transition-colors text-sm"
              >
                View Feature Matrix
              </Link>
            </div>
          </section>
        </ScrollReveal>
      </main>
    </>
  );
}
