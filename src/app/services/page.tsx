import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = {
  title: "Services",
  description:
    "We deliver high-performance digital solutions that bridge the gap between complex engineering and intuitive user experiences.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-16 text-center pt-32 pb-24">
        <ScrollReveal>
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[var(--color-secondary)]/30 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] font-[var(--font-body)] text-[12px] uppercase tracking-widest">
            Our Capabilities
          </div>
          <h1 className="font-[var(--font-heading)] text-[40px] md:text-[64px] leading-[48px] md:leading-[72px] font-bold mb-6 text-white">
            Engineered for <span className="gradient-text">Intelligence.</span>
            <br />
            Built for Scale.
          </h1>
          <p className="max-w-2xl mx-auto text-[var(--color-on-surface-variant)] font-[var(--font-body)] text-[18px] leading-[28px]">
            We deliver high-performance digital solutions that bridge the gap between complex engineering and intuitive user experiences.
          </p>
        </ScrollReveal>
      </section>

      {/* Services Bento Grid */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Website Development */}
          <ScrollReveal className="h-full">
            <div className="glass-card-hover p-8 rounded-xl flex flex-col justify-between group h-full">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[var(--color-secondary)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[var(--color-secondary)] text-2xl">
                    language
                  </span>
                </div>
                <h3 className="font-[var(--font-heading)] text-[28px] leading-[36px] font-medium mb-4 text-white">
                  Website Development
                </h3>
                <p className="text-[var(--color-on-surface-variant)] mb-6 font-[var(--font-body)] text-[16px] leading-[24px]">
                  Architecting robust, high-performance web applications tailored for enterprise reliability.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="material-symbols-outlined text-[16px] text-[var(--color-tertiary)]">
                      check_circle
                    </span>{" "}
                    Scalable Architecture
                  </li>
                  <li className="flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="material-symbols-outlined text-[16px] text-[var(--color-tertiary)]">
                      check_circle
                    </span>{" "}
                    Modern Frameworks
                  </li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="text-[var(--color-secondary)] font-semibold flex items-center gap-2 hover:gap-4 transition-all text-sm"
              >
                EXPLORE TECH STACK{" "}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Card 2: E-commerce */}
          <ScrollReveal className="h-full" delay={0.15}>
            <div className="glass-card-hover p-8 rounded-xl flex flex-col justify-between group h-full">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[var(--color-tertiary)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[var(--color-tertiary)] text-2xl">
                    shopping_cart
                  </span>
                </div>
                <h3 className="font-[var(--font-heading)] text-[28px] leading-[36px] font-medium mb-4 text-white">
                  E-commerce
                </h3>
                <p className="text-[var(--color-on-surface-variant)] mb-6 font-[var(--font-body)] text-[16px] leading-[24px]">
                  Data-driven commerce platforms designed to maximize conversion and streamline global logistics.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="material-symbols-outlined text-[16px] text-[var(--color-secondary)]">
                      check_circle
                    </span>{" "}
                    Multi-currency Support
                  </li>
                  <li className="flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="material-symbols-outlined text-[16px] text-[var(--color-secondary)]">
                      check_circle
                    </span>{" "}
                    Custom Checkout Flows
                  </li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="text-[var(--color-secondary)] font-semibold flex items-center gap-2 hover:gap-4 transition-all text-sm"
              >
                VIEW SOLUTIONS{" "}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Card 3: Mobile Apps */}
          <ScrollReveal className="h-full" delay={0.3}>
            <div className="glass-card-hover p-8 rounded-xl flex flex-col justify-between group h-full">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[var(--color-primary)] text-2xl">
                    phone_iphone
                  </span>
                </div>
                <h3 className="font-[var(--font-heading)] text-[28px] leading-[36px] font-medium mb-4 text-white">
                  Mobile Apps
                </h3>
                <p className="text-[var(--color-on-surface-variant)] mb-6 font-[var(--font-body)] text-[16px] leading-[24px]">
                  Native and cross-platform mobile experiences that bring high-end functionality to any device.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="material-symbols-outlined text-[16px] text-[var(--color-tertiary)]">
                      check_circle
                    </span>{" "}
                    iOS &amp; Android
                  </li>
                  <li className="flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="material-symbols-outlined text-[16px] text-[var(--color-tertiary)]">
                      check_circle
                    </span>{" "}
                    Offline Capability
                  </li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="text-[var(--color-secondary)] font-semibold flex items-center gap-2 hover:gap-4 transition-all text-sm"
              >
                START BUILDING{" "}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Card 4: Custom Software */}
          <ScrollReveal className="h-full" delay={0.45}>
            <div className="glass-card-hover p-8 rounded-xl flex flex-col justify-between group h-full">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[var(--color-secondary)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[var(--color-secondary)] text-2xl">
                    terminal
                  </span>
                </div>
                <h3 className="font-[var(--font-heading)] text-[28px] leading-[36px] font-medium mb-4 text-white">
                  Custom Software
                </h3>
                <p className="text-[var(--color-on-surface-variant)] mb-6 font-[var(--font-body)] text-[16px] leading-[24px]">
                  Bespoke software systems designed to solve unique organizational challenges at any scale.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="material-symbols-outlined text-[16px] text-[var(--color-tertiary)]">
                      check_circle
                    </span>{" "}
                    ERP &amp; CRM Systems
                  </li>
                  <li className="flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="material-symbols-outlined text-[16px] text-[var(--color-tertiary)]">
                      check_circle
                    </span>{" "}
                    Legacy Migration
                  </li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="text-[var(--color-secondary)] font-semibold flex items-center gap-2 hover:gap-4 transition-all text-sm"
              >
                GET CONSULTATION{" "}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Card 5: AI & Automation */}
          <ScrollReveal className="h-full lg:col-span-2">
            <div className="glass-card-hover p-8 rounded-xl flex flex-col justify-between group h-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-tertiary)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[var(--color-tertiary)] text-2xl">
                      neurology
                    </span>
                  </div>
                  <h3 className="font-[var(--font-heading)] text-[28px] leading-[36px] font-medium mb-4 text-white">
                    AI &amp; Automation
                  </h3>
                  <p className="text-[var(--color-on-surface-variant)] mb-6 font-[var(--font-body)] text-[16px] leading-[24px]">
                    Leveraging machine learning and cognitive automation to drive operational efficiency and predictive insights.
                  </p>
                </div>
                <div className="flex flex-col justify-center">
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-sm font-semibold text-white">
                      <span className="material-symbols-outlined text-[var(--color-secondary)]">
                        smart_toy
                      </span>{" "}
                      Large Language Models (LLM)
                    </li>
                    <li className="flex items-center gap-3 text-sm font-semibold text-white">
                      <span className="material-symbols-outlined text-[var(--color-secondary)]">
                        robot
                      </span>{" "}
                      RPA &amp; Workflow Automation
                    </li>
                    <li className="flex items-center gap-3 text-sm font-semibold text-white">
                      <span className="material-symbols-outlined text-[var(--color-secondary)]">
                        analytics
                      </span>{" "}
                      Predictive Analytics
                    </li>
                  </ul>
                </div>
              </div>
              <Link
                href="/contact"
                className="text-[var(--color-secondary)] font-semibold flex items-center gap-2 hover:gap-4 transition-all pt-6 border-t border-[var(--color-outline-variant)] text-sm"
              >
                AUTOMATE NOW{" "}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Card 6: UI/UX Design */}
          <ScrollReveal className="h-full" delay={0.15}>
            <div className="glass-card-hover p-8 rounded-xl flex flex-col justify-between group h-full">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[var(--color-primary)] text-2xl">
                    auto_awesome
                  </span>
                </div>
                <h3 className="font-[var(--font-heading)] text-[28px] leading-[36px] font-medium mb-4 text-white">
                  UI/UX Design
                </h3>
                <p className="text-[var(--color-on-surface-variant)] mb-6 font-[var(--font-body)] text-[16px] leading-[24px]">
                  Human-centric design systems that balance aesthetic beauty with functional precision.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="material-symbols-outlined text-[16px] text-[var(--color-tertiary)]">
                      check_circle
                    </span>{" "}
                    Interactive Prototyping
                  </li>
                  <li className="flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="material-symbols-outlined text-[16px] text-[var(--color-tertiary)]">
                      check_circle
                    </span>{" "}
                    Accessibility Audits
                  </li>
                </ul>
              </div>
              <Link
                href="/portfolio"
                className="text-[var(--color-secondary)] font-semibold flex items-center gap-2 hover:gap-4 transition-all text-sm"
              >
                SEE OUR WORK{" "}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Card 7: Website Management */}
          <ScrollReveal className="h-full" delay={0.3}>
            <div className="glass-card-hover p-8 rounded-xl flex flex-col justify-between group h-full">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[var(--color-secondary)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[var(--color-secondary)] text-2xl">
                    support_agent
                  </span>
                </div>
                <h3 className="font-[var(--font-heading)] text-[28px] leading-[36px] font-medium mb-4 text-white">
                  Website Management
                </h3>
                <p className="text-[var(--color-on-surface-variant)] mb-6 font-[var(--font-body)] text-[16px] leading-[24px]">
                  Continuous monitoring, security patches, and performance optimization for mission-critical web assets.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="material-symbols-outlined text-[16px] text-[var(--color-tertiary)]">
                      check_circle
                    </span>{" "}
                    24/7 Monitoring
                  </li>
                  <li className="flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="material-symbols-outlined text-[16px] text-[var(--color-tertiary)]">
                      check_circle
                    </span>{" "}
                    Backup &amp; Recovery
                  </li>
                </ul>
              </div>
              <Link
                href="/pricing"
                className="text-[var(--color-secondary)] font-semibold flex items-center gap-2 hover:gap-4 transition-all text-sm"
              >
                VIEW PLANS{" "}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Card 8: Digital Transformation Strategy */}
          <ScrollReveal className="lg:col-span-4" delay={0.1}>
            <div className="glass-card-hover p-8 rounded-xl bg-[var(--color-primary-container)] relative overflow-hidden group">
              <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  <h2 className="font-[var(--font-heading)] text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-semibold mb-6 text-white">
                    Digital Transformation Strategy
                  </h2>
                  <p className="text-[var(--color-on-surface-variant)] font-[var(--font-body)] text-[18px] leading-[28px] mb-8">
                    We partner with executive teams to reinvent their operations through modern technology stacks, cloud-native architectures, and data-driven cultures.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-10">
                    <div className="bg-[rgba(255,255,255,0.03)] px-4 py-2 rounded-lg border border-[rgba(255,255,255,0.1)] text-xs font-semibold text-white">
                      Cloud Migration
                    </div>
                    <div className="bg-[rgba(255,255,255,0.03)] px-4 py-2 rounded-lg border border-[rgba(255,255,255,0.1)] text-xs font-semibold text-white">
                      Data Sovereignty
                    </div>
                    <div className="bg-[rgba(255,255,255,0.03)] px-4 py-2 rounded-lg border border-[rgba(255,255,255,0.1)] text-xs font-semibold text-white">
                      Infrastructure Audit
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="glow-button px-10 py-4 rounded-xl font-[var(--font-heading)] text-white text-lg font-semibold inline-block"
                  >
                    Request Strategy Audit
                  </Link>
                </div>
                <div className="lg:w-1/2 flex justify-center w-full">
                  <div className="relative w-full aspect-square max-w-md">
                    <div className="absolute inset-0 bg-[var(--color-secondary)]/10 rounded-full blur-[100px] animate-pulse" />
                    <div className="relative z-10 border border-secondary/20 rounded-2xl bg-[var(--color-surface-container)] overflow-hidden h-full shadow-2xl flex items-center justify-center p-8">
                      <div className="grid grid-cols-2 gap-4 w-full h-full">
                        <div className="bg-[var(--color-surface-container-high)] rounded-lg p-4 flex flex-col justify-end border border-[var(--color-outline-variant)]">
                          <div className="h-2 w-12 bg-[var(--color-secondary)] rounded mb-2" />
                          <div className="h-2 w-20 bg-[var(--color-outline-variant)] rounded" />
                        </div>
                        <div className="bg-[var(--color-secondary)]/20 rounded-lg p-4 flex flex-col justify-end border border-[var(--color-secondary)]/30">
                          <div className="h-2 w-12 bg-[var(--color-secondary)] rounded mb-2" />
                          <div className="h-2 w-20 bg-[var(--color-secondary)]/50 rounded" />
                        </div>
                        <div className="col-span-2 bg-[var(--color-surface-container-highest)] rounded-lg p-4 border border-[var(--color-outline-variant)]">
                          <div className="flex justify-between mb-4">
                            <div className="h-4 w-4 rounded-full bg-[var(--color-tertiary)]" />
                            <div className="h-2 w-24 bg-[var(--color-outline-variant)] rounded" />
                          </div>
                          <div className="space-y-2">
                            <div className="h-1.5 w-full bg-[var(--color-outline-variant)]/30 rounded" />
                            <div className="h-1.5 w-[80%] bg-[var(--color-outline-variant)]/30 rounded" />
                            <div className="h-1.5 w-[60%] bg-[var(--color-outline-variant)]/30 rounded" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-16 pb-24 text-center">
        <ScrollReveal>
          <div className="glass-card p-12 md:p-20 rounded-3xl border-[var(--color-secondary)]/20">
            <h2 className="font-[var(--font-heading)] text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-semibold mb-8 text-white">
              Ready to evolve your <span className="gradient-text">infrastructure?</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link
                href="/contact"
                className="glow-button px-10 py-4 rounded-xl font-[var(--font-heading)] text-white text-lg font-semibold w-full md:w-auto text-center"
              >
                Schedule A Call
              </Link>
              <a
                href="#"
                className="px-10 py-4 rounded-xl border border-[var(--color-secondary)] text-[var(--color-secondary)] font-semibold text-lg w-full md:w-auto hover:bg-[var(--color-secondary)]/10 transition-colors text-center"
              >
                Download Services Guide
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
