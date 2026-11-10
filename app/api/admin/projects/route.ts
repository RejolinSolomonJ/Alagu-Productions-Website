import { NextRequest, NextResponse } from 'next/server';
import { readCMS, writeCMS } from '@/lib/store/cms-store';
import { ExhibitionProject } from '@/lib/types';

export async function GET() {
  const cms = readCMS();
  return NextResponse.json({ projects: cms.projects });
}

export async function POST(req: NextRequest) {
  try {
    const data: Partial<ExhibitionProject> = await req.json();
    const cms = readCMS();

    const newProject: ExhibitionProject = {
      id: `proj-${Date.now()}`,
      slug: (data.filmTitle || 'project').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      filmTitle: data.filmTitle || 'Theatrical Project',
      country: data.country || 'Europe',
      countryCode: data.countryCode || 'EU',
      city: data.city || 'Metropolitan Hub',
      venue: data.venue || 'Partner Theatres',
      year: data.year || new Date().getFullYear(),
      dateString: data.dateString || 'Current Season',
      approvedHighlights: data.approvedHighlights || 'Project details to be confirmed.',
      status: data.status || 'Current',
      detailsConfirmed: Boolean(data.detailsConfirmed),
      accentGradient: 'from-amber-950 to-zinc-900',
    };

    cms.projects.unshift(newProject);
    writeCMS(cms);

    return NextResponse.json({ success: true, project: newProject }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const data: ExhibitionProject = await req.json();
    const cms = readCMS();

    const idx = cms.projects.findIndex((p) => p.id === data.id);
    if (idx === -1) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    cms.projects[idx] = { ...cms.projects[idx], ...data };
    writeCMS(cms);

    return NextResponse.json({ success: true, project: cms.projects[idx] });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    const cms = readCMS();

    cms.projects = cms.projects.filter((p) => p.id !== id);
    writeCMS(cms);

    return NextResponse.json({ success: true, id });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

