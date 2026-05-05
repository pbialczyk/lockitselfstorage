import Layout from "@/components/layout/Layout";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LLink from "@/i18n/LLink";

type ContentItem = { type: "p" | "h2" | "h3"; text: string };
type Post = { title: string; h1: string; description: string; date: string; content: ContentItem[]; relatedLabel?: string; relatedHref?: string };

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const posts = t("poradnik.posts", { returnObjects: true }) as Record<string, Post>;
  const post = slug ? posts[slug] : null;
  const locale = t("poradnik.locale");

  if (!post) {
    return (
      <Layout title={t("poradnik.notFound")}>
        <div className="section-padding text-center">
          <h1 className="text-2xl font-bold text-foreground">{t("poradnik.notFound")}</h1>
          <LLink to="/poradnik" className="text-brand hover:underline mt-4 inline-block">{t("poradnik.backList")}</LLink>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={post.title} description={post.description} canonical={`/poradnik/${slug}`}
      jsonLd={[{ "@context": "https://schema.org", "@type": "Article", headline: post.h1, datePublished: post.date, author: { "@type": "Organization", name: "LOCKIT self storage" }, publisher: { "@type": "Organization", name: "LOCKIT self storage" } }]}>
      <article>
        <section className="section-padding bg-brand-deep">
          <div className="container-narrow mx-auto max-w-3xl">
            <LLink to="/poradnik" className="text-brand-light/60 hover:text-brand-light text-sm mb-4 inline-block">{t("poradnik.backLink")}</LLink>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-primary-foreground mb-4">{post.h1}</h1>
            <time className="text-brand-light/60 text-sm">{new Date(post.date).toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" })}</time>
          </div>
        </section>
        <section className="section-padding bg-background">
          <div className="container-narrow mx-auto max-w-3xl">
            {post.content.map((item, i) => {
              const formatted = item.text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
              if (item.type === "h2") return <h2 key={i} className="text-2xl font-bold text-foreground mt-8 mb-4">{item.text}</h2>;
              if (item.type === "h3") return <h3 key={i} className="text-xl font-semibold text-foreground mt-6 mb-3">{item.text}</h3>;
              return <p key={i} className="text-foreground leading-relaxed text-lg mb-6" dangerouslySetInnerHTML={{ __html: formatted }} />;
            })}
            {post.relatedHref && post.relatedLabel && (
              <div className="bg-brand-50 border border-brand-light rounded-xl p-8 text-center mt-8">
                <LLink to={post.relatedHref} className="inline-block gradient-brand text-primary-foreground px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity">{post.relatedLabel} →</LLink>
              </div>
            )}
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default BlogPost;
