import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  CircleHelp,
  FileText,
  Gift,
  HandHeart,
  IndianRupee,
  MapPin,
  MessageCircle,
  Percent,
  Phone,
  Route,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
} from 'lucide-react';

import { AppDownloadButtons } from '@/components/app-download-buttons';
import { ContactLeadForm, DriverLeadForm } from '@/components/lead-forms';
import { PublicShell } from '@/components/public-shell';
import { getDictionary, resolveLocale, withLocale } from '@/lib/i18n';
import { getPublicContent } from '@/lib/public-content';
import { siteConfig } from '@/lib/site-config';

function SectionHeading({
  eyebrow,
  title,
  text,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-500">
        {eyebrow}
      </p>
      <h2
        className={
          dark
            ? 'mt-3 text-balance text-3xl font-black tracking-tight text-white md:text-5xl'
            : 'mt-3 text-balance text-3xl font-black tracking-tight text-slate-950 md:text-5xl'
        }
      >
        {title}
      </h2>
      {text && (
        <p
          className={
            dark
              ? 'mt-4 text-pretty text-base leading-7 text-slate-300'
              : 'mt-4 text-pretty text-base leading-7 text-slate-600'
          }
        >
          {text}
        </p>
      )}
    </div>
  );
}

function Reveal({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`reveal-section ${className}`}>
      {children}
    </section>
  );
}

