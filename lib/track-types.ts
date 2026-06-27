// Shared, client-safe type for the public trip view. No secrets, no env — safe
// to import from client components. The actual Supabase call lives in
// lib/track.ts (server-only).

export type SharedRide = {
  status: string;
  pickup_address: string | null;
  drop_address: string | null;
  pickup_lat: number | null;
  pickup_lng: number | null;
  drop_lat: number | null;
  drop_lng: number | null;
  driver_name: string | null;
  vehicle_type: string | null;
  vehicle_reg_no: string | null;
  vehicle_model: string | null;
  vehicle_color: string | null;
  driver_lat: number | null;
  driver_lng: number | null;
  driver_heading: number | null;
  driver_updated_at: string | null;
};
