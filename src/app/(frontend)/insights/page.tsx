import React from 'react'
import Link from 'next/link'

const categories = ['All', 'Leadership', 'Coaching', 'Data & Insights', 'Industry News', 'Case Studies']

const articles = [
  {
    category: 'Leadership',
    title: "The 5 Leadership Qualities That Define Africa's Most Successful CEOs",
    excerpt:
      'After analysing over 300 coaching engagements across the continent, we identified the behaviours that consistently predict executive success in African markets.',
    author: 'Dr. Fatima Nkosi',
    date: 'June 12, 2025',
    readTime: '6 min read',
  },
  {
    category: 'Coaching',
    title: 'Why Team Coaching Outperforms Individual Coaching in High-Growth Companies',
    excerpt:
      'New research from our 2025 Big Data Report reveals a 40% higher ROI for team-based coaching engagements compared to one-on-one formats in scaling organisations.',
    author: 'Emmanuel Adeyemi',
    date: 'May 28, 2025',
    readTime: '5 min read',
  },
  {
    category: 'Data & Insights',
    title: 'Leadership Development ROI: What the Numbers Actually Say',
    excerpt:
      'We crunched the data from 1,000+ engagements to answer the question every CFO asks: what is the measurable return on investing in leadership coaching?',
    author: 'Emmanuel Adeyemi',
    date: 'May 15, 2025',
    readTime: '8 min read',
  },
  {
    category: 'Case Studies',
    title: 'How a Nairobi Bank Reduced Executive Turnover by 60% Through Coaching',
    excerpt:
      'A 12-month leadership coaching programme helped a mid-sized Kenyan bank retain its top talent and build a stronger internal succession pipeline.',
    author: 'Wanjiru Kamau',
    date: 'April 30, 2025',
    readTime: '7 min read',
  },
  {
    category: 'Industry News',
    title: "Africa's Talent Retention Crisis: The Hidden Cost No One Is Measuring",
    excerpt:
      "New data from Zanga's 2025 report reveals that African organisations lose an estimated $4.2B annually to preventable executive attrition.",
    author: 'Amara Osei',
    date: 'April 18, 2025',
    readTime: '5 min read',
  },
  {
    category: 'Leadership',
    title: 'Psychological Safety: The Foundation of High-Performance African Teams',
    excerpt:
      'Why creating an environment where team members can speak without fear is more critical — and more culturally nuanced — in African business contexts.',
    author: 'Dr. Ngozi Adesanya',
    date: 'April 5, 2025',
    readTime: '6 min read',
  },
]

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <span className="text-highlight text-sm uppercase tracking-widest font-Montserrat font-semibold">
            Insights
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 font-MonaSans leading-tight max-w-3xl">
            Thinking That Moves the Needle
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl font-Montserrat leading-relaxed">
            Research, perspectives, and practical knowledge from Zanga's coaches, data team,
            and leadership experts across Africa.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-gray-200 bg-white sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`whitespace-nowrap text-sm font-semibold pb-1 border-b-2 font-Montserrat transition-colors ${
                  i === 0
                    ? 'border-highlight text-highlight'
                    : 'border-transparent text-gray-500 hover:text-gray-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.title}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="bg-secondary h-44 flex items-center justify-center">
                  <span className="text-gray-600 text-sm font-Montserrat">📰 Article Image</span>
                </div>
                <div className="p-6">
                  <span className="text-highlight text-xs font-semibold uppercase tracking-wider font-Montserrat">
                    {article.category}
                  </span>
                  <h3 className="text-gray-900 font-bold mt-2 mb-3 font-MonaSans leading-snug line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 font-Montserrat line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400 font-Montserrat">
                    <span>{article.author}</span>
                    <div className="flex items-center gap-2">
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-semibold text-sm hover:border-gray-900 hover:text-gray-900 transition-colors font-Montserrat">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-secondary text-white">
        <div className="max-w-xl mx-auto text-center">
          <span className="text-highlight text-sm uppercase tracking-widest font-Montserrat font-semibold">
            Stay Informed
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-4 font-MonaSans">
            Get Insights Delivered to Your Inbox
          </h2>
          <p className="text-gray-400 text-sm mb-8 font-Montserrat">
            Join 5,000+ leaders who receive our weekly digest of coaching insights, data, and leadership thinking.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your work email"
              className="flex-1 px-4 py-3 rounded-md bg-primary border border-accent/40 text-white placeholder-gray-500 focus:outline-none focus:border-highlight text-sm font-Montserrat"
            />
            <button
              type="submit"
              className="bg-highlight text-white px-6 py-3 rounded-md font-semibold text-sm hover:bg-highlight/85 transition-colors font-Montserrat whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-600 text-xs mt-3 font-Montserrat">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </>
  )
}
