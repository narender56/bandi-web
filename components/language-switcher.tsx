"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"

import { localeNames, locales, type Locale } from "@/lib/i18n"

export function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale
  label: string
}) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return (
    <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 text-xs font-black shadow-sm">
      <span className="sr-only">{label}</span>
      {locales.map((item) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set("lang", item)
        return (
          <Link
            key={item}
            href={`${pathname}?${params.toString()}`}
            title={localeNames[item]}
            className={
              item === locale
                ? "rounded-full bg-sky-500 px-3 py-1.5 text-white"
                : "rounded-full px-3 py-1.5 text-slate-500 hover:bg-sky-50 hover:text-sky-700"
            }
          >
            {item.toUpperCase()}
          </Link>
        )
      })}
    </div>
  )
}
