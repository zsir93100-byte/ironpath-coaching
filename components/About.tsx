import { Target, Heart, Shield, Zap } from 'lucide-react';

const highlights = [
  { icon: <Target className="h-5 w-5" />, label: 'Evidence-Based', desc: 'Every program is built on sports science, not fads. I track data, adjust weekly, and deliver predictable results.' },
  { icon: <Heart className="h-5 w-5" />, label: 'Holistic Approach', desc: 'Training, nutrition, sleep, and stress management — because lasting change requires looking at the full picture.' },
  { icon: <Shield className="h-5 w-5" />, label: 'Injury-Smart', desc: 'Certified in corrective exercise. I work around injuries and build mobility so you get stronger safely.' },
  { icon: <Zap className="h-5 w-5" />, label: 'Real Accountability', desc: 'Weekly check-ins, form reviews, and direct chat access. No ghosting — I\'m in this with you.' }
];

export function About() {
  return (
    <section id="about" className="bg-white py-24 dark:bg-iron-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <div>
            <span className="section-eyebrow">About Me</span>
            <h2 className="section-title">I Don&apos;t Just Train Athletes — I Build Stronger Humans</h2>
            <div className="mt-8 space-y-5 text-iron-600 dark:text-iron-300 leading-relaxed">
              <p>
                My name is Marcus Zhao. Eight years ago, I was an overweight software engineer who couldn&apos;t do a single pull-up. I spent years learning — through trial, error, and eventually formal certification — what actually works for busy professionals who don&apos;t live in the gym.
              </p>
              <p>
                Today I hold certifications from NSCA (CSCS), NASM (CPT &amp; CES), and Precision Nutrition (PN1). I&apos;ve coached over 200 clients — from complete beginners to competitive powerlifters — at my private studio in Shanghai and online.
              </p>
              <p>
                My philosophy is simple: <strong className="text-iron-900 dark:text-iron-100">train with intention, eat with flexibility, and build habits that outlast any 12-week program.</strong>
              </p>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((h) => (
              <div key={h.label}
                className="rounded-2xl border border-iron-200 bg-iron-50/80 p-6 transition hover:-translate-y-1 hover:shadow-card dark:border-iron-800 dark:bg-iron-900/60">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forge-100 text-forge-600 dark:bg-forge-500/10 dark:text-forge-400">
                  {h.icon}
                </div>
                <h3 className="mt-4 font-semibold text-iron-900 dark:text-iron-100">{h.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-iron-500 dark:text-iron-400">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
