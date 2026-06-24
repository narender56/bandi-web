import { AlertTriangle, CreditCard, LifeBuoy, MapPinned, UserCheck } from "lucide-react"

import { ContactLeadForm } from "@/components/lead-forms"
import { InfoCard } from "@/components/info-card"
import { PageHero, PublicShell } from "@/components/public-shell"
import { getDictionary, resolveLocale } from "@/lib/i18n"
import { siteConfig } from "@/lib/site-config"

const supportItems = [
  {
    icon: MapPinned,
    title: "Ride support",
    text: "Get help with pickup, destination, cancellation, driver arrival, route, payment confirmation, or ride completion issues.",
  },
  {
    icon: CreditCard,
    title: "Wallet and payment help",
    text: "Drivers can contact support for recharge, wallet balance, daily fee, settlement, refund review, Razorpay, UPI, or direct company payment questions.",
  },
  {
    icon: UserCheck,
    title: "Driver onboarding",
    text: "Ask about document requirements, vehicle verification, status holds, approval messages, account blocks, and payment detail setup.",
  },
  {
    icon: AlertTriangle,
    title: "Safety escalation",
    text: "For urgent safety concerns, use in-app SOS if available and contact local emergency services. Bandi support can review trip data after the event.",
  },
]

export default async function SupportPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const locale = resolveLocale(await searchParams)
  const t = getDictionary(locale)
  return (
    <PublicShell locale={locale}>
      <PageHero
        eyebrow={t.pages.support.eyebrow}
        title={t.pages.support.title}
        text={t.pages.support.text}
      />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-20 sm:px-6 md:grid-cols-2 lg:px-8">
        {supportItems.map((item) => (
          <InfoCard key={item.title} {...item} />
        ))}
      </section>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-20 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white">
          <LifeBuoy className="size-10 text-sky-300" />
          <h2 className="mt-6 text-3xl font-black">Support hours and escalation</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            During pilot operations, support responses may be handled manually. For emergencies, use local emergency
            services first. For account, data, payment, or settlement issues, include your phone number and ride ID if
            available.
          </p>
          <div className="mt-6 rounded-2xl border border-sky-300/20 bg-sky-300/10 p-4 text-sm leading-6 text-sky-50">
            Payment/refund issues should include transaction proof, ride ID, payment app reference, amount, date/time,
            and whether the payment was made to the driver directly or to Bandi wallet recharge.
          </div>
        </div>
        <ContactLeadForm locale={locale} />
      </section>
    </PublicShell>
  )
}
