import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, city, courseInterested, message, collegeSlug } = body;

    let collegeId = null;
    if (collegeSlug) {
      const college = await db.college.findUnique({
        where: { slug: collegeSlug },
        select: { id: true }
      });
      if (college) collegeId = college.id;
    }

    const enquiry = await db.enquiry.create({
      data: {
        name: name || 'Prospective Student',
        email: email || 'student@example.com',
        phone: phone || '',
        city: city || 'Not specified',
        courseInterested: courseInterested || 'Undergraduate',
        message: message || '',
        collegeId: collegeId,
        status: 'PENDING'
      }
    });

    return NextResponse.json({ success: true, enquiry });
  } catch (error) {
    console.error('Error creating enquiry:', error);
    return NextResponse.json({ error: 'Failed to record enquiry' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const enquiries = await db.enquiry.findMany({
      orderBy: { createdAt: 'desc' },
      include: { college: { select: { name: true, slug: true } } }
    });
    return NextResponse.json({ enquiries });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch enquiries' }, { status: 500 });
  }
}

