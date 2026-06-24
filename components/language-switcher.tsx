'use client';

import { Languages } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { localeNames, locales, type Locale } from '@/lib/i18n';

export function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <label className="relative inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-700 shadow-sm">
      <Languages className="size-4 text-sky-500" />
      <span className="sr-only">{label}</span>
      <select
        aria-label={label}
        className="appearance-none bg-transparent pr-5 outline-none"
        value={locale}
        onChange={(event) => {
          const params = new URLSearchParams(searchParams.toString());
          params.set('lang', event.target.value);
          router.push(`${pathname}?${params.toString()}`);
        }}
      >
        {locales.map((item) => (
          <option key={item} value={item}>
            {localeNames[item]}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
        ▾
      </span>
    </label>
  );
}
