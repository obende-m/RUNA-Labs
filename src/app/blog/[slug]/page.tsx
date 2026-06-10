import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getBlogPostBySlug } from "@/lib/cms";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: `${post.title} | RUNA LABS Insights`,
    description: post.excerpt,
  };
}

export default async function BlogPostDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post || post.status !== "published") {
    notFound();
  }

  return (
    <>
      <article className="pt-32 pb-24 px-5 md:px-16 max-w-4xl mx-auto">
        <ScrollReveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold mb-8 hover:text-white transition-colors text-sm"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Insights
          </Link>

          <div className="inline-flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-xs font-semibold uppercase tracking-widest">
              {post.category}
            </span>
            <span className="text-[var(--color-on-surface-variant)] text-xs">
              {post.readTime}
            </span>
            <span className="text-[var(--color-on-surface-variant)] text-xs">•</span>
            <span className="text-[var(--color-on-surface-variant)] text-xs">
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="font-[var(--font-heading)] text-[36px] md:text-[52px] leading-[44px] md:leading-[60px] font-bold text-white mb-8">
            {post.title}
          </h1>

          {/* Author info */}
          <div className="flex items-center gap-4 mb-12 pb-8 border-b border-[var(--color-outline-variant)]">
            {post.authorImage && (
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[var(--color-outline)] relative">
                <Image src={post.authorImage} alt={post.author} fill className="object-cover" />
              </div>
            )}
            <div>
              <p className="text-white font-semibold text-sm">{post.author}</p>
              <p className="text-[var(--color-on-surface-variant)] text-xs">
                {post.authorRole}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Featured Image */}
        {post.image && (
          <ScrollReveal>
            <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 border border-[var(--color-outline-variant)]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </ScrollReveal>
        )}

        {/* Content */}
        <ScrollReveal>
          <div
            className="prose prose-invert max-w-none text-[var(--color-on-surface-variant)] font-[var(--font-body)] text-[16px] leading-[26px] space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </ScrollReveal>

        {/* Share / Tags */}
        <ScrollReveal>
          <div className="mt-16 pt-8 border-t border-[var(--color-outline-variant)] flex flex-wrap justify-between items-center gap-6">
            <div className="flex gap-4">
              <a
                href="#"
                className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors"
              >
                <span className="material-symbols-outlined text-lg">share</span>
              </a>
              <a
                href="#"
                className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors"
              >
                <span className="material-symbols-outlined text-lg">link</span>
              </a>
            </div>
            <Link
              href="/contact"
              className="glow-button px-6 py-2.5 rounded-xl text-white font-bold text-xs"
            >
              Partner With Us
            </Link>
          </div>
        </ScrollReveal>
      </article>
    </>
  );
}
