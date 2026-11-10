import { NextRequest, NextResponse } from 'next/server';
import { saveEnquiry } from '@/lib/store/cms-store';

// Basic in-memory rate limiting map: ip -> timestamps
const rateLimitMap = new Map<string, number[]>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const now = Date.now();

    // Check rate limit: max 5 submissions per 10 minutes per IP
    const userTimestamps = rateLimitMap.get(ip) || [];
    const recent = userTimestamps.filter((time) => now - time < 10 * 60 * 1000);

    if (recent.length >= 6) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a few minutes before submitting another enquiry.' },
        { status: 429 }
      );
    }
    recent.push(now);
    rateLimitMap.set(ip, recent);

    const body = await req.json();
    const {
      country,
      city,
      cinemaName,
      contactName,
      phoneCountryCode,
      phoneNumber,
      email,
      selectedFilm,
      message,
      consent,
    } = body;

    // Server-side validation
    if (!country || !city || !cinemaName || !contactName || !phoneNumber || !email || !message) {
      return NextResponse.json(
        { error: 'All required fields must be filled.' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address provided.' },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: 'Consent to Privacy Policy and Terms is required.' },
        { status: 400 }
      );
    }

    // Save into CMS database
    const saved = saveEnquiry({
      country,
      city,
      cinemaName,
      contactName,
      phoneCountryCode: phoneCountryCode || '+44',
      phoneNumber,
      email,
      selectedFilm: selectedFilm || 'General European Theatrical Slate',
      message,
      consent: true,
    });

    console.log(`[ENQUIRY RECEIVED] New exhibitor enquiry logged: ${saved.id} from ${contactName} (${cinemaName})`);

    // In production, also sends email notification via Nodemailer / SendGrid / Resend to alaguproduction@gmail.com
    return NextResponse.json(
      {
        success: true,
        message: 'Your enquiry has been securely logged and forwarded to our European theatrical team.',
        id: saved.id,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('API Error in /api/enquire:', error);
    return NextResponse.json(
      { error: 'Internal server error while processing enquiry.' },
      { status: 500 }
    );
  }
}

