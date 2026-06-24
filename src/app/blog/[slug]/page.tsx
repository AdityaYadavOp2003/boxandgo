import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, ChevronRight } from 'lucide-react';
import QuoteForm from '@/components/forms/QuoteForm';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'tips-for-safe-household-shifting',
    title: '10 Tips for Safe Household Shifting',
    excerpt: 'Moving to a new home? Follow these expert tips to ensure your household goods arrive safely.',
    date: '2024-11-15',
    readTime: '8 min read',
    category: 'Moving Tips',
    content: `
## 1. Start Planning Early

The key to a successful household shift is early planning. Ideally, start preparing at least 3-4 weeks before your moving date. Create a detailed timeline, make a checklist of tasks, and stick to the schedule. Early planning gives you enough time to research movers, compare quotes, and organize your belongings without last-minute stress.

## 2. Declutter Before You Pack

Moving is the perfect opportunity to declutter your home. Go through every room and separate items into categories — keep, donate, sell, and discard. There is no point in paying to move items you no longer need. Host a garage sale, list items online, or donate to charity. This not only reduces your moving costs but also makes unpacking at your new home much easier.

## 3. Choose Reliable Packers and Movers

Do thorough research before hiring packers and movers. Check online reviews, verify their GST registration, ask for references, and compare at least 3-4 quotes. A reliable moving company like Box & Go Movers will always provide a written estimate, transit insurance, and transparent pricing with no hidden charges.

## 4. Use Quality Packing Materials

Never compromise on packing materials. Use sturdy corrugated boxes, bubble wrap for fragile items, thermocol sheets for electronics, and stretch wrap for furniture. Proper packing is the most important step in preventing damage during transit. Professional movers provide all necessary packing materials as part of their service.

## 5. Label Everything Clearly

Label each box with its contents and the room it belongs to. Use color-coded stickers for different rooms — this makes loading and unloading much more organized. Write "FRAGILE" on boxes containing delicate items so the moving team handles them with extra care.

## 6. Pack a First-Night Box

Pack a separate box with essentials you will need on the first night at your new home — toiletries, medications, phone chargers, basic utensils, towels, a change of clothes, and important documents. Keep this box with you rather than in the moving truck.

## 7. Document Valuable Items

Before packing, take photos of expensive electronics, furniture, and artwork. This documentation serves as proof of condition in case you need to file an insurance claim. Also, keep a detailed inventory list of all boxes and their contents.

## 8. Secure Important Documents

Keep important documents like Aadhaar cards, passports, property papers, bank documents, and medical records in a separate, secure bag that stays with you during the move. Never pack these in the moving truck.

## 9. Inform Relevant Parties

Update your address with banks, insurance companies, government agencies, subscription services, and utility providers. Set up mail forwarding, transfer utility connections, and notify your children's schools about the move.

## 10. Do a Final Walk-Through

Before the movers leave your old home, do a thorough walk-through of every room, closet, cabinet, and storage area. Check the garage, garden shed, and balcony. It is easy to forget items in hard-to-see places. A final inspection ensures nothing is left behind.
    `,
  },
  {
    slug: 'how-to-choose-packers-movers',
    title: 'How to Choose the Right Packers & Movers',
    excerpt: 'Don\'t fall for scams! Learn the key factors to consider when hiring packers and movers.',
    date: '2024-11-10',
    readTime: '6 min read',
    category: 'Guide',
    content: `
## Why Choosing the Right Mover Matters

Hiring the wrong packers and movers can turn your relocation into a nightmare. From damaged goods and delayed deliveries to hidden charges and outright scams, the moving industry unfortunately has its share of unreliable operators. This guide will help you identify and choose a trustworthy moving company.

## Check Credentials and Registration

The first thing to verify is whether the company is legally registered. Look for GST registration, a proper office address, and business registration documents. A genuine company like Box & Go Movers will readily share their credentials. Be wary of companies that operate only through mobile numbers with no physical office.

## Read Online Reviews and Ratings

Check reviews on Google, social media, and consumer forums. Look for patterns in feedback — consistent complaints about damage, delays, or hidden charges are major red flags. Pay attention to how the company responds to negative reviews. A professional company will address complaints promptly and fairly.

## Get Multiple Quotes

Never settle for the first quote you receive. Get estimates from at least 3-4 different companies. Be cautious of quotes that are significantly lower than others — this often indicates poor service quality or hidden charges that will appear later. A good company provides a detailed, written estimate after a physical or virtual survey of your items.

## Verify Insurance Coverage

Transit insurance is crucial for protecting your belongings during the move. Ask the company about their insurance policy — what it covers, the claim process, and the coverage amount. Reputable movers offer comprehensive insurance that covers damage due to accidents, natural disasters, and handling errors.

## Ask About Their Process

A professional moving company will have a clear, systematic process for handling your move. Ask about their packing methods, the type of vehicles they use, how they handle fragile items, and their delivery timeline. Companies with a well-defined process are more likely to deliver a smooth moving experience.

## Check for Hidden Charges

One of the most common complaints about movers is hidden charges. Before signing any agreement, ask for a complete breakdown of costs including packing charges, loading/unloading charges, transportation charges, GST, insurance premium, and any additional fees. Get everything in writing.

## Visit Their Office

If possible, visit the company's office to verify their legitimacy. A genuine moving company will have a proper office setup, fleet of vehicles, and trained staff. This also gives you a chance to meet the team and assess their professionalism firsthand.

## Trust Your Instincts

Finally, trust your gut feeling. If something feels off about a company — whether it is their pushy sales tactics, reluctance to share information, or unprofessional communication — it is better to look elsewhere. Your belongings are valuable, and they deserve to be handled by people you can trust.
    `,
  },
  {
    slug: 'moving-checklist-guide',
    title: 'Ultimate Moving Checklist Guide',
    excerpt: 'A comprehensive week-by-week moving checklist to keep your relocation organized.',
    date: '2024-11-05',
    readTime: '10 min read',
    category: 'Planning',
    content: `
## Introduction

Moving can feel overwhelming with so many tasks to manage simultaneously. This comprehensive moving checklist breaks down everything you need to do into a manageable week-by-week timeline. Whether you are moving locally within your city or relocating across the country, this guide ensures nothing falls through the cracks.

## 4 Weeks Before Moving Day

Start your preparation early. This phase is all about planning and research:

- Research and shortlist packers and movers companies
- Get quotes from at least 3-4 moving companies
- Set your moving budget and timeline
- Begin decluttering room by room
- Start collecting packing supplies if you plan to self-pack
- Create a detailed inventory of your belongings
- Notify your landlord if you are renting
- Research your new neighborhood for schools, hospitals, and shops

## 3 Weeks Before Moving Day

Time to start organizing and making decisions:

- Finalize your moving company and sign the contract
- Confirm transit insurance coverage and terms
- Begin packing non-essential items (off-season clothes, books, decor)
- Arrange to transfer or cancel utility services
- Update your address with banks and financial institutions
- Forward mail to your new address through India Post
- Start using up perishable food items in your pantry

## 2 Weeks Before Moving Day

Things start getting real at this stage:

- Pack room by room, leaving daily essentials for last
- Label all boxes clearly with contents and room designation
- Arrange pet care or child care for moving day
- Confirm the moving date and time with your movers
- Prepare a "first night" essentials box
- Take measurements at your new home for furniture placement
- Notify your children's school about the transfer
- Arrange for bike transportation if needed

## 1 Week Before Moving Day

The final countdown begins:

- Finish packing everything except daily essentials
- Defrost and clean your refrigerator
- Disassemble furniture that needs to be taken apart
- Charge all electronic devices and pack chargers separately
- Confirm all details with your moving company one last time
- Withdraw cash for tips and last-minute expenses
- Pack a travel bag with clothes and toiletries for 2-3 days
- Back up important computer files to the cloud

## Moving Day

The big day is here. Stay organized:

- Do a final walk-through of your home before the movers arrive
- Be present to supervise loading and address questions
- Check the inventory list as items are loaded
- Take meter readings for utilities at your old home
- Lock all windows and doors before leaving
- Hand over keys to the landlord or new owner
- Keep important documents, valuables, and medications with you
- Follow the moving truck or stay in communication with the driver

## After Moving Day

Settling into your new home:

- Supervise unloading and check inventory at the new home
- Inspect all items for damage and report issues immediately
- Prioritize unpacking the kitchen and bedrooms first
- Set up essential utilities (electricity, water, gas, internet)
- Update your Aadhaar card and voter ID with the new address
- Explore your new neighborhood and introduce yourself to neighbors
- Register with local authorities if required
- Give feedback and review your moving company online

## Final Tips

Remember, no move is perfect, but good planning minimizes problems. Keep this checklist handy, tick off tasks as you complete them, and don't hesitate to ask your movers for help. Companies like Box & Go Movers provide end-to-end support to make your relocation as smooth as possible.
    `,
  },
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Blog Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Box & Go Movers Blog`,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Box & Go Movers',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Box & Go Movers',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="gradient-hero text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-neutral-300">{post.title}</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-accent/20 text-accent-300 rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Article Body */}
            <article className="lg:col-span-2">
              <div
                className="prose md:prose-lg max-w-none
                  prose-headings:font-heading prose-headings:text-primary prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                  prose-p:text-neutral-600 prose-p:leading-relaxed prose-p:mb-4
                  prose-li:text-neutral-600
                  prose-strong:text-primary
                  prose-a:text-accent prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .split('\n')
                    .map((line) => {
                      const trimmed = line.trim();
                      if (trimmed.startsWith('## ')) {
                        return `<h2>${trimmed.slice(3)}</h2>`;
                      }
                      if (trimmed.startsWith('- ')) {
                        return `<li>${trimmed.slice(2)}</li>`;
                      }
                      if (trimmed.length > 0) {
                        return `<p>${trimmed}</p>`;
                      }
                      return '';
                    })
                    .join('\n'),
                }}
              />

              {/* Back to blog */}
              <div className="mt-12 pt-8 border-t border-neutral-200">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Quote Form */}
                <QuoteForm />

                {/* Related Articles */}
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-bold font-heading text-primary mb-4">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="block group"
                      >
                        <h4 className="font-semibold text-sm text-primary group-hover:text-accent transition-colors mb-1">
                          {related.title}
                        </h4>
                        <p className="text-xs text-neutral-400">
                          {new Date(related.date).toLocaleDateString('en-IN', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
