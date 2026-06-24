import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Moving Tips & Blog',
  description:
    'Expert tips, guides, and insights on household shifting, office relocation, packing, and more from Box & Go Movers. Make your next move stress-free.',
  openGraph: {
    title: 'Moving Tips & Blog | Box & Go Movers',
    description: 'Expert moving tips and relocation guides from India\'s trusted packers and movers.',
  },
};

const blogPosts = [
  {
    slug: 'tips-for-safe-household-shifting',
    title: '10 Tips for Safe Household Shifting',
    excerpt:
      'Moving to a new home? Follow these expert tips to ensure your household goods arrive safely. From packing fragile items to choosing the right moving day.',
    date: '2024-11-15',
    readTime: '8 min read',
    category: 'Moving Tips',
  },
  {
    slug: 'how-to-choose-packers-movers',
    title: 'How to Choose the Right Packers & Movers',
    excerpt:
      'Don\'t fall for scams! Learn the key factors to consider when hiring packers and movers — from checking credentials to comparing quotes effectively.',
    date: '2024-11-10',
    readTime: '6 min read',
    category: 'Guide',
  },
  {
    slug: 'moving-checklist-guide',
    title: 'Ultimate Moving Checklist Guide',
    excerpt:
      'A comprehensive week-by-week moving checklist to keep your relocation organized. Never forget an important task with this complete planning guide.',
    date: '2024-11-05',
    readTime: '10 min read',
    category: 'Planning',
  },
];

const gradients = [
  'from-accent/80 to-accent-700/80',
  'from-primary-600/80 to-primary/80',
  'from-primary-400/80 to-accent/80',
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4">
            Moving Tips & Insights
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
            Expert advice, guides, and industry insights to make your next move smooth and stress-free.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.slug}
                className="glass-card rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image placeholder */}
                <div className={`h-48 bg-gradient-to-br ${gradients[index % gradients.length]} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/20 text-8xl font-bold font-heading">
                      {index + 1}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-neutral-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold font-heading text-primary mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary text-white section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Need Help With Your Move?
          </h2>
          <p className="text-neutral-300 text-lg mb-8">
            Get a free, no-obligation quote from India&apos;s most trusted packers and movers.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Get Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
