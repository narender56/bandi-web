import { LegalContactBox, PolicyList, TextSection } from "@/components/info-card"
import { PageHero, PublicShell } from "@/components/public-shell"
import { getDictionary, resolveLocale } from "@/lib/i18n"
import { legalConfig, siteConfig } from "@/lib/site-config"

export default async function DriverTermsPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const locale = resolveLocale(await searchParams)
  const t = getDictionary(locale)
  return (
    <PublicShell locale={locale}>
      <PageHero
        eyebrow={t.pages.driverTerms.eyebrow}
        title={t.pages.driverTerms.title}
        text={`Effective ${legalConfig.effectiveDate}. ${t.pages.driverTerms.text}`}
      />
      <section className="mx-auto grid max-w-5xl gap-5 px-4 pb-20 sm:px-6 lg:px-8">
        <TextSection title="Onboarding and verification">
          <PolicyList
            items={[
              "You must provide accurate identity, date of birth, address, state/city, vehicle, document, image, and payment details.",
              "You must be eligible to drive the configured vehicle category and keep documents valid while using Bandi.",
              "Bandi may approve, reject, hold, block, or request more information based on verification, safety, fraud, or operational review.",
              "You are responsible for keeping your phone number, vehicle, language, and payment details up to date.",
            ]}
          />
        </TextSection>
        <TextSection title="Ride operations">
          <p>
            When online, you may receive ride requests based on location, vehicle type, availability, rating, acceptance,
            and dispatch rules. You must move toward pickup after accepting, mark arrival only when actually near the
            pickup point, start rides only after receiving the correct PIN, and complete rides only after receiving the
            end PIN.
          </p>
        </TextSection>
        <TextSection title="Wallet and platform fees">
          <p>
            Bandi may charge platform or subscription fees to the driver wallet as configured. Rider trip fare is intended
            to be paid directly to you. Wallet recharges, deductions, refunds, settlements, and failed payments may be
            reviewed by admins and payment providers.
          </p>
          <PolicyList
            items={[
              "A minimum wallet balance or active platform fee status may be required before going online.",
              "Daily fee/subscription deductions may be taken from the wallet according to configured platform rules.",
              "Wallet recharge through QR, Razorpay, UPI, or admin top-up is credited only after payment confirmation or admin approval.",
              "Wallet money is for platform/service fees and is not an on-demand withdrawal product.",
              "Refund of unused wallet balance is reviewed during account closure/deactivation settlement, subject to pending dues, disputes, chargebacks, fraud checks, and valid payout details.",
            ]}
          />
        </TextSection>
        <TextSection title="Direct rider payments">
          <p>
            You are responsible for keeping your saved payment details correct. Riders may use those details to pay you
            directly. If your UPI ID, payment phone, QR, or payout details are wrong, expired, or belong to someone else,
            payment may fail or go to the wrong account. Update support/admin before accepting rides if details are not
            correct.
          </p>
        </TextSection>
        <TextSection title="Location and safety">
          <p>
            Driver location is required while online and during active rides for dispatch, rider tracking, safety, and
            support review. Disabling location during an active ride may trigger alerts, account holds, or investigation.
          </p>
          <p>
            You should not mark arrival unless you are actually near the pickup point, and you should not start or finish
            a ride without the correct rider PIN. Misuse of arrival, cancellation, PIN, payment, or completion controls
            may lead to account review.
          </p>
        </TextSection>
        <TextSection title="Account closure and settlement">
          <p>
            If you request deactivation, Bandi may restrict login or online access while the account is under settlement
            review. Admins may verify wallet balance, pending rides, disputes, and saved payment details before final
            closure.
          </p>
          <p>
            Settlement can be marked pending, in review, paid, rejected, or blocked if information is missing or a dispute
            is open. You may receive notifications about approval, rejection, hold, required documents, or settlement
            completion.
          </p>
        </TextSection>
        <LegalContactBox />
      </section>
    </PublicShell>
  )
}
