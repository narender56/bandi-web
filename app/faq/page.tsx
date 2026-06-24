import { CircleHelp } from "lucide-react"

import { PageHero, PublicShell } from "@/components/public-shell"
import { getDictionary, resolveLocale } from "@/lib/i18n"
import { getPublicContent } from "@/lib/public-content"

export default async function FAQPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const locale = resolveLocale(await searchParams)
  const t = getDictionary(locale)
  const { faqs } = getPublicContent(locale)
  return (
    <PublicShell locale={locale}>
      <PageHero
        eyebrow={t.pages.faq.eyebrow}
        title={t.pages.faq.title}
        text={t.pages.faq.text}
      />
      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-4">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black text-slate-950">
                <span>{q}</span>
                <CircleHelp className="size-5 shrink-0 text-sky-500" />
              </summary>
              <p className="mt-4 leading-7 text-slate-600">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </PublicShell>
  )
}
