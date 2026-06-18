import { ArrowRight, Award, Users, TrendingUp } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[95vh] items-center overflow-hidden bg-iron-950 dark:bg-black">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-forge-500/10 to-transparent" />
        <div className="absolute -left-32 top-0 h-[700px] w-[700px] rounded-full bg-forge-600/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-forge-500/5 blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Text */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-forge-500/30 bg-forge-500/10 px-4 py-2 text-sm font-medium text-forge-400">
              <Award className="h-4 w-4" />
              Certified Strength &amp; Conditioning Specialist
            </div>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Transform Your Body,{' '}
              <span className="bg-gradient-to-r from-forge-400 via-forge-500 to-forge-600 bg-clip-text text-transparent">
                Transform Your Life
              </span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-iron-300">
              I help busy professionals build strength, shed body fat, and develop unshakeable
              confidence — without spending hours in the gym or giving up the foods they love.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a href="#booking" className="inline-flex items-center gap-2 rounded-lg bg-forge-500 px-8 py-4 text-lg font-bold text-white transition hover:bg-forge-600 shadow-iron">
                Book a Free Consultation
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-lg border-2 border-iron-700 px-8 py-4 text-lg font-bold text-iron-200 transition hover:border-iron-500 hover:bg-iron-900/50">
                Explore Services
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 pt-4 text-sm text-iron-400">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-forge-500" />
                <span>200+ Clients Transformed</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-forge-500" />
                <span>8+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Coach image placeholder */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-forge-500/20 to-forge-600/5 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-iron-800 bg-iron-900">
              <img
                src="/coach-marcus.jpg"
                alt="Marcus Zhao — Head Coach & Founder of IronPath Coaching"
                className="aspect-[3/4] w-full object-cover"
                loading="eager"
              />
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-iron-950/95 via-iron-950/40 to-transparent p-6 pt-20">
                <p className="text-xl font-bold text-white">Marcus Zhao</p>
                <p className="text-sm text-forge-400">Head Coach &amp; Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
