"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface CareerPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  icon: string;
  iconBg: string;
  description: string;
  requirements: string[];
  status: "published" | "draft";
  createdAt: string;
}

export default function CareersPage() {
  const [positions, setPositions] = useState<CareerPosition[]>([]);
  const [filteredPositions, setFilteredPositions] = useState<CareerPosition[]>([]);
  const [department, setDepartment] = useState("All Departments");
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // Client-side fetch or import
    const loadPositions = async () => {
      try {
        const response = await fetch("/api/careers");
        const data = await response.json();
        const published = data.filter((p: CareerPosition) => p.status === "published");
        setPositions(published);
        setFilteredPositions(published);
      } catch (err) {
        console.error("Failed to load careers:", err);
      }
    };
    loadPositions();
  }, []);

  const handleFilterChange = (dept: string) => {
    setDepartment(dept);
    if (dept === "All Departments") {
      setFilteredPositions(positions);
    } else {
      setFilteredPositions(positions.filter((p) => p.department === dept));
    }
  };

  const handleApply = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const departments = ["All Departments", ...Array.from(new Set(positions.map((p) => p.department)))];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-5 md:px-16 pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050816]" />
        <div className="relative z-10 text-center max-w-4xl">
          <ScrollReveal>
            <h1 className="font-[var(--font-heading)] text-[40px] md:text-[64px] leading-[48px] md:leading-[72px] font-bold mb-6 text-white tracking-tight">
              Engineer the <span className="text-gradient">Intelligence</span> of Tomorrow.
            </h1>
            <p className="font-[var(--font-body)] text-[18px] leading-[28px] text-[var(--color-on-surface-variant)] max-w-2xl mx-auto mb-10">
              Join a team of elite architects, data scientists, and developers building industrial-grade solutions for the next era of enterprise technology.
            </p>
            <a
              href="#open-positions"
              className="glow-button px-10 py-4 rounded-xl font-[var(--font-heading)] text-white text-lg font-semibold inline-block"
            >
              View Open Positions
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Culture (Bento Grid) */}
      <section className="py-24 px-5 md:px-16 max-w-[1280px] mx-auto">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="font-[var(--font-heading)] text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-semibold text-white mb-4">
              Our Culture
            </h2>
            <div className="h-1 w-24 bg-[var(--color-secondary)] mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <ScrollReveal className="md:col-span-8 h-full">
            <div className="glass-card rounded-xl p-10 flex flex-col justify-end min-h-[400px] relative overflow-hidden group h-full">
              <Image
                fill
                alt="Collaborative engineering team"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3HuhVL_C5_cszxt0p446U-njx4bEiwKCKGdx1FncEd-DCmes8u0qf9jh8y88udWKrXNx1LR4wJFmfdiSNIb2QluaBofKEywfrO_jUmKV3wmYHGYKjVC84a6nIV2oYUWcAA-WfiMBk30eK2K0fKvjRUV8mEriULmTJBNDLxf7eXLki_4REK5mQIlWFnmvzyaYNId8P-lF5WXiyCej-sbj6mWPOg6SyaojxyD59vWzpYUvDO3O4W72hyVueJYdO2JwHOj6iHTr05Zo"
                className="object-cover mix-blend-overlay opacity-40 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="relative">
                <h3 className="font-[var(--font-heading)] text-[28px] leading-[36px] font-medium text-white mb-4">
                  Radical Innovation
                </h3>
                <p className="text-[var(--color-on-surface-variant)] max-w-lg font-[var(--font-body)] text-[16px] leading-[24px]">
                  We don&apos;t just follow trends; we define them. Our laboratory environment encourages calculated risks and groundbreaking exploration in AI and blockchain.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-4 h-full">
            <div className="glass-card rounded-xl p-8 flex flex-col items-center justify-center text-center space-y-6 h-full">
              <div className="w-16 h-16 rounded-full bg-[var(--color-secondary-container)] flex items-center justify-center">
                <span className="material-symbols-outlined text-[var(--color-secondary)] text-3xl">
                  diversity_3
                </span>
              </div>
              <h3 className="font-[var(--font-heading)] text-[24px] font-medium text-white">
                Global Talent
              </h3>
              <p className="text-[var(--color-on-surface-variant)] font-[var(--font-body)] text-sm leading-[20px]">
                A decentralized force of specialists operating from 14 countries, unified by technical excellence.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-4 h-full">
            <div className="glass-card rounded-xl p-8 flex flex-col justify-between h-full">
              <div>
                <h3 className="font-[var(--font-heading)] text-[24px] font-medium text-white mb-4">
                  Autonomy
                </h3>
                <p className="text-[var(--color-on-surface-variant)] font-[var(--font-body)] text-sm leading-[20px]">
                  We trust our engineers. You define your path and own your impact from day one.
                </p>
              </div>
              <div className="pt-4 mt-6">
                <span className="material-symbols-outlined text-[var(--color-primary)] text-5xl float-animation">
                  psychology
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-8 h-full">
            <div className="glass-card rounded-xl p-10 flex flex-col md:flex-row items-center gap-10 h-full">
              <div className="flex-1">
                <h3 className="font-[var(--font-heading)] text-[28px] leading-[36px] font-medium text-white mb-4">
                  Precision Engineering
                </h3>
                <p className="text-[var(--color-on-surface-variant)] font-[var(--font-body)] text-[16px] leading-[24px]">
                  Stability is our baseline. We build systems that govern critical infrastructure with 99.99% uptime requirements.
                </p>
              </div>
              <div className="hidden md:block w-48 h-48 bg-[var(--color-surface-container-high)] rounded-full border border-[var(--color-border-glass)] relative flex-shrink-0">
                <div className="absolute inset-0 animate-spin-slow flex items-center justify-center">
                  <div className="w-full h-1 bg-gradient-to-r from-transparent to-[var(--color-primary)]" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[var(--color-surface-container-lowest)] px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="font-[var(--font-heading)] text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-semibold mb-8 text-white">
                  Empowering Our <br />
                  <span className="text-gradient">Innovators</span>
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 glass-card rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-[var(--color-primary)]">
                        payments
                      </span>
                    </div>
                    <div>
                      <h4 className="font-[var(--font-heading)] text-lg text-white mb-2 font-semibold">
                        Competitive Compensation
                      </h4>
                      <p className="text-[var(--color-on-surface-variant)] font-[var(--font-body)] text-sm">
                        Top-tier salary packages with performance-based bonuses and equity options.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 glass-card rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-[var(--color-primary)]">
                        fitness_center
                      </span>
                    </div>
                    <div>
                      <h4 className="font-[var(--font-heading)] text-lg text-white mb-2 font-semibold">
                        Health &amp; Wellness
                      </h4>
                      <p className="text-[var(--color-on-surface-variant)] font-[var(--font-body)] text-sm">
                        Comprehensive private medical insurance and monthly wellness stipends.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 glass-card rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-[var(--color-primary)]">
                        school
                      </span>
                    </div>
                    <div>
                      <h4 className="font-[var(--font-heading)] text-lg text-white mb-2 font-semibold">
                        Continuous Learning
                      </h4>
                      <p className="text-[var(--color-on-surface-variant)] font-[var(--font-body)] text-sm">
                        Unlimited access to specialized training and an annual conference budget.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-[var(--color-secondary)]/10 blur-3xl rounded-full" />
                <div className="rounded-2xl shadow-2xl relative z-10 border border-[var(--color-border-glass)] overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN3m4kcyKIjUpPTV6zR0js1FyGgqaH-HJjGxPQybjRl8a7qvPkz1n6TSAks4lysI_7syi90J60D1F9GVtd1fh132pVRr8aUUkEHHHuw6k4659n2DT1E7aK3pOQPW9Kpy0fG3Wl2iQaJw1gCjOrpp7MCq5OVBc7VLMMFIZgh44fCysMfn56-dtB5SAHkjYw3fWj62IIG6PgYMwmHNIwvQmHmKzzqRwmNF_yj7kZa8xmngss7DX0HyylVMbaYwwA0SzHwoXQbeOgx54"
                    alt="Workspace setup"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 px-5 md:px-16 max-w-[1280px] mx-auto" id="open-positions">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-[var(--font-heading)] text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-semibold text-white mb-2">
                Open Positions
              </h2>
              <p className="text-[var(--color-on-surface-variant)]">
                Find your next challenge in our engineering hubs.
              </p>
            </div>
            <div className="flex gap-4">
              <select
                value={department}
                onChange={(e) => handleFilterChange(e.target.value)}
                className="bg-[var(--color-surface-container-high)] border border-[var(--color-border-glass)] rounded-lg text-white focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] px-4 py-2"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {filteredPositions.map((pos) => (
            <ScrollReveal key={pos.id}>
              <div className="glass-card-hover p-6 rounded-xl flex flex-col md:flex-row justify-between items-center group cursor-pointer">
                <div className="flex items-center gap-6 mb-4 md:mb-0 w-full md:w-auto">
                  <div
                    className={`w-14 h-14 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform ${
                      pos.iconBg === "bg-primary-container"
                        ? "bg-[var(--color-primary-container)]"
                        : pos.iconBg === "bg-secondary-container"
                        ? "bg-[var(--color-secondary-container)]"
                        : "bg-[var(--color-tertiary-container)]"
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-2xl ${
                        pos.iconBg === "bg-primary-container"
                          ? "text-[var(--color-primary)]"
                          : pos.iconBg === "bg-secondary-container"
                          ? "text-[var(--color-secondary)]"
                          : "text-[var(--color-tertiary)]"
                      }`}
                    >
                      {pos.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-[var(--font-heading)] text-xl font-medium text-white">
                      {pos.title}
                    </h3>
                    <div className="flex gap-4 mt-1">
                      <span className="flex items-center gap-1 text-[12px] text-[var(--color-on-surface-variant)]">
                        <span className="material-symbols-outlined text-[16px]">location_on</span>{" "}
                        {pos.location}
                      </span>
                      <span className="flex items-center gap-1 text-[12px] text-[var(--color-on-surface-variant)]">
                        <span className="material-symbols-outlined text-[16px]">schedule</span>{" "}
                        {pos.type}
                      </span>
                    </div>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="px-6 py-2 border border-[var(--color-primary)] text-[var(--color-primary)] rounded-lg font-semibold text-sm group-hover:bg-[var(--color-primary)] group-hover:text-black transition-all"
                >
                  Apply Now
                </Link>
              </div>
            </ScrollReveal>
          ))}
          {filteredPositions.length === 0 && (
            <div className="text-center py-12 text-[var(--color-on-surface-variant)]">
              No open positions at this moment.
            </div>
          )}
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-[var(--color-surface-container-low)] border-t border-[var(--color-border-glass)]">
        <div className="max-w-2xl mx-auto px-5">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-[var(--font-heading)] text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-semibold text-white mb-4">
                Can&apos;t find a match?
              </h2>
              <p className="text-[var(--color-on-surface-variant)]">
                Send us your details and we&apos;ll reach out when the right mission opens up.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            {formSubmitted ? (
              <div className="glass-card p-10 rounded-2xl text-center space-y-4">
                <span className="material-symbols-outlined text-green-500 text-6xl">
                  check_circle
                </span>
                <h3 className="font-[var(--font-heading)] text-[24px] font-medium text-white">
                  Application Received
                </h3>
                <p className="text-[var(--color-on-surface-variant)]">
                  Thank you for submitting. Our talent acquisition lead will contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-6 glass-card p-10 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-semibold text-xs mb-2 text-[var(--color-on-surface-variant)] uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full bg-[var(--color-surface-container)] border border-[var(--color-border-glass)] rounded-lg focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] text-white p-3"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-xs mb-2 text-[var(--color-on-surface-variant)] uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full bg-[var(--color-surface-container)] border border-[var(--color-border-glass)] rounded-lg focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] text-white p-3"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-semibold text-xs mb-2 text-[var(--color-on-surface-variant)] uppercase tracking-wider">
                    LinkedIn / Portfolio URL
                  </label>
                  <input
                    required
                    type="url"
                    className="w-full bg-[var(--color-surface-container)] border border-[var(--color-border-glass)] rounded-lg focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] text-white p-3"
                    placeholder="https://linkedin.com/in/..."
                  />
                </div>
                <div>
                  <label className="block font-semibold text-xs mb-2 text-[var(--color-on-surface-variant)] uppercase tracking-wider">
                    Area of Expertise
                  </label>
                  <select className="w-full bg-[var(--color-surface-container)] border border-[var(--color-border-glass)] rounded-lg focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] text-white p-3">
                    <option>Backend Engineering</option>
                    <option>Frontend Engineering</option>
                    <option>Data Science / AI</option>
                    <option>Product Management</option>
                    <option>Cybersecurity</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-xs mb-2 text-[var(--color-on-surface-variant)] uppercase tracking-wider">
                    Brief Bio / Ambition
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-[var(--color-surface-container)] border border-[var(--color-border-glass)] rounded-lg focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] text-white p-3"
                    placeholder="Tell us what drives you..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full glow-button py-4 rounded-xl font-[var(--font-heading)] text-white text-lg font-semibold shadow-lg"
                >
                  Submit Application
                </button>
                <p className="text-[12px] text-center text-[var(--color-on-surface-variant)]">
                  By submitting, you agree to our Privacy Policy regarding talent data handling.
                </p>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
