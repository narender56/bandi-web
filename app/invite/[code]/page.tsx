import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Copy,
  Download,
  Gift,
  ShieldCheck,
} from 'lucide-react';

import { AppDownloadButtons } from '@/components/app-download-buttons';
import { PublicShell } from '@/components/public-shell';
import { siteConfig } from '@/lib/site-config';
import { CopyButton } from '@/components/copy-button';

export const dynamic = 'force-dynamic';

const SUPABASE_URL =
  process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

type InviteDriver = {
  full_name: string | null;
  invite_code: string | null;
};

function normalizeCode(value: string) {
  return value
    .replace(/[^a-zA-Z0-9]/g, '')
    .toUpperCase()
    .slice(0, 24);
}

async function findInviteDriver(code: string): Promise<InviteDriver | null> {
  if (!SUPABASE_URL || !SERVICE_KEY || !code) return null;

  const params = new URLSearchParams({
    select: 'full_name,invite_code',
    invite_code: `eq.${code}`,
    is_approved: 'eq.true',
    deactivated_at: 'is.null',
    limit: '1',
  });
  const response = await fetch(`${SUPABASE_URL}/rest/v1/drivers?${params}`, {
    headers: {
      apikey: SERVICE_KEY,
      authorization: `Bearer ${SERVICE_KEY}`,
    },
    cache: 'no-store',
  });

  if (!response.ok) return null;
  const rows = (await response.json()) as InviteDriver[];
  return rows[0] ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ code: string }>;
}): Promise<Metadata> {
  const code = normalizeCode((await params).code);
  return {
    title: `Join ${siteConfig.brandName} with invite code ${code}`,
    description:
      'Install the Bandi Rider app and enter this driver invite code during signup.',
    alternates: {
      canonical: `/invite/${code}`,
    },
    openGraph: {
      title: `Join ${siteConfig.brandName}`,
      description: `Use invite code ${code} when you sign up in the Bandi Rider app.`,
      images: ['/bandi-app-icon.png'],
    },
  };
}

export default async function InvitePage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const code = normalizeCode((await params).code);
  const driver = await findInviteDriver(code);
  const driverName = driver?.full_name?.trim();

  return (
    <PublicShell locale="en">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute -left-28 top-16 h-72 w-72 rounded-full bg-sky-400/25 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-white/10 px-4 py-2 text-sm font-black text-sky-100">
              <Gift className="size-4" />
              Driver invite
            </div>
            <h1 className="mt-6 max-w-3xl text-balance text-5xl font-black tracking-[-0.05em] md:text-7xl">
              Ride with Bandi. Help your driver earn a free day.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-300">
              Install the Bandi Rider app, create your account, and enter this
              invite code during signup. Your rides still work normally, and the
              driver who invited you gets one Bandi subscription day free.
            </p>

            <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl shadow-sky-950/30 backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-200">
                Your invite code
              </p>
              <div className="mt-3 flex flex-col gap-3 rounded-3xl bg-white p-4 text-slate-950 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-mono text-4xl font-black tracking-[0.18em]">
                    {code || 'BANDI'}
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-500">
                    {driverName
                      ? `Invited by ${driverName}`
                      : 'Enter this code in the Rider app signup screen'}
                  </p>
                </div>
                <CopyButton text={code || 'BANDI'} />
              </div>
            </div>

            <AppDownloadButtons
              androidEyebrow="Get it on"
              androidLabel="Google Play"
              className="mt-8"
              iosEyebrow="Download on the"
              iosLabel="App Store"
            />
          </div>

          <div className="mx-auto w-full max-w-sm rounded-[2.3rem] border border-white/10 bg-white p-5 text-slate-950 shadow-2xl shadow-sky-950/40">
            <div className="rounded-[1.8rem] bg-slate-50 p-5">
              <div className="flex items-center justify-between">
                <Image
                  src="/bandi-logo.png"
                  alt="Bandi logo"
                  width={52}
                  height={52}
                  className="rounded-2xl"
                />
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">
                  Rider app
                </span>
              </div>
              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: Download,
                    title: 'Install Bandi Rider',
                    text: 'Use the iOS or Android button on this page.',
                  },
                  {
                    icon: BadgeCheck,
                    title: 'Sign up with OTP',
                    text: 'Enter your phone number and verify your account.',
                  },
                  {
                    icon: Gift,
                    title: 'Enter driver code',
                    text: code
                      ? `Use ${code} on the profile setup screen.`
                      : 'Use the code your driver shared.',
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Book safer rides',
                    text: 'Verified drivers, live tracking, ride PINs and SOS.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3 rounded-3xl bg-white p-4 shadow-sm"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                      <item.icon className="size-5" />
                    </span>
                    <div>
                      <p className="font-black">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-500 px-5 py-4 text-sm font-black text-white shadow-lg shadow-sky-500/25"
              >
                Learn about Bandi
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PublicShell>
  );
}
