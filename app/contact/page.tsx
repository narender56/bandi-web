import { ArrowRight, Mail, MapPin, Phone, ShieldCheck, UserRoundCheck } from "lucide-react"

import { ContactLeadForm, DriverLeadForm } from "@/components/lead-forms"
import { InfoCard } from "@/components/info-card"
import { PageHero, PublicShell } from "@/components/public-shell"
import { getDictionary, resolveLocale, type Locale } from "@/lib/i18n"
import { siteConfig } from "@/lib/site-config"

function ContactOption({
  icon: Icon,
  title,
  text,
  value,
}: {
  icon: typeof Phone
  title: string
  text: string
  value: string
}) {
  return (
    <div className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100">
      <div className="flex items-start gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
          <Icon className="size-6" />
        </div>
        <div>
          <h3 className="text-lg font-black text-slate-950">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
          <p className="mt-4 break-words rounded-2xl bg-slate-50 px-4 py-3 text-sm font-black text-slate-800">
            {value}
          </p>
        </div>
      </div>
    </div>
  )
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const locale = resolveLocale(await searchParams)
  const t = getDictionary(locale)
  return (
    <PublicShell locale={locale}>
      <PageHero
        eyebrow={t.pages.contact.eyebrow}
        title={t.pages.contact.title}
        text={t.pages.contact.text}
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-20 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div className="rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/20">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-300">{t.pages.contact.quickTitle}</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">{siteConfig.brandName} support desk</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">{t.pages.contact.quickText}</p>
          <div className="mt-8 grid gap-3">
            {[
              ["Rider support", "Ride booking, cancellation, payment confirmation, safety, or trip history."],
              ["Driver onboarding", "Documents, verification, wallet, account hold, or payment settings."],
              ["Business contact", "Partnerships, media, app review, compliance, or office questions."],
            ].map(([title, text]) => (
              <div key={title} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <ArrowRight className="size-4 text-sky-300" />
                <div>
                  <p className="font-black">{title}</p>
                  <p className="text-xs leading-5 text-slate-400">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          <ContactOption icon={Phone} title={t.contactCards.phone} text={t.contactCards.phoneText} value={siteConfig.phone} />
          <ContactOption icon={Mail} title={t.contactCards.email} text={t.contactCards.emailText} value={siteConfig.email} />
          <ContactOption icon={MapPin} title={t.contactCards.office} text={t.contactCards.officeText} value={siteConfig.address} />
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <ContactLeadForm locale={locale} />
        <DriverLeadForm locale={locale} />
      </section>
    </PublicShell>
  )
}
