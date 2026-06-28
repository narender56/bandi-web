import {
  BadgeCheck,
  Bell,
  CreditCard,
  FileText,
  LifeBuoy,
  LockKeyhole,
  MapPin,
  Navigation,
  ShieldCheck,
  Star,
  Timer,
  Wallet,
  Zap,
} from "lucide-react"

import { siteConfig } from "@/lib/site-config"
import { getDictionary, type Locale } from "@/lib/i18n"

export const navLinks = [
  { label: "Riders", href: "/#riders" },
  { label: "Drivers", href: "/#drivers" },
  { label: "Why Bandi", href: "/#why-bandi" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
]

export const footerGroups = [
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Contact us", href: "/contact" },
      { label: "Support", href: "/support" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Data Policy", href: "/data-policy" },
      { label: "Data Deletion", href: "/data-deletion" },
      { label: "Rider Terms", href: "/terms/riders" },
      { label: "Driver Terms", href: "/terms/drivers" },
      { label: "Company Terms", href: "/terms/company" },
    ],
  },
]

export const vehicleTypes = [
  { name: "Bike", image: "/vehicle-bike.png", text: "Fast solo rides for short city trips." },
  { name: "Auto", image: "/vehicle-auto.png", text: "Everyday rides with fair pricing." },
  { name: "Sedan", image: "/vehicle-sedan.png", text: "Comfortable cars for daily commutes." },
  { name: "Premium", image: "/vehicle-premium.png", text: "Better vehicles for special trips." },
  { name: "XL", image: "/vehicle-xl.png", text: "More seats and space for family rides." },
]

export const riderFeatures = [
  ["Cheaper by design", "Bandi does not add ride commission, so riders can see cleaner prices.", Wallet],
  ["No surge pressure", "No sudden surge pricing just because demand changes.", LockKeyhole],
  ["Live driver tracking", "Watch your driver move toward pickup and destination in real time.", Navigation],
  ["Safety built in", "SOS, share trip, verified drivers, ratings, and ride history.", ShieldCheck],
]

export const driverFeatures = [
  ["0% ride commission", "Bandi does not take a cut from ride fare. The ride fare belongs to you.", BadgeCheck],
  ["1 month free at launch", "Every approved driver gets the first month subscription free for the launch campaign.", CreditCard],
  ["Choose your price", "Drivers can choose a pricing profile instead of being trapped in one rate.", Zap],
  ["Verified onboarding", "Identity, documents, vehicle photos, and payment details are checked.", FileText],
]

export const whyBandi = [
  {
    title: "Drivers keep the fare",
    text: "Most ride platforms take a cut every time a driver works. Bandi's promise is simpler: rider fare goes to the driver, while the platform runs on transparent subscription fees.",
    icon: Wallet,
  },
  {
    title: "No surge for riders",
    text: "Riders should not feel punished for needing a ride at the wrong time. Bandi is built around clear fares instead of surge spikes.",
    icon: Timer,
  },
  {
    title: "Driver price choice",
    text: "Driver partners can choose their pricing profile, helping them balance acceptance, earnings, and local demand.",
    icon: LockKeyhole,
  },
  {
    title: "Built for support teams",
    text: "Status changes, notifications, cancellations, SOS, ratings, and ride traces are available for admin review instead of disappearing into chat screenshots.",
    icon: LifeBuoy,
  },
]