function AppPreview({
  mode,
  copy,
}: {
  mode: 'rider' | 'partner' | 'safety' | 'onboarding';
  copy: ReturnType<typeof getDictionary>['home'];
}) {
  const isRider = mode === 'rider';
  const isPartner = mode === 'partner';
  const isSafety = mode === 'safety';
  const isOnboarding = mode === 'onboarding';
  const previewLabel = isRider
    ? copy.riderPreview
    : isSafety
      ? copy.safetyPreview
      : isOnboarding
        ? copy.onboardingPreview
        : copy.partnerPreview;
  const previewTitle = isRider
    ? copy.driverOnWay
    : isSafety
      ? copy.sosReady
      : isOnboarding
        ? copy.docsVerified
        : copy.rideProgress;
  return (
    <div className="relative mx-auto w-71.5 rounded-[2.7rem] border-11 border-slate-950 bg-slate-950 shadow-2xl shadow-sky-950/30">
      <div className="absolute left-1/2 top-3 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-slate-950" />
      <div className="overflow-hidden rounded-[1.9rem] bg-slate-100">
        <div className="relative h-140 bg-[#f8fafc]">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_23px,#dbeafe_24px,#dbeafe_26px,transparent_27px),linear-gradient(0deg,transparent_23px,#e2e8f0_24px,#e2e8f0_26px,transparent_27px)] bg-[length:52px_52px] opacity-80" />
            <div className="absolute -left-10 top-48 h-3 w-96 -rotate-12 rounded-full bg-sky-500" />
            <div className="absolute left-10 top-80 h-3 w-72 rotate-28 rounded-full bg-sky-500" />
            <div className="absolute left-20 top-56 size-7 rounded-full border-4 border-white bg-emerald-500 shadow-lg" />
            <div className="absolute right-16 top-72 size-7 rounded-full border-4 border-white bg-rose-500 shadow-lg" />
          </div>

          <div className="absolute left-4 right-4 top-9 rounded-3xl bg-white/95 p-4 shadow-xl">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                  {previewLabel}
                </p>
                <h3 className="mt-1 text-lg font-black text-slate-950">
                  {previewTitle}
                </h3>
              </div>
              <p className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-black text-emerald-600">
                {isRider
                  ? '4 min'
                  : isPartner
                    ? '₹450'
                    : isSafety
                      ? 'SOS'
                      : 'OK'}
              </p>
            </div>
          </div>

          <Image
            src={
              isRider || isSafety ? '/vehicle-sedan.png' : '/vehicle-auto.png'
            }
            alt="Bandi app map preview"
            width={110}
            height={110}
            className={
              isRider || isSafety
                ? 'absolute left-28 top-64 h-20 w-20 rotate-[-18deg] object-contain drop-shadow-2xl'
                : 'absolute left-24 top-64 h-24 w-24 rotate-[22deg] object-contain drop-shadow-2xl'
            }
          />

          <div className="absolute bottom-0 left-0 right-0 rounded-t-[2rem] bg-white p-5 shadow-2xl">
            {isRider ? (
              <>
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                    <Users className="size-6" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-950">
                      {copy.verifiedDriver}
                    </p>
                    <p className="text-xs text-slate-500">
                      {copy.vehicleLabel}
                    </p>
                  </div>
                  <div className="ml-auto flex size-11 items-center justify-center rounded-full bg-sky-500 text-white">
                    <Phone className="size-5" />
                  </div>
                </div>
                <div className="mt-5 rounded-2xl bg-sky-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-sky-700">
                    {copy.startPin}
                  </p>
                  <p className="mt-1 text-3xl font-black tracking-[0.35em] text-slate-950">
                    8901
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{copy.pinHelp}</p>
                </div>
              </>
            ) : isSafety ? (
              <>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-rose-50 p-4 text-rose-600">
                    <ShieldCheck className="size-6" />
                    <p className="mt-3 text-sm font-black">{copy.sosReady}</p>
                  </div>
                  <div className="rounded-2xl bg-sky-50 p-4 text-sky-600">
                    <Users className="size-6" />
                    <p className="mt-3 text-sm font-black">
                      {copy.verifiedDriver}
                    </p>
                  </div>
                </div>
                <div className="mt-4 rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    {copy.paymentDirect}
                  </p>
                  <p className="mt-1 text-lg font-black text-slate-950">
                    UPI · Cash · Driver details
                  </p>
                </div>
              </>
            ) : isOnboarding ? (
              <>
                <div className="space-y-3">
                  {[
                    copy.docsVerified,
                    copy.profileApproved,
                    copy.paymentDirect,
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4"
                    >
                      <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                        <FileText className="size-5" />
                      </span>
                      <p className="text-sm font-black text-slate-950">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                  {copy.destination}
                </p>
                <h3 className="mt-1 text-lg font-black text-slate-950">
                  Banjara Hills Road No. 12
                </h3>
                <p className="mt-2 text-sm font-black text-sky-600">
                  4.4 km to destination
                </p>
                <button className="mt-5 w-full rounded-2xl bg-sky-500 py-4 text-sm font-black text-white">
                  {copy.completeRide}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function LaunchPoster({ copy }: { copy: ReturnType<typeof getDictionary>['home'] }) {
  return (
    <div className="relative mx-auto max-w-xl">
      <div className="absolute -inset-8 rounded-[3rem] bg-sky-300/30 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-slate-950 p-5 shadow-2xl shadow-sky-950/25">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute -right-24 -top-24 size-64 rounded-full bg-sky-400/30 blur-2xl" />
        <div className="absolute -bottom-28 left-10 size-72 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-5 text-white backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <div className="rounded-2xl bg-white p-2">
              <Image
                src="/bandi-app-icon.png"
                alt="Bandi app icon"
                width={56}
                height={56}
                className="rounded-xl"
              />
            </div>
            <div className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-black text-slate-950">
              {copy.launch}
            </div>
          </div>
          <p className="mt-8 max-w-sm text-sm font-black uppercase tracking-[0.22em] text-sky-200">
            {copy.launchKicker}
          </p>
          <h3 className="mt-4 text-balance text-4xl font-black leading-[0.95] tracking-tight md:text-5xl">
            {copy.freedomLine}
          </h3>
          <div className="mt-8 grid gap-3">
            {[copy.freeMonth, copy.noSurge, copy.choosePrice].map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-white/10 p-4"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white text-sky-600">
                  {i === 0 ? (
                    <Gift className="size-5" />
                  ) : i === 1 ? (
                    <Percent className="size-5" />
                  ) : (
                    <IndianRupee className="size-5" />
                  )}
                </span>
                <p className="text-sm font-black leading-5 text-white">{item}</p>
              </div>
            ))}
          </div>
          <div className="relative mt-8 h-36 overflow-hidden rounded-3xl bg-sky-100">
            <div className="absolute left-0 right-0 top-1/2 h-7 -translate-y-1/2 bg-slate-800/80" />
            <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 border-t border-dashed border-white/70" />
            <Image
              src="/vehicle-bike.png"
              alt="Bandi bike"
              width={90}
              height={90}
              className="launch-vehicle absolute bottom-8 left-4 h-16 w-16 object-contain drop-shadow-xl"
            />
            <Image
              src="/vehicle-auto.png"
              alt="Bandi auto"
              width={110}
              height={90}
              className="launch-vehicle-delay absolute bottom-8 left-28 h-20 w-20 object-contain drop-shadow-xl"
            />
            <Image
              src="/vehicle-sedan.png"
              alt="Bandi car"
              width={120}
              height={90}
              className="launch-vehicle-slow absolute bottom-8 left-56 h-20 w-20 object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function DriverTribute({
  copy,
}: {
  copy: ReturnType<typeof getDictionary>['home'];
}) {
  return (
    <Reveal className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-300">
            {copy.launchKicker}
          </p>
          <h2 className="mt-4 text-balance text-4xl font-black tracking-tight md:text-6xl">
            {copy.dedicationTitle}
          </h2>
          <p className="mt-5 text-pretty text-lg leading-8 text-slate-300">
            {copy.dedicationText}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {copy.driverLaunchOffer.map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-3xl font-black text-white">{value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[430px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-6">
          <div className="absolute inset-x-8 top-16 h-3 rounded-full bg-sky-400/80" />
          <div className="absolute bottom-14 left-6 right-6 h-32 rounded-[2rem] bg-slate-900" />
          <div className="absolute bottom-26 left-10 flex items-end gap-6">
            <Image src="/vehicle-bike.png" alt="Bike driver" width={120} height={120} className="h-24 w-24 object-contain drop-shadow-2xl" />
            <Image src="/vehicle-auto.png" alt="Auto driver" width={140} height={140} className="h-32 w-32 object-contain drop-shadow-2xl" />
            <Image src="/vehicle-premium.png" alt="Cab driver" width={150} height={150} className="h-32 w-32 object-contain drop-shadow-2xl" />
          </div>
          <div className="absolute right-6 top-6 max-w-60 rounded-3xl bg-white p-5 text-slate-950 shadow-2xl">
            <HandHeart className="size-8 text-sky-500" />
            <p className="mt-3 text-lg font-black">{copy.freeMonth}</p>
          </div>
          <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-sky-500 p-5 text-white shadow-xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-sky-100">
              {copy.launch}
            </p>
            <p className="mt-1 text-2xl font-black">Bandi Mobility</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function FareComparison({
  copy,
}: {
  copy: ReturnType<typeof getDictionary>['home'];
}) {
  return (
    <Reveal className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-500">
            0% commission
          </p>
          <h2 className="mt-3 text-balance text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            {copy.savingsTitle}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-8 text-slate-600">
            {copy.savingsText}
          </p>
          <div className="mt-8 grid gap-4">
            {copy.fareComparison.map(([label, text], index) => (
              <div
                key={label}
                className={
                  index === 0
                    ? 'rounded-[2rem] border border-rose-100 bg-rose-50 p-6'
                    : 'rounded-[2rem] border border-emerald-100 bg-emerald-50 p-6'
                }
              >
                <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">
                  {label}
                </p>
                <p className="mt-2 text-2xl font-black text-slate-950">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative rounded-[2.5rem] bg-slate-950 p-6 text-white shadow-2xl">
          <div className="absolute -inset-6 rounded-[3rem] bg-sky-200/40 blur-3xl" />
          <div className="relative grid gap-4">
            {copy.ledgerRows.map(([label, value], index) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-3xl bg-white/10 p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-white text-sky-600">
                    {index === 0 ? <Route className="size-5" /> : index === 1 ? <Percent className="size-5" /> : <Wallet className="size-5" />}
                  </span>
                  <p className="font-black">{label}</p>
                </div>
                <p className={index === 1 ? 'text-3xl font-black text-emerald-300' : 'text-3xl font-black text-white'}>
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const locale = resolveLocale(await searchParams);
  const t = getDictionary(locale);
  const {
    driverFeatures,
    faqs,
    riderFeatures,
    safetyItems,
    vehicleTypes,
    whyBandi,
  } = getPublicContent(locale);
  return (
    <PublicShell locale={locale}>
      <Reveal id="top" className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,#7dd3fc_0,transparent_32%),radial-gradient(circle_at_80%_20%,#bae6fd_0,transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-sky-700 shadow-sm">
              <Sparkles className="size-4" /> {t.home.launch}
            </div>
            <p className="mt-5 text-sm font-black uppercase tracking-[0.22em] text-slate-500">
              {t.home.launchKicker}
            </p>
            <h1 className="mt-6 text-balance text-5xl font-black leading-[0.95] tracking-tighter text-slate-950 md:text-7xl">
              {t.home.heroTitle.split('\n').map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-700">
              {t.home.heroText}
            </p>
            <div className="mt-6 grid max-w-2xl gap-3">
              {[t.home.freeMonth, t.home.noSurge, t.home.choosePrice].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-white/80 px-4 py-3 font-black text-slate-800 shadow-sm backdrop-blur"
                  >
                    <CheckCircle2 className="size-5 shrink-0 text-emerald-500" />
                    {item}
                  </div>
                ),
              )}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={withLocale('/#join', locale)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-7 py-4 text-sm font-black text-white shadow-xl shadow-sky-500/25 hover:bg-sky-400"
              >
                {t.home.join} <ArrowRight className="size-4" />
              </Link>
              <Link
                href={withLocale('/about', locale)}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-black text-slate-950 shadow-sm hover:border-sky-300"
              >
                {t.home.learn}
              </Link>
            </div>
            <AppDownloadButtons
              androidEyebrow={t.home.androidEyebrow}
              androidLabel={t.home.androidLabel}
              className="mt-5"
              iosEyebrow={t.home.iosEyebrow}
              iosLabel={t.home.iosLabel}
            />
            <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3">
              {t.home.launchStats.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-white/80 bg-white/70 p-4 shadow-sm backdrop-blur"
                >
                  <p className="text-3xl font-black text-slate-950">{value}</p>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <LaunchPoster copy={t.home} />
          </div>
        </div>
      </Reveal>

      <DriverTribute copy={t.home} />

      <FareComparison copy={t.home} />

      <Reveal id="why-bandi" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t.home.whyEyebrow}
            title={t.home.whyTitle}
            text={t.home.whyText}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whyBandi.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6"
                >
                  <Icon className="size-8 text-sky-500" />
                  <h3 className="mt-5 text-lg font-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>

      <Reveal id="riders" className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-500">
              {t.home.riderEyebrow}
            </p>
            <h2 className="mt-3 text-balance text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              {t.home.riderTitle}
            </h2>
            <p className="mt-4 text-pretty text-lg leading-8 text-slate-600">
              {t.home.riderText}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {riderFeatures.map(([title, text, Icon]) => (
                <div
                  key={title as string}
                  className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <Icon className="size-8 text-sky-500" />
                  <h3 className="mt-5 text-lg font-black">{title as string}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {text as string}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-8 rounded-full bg-sky-200 blur-3xl" />
            <AppPreview mode="rider" copy={t.home} />
          </div>
        </div>
      </Reveal>

      <Reveal id="drivers" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-8 rounded-full bg-sky-500/30 blur-3xl" />
            <AppPreview mode="partner" copy={t.home} />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-300">
              {t.home.driverEyebrow}
            </p>
            <h2 className="mt-3 text-balance text-4xl font-black tracking-tight text-white md:text-5xl">
              {t.home.driverTitle}
            </h2>
            <p className="mt-4 text-pretty text-lg leading-8 text-slate-300">
              {t.home.driverText}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {driverFeatures.map(([title, text, Icon]) => (
                <div
                  key={title as string}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-6"
                >
                  <Icon className="size-8 text-sky-300" />
                  <h3 className="mt-5 text-lg font-black text-white">
                    {title as string}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {text as string}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t.home.vehiclesEyebrow}
            title={t.home.vehiclesTitle}
            text={t.home.vehiclesText}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            {vehicleTypes.map((vehicle) => (
              <div
                key={vehicle.name}
                className="rounded-[2rem] border border-slate-200 bg-white p-5 text-center shadow-sm"
              >
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.name} ride`}
                  width={160}
                  height={120}
                  className="mx-auto h-28 object-contain"
                />
                <h3 className="mt-4 text-lg font-black">{vehicle.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {vehicle.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal id="safety" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-500">
              {t.home.safetyEyebrow}
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">
              {t.home.safetyTitle}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {t.home.safetyText}
            </p>
            <div className="mt-8 grid gap-4">
              {safetyItems.map(([Icon, text]) => (
                <div
                  key={text as string}
                  className="flex items-center gap-4 rounded-3xl bg-slate-50 p-5"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                    <Icon className="size-6" />
                  </div>
                  <p className="font-black">{text as string}</p>
                </div>
              ))}
            </div>
          </div>
          <AppPreview mode="safety" copy={t.home} />
        </div>
      </Reveal>

      <Reveal id="join" className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[.85fr_1fr] lg:px-8">
          <div className="hidden lg:block">
            <AppPreview mode="onboarding" copy={t.home} />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-500">
              {t.home.onboardingEyebrow}
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">
              {t.home.onboardingTitle}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {t.home.onboardingText}
            </p>
            <ul className="mt-6 space-y-3">
              {t.home.onboardingBullets.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 font-bold text-slate-700"
                >
                  <CheckCircle2 className="size-5 text-emerald-500" /> {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <DriverLeadForm locale={locale} />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal id="faq" className="bg-slate-100 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={t.home.faqEyebrow} title={t.home.faqTitle} />
          <div className="mt-10 grid gap-4">
            {faqs.slice(0, 8).map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">
                  <span>{q}</span>
                  <CircleHelp className="size-5 text-sky-500" />
                </summary>
                <p className="mt-3 leading-7 text-slate-600">{a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href={withLocale('/faq', locale)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white"
            >
              {t.home.readAllFaqs} <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal id="contact" className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-[2rem] bg-sky-500 p-8 text-white">
            <Sparkles className="size-10" />
            <h2 className="mt-6 text-4xl font-black tracking-tight">
              {t.home.contactTitle}
            </h2>
            <div className="mt-8 space-y-4 text-sm font-bold">
              <p className="flex items-center gap-3">
                <Phone className="size-5" /> {siteConfig.phone}
              </p>
              <p className="flex items-center gap-3">
                <MessageCircle className="size-5" /> {siteConfig.email}
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="size-5" /> {siteConfig.address}
              </p>
            </div>
          </div>
          <ContactLeadForm locale={locale} />
        </div>
      </Reveal>
    </PublicShell>
  );
}
