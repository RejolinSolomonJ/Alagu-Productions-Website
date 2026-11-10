import { NextRequest, NextResponse } from 'next/server';
import { readCMS, writeCMS } from '@/lib/store/cms-store';

export async function GET() {
  const cms = readCMS();
  return NextResponse.json({ enquiries: cms.enquiries });
}

export async function PATCH(req: NextRequest) {
  try {
    const { id, status } = await req.json();
    const cms = readCMS();
    const enquiry = cms.enquiries.find((e) => e.id === id);

    if (!enquiry) {
      return NextResponse.json({ error: 'Enquiry not found' }, { status: 404 });
    }

    enquiry.status = status;
    writeCMS(cms);

    return NextResponse.json({ success: true, enquiry });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

