import { NextResponse } from 'next/server';

interface BookingBody {
  name: string;
  email: string;
  phone: string;
  date: string;
  goal: string;
  note?: string;
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as BookingBody | null;

  if (!body) {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { name, email, phone, date, goal } = body;

  if (!name?.trim() || !email?.trim() || !phone?.trim() || !date?.trim() || !goal?.trim()) {
    return NextResponse.json(
      { error: 'Please fill in all required fields.' },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return NextResponse.json(
      { error: 'Please enter a valid email address.' },
      { status: 400 }
    );
  }

  console.log('[Booking]', {
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    date: date.trim(),
    goal: goal.trim(),
    note: body.note?.trim() || '',
    createdAt: new Date().toISOString()
  });

  await new Promise((resolve) => setTimeout(resolve, 300));

  return NextResponse.json({
    success: true,
    message: `Thanks, ${name.trim()}! Your free consultation request has been received. We'll confirm your session time via email within 2 hours.`
  });
}
