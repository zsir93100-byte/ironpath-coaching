import { User, Monitor, Users, Dumbbell, Apple } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const services = [
  {
    icon: <User className="h-6 w-6" />,
    title: '1-on-1 Personal Training',
    subtitle: 'In-Person · Shanghai Studio',
    description: 'Fully customized training sessions with hands-on form correction, progressive overload programming, and real-time feedback. Includes a complimentary movement assessment in your first session.',
    price: '¥500 / session',
    highlight: 'Most Popular'
  },
  {
    icon: <Monitor className="h-6 w-6" />,
    title: 'Online Coaching',
    subtitle: 'Remote · Worldwide',
    description: 'Custom program delivered via training app with video demos, weekly check-ins, form review, and direct chat access. Train on your schedule — I keep you accountable.',
    price: '¥1,800 / month',
    highlight: 'Flexible'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Small Group Training',
    subtitle: '2-4 People · Shanghai Studio',
    description: 'Train with friends or colleagues at a reduced per-person rate. Semi-customized programming with the same attention to form and safety as 1-on-1 sessions.',
    price: '¥300 / person',
    highlight: 'Best Value'
  },
  {
    icon: <Dumbbell className="h-6 w-6" />,
    title: 'Program Design Only',
    subtitle: 'One-Time Purchase',
    description: 'Get a detailed 8-week training program tailored to your goals, equipment access, and schedule. Includes a 60-minute video consultation to dial in your technique.',
    price: '¥800 one-time',
    highlight: 'Self-Guided'
  },
  {
    icon: <Apple className="h-6 w-6" />,
    title: 'Nutrition Coaching',
    subtitle: 'Add-On or Standalone',
    description: 'Macro-based flexible dieting approach. No banned foods — learn to eat for your goals while enjoying life. Includes meal planning templates and weekly nutrition audits.',
    price: '¥600 / month',
    highlight: 'Add-On'
  }
];

export function Services() {
  return (
    <section id="services" className="bg-iron-50 py-24 dark:bg-iron-900/50">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Services</span>
          <h2 className="section-title">Coaching Built Around Your Life</h2>
          <p className="mt-4 text-iron-500 dark:text-iron-400">
            Every program starts with a free consultation to understand your goals, history, and constraints.
            No cookie-cutter plans — ever.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="group relative flex flex-col">
              {s.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-forge-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-iron">
                  {s.highlight}
                </span>
              )}
              <CardContent className="flex flex-1 flex-col p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forge-100 text-forge-600 transition group-hover:bg-forge-500 group-hover:text-white dark:bg-forge-500/10 dark:text-forge-400">
                  {s.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold text-iron-900 dark:text-iron-100">{s.title}</h3>
                <p className="text-sm font-medium text-forge-600 dark:text-forge-400">{s.subtitle}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-iron-500 dark:text-iron-400">{s.description}</p>
                <p className="mt-5 text-xl font-extrabold text-iron-900 dark:text-iron-100">{s.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
