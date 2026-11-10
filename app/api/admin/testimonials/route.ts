import { NextRequest, NextResponse } from 'next/server';
import { readCMS, writeCMS } from '@/lib/store/cms-store';

export async function GET() {
  const cms = readCMS();
  return NextResponse.json({ testimonials: cms.testimonials });
}

export async function PATCH(req: NextRequest) {
  try {
    const { id, isApproved } = await req.json();
    const cms = readCMS();
    const item = cms.testimonials.find((t) => t.id === id);

    if (!item) {
      return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });
    }

    item.isApproved = Boolean(isApproved);
    writeCMS(cms);

    return NextResponse.json({ success: true, testimonial: item });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

