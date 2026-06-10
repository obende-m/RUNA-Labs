import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CounterSection from "./CounterSection";

export const metadata = {
  title: "Home",
  description:
    "RUNA LABS — Building digital solutions that drive growth. Custom websites, mobile apps, AI automation, e-commerce platforms, and enterprise software.",
};

const services = [
  {
    icon: "web",
    title: "Website Development",
    desc: "High-performance, SEO-optimized websites engineered for conversion and enterprise-grade stability.",
  },
  {
    icon: "phone_iphone",
    title: "Mobile Applications",
    desc: "Native and cross-platform mobile solutions built for scale, speed, and seamless user experience.",
  },
  {
    icon: "smart_toy",
    title: "AI & Automation",
    desc: "Intelligent automation systems and custom AI models for predictive analytics and operational efficiency.",
  },
];

const process = [
  {
    num: "01",
    title: "Discovery & Architecture",
    desc: "We map your system requirements, user flows, and technical constraints into a comprehensive blueprint.",
  },
  {
    num: "02",
    title: "Development & Testing",
    desc: "Agile sprints with continuous integration — building, testing, and iterating towards perfection.",
  },
  {
    num: "03",
    title: "Deployment & Support",
    desc: "Production launch, monitoring, and 24/7 dedicated support to ensure long-term system health.",
  },
];

