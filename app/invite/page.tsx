import Link from 'next/link';
import { Gift } from 'lucide-react';

import { PublicShell } from '@/components/public-shell';

export const dynamic = 'force-dynamic';

export default function InviteHelpPage() {
  return (
    <PublicShell locale="en">
      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex size-16 items-center justify-center rounded-3xl bg-sky-100 text-sky-700">
          <Gift className="size-8" />
        </div>
        <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-5xl">
          Have a Bandi driver invite code?
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Install the Bandi Rider app and enter the code during signup. If you
          scanned a driver QR, the code appears on that invite page.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-sky-500 px-6 py-3 text-sm font-black text-white"
        >
          Go to Bandi home
        </Link>
      </section>
    </PublicShell>
  );
}
