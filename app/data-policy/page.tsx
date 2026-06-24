import { LegalContactBox, PolicyList, TextSection } from "@/components/info-card"
import { PageHero, PublicShell } from "@/components/public-shell"
import { getDictionary, resolveLocale } from "@/lib/i18n"
import { legalConfig, siteConfig } from "@/lib/site-config"

export default async function DataPolicyPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const locale = resolveLocale(await searchParams)
  const t = getDictionary(locale)
  return (
    <PublicShell locale={locale}>
      <PageHero
        eyebrow={t.pages.dataPolicy.eyebrow}
        title={t.pages.dataPolicy.title}
        text={`Effective ${legalConfig.effectiveDate}. ${t.pages.dataPolicy.text}`}
      />
      <section className="mx-auto grid max-w-5xl gap-5 px-4 pb-20 sm:px-6 lg:px-8">
        <TextSection title="Data categories">
          <PolicyList
            items={[
              "Identity data: name, phone, email, DOB, profile photo, OTP records, and language preferences.",
              "Driver verification data: license/identity documents, vehicle RC/permit/insurance details, vehicle photos, payment settings, onboarding status, and admin decisions.",
              "Ride data: pickup, destination, route, fare, vehicle type, ride status, cancellation details, PINs, ratings, support reports, and notifications.",
              "Financial data: wallet balance, wallet transactions, subscription/daily fee deductions, recharge records, refund/settlement workflow, and payment provider references.",
              "Technical data: logs, device metadata, crash reports, notification tokens, web form submissions, and admin audit records.",
            ]}
          />
        </TextSection>
        <TextSection title="Retention approach">
          <p>
            Account and ride records are retained for as long as the account is active and then for a reasonable period
            needed for support, safety, fraud prevention, dispute resolution, tax/accounting, and legal obligations.
            Driver verification records may be retained longer because they support platform safety and regulatory
            review.
          </p>
          <p>
            Operational records are grouped by purpose: active service data while the account is live, support and dispute
            data while an issue is open, financial records while wallet/recharge/settlement entries may be audited, and
            safety records while a complaint, incident, or policy review may be investigated.
          </p>
        </TextSection>
        <TextSection title="Payment and settlement data">
          <PolicyList
            items={[
              "Driver wallet recharges include amount, payment provider reference, status, balance after payment, source, and admin/payment notes where applicable.",
              "Daily fee or subscription deductions include amount, period, ride/account context, transaction status, and wallet balance impact.",
              "Refund and settlement records include account deactivation status, available balance, pending disputes, saved payout details, admin decision, settlement status, and notification history.",
              "Rider-to-driver payment details may include the driver&apos;s configured UPI ID, payment phone, or other payment instructions shown to the rider during an active ride.",
            ]}
          />
        </TextSection>
        <TextSection title="Location and ride trace data">
          <p>
            Ride trace data may include driver coordinates, rider pickup and destination points, route/polyline context,
            timestamps, ride status transitions, cancellation actor, and distance estimates. This data supports live
            tracking, fare checks, safety review, cancellation review, and support resolution.
          </p>
        </TextSection>
        <TextSection title="Access controls">
          <p>
            Admin and operations access should be role-based. Sensitive document, wallet, payment, support, and safety
            workflows should be visible only to authorized team members. Admin actions should be logged with actor,
            timestamp, decision, and relevant notes.
          </p>
        </TextSection>
        <TextSection title="Contact for data questions">
          <p>
            Data questions can be sent to {siteConfig.email}. Include your registered phone number and whether you are a
            rider, driver partner, website lead, or admin contact.
          </p>
        </TextSection>
        <LegalContactBox />
      </section>
    </PublicShell>
  )
}
