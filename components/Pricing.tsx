import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Starter',
    price: '¥1,800',
    period: '/ month',
    description: 'Online coaching with weekly accountability — perfect for self-motivated individuals.',
    popular: false,
    features: [
      'Custom training program (updated monthly)',
      'Weekly check-in via app',
      'Form review (2 videos / week)',
      'Nutrition guidelines & meal templates',
      'Direct chat access (24h response)',
      'Progress tracking dashboard'
    ],
    cta: 'Start Online Coaching'
  },
  {
    name: 'Premium',
    price: '¥3,200',
    period: '/ month',
    description: 'In-person training with full support — the fastest path to results. Our most popular plan.',
    popular: true,
    features: [
      '3x 1-on-1 sessions per week (studio)',
      'Custom training + nutrition program',
      'Weekly body composition check',
      'Unlimited form review videos',
      'Priority chat access (2h response)',
      'Mobility assessment & corrective plan',
      'Free IronPath training apparel'
    ],
    cta: 'Get Premium Coaching'
  },
  {
    name: 'Elite',
    price: '¥5,000',
    period: '/ month',
    description: 'For serious athletes and those who want unlimited access and the highest level of support.',
    popular: false,
    features: [
      'Unlimited 1-on-1 sessions',
      'Elite competition programming',
      'Daily nutrition audit & adjustments',
      'Real-time chat support',
      'Monthly DEXA / InBody scan',
      'Supplement & PED-free guidance',
      'Competition prep & peak week',
      '24/7 emergency coach access'
    ],
    cta: 'Apply for Elite'
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 dark:bg-iron-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Pricing</span>
          <h2 className="section-title">Invest in Yourself</h2>
          <p className="mt-4 text-iron-500 dark:text-iron-400">
            Every plan starts with a free 30-minute consultation. No commitment — we only work together if it&apos;s the right fit.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'relative flex flex-col rounded-2xl border p-8 transition hover:-translate-y-1',
                plan.popular
                  ? 'border-forge-400 bg-white shadow-iron dark:border-forge-500 dark:bg-iron-900/60'
                  : 'border-iron-200 bg-white shadow-card dark:border-iron-800 dark:bg-iron-900/60'
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-forge-500 px-6 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-iron">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-bold text-iron-900 dark:text-iron-100">{plan.name}</h3>
              <p className="mt-2 text-sm text-iron-500 dark:text-iron-400">{plan.description}</p>

              <div className="mt-6">
                <span className="text-4xl font-extrabold text-iron-900 dark:text-iron-100">{plan.price}</span>
                <span className="text-iron-500 dark:text-iron-400">{plan.period}</span>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-iron-600 dark:text-iron-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-forge-500" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className={cn(
                  'mt-8 block rounded-xl px-6 py-3.5 text-center text-sm font-bold transition',
                  plan.popular
                    ? 'bg-forge-500 text-white hover:bg-forge-600 shadow-iron'
                    : 'border-2 border-iron-300 text-iron-800 hover:border-iron-500 hover:bg-iron-50 dark:border-iron-700 dark:text-iron-200 dark:hover:bg-iron-900'
                )}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
