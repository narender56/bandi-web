import { BadgeCheck, HeartHandshake, MapPin, ShieldCheck, Wallet } from "lucide-react"

import { InfoCard } from "@/components/info-card"
import { PageHero, PublicShell } from "@/components/public-shell"
import { getDictionary, resolveLocale } from "@/lib/i18n"
import { whyBandi } from "@/lib/public-content"
import { siteConfig } from "@/lib/site-config"

export default async function AboutPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const locale = resolveLocale(await searchParams)
  const t = getDictionary(locale)
  return (
    <PublicShell locale={locale}>
      <PageHero
        eyebrow={t.pages.about.eyebrow}
        title={t.pages.about.title}
        text={t.pages.about.text}
      />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-20 sm:px-6 lg:grid-cols-3 lg:px-8">
        <InfoCard
          icon={Wallet}
          title="Driver-first economics"
          text="Bandi is designed around direct rider-to-driver payments and 0% ride commission, replacing per-ride cuts with transparent platform fees."
        />
        <InfoCard
          icon={ShieldCheck}
          title="Operational safety"
          text="Ride PINs, live tracking, cancellation reasons, notifications, ratings, SOS workflows, and admin review trails make the ride lifecycle easier to investigate."
        />
        <InfoCard
          icon={MapPin}
          title="Local by design"
          text={`The first operating focus is ${siteConfig.city}, with local vehicle categories, language needs, driver workflows, and support habits in mind.`}
        />
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-500">Why we exist</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
                Mobility should be easier to trust.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Riders need clarity before, during, and after a ride. Drivers need a model that does not quietly
                punish them every trip. Bandi brings those two needs together with transparent pricing, verified
                onboarding, direct payment details, and support visibility.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {whyBandi.map((item) => {
                const Icon = item.icon
                return <InfoCard key={item.title} icon={Icon} title={item.title} text={item.text} />
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <InfoCard
          icon={BadgeCheck}
          title="Company"
          text={`${siteConfig.companyName} operates the Bandi brand. Company details, support channels, legal pages, and data policies are published here for riders, driver partners, regulators, and app review teams.`}
        />
        <InfoCard
          icon={HeartHandshake}
          title="Contact"
          text={`${siteConfig.address}. Email ${siteConfig.email} or call ${siteConfig.phone} for support, partnerships, driver onboarding, and business questions.`}
        />
      </section>
    </PublicShell>
  )
}
