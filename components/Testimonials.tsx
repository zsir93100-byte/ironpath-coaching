import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'I\'ve tried five different trainers before Marcus. He\'s the only one who actually listened to my goals instead of putting me on a cookie-cutter program. Down 18 kg and I\'ve kept it off for over a year.',
    name: 'Chen Wei',
    role: 'Software Engineer',
    stars: 5
  },
  {
    quote: 'As a new mom, I thought I\'d never feel strong again. Marcus helped me rebuild from the ground up — pelvic floor safe, no pressure, and genuinely enjoyable sessions. I feel like myself again.',
    name: 'Emily Huang',
    role: 'Marketing Director',
    stars: 5
  },
  {
    quote: 'The online coaching is a game-changer. Video form checks mean I\'m never guessing at the gym. The weekly accountability keeps me honest, and the programming is the best I\'ve ever run.',
    name: 'Alex Tan',
    role: 'Remote Worker · Singapore',
    stars: 5
  },
  {
    quote: 'I came to Marcus with a disc herniation and chronic pain. He worked with my physio, rebuilt my deadlift from a PVC pipe to 2x bodyweight, and taught me how to train for longevity.',
    name: 'Michael Li',
    role: 'Finance Professional',
    stars: 5
  }
];

export function Testimonials() {
  return (
    <section className="bg-iron-50 py-24 dark:bg-iron-900/50">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="section-title">What Clients Say</h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name}
              className="rounded-2xl border border-iron-200 bg-white p-8 shadow-card transition hover:-translate-y-1 dark:border-iron-800 dark:bg-iron-950/80">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-forge-500 text-forge-500" />
                ))}
              </div>
              {/* Quote */}
              <blockquote className="mt-4 text-sm leading-relaxed text-iron-600 dark:text-iron-300">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              {/* Author */}
              <div className="mt-6 border-t border-iron-100 pt-4 dark:border-iron-800">
                <p className="font-semibold text-iron-900 dark:text-iron-100">{t.name}</p>
                <p className="text-sm text-iron-500 dark:text-iron-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
