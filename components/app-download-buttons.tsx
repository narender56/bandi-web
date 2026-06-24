import { Apple, Play } from "lucide-react"

import { siteConfig } from "@/lib/site-config"

function StoreButton({
  available,
  eyebrow,
  href,
  label,
  icon: Icon,
}: {
  available: boolean
  eyebrow: string
  href: string
  label: string
  icon: typeof Apple
}) {
  const className =
    "inline-flex min-w-[178px] items-center gap-3 rounded-2xl bg-slate-950 px-4 py-3 text-left text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-slate-800"

  const content = (
    <>
      <Icon className="size-6 shrink-0" />
      <span>
        <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-300">
          {eyebrow}
        </span>
        <span className="block text-sm font-black">{label}</span>
      </span>
    </>
  )

  if (!available) {
    return (
      <span className={`${className} cursor-not-allowed opacity-55`} aria-disabled="true">
        {content}
      </span>
    )
  }

  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {content}
    </a>
  )
}

export function AppDownloadButtons({
  androidEyebrow,
  androidLabel,
  className = "",
  iosEyebrow,
  iosLabel,
}: {
  androidEyebrow: string
  androidLabel: string
  className?: string
  iosEyebrow: string
  iosLabel: string
}) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <StoreButton
        available={Boolean(siteConfig.iosAppUrl)}
        eyebrow={iosEyebrow}
        href={siteConfig.iosAppUrl}
        icon={Apple}
        label={iosLabel}
      />
      <StoreButton
        available={Boolean(siteConfig.androidAppUrl)}
        eyebrow={androidEyebrow}
        href={siteConfig.androidAppUrl}
        icon={Play}
        label={androidLabel}
      />
    </div>
  )
}