const techStack = [
  "Next.js",
  "React",
  "Node.js",
  "Python",
  "AWS",
  "PostgreSQL",
  "TypeScript",
  "Docker",
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050816]" />
        <div className="relative z-10 px-5 md:px-16 max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24">
          <ScrollReveal>
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)] animate-pulse" />
                <span className="font-[var(--font-body)] text-[12px] leading-[16px] text-[var(--color-on-surface-variant)] uppercase tracking-[0.2em]">
                  Enterprise Intelligence Platform
                </span>
              </div>
              <h1 className="font-[var(--font-heading)] text-[40px] md:text-[64px] leading-[48px] md:leading-[72px] font-bold tracking-tight text-white mb-6">
                Your Vision.{" "}
                <span className="gradient-text">Our Technology.</span>{" "}
                Endless Possibilities.
              </h1>
              <p className="font-[var(--font-body)] text-[18px] leading-[28px] text-[var(--color-on-surface-variant)] mb-10 max-w-lg">
                Building digital solutions that empower your business. Smart. Scalable. Future-Ready.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="glow-button px-10 py-4 rounded-xl font-[var(--font-heading)] text-white text-lg font-semibold"
                >
                  Let&apos;s Build
                </Link>
                <Link
                  href="/portfolio"
                  className="glass-card px-10 py-4 rounded-xl font-[var(--font-heading)] text-[var(--color-primary)] text-lg font-semibold hover:bg-[rgba(255,255,255,0.08)] transition-all"
                >
                  View Work
                </Link>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3} direction="right">
            <div className="relative hidden lg:block">
              <div className="absolute -top-8 -right-8 w-72 h-72 bg-[var(--color-secondary)]/10 blur-[100px] rounded-full" />
              <div className="glass-card rounded-3xl p-4 enterprise-glow float-animation-large">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb9XhXMNYiXx2yxG2bSl_pj3sS0gCjQPJLf6g_ypjvulHWW6FV0O66v3CzK3JznnB0FO_5FHsIFIlBrxq94ISr-1fBqAOFASSqxq1DGxh3VKPokS1lPjJmk4Qa6cjyLO-qMfxv9k44Kbu6PH3JYL0Wuot7yEw-HTQX3tITpd2_VuvkUbWUe8nHtgIdH_hCOoNNmqNuIlhXmb-NvRXB9Bj3-E8TDYn_8-VfDaJJR-kPVxP6TkSbddwUqOLkMbN3qwuhdvSk5KCb1Y"
                  alt="RUNA Labs Dashboard Preview"
                  width={600}
                  height={400}
                  className="rounded-2xl w-full"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Counter */}
      <CounterSection />

      {/* Company Intro */}
      <section className="py-24 px-5 md:px-16 max-w-[1280px] mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-[var(--font-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-[var(--color-secondary)] uppercase block mb-4">
              Why RUNA LABS
            </span>
            <h2 className="font-[var(--font-heading)] text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-semibold text-white">
              Precision. Innovation. <span className="gradient-text">Intelligence.</span>
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "precision_manufacturing",
              title: "Precision Engineering",
              desc: "Industrial-grade stability with 99.99% uptime. Every system we build is architected for mission-critical performance.",
            },
            {
              icon: "speed",
              title: "Rapid Deployment",
              desc: "From concept to production in weeks, not months. Agile processes honed over hundreds of enterprise deployments.",
            },
            {
              icon: "security",
              title: "Enterprise Security",
              desc: "End-to-end encryption, SOC 2 compliance, and battle-tested security protocols protecting billions in transactions.",
            },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.15}>
              <div className="glass-card-hover rounded-2xl p-8 h-full">
                <div className="w-14 h-14 rounded-xl bg-[var(--color-primary-container)] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[var(--color-primary)] text-2xl">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-[var(--font-heading)] text-[28px] leading-[36px] font-medium text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-[var(--color-on-surface-variant)] text-[16px] leading-[24px]">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[var(--color-surface-container-lowest)]">
        <div className="px-5 md:px-16 max-w-[1280px] mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
              <div>
                <span className="font-[var(--font-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-[var(--color-secondary)] uppercase block mb-4">
                  What We Do
                </span>
                <h2 className="font-[var(--font-heading)] text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-semibold text-white">
                  Our Core Services
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[var(--color-primary)] font-[var(--font-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold hover:underline"
              >
                View All Services
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <ScrollReveal key={svc.title} delay={i * 0.15}>
                <div className="glass-card-hover rounded-2xl p-8 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-secondary-container)] flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-[var(--color-secondary)] text-2xl">
                      {svc.icon}
                    </span>
                  </div>
                  <h3 className="font-[var(--font-heading)] text-[28px] leading-[36px] font-medium text-white mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-[var(--color-on-surface-variant)] text-[16px] leading-[24px] mb-6 flex-1">
                    {svc.desc}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-[var(--color-primary)] font-[var(--font-body)] text-[14px] font-semibold hover:underline"
                  >
                    Learn More
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-5 md:px-16 max-w-[1280px] mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-[var(--font-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-[var(--color-secondary)] uppercase block mb-4">
              How We Work
            </span>
            <h2 className="font-[var(--font-heading)] text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-semibold text-white">
              The RUNA Process
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {process.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.2}>
              <div className="relative">
                <div className="text-[var(--color-secondary)]/20 font-[var(--font-heading)] text-[80px] leading-none font-bold mb-4 select-none opacity-20">
                  {step.num}
                </div>
                <h3 className="font-[var(--font-heading)] text-[28px] leading-[36px] font-medium text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-[var(--color-on-surface-variant)] text-[16px] leading-[24px]">
                  {step.desc}
                </p>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-16 right-0 translate-x-1/2 w-px h-20 bg-gradient-to-b from-[var(--color-secondary)]/30 to-transparent" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 border-t border-b border-[var(--color-outline-variant)]">
        <div className="px-5 md:px-16 max-w-[1280px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="font-[var(--font-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-[var(--color-on-surface-variant)] uppercase">
                Technology Stack
              </span>
            </div>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, i) => (
              <ScrollReveal key={tech} delay={i * 0.05} direction="none">
                <div className="glass-card px-8 py-4 rounded-xl text-[var(--color-on-surface-variant)] font-[var(--font-body)] font-semibold text-sm hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/30 transition-all cursor-default">
                  {tech}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-5 md:px-16 max-w-[1280px] mx-auto">
        <ScrollReveal>
          <div className="glass-card rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[var(--color-secondary)]/5 blur-[100px] rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[var(--color-tertiary)]/5 blur-[100px] rounded-full" />
            <div className="relative z-10">
              <h2 className="font-[var(--font-heading)] text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-semibold text-white mb-6">
                Ready to Build Something{" "}
                <span className="gradient-text">Amazing</span>?
              </h2>
              <p className="text-[var(--color-on-surface-variant)] text-[18px] leading-[28px] max-w-2xl mx-auto mb-10">
                Let&apos;s discuss your project and discover how RUNA LABS can transform your vision into a production-ready digital product.
              </p>
              <Link
                href="/contact"
                className="glow-button inline-block px-12 py-5 rounded-xl font-[var(--font-heading)] text-white text-lg font-semibold"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