export const faqs = [
  {
    q: "Is Bandi available to the public right now?",
    a: `Bandi is preparing for launch in ${siteConfig.city}. The current focus is pilot testing, driver onboarding, payment flows, safety workflows, and operations tooling before wider public availability.`,
  },
  {
    q: "How is Bandi different from other ride platforms?",
    a: "Bandi is designed around direct rider-to-driver fare payment and zero ride commission. The driver keeps the ride fare, while Bandi monetizes through transparent subscription/platform fees. The product also emphasizes ride PINs, support visibility, live tracking, and local onboarding quality.",
  },
  {
    q: "Does Bandi take a commission from rides?",
    a: "No. Bandi's intended model is 0% ride commission. Drivers pay applicable platform/subscription fees to use the service, but the rider's trip fare is paid directly to the driver.",
  },
  {
    q: "How do riders pay drivers?",
    a: "Riders may pay the driver directly using cash or UPI details saved by the driver during onboarding. The rider app shows the driver's payment details during the ride and reminds the rider to confirm the driver received payment before using the end ride PIN.",
  },
  {
    q: "Are rider payments refundable?",
    a: "Because trip fare is usually paid directly to the driver, refunds are not automatic in-app reversals. If there is a problem, Bandi support reviews the ride status, cancellation reason, payment proof, route/location context, PIN flow, and driver/rider reports before deciding the next action.",
  },
  {
    q: "What extra charges can apply?",
    a: "Airport fees, tolls, parking, waiting charges, entry fees, or government charges may be extra where applicable. These should be shown in the app, communicated by support rules, or agreed before the ride is completed.",
  },
  {
    q: "Can a rider scan a QR code from the same phone?",
    a: "Usually no. A QR code shown on the same device is mainly useful when the rider is paying from another phone. For same-phone payment, the app should prefer copyable UPI ID, payment phone, or a UPI deep link that opens installed payment apps.",
  },
  {
    q: "How are drivers verified?",
    a: "Drivers must complete onboarding with identity details, date of birth validation, state/city details, vehicle information, document uploads, vehicle photos, payment details, OTP verification, and admin approval before they can operate.",
  },
  {
    q: "What location permissions are required?",
    a: "Riders may use location for pickup and live trip tracking, but can also set pickup manually. Drivers need precise and background location permission while online or during active rides so riders and support teams can track the trip correctly.",
  },
  {
    q: "What happens if the driver or rider cancels?",
    a: "Cancellation reason and actor are recorded. If a driver cancels after accepting, the rider can choose whether to search for another driver. Notifications and support trails are created where needed.",
  },
  {
    q: "What if I need to end the ride in the middle?",
    a: "You can end a ride mid-trip. You pay for the distance used so far plus a small closing fee (a percentage of the remaining estimate), shown before you confirm. You'll also be asked the reason, and if something went wrong you can flag it so the Bandi team reviews the ride.",
  },
  {
    q: "What happens if I'm not at the pickup point (no-show)?",
    a: "If you're not at the pickup and not reachable, the driver waits a short grace period, tries to call you, and can then report a no-show, which cancels the ride. A no-show is not penalised automatically — it opens a case that the Bandi team reviews (looking at GPS, wait time, and call records). After review, a small no-show fee may apply before you can book again. Genuine cases (driver never arrived, wrong location) are not charged.",
  },
  {
    q: "What if the driver ends the ride early?",
    a: "If the driver has a vehicle breakdown, you are not charged and Bandi looks for another driver from your current location. If the driver ends a ride for a safety or other reason, the case is escalated to the Bandi team for review before any charge or action.",
  },
  {
    q: "Can I dispute a charge or a block?",
    a: "Yes. When ending a ride you can flag that you need help, and a blocked account shows how to contact us. The Bandi team reviews each case manually — no fee or block is applied without a human review.",
  },
  {
    q: "What happens if there is a payment dispute?",
    a: "Bandi stores ride status, payment confirmation context, PIN workflow, support reports, notifications, and admin audit trails. The operations team can review the case and contact both parties.",
  },
  {
    q: "Which vehicle types are supported?",
    a: "The platform supports bike, auto, hatchback, sedan, premium, and XL categories. Actual availability depends on city launch, approved supply, and configured fares.",
  },
  {
    q: "Can drivers withdraw wallet money?",
    a: "Driver wallet money is mainly used for Bandi platform fees and is not an on-demand withdrawal product. Refund or settlement flows are handled when an account is deactivated or closed, subject to admin review, pending dues, disputes, and saved payment details.",
  },
  {
    q: "What happens when a driver closes their account?",
    a: "The account may move into deactivation or settlement review. Admins check wallet balance, pending rides, disputes, deductions, and payout details. Login or online access may be restricted until the settlement is completed or rejected.",
  },
  {
    q: "How can I contact Bandi?",
    a: `Use the contact form, email ${siteConfig.email}, or call ${siteConfig.phone}. Website requests are saved for the admin team to review.`,
  },
]

export const safetyItems = [
  [ShieldCheck, "Verified drivers and documents"],
  [Bell, "In-app notifications for ride status"],
  [LifeBuoy, "Support and SOS escalation"],
  [Star, "Ratings, ride history, and admin review"],
  [Timer, "Ride status and location trace for investigations"],
]

