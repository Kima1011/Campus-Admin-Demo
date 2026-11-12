import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const format = searchParams.get('format') || 'json';

    const colleges = await db.college.findMany({
      include: {
        courses: true,
        placements: true,
        cutoffs: true,
        rankings: true,
        reviews: true,
        faqs: true
      }
    });

    if (format === 'csv') {
      const headers = ['ID', 'Slug', 'Name', 'ShortName', 'Type', 'City', 'State', 'NIRF Rank', 'Avg Package (LPA)', 'Highest Package (LPA)', 'Verified Source'];
      const rows = colleges.map((c) => [
        `"${c.id}"`,
        `"${c.slug}"`,
        `"${c.name.replace(/"/g, '""')}"`,
        `"${c.shortName}"`,
        `"${c.collegeType}"`,
        `"${c.city}"`,
        `"${c.state}"`,
        c.nirfRank || '',
        c.averagePackage || '',
        c.highestPackage || '',
        `"${(c.sourceReference || '').replace(/"/g, '""')}"`
      ]);

      const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');

      return new NextResponse(csvContent, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="campus_admin_colleges_${Date.now()}.csv"`
        }
      });
    }

    return NextResponse.json({
      exportedAt: new Date().toISOString(),
      count: colleges.length,
      colleges
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Export failed' }, { status: 500 });
  }
}
