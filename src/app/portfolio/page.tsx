import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getPublishedPortfolioProjects } from "@/lib/cms";

export const metadata = {
  title: "Portfolio",
  description:
    "Exploring the frontier of digital engineering through complex platforms, AI-driven solutions, and enterprise-grade ecosystems.",
};

export default function PortfolioPage() {
  const projects = getPublishedPortfolioProjects();

  // Separate featured vs grid projects
  const featuredProjects = projects.filter((p) => p.featured);
  const gridProjects = projects.filter((p) => !p.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-5 md:px-0 pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050816]" />
        <div className="relative z-10 text-center max-w-4xl">
          <ScrollReveal>
            <span className="font-[var(--font-body)] text-[12px] leading-[16px] text-[var(--color-secondary)] tracking-widest uppercase mb-4 block">
              Engineered for Excellence
            </span>
            <h1 className="font-[var(--font-heading)] text-[40px] md:text-[64px] leading-[48px] md:leading-[72px] font-bold mb-6 text-white text-glow">
              Selected Works
            </h1>
            <p className="font-[var(--font-body)] text-[18px] leading-[28px] text-[var(--color-on-surface-variant)] max-w-2xl mx-auto">
              Exploring the frontier of digital engineering through complex platforms, AI-driven solutions, and enterprise-grade ecosystems.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio Grid */}
      <main className="px-5 md:px-16 max-w-[1280px] mx-auto py-24 space-y-32">
        {/* Featured Projects */}
        {featuredProjects.map((project, index) => (
          <ScrollReveal key={project.id} className="w-full">
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Asymmetric order switching */}
              <div className={`lg:col-span-7 relative group ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                <div className="absolute -inset-4 bg-[var(--color-secondary)]/5 rounded-3xl blur-2xl group-hover:bg-[var(--color-secondary)]/10 transition-all duration-500" />
                <div className="relative glass-card rounded-2xl overflow-hidden aspect-[16/10] border border-[var(--color-outline-variant)]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#0a0f2c] to-[#050816] flex items-center justify-center text-[var(--color-secondary)] font-[var(--font-heading)] text-xl">
                      {project.title}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  {/* Floating Mobile Device Mockup if exists */}
                  {project.mobileImage && (
                    <div className="absolute bottom-8 right-8 w-1/3 aspect-[9/19] glass-card rounded-xl border border-white/10 shadow-2xl float-animation hidden md:block overflow-hidden">
                      <Image
                        src={project.mobileImage}
                        alt={`${project.title} Mobile Portal`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className={`lg:col-span-5 space-y-6 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="font-[var(--font-heading)] text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-semibold text-white">
                  {project.title}
                </h2>
                <p className="font-[var(--font-body)] text-[16px] leading-[24px] text-[var(--color-on-surface-variant)]">
                  {project.description}
                </p>

                {/* Testimonial if exists */}
                {project.testimonial && (
                  <div className="p-4 rounded-xl bg-[var(--color-surface-container)] border-l-4 border-[var(--color-secondary)]">
                    <p className="italic text-white text-sm">
                      &ldquo;{project.testimonial.quote}&rdquo;
                    </p>
                    <span className="text-xs text-[var(--color-secondary)] mt-2 block">— {project.testimonial.author}</span>
                  </div>
                )}

                {/* Metrics */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="p-4 rounded-xl bg-[var(--color-surface-container)]">
                        <span className="text-[var(--color-secondary)] font-[var(--font-heading)] text-[24px] font-bold block">
                          {metric.value}
                        </span>
                        <span className="text-[12px] text-[var(--color-on-surface-variant)]">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-3 py-4">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-xs font-semibold border border-[var(--color-outline-variant)] px-3 py-1 rounded-md text-[var(--color-on-surface-variant)]">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/portfolio/${project.slug}`}
                  className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:gap-4 transition-all text-sm"
                >
                  View Case Study{" "}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </article>
          </ScrollReveal>
        ))}

        {/* Bento Grid Section */}
        <ScrollReveal>
          <section className="py-16">
            <div className="text-center mb-16">
              <h2 className="font-[var(--font-heading)] text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-semibold text-white mb-4">
                Vertical Specializations
              </h2>
              <p className="text-[var(--color-on-surface-variant)] max-w-xl mx-auto font-[var(--font-body)] text-[16px] leading-[24px]">
                Diverse solutions engineered with a singular focus on performance and intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {gridProjects.map((project, idx) => {
                // Determine layout details based on custom rules matching the design
                const isDoubleWidth = project.id === "quantx-fintech" || project.id === "vertex-global";
                
                return (
                  <div
                    key={project.id}
                    className={`${
                      isDoubleWidth ? "md:col-span-2 flex-row" : "flex-col"
                    } glass-card-hover rounded-2xl p-8 border border-[var(--color-outline-variant)] hover:shadow-2xl transition-all group overflow-hidden relative flex justify-between`}
                  >
                    <div className="relative z-10 flex-1 flex flex-col justify-between h-full">
                      <div>
                        <div className="w-12 h-12 rounded-lg bg-[var(--color-secondary)]/20 flex items-center justify-center mb-6">
                          <span className="material-symbols-outlined text-[var(--color-secondary)] text-2xl">
                            {project.id === "quantx-fintech"
                              ? "payments"
                              : project.id === "neuralsupport-ai"
                              ? "psychology"
                              : project.id === "veloce-commerce"
                              ? "shopping_bag"
                              : "business"}
                          </span>
                        </div>
                        <h3 className="font-[var(--font-heading)] text-[24px] font-medium text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-[var(--color-on-surface-variant)] mb-6 max-w-md font-[var(--font-body)] text-[15px] leading-[22px]">
                          {project.description}
                        </p>
                      </div>

                      {/* Metrics or extra details */}
                      {project.metrics && project.metrics.length > 0 ? (
                        <div className="flex gap-4 items-end mt-4">
                          {project.metrics.map((metric, mIdx) => (
                            <div key={metric.label} className="flex gap-4 items-center">
                              {mIdx > 0 && <div className="h-10 w-[1px] bg-[var(--color-outline-variant)]" />}
                              <div className="text-center">
                                <div className="text-2xl font-bold text-white">
                                  {metric.value}
                                </div>
                                <div className="text-[10px] uppercase tracking-widest text-[var(--color-on-surface-variant)]">
                                  {metric.label}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : project.id === "neuralsupport-ai" ? (
                        <div className="space-y-4 mt-4">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs text-[var(--color-on-surface-variant)]">
                              Learning from 50k+ logs/hr
                            </span>
                          </div>
                        </div>
                      ) : null}

                      <div className="mt-6">
                        <Link
                          href={`/portfolio/${project.slug}`}
                          className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:gap-4 transition-all text-sm"
                        >
                          View Details{" "}
                          <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                      </div>
                    </div>

                    {/* Absolute layout image preview for double widths / bento styled */}
                    {isDoubleWidth && project.image && (
                      <div className="absolute right-0 top-0 h-full w-1/2 hidden md:block opacity-20 group-hover:opacity-40 transition-opacity">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    {!isDoubleWidth && project.image && (
                      <div className="relative h-32 w-full mt-6 overflow-hidden rounded-lg">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </ScrollReveal>
      </main>
    </>
  );
}
