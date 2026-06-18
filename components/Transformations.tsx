import { ArrowDown, TrendingDown, TrendingUp } from 'lucide-react';

const transformations = [
  {
    name: 'David L.',
    age: 34,
    duration: '16 weeks',
    metric: 'Lost 14 kg body fat',
    metricIcon: <TrendingDown className="h-4 w-4" />,
    quote: 'I went from 28% body fat to 14%. Marcus taught me how to eat without dieting and I actually enjoy training now.'
  },
  {
    name: 'Sarah W.',
    age: 29,
    duration: '12 weeks',
    metric: 'Gained 5 kg lean muscle',
    metricIcon: <TrendingUp className="h-4 w-4" />,
    quote: 'Before IronPath I was intimidated by the weight room. Now I deadlift 110 kg and feel stronger than ever.'
  },
  {
    name: 'James K.',
    age: 42,
    duration: '20 weeks',
    metric: 'Deadlift: 60 kg → 160 kg',
    metricIcon: <TrendingUp className="h-4 w-4" />,
    quote: 'Chronic back pain for 10 years. Marcus rebuilt my movement patterns from scratch. I\'m pain-free and lifting heavy.'
  }
];

export function Transformations() {
  return (
    <section id="transformations" className="bg-iron-950 py-24 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Real Results</span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Client Transformations</h2>
          <p className="mt-4 text-iron-400">Numbers don&apos;t lie. Here&apos;s what&apos;s possible when you show up consistently.</p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {transformations.map((t) => (
            <div key={t.name}
              className="group rounded-2xl border border-iron-800 bg-iron-900/60 p-8 backdrop-blur transition hover:-translate-y-2 hover:border-forge-500/30">
              {/* Before/After visual */}
              <div className="flex items-center gap-3 rounded-xl bg-iron-950/80 p-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-iron-800 text-iron-500 text-xs font-medium">
                  Before
                </div>
                <ArrowDown className="h-5 w-5 text-forge-500" />
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-forge-500/10 text-forge-400 text-xs font-medium">
                  After
                </div>
                <div className="ml-auto rounded-full bg-forge-500/10 px-3 py-1 text-xs font-semibold text-forge-400">
                  {t.duration}
                </div>
              </div>

              {/* Metric */}
              <div className="mt-5 flex items-center gap-2 text-lg font-bold text-forge-400">
                {t.metricIcon}
                {t.metric}
              </div>

              {/* Quote */}
              <blockquote className="mt-3 text-sm leading-relaxed text-iron-300">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Name */}
              <div className="mt-5 border-t border-iron-800 pt-4">
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-iron-500">Age {t.age} · {t.duration} program</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