export function getPublicContent(locale: Locale) {
  const t = getDictionary(locale)

  if (locale === "hi") {
    return {
      vehicleTypes: [
        { name: "Bike", image: "/vehicle-bike.png", text: "Short city trips के लिए fast solo rides." },
        { name: "Auto", image: "/vehicle-auto.png", text: "Daily rides with fair pricing." },
        { name: "Sedan", image: "/vehicle-sedan.png", text: "Daily commute के लिए comfortable cars." },
        { name: "Premium", image: "/vehicle-premium.png", text: "Special trips के लिए बेहतर vehicles." },
        { name: "XL", image: "/vehicle-xl.png", text: "Family rides के लिए ज्यादा seats और space." },
      ],
      riderFeatures: [
        ["Live driver tracking", "Driver pickup और destination तक कैसे move कर रहा है, live देखें.", Navigation],
        ["Fare पहले से clear", "Ride शुरू होने से पहले accepted fare दिखता है. Surprise surge नहीं.", LockKeyhole],
        ["Direct driver payment", "Cash या driver के saved UPI/payment details से direct pay करें.", Wallet],
        ["Safety built in", "SOS, share trip, verified drivers, ratings और ride history.", ShieldCheck],
      ],
      driverFeatures: [
        ["0% ride commission", "Bandi ride fare से commission नहीं लेता.", BadgeCheck],
        ["Daily subscription", "हर ride commission की जगह predictable daily fee.", CreditCard],
        ["Verified onboarding", "Identity, documents, vehicle photos और payment details checked.", FileText],
        ["Smart dispatch", "Nearby drivers को fairness, acceptance और rating signals से prioritize किया जाता है.", Zap],
      ],
      whyBandi: [
        { ...whyBandi[0], title: "Fare driver का", text: "Rider fare direct driver को जाता है. Platform transparent subscription fees से चलता है." },
        { ...whyBandi[1], title: "Clear ride closure", text: "Start और end PIN pickup, payment confirmation और completion confusion कम करते हैं." },
        { ...whyBandi[2], title: "Support team ready", text: "Status, notifications, cancellations, SOS, ratings और traces admin review के लिए available हैं." },
        { ...whyBandi[3], title: "Operations-ready", text: "Local geography, multilingual support और Indian city mobility workflows ध्यान में रखकर बनाया गया." },
      ],
      faqs,
      safetyItems: [
        [ShieldCheck, "Verified drivers और documents"],
        [Bell, "Ride status के लिए in-app notifications"],
        [LifeBuoy, "Support और SOS escalation"],
        [Star, "Ratings, ride history और admin review"],
        [Timer, "Investigation के लिए ride status/location trace"],
      ],
    }
  }

  if (locale === "te") {
    return {
      vehicleTypes: [
        { name: "Bike", image: "/vehicle-bike.png", text: "Short city trips కోసం fast solo rides." },
        { name: "Auto", image: "/vehicle-auto.png", text: "Fair pricing తో everyday rides." },
        { name: "Sedan", image: "/vehicle-sedan.png", text: "Daily commute కోసం comfortable cars." },
        { name: "Premium", image: "/vehicle-premium.png", text: "Special trips కోసం better vehicles." },
        { name: "XL", image: "/vehicle-xl.png", text: "Family rides కోసం more seats and space." },
      ],
      riderFeatures: [
        ["Live driver tracking", "Driver pickup/destination వైపు ఎలా move అవుతున్నారో live చూడండి.", Navigation],
        ["Fare ముందే clear", "Ride start ముందు accepted fare కనిపిస్తుంది. Surprise surge లేదు.", LockKeyhole],
        ["Direct driver payment", "Cash లేదా driver saved UPI/payment details తో direct pay చేయండి.", Wallet],
        ["Safety built in", "SOS, share trip, verified drivers, ratings, ride history.", ShieldCheck],
      ],
      driverFeatures: [
        ["0% ride commission", "Bandi ride fare పై commission తీసుకోదు.", BadgeCheck],
        ["Daily subscription", "ప్రతి ride commission కి బదులు predictable daily fee.", CreditCard],
        ["Verified onboarding", "Identity, documents, vehicle photos, payment details checked.", FileText],
        ["Smart dispatch", "Nearby drivers fairness, acceptance, rating signals ఆధారంగా prioritize అవుతారు.", Zap],
      ],
      whyBandi: [
        { ...whyBandi[0], title: "Fare driver కి", text: "Rider fare direct driver కి వెళ్తుంది. Platform transparent subscription fees తో నడుస్తుంది." },
        { ...whyBandi[1], title: "Clear ride closure", text: "Start/end PIN pickup, payment confirmation, completion confusion తగ్గిస్తాయి." },
        { ...whyBandi[2], title: "Support team ready", text: "Status, notifications, cancellations, SOS, ratings, traces admin review కోసం available." },
        { ...whyBandi[3], title: "Operations-ready", text: "Local geography, multilingual support, Indian city mobility workflows కోసం build చేసింది." },
      ],
      faqs,
      safetyItems: [
        [ShieldCheck, "Verified drivers మరియు documents"],
        [Bell, "Ride status కోసం in-app notifications"],
        [LifeBuoy, "Support మరియు SOS escalation"],
        [Star, "Ratings, ride history, admin review"],
        [Timer, "Investigation కోసం ride status/location trace"],
      ],
    }
  }

  return {
    vehicleTypes,
    riderFeatures,
    driverFeatures,
    whyBandi,
    faqs,
    safetyItems,
  }
}
