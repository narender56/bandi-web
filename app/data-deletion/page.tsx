import { ContactLeadForm } from "@/components/lead-forms"
import { PolicyList, TextSection } from "@/components/info-card"
import { PageHero, PublicShell } from "@/components/public-shell"
import { getDictionary, resolveLocale } from "@/lib/i18n"
import { siteConfig } from "@/lib/site-config"

export default async function DataDeletionPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const locale = resolveLocale(await searchParams)
  const t = getDictionary(locale)
  return (
    <PublicShell locale={locale}>
      <PageHero
        eyebrow={t.pages.dataDeletion.eyebrow}
        title={t.pages.dataDeletion.title}
        text={t.pages.dataDeletion.text}
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-20 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div className="grid gap-5">
          <TextSection title="How to request deletion">
            <PolicyList
              items={[
                "Use the in-app account deactivation or deletion flow if available.",
                "Or submit the form on this page with your registered phone number and account type.",
                `You can also email ${siteConfig.email} or call ${siteConfig.phone}.`,
                "We may verify your identity before processing the request.",
                "For driver accounts, deletion may first create a deactivation and settlement review if wallet balance, pending rides, disputes, or payout details need admin action.",
              ]}
            />
          </TextSection>
          <TextSection title="What happens after request">
            <PolicyList
              items={[
                "We acknowledge or review the request through support/admin workflow.",
                "We check whether there are active rides, unresolved safety reports, unpaid fees, wallet balance, pending settlements, payment disputes, or fraud checks.",
                "If no retention reason applies, we delete or anonymize profile and account data that is no longer needed.",
                "If retention is required, we restrict unnecessary access and retain only what is needed for the stated purpose.",
              ]}
            />
          </TextSection>
          <TextSection title="What may be retained">
            <p>
              Ride, wallet, payment, dispute, safety, admin audit, and legal records may be retained when required to
              protect users, process refunds/settlements, prevent abuse, meet tax/accounting duties, or comply with law.
              We will delete or anonymize data that is no longer needed for those purposes.
            </p>
          </TextSection>
          <TextSection title="Driver account closure">
            <p>
              Driver partners may need a settlement review before account closure is completed. If any wallet refund is
              due, admins review saved payment details and settlement status before disabling future access.
            </p>
            <p>
              While an account is deactivated or under settlement review, login or online access may be blocked. The
              driver should contact support if payout details are missing, incorrect, or need to be updated before final
              settlement.
            </p>
          </TextSection>
        </div>
        <ContactLeadForm locale={locale} />
      </section>
    </PublicShell>
  )
}
