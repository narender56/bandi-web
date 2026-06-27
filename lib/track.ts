import 'server-only';

import type { SharedRide } from './track-types';

// Server-only. Calls the anon-granted `get_shared_ride` RPC (migration 0043).
// Uses NON-public env so the Supabase URL/key never reach the browser — the
// client polls our own /t/[token]/live route instead, which calls this.

const SUPABASE_URL = process.env.SUPABASE_URL ?? '';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY ?? '';

export async function fetchSharedRide(token: string): Promise<SharedRide | null> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return null;
  if (!/^[0-9a-fA-F-]{36}$/.test(token)) return null;

  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/get_shared_ride`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({ p_token: token }),
    cache: 'no-store',
  });
  if (!res.ok) return null;
  const data = (await res.json()) as SharedRide | null;
  return data && typeof data === 'object' ? data : null;
}
