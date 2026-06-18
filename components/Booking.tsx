'use client';

import { useState } from 'react';
import { Calendar, Clock, User, Send, CheckCircle, AlertCircle, Dumbbell } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function Booking() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', goal: '', note: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  function update(key: string, value: string) { setForm((prev) => ({ ...prev, [key]: value })); }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setError('');
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) { const data = await res.json(); throw new Error(data.error || 'Something went wrong.'); }
      setStatus('success');
      setForm({ name: '', email: '', phone: '', date: '', goal: '', note: '' });
    } catch (err: any) {
      setError(err.message || 'Unable to submit. Please try again.');
      setStatus('error');
    }
  }

  return (
    <section id="booking" className="relative overflow-hidden bg-iron-950 py-24 dark:bg-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-0 h-[600px] w-[600px] rounded-full bg-forge-500/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-forge-600/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Get Started</span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Book Your Free Consultation</h2>
          <p className="mt-4 text-iron-400">
            30-minute session to discuss your goals, assess your starting point, and map out a plan.
            No pressure, no commitment — just clarity on your next step.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-12 max-w-2xl rounded-2xl border border-iron-800 bg-iron-900/50 p-8 backdrop-blur shadow-card">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="booking-name" className="text-sm font-medium text-iron-200">Full Name <span className="text-forge-500">*</span></label>
              <Input id="booking-name" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Your full name" required className="border-iron-700 bg-iron-950/60 text-iron-100 placeholder:text-iron-600 focus:border-forge-500 focus:ring-forge-500/20" />
            </div>
            <div className="space-y-2">
              <label htmlFor="booking-email" className="text-sm font-medium text-iron-200">Email <span className="text-forge-500">*</span></label>
              <Input id="booking-email" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@example.com" required className="border-iron-700 bg-iron-950/60 text-iron-100 placeholder:text-iron-600 focus:border-forge-500 focus:ring-forge-500/20" />
            </div>
            <div className="space-y-2">
              <label htmlFor="booking-phone" className="text-sm font-medium text-iron-200">Phone <span className="text-forge-500">*</span></label>
              <Input id="booking-phone" type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+86 138-xxxx-xxxx" required className="border-iron-700 bg-iron-950/60 text-iron-100 placeholder:text-iron-600 focus:border-forge-500 focus:ring-forge-500/20" />
            </div>
            <div className="space-y-2">
              <label htmlFor="booking-date" className="flex items-center gap-2 text-sm font-medium text-iron-200"><Calendar className="h-4 w-4 text-forge-500" /> Preferred Date <span className="text-forge-500">*</span></label>
              <Input id="booking-date" type="date" value={form.date} onChange={(e) => update('date', e.target.value)} required className="border-iron-700 bg-iron-950/60 text-iron-100 [color-scheme:dark] focus:border-forge-500 focus:ring-forge-500/20" />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <label htmlFor="booking-goal" className="flex items-center gap-2 text-sm font-medium text-iron-200"><Dumbbell className="h-4 w-4 text-forge-500" /> Primary Goal <span className="text-forge-500">*</span></label>
              <select id="booking-goal" value={form.goal} onChange={(e) => update('goal', e.target.value)} required className="flex w-full rounded-xl border border-iron-700 bg-iron-950/60 px-4 py-3 text-iron-100 outline-none transition focus:border-forge-500 focus:ring-2 focus:ring-forge-500/20">
                <option value="">Select your primary goal</option>
                <option value="fat-loss">Fat Loss &amp; Body Recomposition</option>
                <option value="muscle">Build Muscle &amp; Strength</option>
                <option value="athletic">Athletic Performance</option>
                <option value="rehab">Injury Rehab &amp; Mobility</option>
                <option value="general">General Health &amp; Longevity</option>
                <option value="other">Other (describe below)</option>
              </select>
            </div>
            <div className="space-y-2 sm:col-span-2">
              <label htmlFor="booking-note" className="flex items-center gap-2 text-sm font-medium text-iron-200"><User className="h-4 w-4 text-forge-500" /> Anything else?</label>
              <Textarea id="booking-note" value={form.note} onChange={(e) => update('note', e.target.value)} placeholder="Injuries, experience level, schedule constraints, specific questions..." rows={3} className="border-iron-700 bg-iron-950/60 text-iron-100 placeholder:text-iron-600 focus:border-forge-500 focus:ring-forge-500/20" />
            </div>
          </div>

          {status === 'success' && (
            <div className="mt-6 flex items-center gap-2 rounded-xl bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
              <CheckCircle className="h-4 w-4" /> Booking received! Check your email for confirmation within 2 hours.
            </div>
          )}
          {status === 'error' && (
            <div className="mt-6 flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-300">
              <AlertCircle className="h-4 w-4" /> {error}
            </div>
          )}

          <Button type="submit" disabled={status === 'loading'} className="mt-8 w-full bg-forge-500 text-white hover:bg-forge-600 h-14 text-lg font-bold">
            {status === 'loading' ? 'Submitting...' : <><Send className="mr-2 h-5 w-5" /> Book My Free Consultation</>}
          </Button>
          <p className="mt-4 text-center text-xs text-iron-600">Free 30-minute session. No commitment required.</p>
        </form>
      </div>
    </section>
  );
}
