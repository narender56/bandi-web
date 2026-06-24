import { LegalContactBox, PolicyList, TextSection } from "@/components/info-card"
import { PageHero, PublicShell } from "@/components/public-shell"
import { getDictionary, resolveLocale } from "@/lib/i18n"
import { legalConfig, siteConfig } from "@/lib/site-config"

export default async function CompanyTermsPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const locale = resolveLocale(await searchParams)
  const t = getDictionary(locale)
  return (
    <PublicShell locale={locale}>
      <PageHero
        eyebrow={t.pages.companyTerms.eyebrow}
        title={t.pages.companyTerms.title}
        text={`Effective ${legalConfig.effectiveDate}. ${t.pages.companyTerms.text}`}
      />
      <section className="mx-auto grid max-w-5xl gap-5 px-4 pb-20 sm:px-6 lg:px-8">
        <TextSection title="Platform role">
          <p>
            Bandi provides technology, onboarding, dispatch, support, wallet, safety, and operations tooling for urban
            mobility. Driver partners are responsible for their vehicle, conduct, legal eligibility, and completion of
            rides. Riders are responsible for accurate booking details and direct payment where applicable.
          </p>
        </TextSection>
        <TextSection title="Website forms">
          <PolicyList
            items={[
              "Contact and driver lead forms are used to respond to requests, onboard partners, and handle support.",
              "Submitting a form does not guarantee driver approval, employment, partnership, pricing, or service availability.",
              "We may contact you through phone, email, WhatsApp, SMS, or other reasonable channels about your request.",
            ]}
          />
        </TextSection>
        <TextSection title="Availability and changes">
          <p>
            Bandi may change features, vehicle categories, pricing, subscription fees, service areas, policies, and
            availability as the service evolves. Public website information may summarize app features that are still in
            pilot, staged rollout, or active development.
          </p>
        </TextSection>
        <TextSection title="Refund, settlement, and support operating rules">
          <PolicyList
            items={[
              "Rider trip fare is generally paid directly to the driver and is not automatically refundable by Bandi.",
              "Driver wallet balance is used for platform/service fees and unused balance is reviewed during account closure/deactivation settlement.",
              "Support may review ride traces, payment proof, notifications, wallet transactions, cancellation reasons, ratings, and admin audit logs before taking action.",
              "Bandi may block, hold, or limit accounts where fraud, safety risk, document mismatch, payment abuse, or repeated policy violation is suspected.",
            ]}
          />
        </TextSection>
        <TextSection title="Contact and legal notices">
          <p>
            Send notices and official questions to {siteConfig.email}. Company contact: {siteConfig.companyName},{" "}
            {siteConfig.address}, {siteConfig.phone}.
          </p>
        </TextSection>
        <LegalContactBox />
      </section>
    </PublicShell>
  )
}
