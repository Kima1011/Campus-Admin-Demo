import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('q');
    const stream = searchParams.get('stream');
    const state = searchParams.get('state');
    const collegeType = searchParams.get('type');
    const sort = searchParams.get('sort') || 'nirf';
    const limit = parseInt(searchParams.get('limit') || '50');

    // Build Prisma query filter
    const where: any = {};

    if (q) {
      where.OR = [
        { name: { contains: q } },
        { shortName: { contains: q } },
        { city: { contains: q } },
        { state: { contains: q } },
        { collegeType: { contains: q } },
        { topRecruiters: { contains: q } },
      ];
    }

    if (stream && stream !== 'All') {
      where.courses = {
        some: {
          stream: { contains: stream }
        }
      };
    }

    if (state && state !== 'All') {
      where.state = state;
    }

    if (collegeType && collegeType !== 'All') {
      where.collegeType = collegeType;
    }

    // Sorting
    let orderBy: any = { nirfRank: 'asc' };
    if (sort === 'package') {
      orderBy = { averagePackage: 'desc' };
    } else if (sort === 'rating') {
      orderBy = { ratingOverall: 'desc' };
    } else if (sort === 'name') {
      orderBy = { name: 'asc' };
    }

    const colleges = await db.college.findMany({
      where,
      orderBy,
      take: limit,
      include: {
        courses: true,
        rankings: true,
        placements: {
          take: 1,
          orderBy: { year: 'desc' }
        }
      }
    });

    return NextResponse.json({ colleges, total: colleges.length });
  } catch (error) {
    console.error('Error fetching colleges:', error);
    return NextResponse.json({ error: 'Failed to fetch colleges' }, { status: 500 });
  }
}
