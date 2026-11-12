import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      collegeSlug,
      authorName,
      course,
      batchYear,
      ratingOverall,
      ratingFaculty,
      ratingInfra,
      ratingPlacement,
      title,
      pros,
      cons
    } = body;

    const college = await db.college.findUnique({
      where: { slug: collegeSlug },
      select: { id: true }
    });

    if (!college) {
      return NextResponse.json({ error: 'College not found' }, { status: 404 });
    }

    const review = await db.review.create({
      data: {
        collegeId: college.id,
        authorName: authorName || 'Verified Alum',
        course: course || 'B.Tech',
        batchYear: parseInt(batchYear) || 2024,
        ratingOverall: parseFloat(ratingOverall) || 4.5,
        ratingFaculty: parseFloat(ratingFaculty) || 4.5,
        ratingInfra: parseFloat(ratingInfra) || 4.5,
        ratingPlacement: parseFloat(ratingPlacement) || 4.5,
        title: title || 'Honest Review',
        pros: pros || 'Great campus life and faculty support.',
        cons: cons || 'Workload is substantial.',
        verified: true
      }
    });

    // Update review count on college
    await db.college.update({
      where: { id: college.id },
      data: {
        reviewCount: { increment: 1 }
      }
    });

    return NextResponse.json({ success: true, review });
  } catch (error) {
    console.error('Error submitting review:', error);
    return NextResponse.json({ error: 'Failed to record review' }, { status: 500 });
  }
}

