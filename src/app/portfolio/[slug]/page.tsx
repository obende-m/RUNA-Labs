import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getPortfolioProjectBySlug } from "@/lib/cms";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getPortfolioProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getPortfolioProjectBySlug(slug);

  if (!project || project.status !== "published") {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex flex-col justify-end pt-32 pb-16 px-5 md:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent z-10" />
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-20 -z-10"
            priority
          />
        )}
        <div className="max-w-[1280px] mx-auto w-full relative z-20">
          <ScrollReveal>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold mb-6 hover:text-white transition-colors text-sm"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Back to Portfolio
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-xs font-semibold">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-[var(--font-heading)] text-[40px] md:text-[64px] leading-[48px] md:leading-[72px] font-bold text-white mb-6">
              {project.title}
            </h1>
            <p className="font-[var(--font-body)] text-[18px] leading-[28px] text-[var(--color-on-surface-variant)] max-w-3xl">
              {project.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-5 md:px-16 max-w-[1280px] mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Project Details */}
          <div className="lg:col-span-8 space-y-12">
            <ScrollReveal>
              <div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
                <h2 className="font-[var(--font-heading)] text-[28px] leading-[36px] font-semibold text-white mb-6">
                  Project Overview
                </h2>
                <div className="prose prose-invert max-w-none text-[var(--color-on-surface-variant)] font-[var(--font-body)] text-[16px] leading-[24px] space-y-6">
                  <p>
                    For the {project.title} project, RUNA LABS was commissioned to engineer an advanced, secure, and highly scalable digital solution. Our goal was to modernize the legacy framework and provide institutional-grade stability to survive in a high-traffic environment.
                  </p>
                  <p>
                    Our multidisciplinary team began with discovery and detailed architecture to map the critical user pathways and data integration points. We utilized Next.js for high-speed page loads, backed by a robust cloud infrastructure designed to scale adaptively.
                  </p>
                  <p>
                    The resulting platform incorporates zero-knowledge proof components and sub-millisecond response latency, exceeding the initial benchmark guidelines and establishing a new standard of intelligence for the enterprise.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Testimonial if exists */}
            {project.testimonial && (
              <ScrollReveal>
                <div className="glass-card rounded-2xl p-8 md:p-12 border-l-4 border-[var(--color-secondary)] relative overflow-hidden">
                  <span className="material-symbols-outlined text-[var(--color-secondary)] text-5xl mb-6 opacity-35">
                    format_quote
                  </span>
                  <p className="italic text-white text-lg font-[var(--font-body)] leading-relaxed mb-6">
                    &ldquo;{project.testimonial.quote}&ldquo;
                  </p>
                  <div>
                    <h4 className="font-semibold text-white">{project.testimonial.author}</h4>
                    <span className="text-xs text-[var(--color-on-surface-variant)] uppercase tracking-wider">Client Representative</span>
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>

          {/* Sidebar / Specs */}
          <div className="lg:col-span-4 space-y-8">
            {/* Metrics Widget */}
            {project.metrics && project.metrics.length > 0 && (
              <ScrollReveal direction="right">
                <div className="glass-card rounded-2xl p-8 space-y-6">
                  <h3 className="font-[var(--font-heading)] text-[20px] font-semibold text-white">
                    Key Performance Metrics
                  </h3>
                  <div className="space-y-4">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="p-4 rounded-xl bg-[var(--color-surface-container)] flex items-center justify-between">
                        <span className="text-sm font-semibold text-white">{metric.label}</span>
                        <span className="text-[var(--color-secondary)] font-[var(--font-heading)] text-[20px] font-bold">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Tech Stack Widget */}
            <ScrollReveal direction="right" delay={0.15}>
              <div className="glass-card rounded-2xl p-8 space-y-6">
                <h3 className="font-[var(--font-heading)] text-[20px] font-semibold text-white">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold border border-[var(--color-outline-variant)] px-3 py-2 rounded-lg text-white bg-[var(--color-surface-container-low)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Sidebar CTA */}
            <ScrollReveal direction="right" delay={0.3}>
              <div className="glass-card rounded-2xl p-8 text-center space-y-6 border border-[var(--color-secondary)]/20">
                <h3 className="font-[var(--font-heading)] text-[20px] font-semibold text-white">
                  Interested in similar results?
                </h3>
                <p className="text-xs text-[var(--color-on-surface-variant)] leading-relaxed">
                  Let&apos;s consult on how RUNA LABS can build custom infrastructure for your enterprise.
                </p>
                <Link
                  href="/contact"
                  className="glow-button w-full block text-center py-3 rounded-xl font-semibold text-white text-sm"
                >
                  Request Consultation
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Case Study Image Gallery Showcase */}
      {project.mobileImage && (
        <section className="py-16 bg-[var(--color-surface-container-lowest)] px-5 md:px-16">
          <div className="max-w-[1280px] mx-auto">
            <ScrollReveal>
              <h2 className="font-[var(--font-heading)] text-[28px] leading-[36px] font-semibold text-white mb-12 text-center">
                Visual Experience
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <ScrollReveal direction="left">
                <div className="glass-card p-4 rounded-3xl relative overflow-hidden aspect-[16/10]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="glass-card p-4 rounded-3xl relative overflow-hidden aspect-[9/16] max-w-sm mx-auto">
                  <Image
                    src={project.mobileImage}
                    alt={`${project.title} Mobile View`}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
