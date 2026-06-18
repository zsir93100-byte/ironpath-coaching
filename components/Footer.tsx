import { Dumbbell } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-iron-800 bg-iron-950 py-16 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#hero" className="flex items-center gap-2 text-xl font-bold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-forge-500 text-white">
                <Dumbbell className="h-5 w-5" />
              </span>
              IronPath
            </a>
            <p className="mt-4 text-sm leading-relaxed text-iron-400">
              Evidence-based personal training and online coaching. Helping busy professionals build stronger bodies and better habits since 2018.
            </p>
            <p className="mt-6 text-xs text-iron-600">© {new Date().getFullYear()} IronPath Coaching. All rights reserved.</p>
          </div>

          {[{
            title: 'Services', links: ['Personal Training', 'Online Coaching', 'Group Training', 'Nutrition Coaching', 'Program Design']
          }, {
            title: 'Company', links: ['About Marcus', 'Success Stories', 'Blog', 'FAQ', 'Contact']
          }, {
            title: 'Connect', links: ['WeChat', 'Xiaohongshu', 'Instagram', 'YouTube', 'Email']
          }].map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-iron-200">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}><a href="#" className="text-sm text-iron-500 transition hover:text-forge-400">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-16 border-t border-iron-800 pt-8 text-center">
          <p className="text-xs text-iron-600">
            * This is a fictional demo project for portfolio purposes. Not a real coaching business.
          </p>
          <p className="mt-2 text-xs text-iron-600">
            Built with Next.js 15 · Tailwind CSS · shadcn/ui. Coach photos are placeholders.
          </p>
        </div>
      </div>
    </footer>
  );
}
