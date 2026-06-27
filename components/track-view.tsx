'use client';

import { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import type { Map as LeafletMap, Marker } from 'leaflet';

import type { SharedRide } from '@/lib/track-types';
import { Logo } from '@/components/logo';

const POLL_MS = 5000;

function statusLabel(status: string): string {
  switch (status) {
    case 'accepted':
      return 'Driver on the way to pickup';
    case 'arrived':
      return 'Driver has arrived at pickup';
    case 'in_progress':
      return 'On the way to destination';
    case 'airport_fee_confirmation':
      return 'Confirming airport pickup';
    case 'completed':
      return 'Trip completed';
    case 'cancelled':
      return 'Trip cancelled';
    default:
      return 'Trip update';
  }
}

export function TrackView({
  token,
  initial,
}: {
  token: string;
  initial: SharedRide | null;
}) {
  const [ride, setRide] = useState<SharedRide | null>(initial);
  const mapEl = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const driverMarker = useRef<Marker | null>(null);
  const fitted = useRef(false);

  // Poll our own same-origin endpoint — never Supabase directly.
  useEffect(() => {
    let active = true;
    const tick = async () => {
      try {
        const res = await fetch(`/t/${token}/live`, { cache: 'no-store' });
        if (!res.ok) return;
        const data = (await res.json()) as SharedRide | null;
        if (active) setRide(data);
      } catch {
        // transient network error — keep the last good state
      }
    };
    const id = setInterval(tick, POLL_MS);
    return () => {
      active = false;
      clearInterval(id);
    };
  }, [token]);

  // Init + update the Leaflet map as data arrives.
  useEffect(() => {
    if (!ride || !mapEl.current) return;
    let cancelled = false;

    (async () => {
      const L = await import('leaflet');
      if (cancelled || !mapEl.current) return;

      if (!mapRef.current) {
        mapRef.current = L.map(mapEl.current, {
          zoomControl: true,
          attributionControl: true,
        });
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap',
        }).addTo(mapRef.current);
      }
      const map = mapRef.current;

      const icon = (color: string) =>
        L.divIcon({
          className: '',
          html: `<div style="width:18px;height:18px;border-radius:50%;background:${color};border:3px solid white;box-shadow:0 0 0 1px rgba(0,0,0,.3)"></div>`,
          iconSize: [18, 18],
          iconAnchor: [9, 9],
        });

      const pts: [number, number][] = [];
      if (ride.pickup_lat != null && ride.pickup_lng != null) {
        const p: [number, number] = [ride.pickup_lat, ride.pickup_lng];
        L.marker(p, { icon: icon('#22c55e') }).addTo(map);
        pts.push(p);
      }
      if (ride.drop_lat != null && ride.drop_lng != null) {
        const d: [number, number] = [ride.drop_lat, ride.drop_lng];
        L.marker(d, { icon: icon('#ef4444') }).addTo(map);
        pts.push(d);
      }
      if (ride.driver_lat != null && ride.driver_lng != null) {
        const dpos: [number, number] = [ride.driver_lat, ride.driver_lng];
        if (!driverMarker.current) {
          driverMarker.current = L.marker(dpos, {
            icon: icon('#38bdf8'),
            zIndexOffset: 1000,
          }).addTo(map);
        } else {
          driverMarker.current.setLatLng(dpos);
        }
        pts.push(dpos);
      }

      if (!fitted.current && pts.length > 0) {
        if (pts.length === 1) map.setView(pts[0], 15);
        else map.fitBounds(pts, { padding: [48, 48] });
        fitted.current = true;
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [ride]);

  const ended =
    ride && (ride.status === 'completed' || ride.status === 'cancelled');
  const notFound = ride === null;

  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <header className="flex items-center gap-2.5 border-b border-border px-4 py-3">
        <Logo className="size-8" />
        <div className="text-sm font-bold">Bandi · Live trip</div>
      </header>

      {/* Public-link consent/notice */}
      <div className="bg-muted/60 px-4 py-2 text-center text-xs text-muted-foreground">
        Anyone with this link can see this trip’s live location until it ends.
      </div>

      {notFound ? (
        <div className="flex flex-1 items-center justify-center p-8 text-center text-muted-foreground">
          This tracking link is invalid or has expired.
        </div>
      ) : (
        <>
          <div className="relative flex-1">
            <div ref={mapEl} className="absolute inset-0 z-0" />
          </div>

          <div className="space-y-3 border-t border-border bg-card p-4">
            <div className="text-base font-bold">
              {ride ? statusLabel(ride.status) : 'Loading…'}
            </div>
            {ride && !ended && ride.driver_name && (
              <div className="text-sm text-muted-foreground">
                {ride.driver_name}
                {ride.vehicle_model ? ` · ${ride.vehicle_model}` : ''}
                {ride.vehicle_color ? ` (${ride.vehicle_color})` : ''}
                {ride.vehicle_reg_no ? ` · ${ride.vehicle_reg_no}` : ''}
              </div>
            )}
            {ride?.drop_address && (
              <div className="text-sm">
                <span className="text-muted-foreground">To: </span>
                {ride.drop_address}
              </div>
            )}
            {ended && (
              <div className="text-sm text-muted-foreground">
                This trip has ended — live location is no longer shared.
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
