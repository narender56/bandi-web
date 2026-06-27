import { NextResponse } from 'next/server';

import { fetchSharedRide } from '@/lib/track';

// Same-origin live data for the tracking page. The browser polls this; the
// Supabase call happens here on the server, so no URL/key is ever shipped.
export const dynamic = 'force-dynamic';

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ token: string }> },
) {
  const { token } = await params;
  const ride = await fetchSharedRide(token);
  return NextResponse.json(ride, {
    headers: { 'Cache-Control': 'no-store' },
  });
}
