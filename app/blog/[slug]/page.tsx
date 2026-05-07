import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Iybots Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Nav />
      <main>
        <article className="pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="max-w-[800px] mx-auto px-6 lg:px-12">
            <div className="mb-16 text-center">
              <span
                className="inline-block font-syne text-[10px] font-semibold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full mb-6"
                style={{ background: "var(--surface)", color: "var(--accent)", border: "1px solid var(--border)" }}
              >
                {post.category}
              </span>
              <h1
                className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] mb-8"
                style={{ color: "var(--text)" }}
              >
                {post.title}
              </h1>
              <div className="flex items-center justify-center gap-4 text-sm" style={{ color: "var(--muted)" }}>
                <time>{post.date}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>

            <div 
              className="
                text-lg leading-relaxed text-[var(--muted)]
                [&>p]:mb-6 
                [&>h2]:font-syne [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-[var(--text)] [&>h2]:mt-14 [&>h2]:mb-6 [&>h2]:tracking-tight
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8 [&>ul>li]:mb-3
                [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-8 [&>ol>li]:mb-3
                [&>strong]:text-[var(--text)]
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
