import type { Metadata } from 'next';

import { fetchSharedRide } from '@/lib/track';
import { TrackView } from '@/components/track-view';

// A shared live-location link — never index it.
export const metadata: Metadata = {
  title: 'Live trip · Bandi',
  robots: { index: false, follow: false },
};

export const dynamic = 'force-dynamic';

export default async function TrackPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  // Fetch the first frame on the server so the page renders with data and the
  // Supabase call never touches the browser. The client then polls /t/<t>/live.
  const initial = await fetchSharedRide(token);
  return <TrackView token={token} initial={initial} />;
}
