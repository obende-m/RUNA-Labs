import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getPublishedTeamMembers } from "@/lib/cms";

export const metadata = {
  title: "About Us",
  description:
    "RUNA LABS is a high-performance engineering collective dedicated to solving the most complex challenges for global enterprises and sovereign entities.",
};

export default function AboutPage() {
  const teamMembers = getPublishedTeamMembers();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-5 md:px-16 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050816]" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <ScrollReveal>
            <span className="font-[var(--font-body)] text-[12px] leading-[16px] tracking-[0.2em] text-[var(--color-secondary)] uppercase mb-6 block">
              Our Legacy
            </span>
            <h1 className="font-[var(--font-heading)] text-[40px] md:text-[64px] leading-[48px] md:leading-[72px] font-bold text-glow mb-8 text-white">
              Engineered for <span className="text-[var(--color-primary)] italic">Intelligence</span>.
            </h1>
            <p className="font-[var(--font-body)] text-[18px] leading-[28px] text-[var(--color-on-surface-variant)] max-w-2xl mx-auto">
              RUNA LABS is a high-performance engineering collective dedicated to solving the most complex challenges for global enterprises and sovereign entities.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 px-5 md:px-16 bg-[var(--color-surface-container-lowest)]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-[var(--color-secondary)]/10 rounded-full blur-[80px]" />
              <div className="relative rounded-2xl overflow-hidden border border-[var(--color-outline-variant)] shadow-2xl bg-[var(--color-surface)]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyVFXoVxCoLqK64fGGr97Sg58IEYgHfZlJ7EZeTKLtUjUYGRr5JqROxDlQaiT5Qg12E9PJ5OtzwxMrMG5yl9uPYY9Wnjm9TiFF62dEI0eVNrEBZBOSqiFyWVkL-wfJDqmiK2N5i0yn4Mi9boGsnED_VfoRI2vlqDwgJeJspZ5ekHcnxKJJ41MOjaYL8ZaAP_PeVMK8wUYZ6styIXwY5d9a-EekSEO4fcJIkboy1w0pj5soHrhC6gz_l80Zx3xmWoTEEZq_aFT_09Q"
                  alt="Corporate HQ"
                  width={600}
                  height={450}
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 glass-card rounded-xl float-animation hidden md:block">
                <div className="text-[var(--color-secondary)] font-[var(--font-heading)] text-[28px] leading-[36px] font-medium">EST. 2018</div>
                <div className="text-[var(--color-on-surface-variant)] font-[var(--font-body)] text-[14px] leading-[20px]">Silicon Valley, CA</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="space-y-8">
              <h2 className="font-[var(--font-heading)] text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-semibold text-[var(--color-primary)]">
                The Genesis of RUNA
              </h2>
              <p className="font-[var(--font-body)] text-[16px] leading-[24px] text-[var(--color-on-surface-variant)] leading-relaxed">
                Founded by a consortium of aerospace engineers and quantum computing architects, RUNA LABS emerged from the need for a bridge between theoretical intelligence and practical, industrial-grade reliability.
              </p>
              <p className="font-[var(--font-body)] text-[16px] leading-[24px] text-[var(--color-on-surface-variant)] leading-relaxed">
                We don&apos;t just build software; we architect the digital nervous systems for the world&apos;s most critical infrastructures. Our journey began with a single mission: to provide high-stakes stability in an era of rapid, often unstable, technological acceleration.
              </p>
              <div className="flex gap-12 pt-4">
                <div>
                  <div className="text-[var(--color-primary)] font-[var(--font-heading)] text-[28px] leading-[36px] font-semibold">500+</div>
                  <div className="text-[var(--color-on-surface-variant)] font-[var(--font-body)] text-[14px] uppercase tracking-wider">Deployments</div>
                </div>
                <div>
                  <div className="text-[var(--color-primary)] font-[var(--font-heading)] text-[28px] leading-[36px] font-semibold">12</div>
                  <div className="text-[var(--color-on-surface-variant)] font-[var(--font-body)] text-[14px] uppercase tracking-wider">Global Patents</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal direction="left">
            <div className="p-12 glass-card rounded-2xl relative overflow-hidden group h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-secondary)]/5 -translate-y-1/2 translate-x-1/2 rounded-full group-hover:scale-150 transition-transform duration-500" />
              <span className="material-symbols-outlined text-[var(--color-secondary)] text-4xl mb-6">rocket_launch</span>
              <h3 className="font-[var(--font-heading)] text-[28px] leading-[36px] font-medium text-[var(--color-primary)] mb-4">Our Mission</h3>
              <p className="font-[var(--font-body)] text-[16px] leading-[24px] text-[var(--color-on-surface-variant)]">
                To empower decision-makers with deterministic intelligence platforms that operate with absolute clarity in high-entropy environments. We provide the stability required for monumental breakthroughs.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="p-12 glass-card rounded-2xl relative overflow-hidden group h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-tertiary)]/5 -translate-y-1/2 translate-x-1/2 rounded-full group-hover:scale-150 transition-transform duration-500" />
              <span className="material-symbols-outlined text-[var(--color-tertiary)] text-4xl mb-6">visibility</span>
              <h3 className="font-[var(--font-heading)] text-[28px] leading-[36px] font-medium text-[var(--color-primary)] mb-4">Our Vision</h3>
              <p className="font-[var(--font-body)] text-[16px] leading-[24px] text-[var(--color-on-surface-variant)]">
                To be the foundational architecture for the next century of human achievement, creating a world where technology and ethics exist in a state of perfectly balanced resonance.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-5 md:px-16 bg-[var(--color-surface-container-low)]">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="font-[var(--font-heading)] text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-semibold text-[var(--color-primary)] mb-4">
                Our Core Values
              </h2>
              <p className="font-[var(--font-body)] text-[16px] leading-[24px] text-[var(--color-on-surface-variant)]">
                The principles that govern every line of code we write.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal className="md:col-span-2">
              <div className="glass-card p-10 rounded-2xl border-l-4 border-[var(--color-secondary)] h-full">
                <h4 className="font-[var(--font-heading)] text-[28px] leading-[36px] font-medium text-[var(--color-primary)] mb-4">Integrity in Logic</h4>
                <p className="font-[var(--font-body)] text-[16px] leading-[24px] text-[var(--color-on-surface-variant)]">
                  We believe that technology is a moral mirror. Our systems are built with radical transparency, ensuring that data provenance and algorithmic decision-making are always auditable and ethically sound.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="glass-card p-10 rounded-2xl flex flex-col justify-center items-center text-center h-full">
                <span className="material-symbols-outlined text-[var(--color-secondary)] text-5xl mb-4">precision_manufacturing</span>
                <h4 className="font-[var(--font-heading)] text-[28px] leading-[36px] font-medium text-[var(--color-primary)]">Precision</h4>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="glass-card p-10 rounded-2xl flex flex-col justify-center items-center text-center h-full">
                <span className="material-symbols-outlined text-[var(--color-tertiary)] text-5xl mb-4">shield</span>
                <h4 className="font-[var(--font-heading)] text-[28px] leading-[36px] font-medium text-[var(--color-primary)]">Resilience</h4>
              </div>
            </ScrollReveal>

            <ScrollReveal className="md:col-span-2">
              <div className="glass-card p-10 rounded-2xl border-r-4 border-[var(--color-tertiary)] text-right h-full">
                <h4 className="font-[var(--font-heading)] text-[28px] leading-[36px] font-medium text-[var(--color-primary)] mb-4">Relentless Innovation</h4>
                <p className="font-[var(--font-body)] text-[16px] leading-[24px] text-[var(--color-on-surface-variant)]">
                  Stagnation is the precursor to failure. We push the boundaries of what&apos;s possible, not for the sake of novelty, but for the pursuit of superior efficiency and human capability expansion.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Path to Intelligence (Timeline) */}
      <section className="py-24 px-5 md:px-16 overflow-hidden">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <h2 className="font-[var(--font-heading)] text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-semibold text-[var(--color-primary)] mb-16 text-center">
              Path to Intelligence
            </h2>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--color-outline-variant)] hidden md:block" />
            <div className="space-y-24">
              {/* Event 1 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <ScrollReveal direction="left">
                  <div className="md:text-right">
                    <div className="text-[var(--color-secondary)] font-[var(--font-heading)] text-[28px] leading-[36px] font-semibold mb-2">2018</div>
                    <h4 className="text-white font-bold text-xl mb-3">The Genesis Protocol</h4>
                    <p className="text-[var(--color-on-surface-variant)] text-[16px] leading-[24px]">
                      RUNA LABS founded in a converted hangar with a focus on autonomous logistics for remote regions.
                    </p>
                  </div>
                </ScrollReveal>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[var(--color-secondary)] rounded-full shadow-[0_0_15px_rgba(200,191,255,0.6)] z-10" />
                <ScrollReveal direction="right">
                  <div className="bg-[var(--color-surface-container-high)] h-48 rounded-2xl overflow-hidden border border-[var(--color-outline-variant)] relative">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGIi4OBXIzfP9ad_EsuNhOtLDhoJLu2dHyQ_63ttcIXP5cJ0yqvLWMXaeP1itANZpSTicoXbJUNhcnZaTqQYotbTIX3iFPCWbb9vcBSf9ojixDmawv3zyCXWWlSDKbW4aP5VJnA89H-WN9oCDZ8teew9-G0k5G5KbWi_bi2vzQsqsD7Qb_gnhrdJEAlbQOHF_bBK52A9-73o8Uc36iUHGegIDlZ7L48k_dV00YXv4neF2Jw_nuYUC_3-eQB8EH72TGSui_LEzi9w8"
                      alt="Tech Background"
                      fill
                      className="object-cover opacity-50 grayscale"
                    />
                  </div>
                </ScrollReveal>
              </div>

              {/* Event 2 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <ScrollReveal direction="left" className="md:order-2">
                  <div>
                    <div className="text-[var(--color-tertiary)] font-[var(--font-heading)] text-[28px] leading-[36px] font-semibold mb-2">2021</div>
                    <h4 className="text-white font-bold text-xl mb-3">Quantum-Ready Systems</h4>
                    <p className="text-[var(--color-on-surface-variant)] text-[16px] leading-[24px]">
                      Deployment of the first quantum-resilient encryption layer for global banking consortiums.
                    </p>
                  </div>
                </ScrollReveal>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[var(--color-tertiary)] rounded-full shadow-[0_0_15px_rgba(181,196,255,0.6)] z-10" />
                <ScrollReveal direction="right" className="md:order-1">
                  <div className="bg-[var(--color-surface-container-high)] h-48 rounded-2xl overflow-hidden border border-[var(--color-outline-variant)] relative">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_bKX-u7IYW1hvgaetfipPeJ4uB-7yvjBxXPl2lQw71293dcITBKz5QX_meYFbPitMTP4F6hbgUQ0aPCAPSDiH2_uH68DyiQhUzgbg5eV79INcJBzCgJDt-_VLqiywiL_ixmOf01kSzkWB0OOMSSHzeWKIr6cvmxz2hn70eh0kCgvQxsG1VP9BbuwXtvr6ha8IzolHdZBAXb7KGS767cW_d4VoDIYEdSWoSHo32icJkKjMyfXTtoZP8AVrqFRgKGuuMreNFRWLiBo"
                      alt="Cyber Security"
                      fill
                      className="object-cover opacity-50 grayscale"
                    />
                  </div>
                </ScrollReveal>
              </div>

              {/* Event 3 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <ScrollReveal direction="left">
                  <div className="md:text-right">
                    <div className="text-[var(--color-primary)] font-[var(--font-heading)] text-[28px] leading-[36px] font-semibold mb-2">Present</div>
                    <h4 className="text-white font-bold text-xl mb-3">Global Sovereign Engine</h4>
                    <p className="text-[var(--color-on-surface-variant)] text-[16px] leading-[24px]">
                      Currently managing intelligence infrastructure for 14 nations and over 200 Fortune 500 enterprises.
                    </p>
                  </div>
                </ScrollReveal>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[var(--color-primary)] rounded-full shadow-[0_0_15px_rgba(192,196,234,0.6)] z-10" />
                <ScrollReveal direction="right">
                  <div className="bg-[var(--color-surface-container-high)] h-48 rounded-2xl overflow-hidden border border-[var(--color-outline-variant)] relative">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcGTkjybApahlCT_8Fqx6pPAbx3rrOrFEHU0CHrt6glzzmtspJFOSYSdGEspZ_rmoLtFv1k2KWUX_m3nm_e44MvxpUp5z_RMvChu8ExlNM855YFFPg_LYbOrc-de6ZOot_lth464NHJbfeBAJD2KeEOYeizFAcXk6aiuuEI67K3vASRiYwABbNsydiBrANMGBOXqP8As-yjQt8miDybg0V1oK7vC5UycuT414SlfepMMrC3NfmOe_DLICmyYKOsLhvM7gjztCmS84"
                      alt="Global Network"
                      fill
                      className="object-cover opacity-50 grayscale"
                    />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-5 md:px-16 bg-[var(--color-surface-container-lowest)]">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="font-[var(--font-heading)] text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-semibold text-[var(--color-primary)] mb-4">
                  Architects of Progress
                </h2>
                <p className="font-[var(--font-body)] text-[16px] leading-[24px] text-[var(--color-on-surface-variant)] max-w-xl">
                  Meet the multi-disciplinary experts driving our technological evolution.
                </p>
              </div>
              <Link
                href="/careers"
                className="text-[var(--color-secondary)] font-[var(--font-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold flex items-center gap-2 hover:gap-4 transition-all"
              >
                VIEW ALL POSITIONS <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={member.id} delay={i * 0.1}>
                <div className="group">
                  <div className="aspect-square rounded-2xl overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 border border-[var(--color-outline-variant)] relative bg-[var(--color-surface-container)]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[var(--color-secondary)]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h5 className="text-white font-[var(--font-heading)] text-[20px] font-medium">{member.name}</h5>
                  <p className="text-[var(--color-on-surface-variant)] font-[var(--font-body)] text-[12px] uppercase tracking-widest mt-1">
                    {member.role}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-5 md:px-16">
        <ScrollReveal>
          <div className="max-w-[1280px] mx-auto p-16 rounded-3xl bg-gradient-to-br from-[var(--color-secondary-container)] to-[var(--color-primary-container)] relative overflow-hidden text-center border border-[var(--color-outline-variant)]">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <h2 className="font-[var(--font-heading)] text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-semibold mb-8 text-white">
                Ready to engineer the future?
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="px-10 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-all text-center"
                >
                  Partner With Us
                </Link>
                <a
                  href="#"
                  className="px-10 py-4 border border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all text-center"
                >
                  Read the Technical Manifesto
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
