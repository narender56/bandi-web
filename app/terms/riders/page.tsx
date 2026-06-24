import { LegalContactBox, PolicyList, TextSection } from "@/components/info-card"
import { PageHero, PublicShell } from "@/components/public-shell"
import { getDictionary, resolveLocale } from "@/lib/i18n"
import { legalConfig, siteConfig } from "@/lib/site-config"

export default async function RiderTermsPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const locale = resolveLocale(await searchParams)
  const t = getDictionary(locale)
  return (
    <PublicShell locale={locale}>
      <PageHero
        eyebrow={t.pages.riderTerms.eyebrow}
        title={t.pages.riderTerms.title}
        text={`Effective ${legalConfig.effectiveDate}. ${t.pages.riderTerms.text}`}
      />
      <section className="mx-auto grid max-w-5xl gap-5 px-4 pb-20 sm:px-6 lg:px-8">
        <TextSection title="Using the rider service">
          <PolicyList
            items={[
              "Provide accurate pickup and destination details, and confirm your pickup location before requesting a ride.",
              "Use start and end ride PINs only for their intended purpose. Share the start PIN only after meeting the driver, and the end PIN only after payment is complete.",
              "Treat drivers respectfully and do not misuse calls, chat, SOS, cancellation, ratings, or support tools.",
              "Follow local laws and do not request rides for illegal, unsafe, or prohibited activity.",
            ]}
          />
        </TextSection>
        <TextSection title="Fare and payment">
          <p>
            The app may show an estimated or accepted fare before the ride. Riders usually pay the driver directly by
            cash or UPI/payment details configured by the driver. Confirm the driver received payment before sharing the
            end ride PIN. Parking, tolls, airport charges, waiting charges, or government fees may be extra where shown
            or communicated.
          </p>
          <p>
            If the rider chooses to pay through a UPI ID, payment phone, QR, or external payment app, the rider should
            verify that the payee details match the driver/payment details shown in the app. Bandi may not be able to
            reverse a direct payment made to an incorrect third-party account outside Bandi&apos;s control.
          </p>
        </TextSection>
        <TextSection title="Refunds and extra charges">
          <PolicyList
            items={[
              "Rider trip fare is normally paid directly to the driver, so trip fare refunds are handled case-by-case through support review rather than automatic in-app reversal.",
              "If a ride is cancelled before driver acceptance, there is normally no driver fare payable.",
              "If a ride is cancelled after driver acceptance, support may review location, timing, cancellation reason, and ride status before deciding whether any charge, waiver, or support action applies.",
              "Airport fees, tolls, parking, government charges, waiting charges, or entry charges may be payable by the rider when applicable and should be communicated in the app or by support rules.",
              "If payment was made to the wrong UPI ID or external account, the rider should contact their payment provider and Bandi support immediately with transaction proof.",
            ]}
          />
        </TextSection>
        <TextSection title="Cancellations and support">
          <p>
            If a ride is cancelled, Bandi may record the cancellation actor, reason, status, location context, and timing.
            If a driver cancels after accepting, the rider may be asked whether they want to search again. Support can
            review ride data where needed.
          </p>
          <p>
            Repeated misuse of cancellations, false reports, unsafe conduct, or payment disputes may lead to warnings,
            temporary restrictions, or account review.
          </p>
        </TextSection>
        <TextSection title="Safety">
          <p>
            Use in-app SOS or local emergency services in urgent situations. Bandi may review trip logs, location traces,
            ratings, reports, and support notes to investigate safety concerns.
          </p>
        </TextSection>
        <TextSection title="Ratings and reports">
          <p>
            Riders can rate rides and report issues. Ratings and reports should be truthful and based on the actual ride.
            Bandi may use ratings, complaints, ride traces, cancellation history, and support notes to investigate service
            quality or safety issues.
          </p>
        </TextSection>
        <LegalContactBox />
      </section>
    </PublicShell>
  )
}
