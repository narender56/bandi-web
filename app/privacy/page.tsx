import { LegalContactBox, PolicyList, TextSection } from "@/components/info-card"
import { PageHero, PublicShell } from "@/components/public-shell"
import { getDictionary, resolveLocale } from "@/lib/i18n"
import { legalConfig, siteConfig } from "@/lib/site-config"

export default async function PrivacyPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const locale = resolveLocale(await searchParams)
  const t = getDictionary(locale)
  return (
    <PublicShell locale={locale}>
      <PageHero
        eyebrow={t.pages.privacy.eyebrow}
        title={t.pages.privacy.title}
        text={`Effective ${legalConfig.effectiveDate}. ${t.pages.privacy.text}`}
      />
      <section className="mx-auto grid max-w-5xl gap-5 px-4 pb-20 sm:px-6 lg:px-8">
        <TextSection title="Information we collect">
          <PolicyList
            items={[
              "Account information such as name, phone number, email address, language preference, profile photo, and OTP verification records.",
              "Emergency and support information such as SOS actions, support tickets, call/contact actions, notification delivery, complaint details, and admin notes.",
              "Ride information such as pickup, destination, route, status, fare, cancellation reason, PIN workflow, ratings, complaints, and support notes.",
              "Driver partner information such as identity details, date of birth, vehicle details, document photos, vehicle images, payment details, onboarding status, wallet transactions, and verification outcomes.",
              "Location information such as rider pickup location and driver live location while online, waiting for rides, moving to pickup, or completing active rides.",
              "Device, app, and website information such as app version, operating system, crash reports, IP address, browser details, logs, and notification tokens.",
            ]}
          />
        </TextSection>
        <TextSection title="How we use information">
          <PolicyList
            items={[
              "To create and secure accounts, verify OTPs, onboard driver partners, and prevent duplicate or abusive accounts.",
              "To match riders and drivers, show nearby vehicles, calculate fares, provide navigation context, update ride status, and complete rides.",
              "To send ride, wallet, verification, cancellation, safety, and support notifications.",
              "To investigate complaints, fraud, payment disputes, safety events, policy violations, account holds, and settlement requests.",
              "To process driver wallet recharges, platform fee deductions, refund/settlement reviews, and payment provider confirmations.",
              "To improve app reliability, customer support, local operations, pricing, route quality, and driver supply planning.",
            ]}
          />
        </TextSection>
        <TextSection title="Sharing and disclosure">
          <p>
            We share only the information required to operate the service. Riders may see driver name, rating, vehicle
            details, vehicle image, payment details, live trip progress, and support information. Drivers may see pickup,
            destination, ride fare, route context, and rider contact actions, but not unnecessary rider profile details.
          </p>
          <p>
            We may also share data with infrastructure providers, payment providers, map/location providers, analytics
            and crash reporting providers, legal authorities when required, and professional advisors under appropriate
            confidentiality or legal controls.
          </p>
        </TextSection>
        <TextSection title="Location data">
          <p>
            Driver live location is important for dispatch, rider tracking, safety, and support review. Drivers may need
            precise and background location permissions while online or on an active ride. Riders can use location for a
            faster pickup experience or manually select pickup and destination when available.
          </p>
          <p>
            Driver location may be updated at intervals while online or during a ride so riders can see approach and trip
            progress. If a driver disables location during an active ride, Bandi may show warnings, notify support, or
            restrict the driver account because live location is required for rider safety and trip operations.
          </p>
        </TextSection>
        <TextSection title="Payments, wallet, and refunds">
          <p>
            Rider trip fare is intended to be paid directly to the driver through cash or the driver&apos;s saved payment
            details. Bandi may store payment confirmation context, ride PIN status, support notes, wallet transactions,
            and third-party payment references to resolve disputes and support wallet recharge or settlement workflows.
          </p>
          <p>
            Driver wallet balances are used for Bandi platform fees and operational charges. Refunds of unused driver
            wallet balance are not treated as instant withdrawals inside the app; they are reviewed during account
            closure/deactivation or settlement workflows.
          </p>
        </TextSection>
        <TextSection title="Retention, rights, and deletion">
          <p>
            We retain account, ride, payment, safety, audit, and legal records only as long as needed for operations,
            fraud prevention, dispute handling, tax/accounting, legal compliance, and safety review. You can request
            access, correction, or deletion through the data deletion page or support contact.
          </p>
          <p>
            Deleting an account may remove or anonymize user-facing profile data, but some ride, wallet, payment, safety,
            support, and audit records may remain where required for legitimate operational, legal, accounting, fraud
            prevention, or dispute-resolution reasons.
          </p>
        </TextSection>
        <LegalContactBox />
      </section>
    </PublicShell>
  )
}
