import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — AI Automation Insights & Case Studies",
  description:
    "Insights, case studies, and practical guides on implementing AI agents, workflow automation, and document intelligence in your business.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "AI Automation Blog | Iybots Technologies",
    description:
      "Insights, case studies, and practical guides on implementing AI agents and workflow automation.",
    url: "https://iybots.com/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <p
              className="font-syne text-[10px] font-semibold uppercase tracking-[0.2em] mb-6"
              style={{ color: "var(--accent)" }}
            >
              Insights & Case Studies
            </p>
            <h1
              className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.04] mb-8"
              style={{ color: "var(--text)" }}
            >
              Notes on building
              <br />
              automated systems.
            </h1>
            <p
              className="text-lg leading-relaxed max-w-[50ch]"
              style={{ color: "var(--muted)" }}
            >
              Practical guides, engineering tear-downs, and real-world case studies 
              on deploying AI automation in production environments.
            </p>
          </div>
        </section>

        <section
          className="py-20 lg:py-28"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getAllPosts().map((post) => (
                <article
                  key={post.slug}
                  className="surface-card rounded-[2rem] p-8 flex flex-col transition-transform hover:-translate-y-1 duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className="font-syne text-[10px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
                      style={{ background: "var(--surface-2, #18181d)", color: "var(--accent)" }}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs" style={{ color: "var(--muted-2)" }}>
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h2
                    className="font-syne text-xl font-bold tracking-tight leading-tight mb-4"
                    style={{ color: "var(--text)" }}
                  >
                    <Link href={`/blog/${post.slug}`} className="hover:text-white transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p
                    className="text-sm leading-relaxed mb-8 flex-1"
                    style={{ color: "var(--muted)" }}
                  >
                    {post.excerpt}
                  </p>
                  
                  <div
                    className="pt-6 flex items-center justify-between mt-auto"
                    style={{ borderTop: "1px solid var(--border)" }}
                  >
                    <span className="text-xs" style={{ color: "var(--muted-2)" }}>
                      {post.date}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-syne text-xs font-medium transition-colors hover:text-white"
                      style={{ color: "var(--accent)" }}
                    >
                      Read article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
