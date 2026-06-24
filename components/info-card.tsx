import Link from "next/link"
import type { LucideIcon } from "lucide-react"

export function InfoCard({
  title,
  text,
  icon: Icon,
}: {
  title: string
  text: string
  icon?: LucideIcon
}) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      {Icon && (
        <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
          <Icon className="size-6" />
        </div>
      )}
      <h3 className="text-xl font-black tracking-tight text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  )
}

export function TextSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-2xl font-black tracking-tight text-slate-950">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">{children}</div>
    </section>
  )
}

export function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sky-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function LegalContactBox() {
  return (
    <div className="rounded-[2rem] bg-slate-950 p-6 text-white md:p-8">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-300">Need help?</p>
      <h2 className="mt-3 text-2xl font-black">Contact Bandi support</h2>
      <p className="mt-3 text-sm leading-7 text-slate-300">
        For privacy, safety, account, payment, or legal questions, contact us from the support page.
      </p>
      <Link
        href="/support"
        className="mt-5 inline-flex rounded-full bg-sky-500 px-5 py-3 text-sm font-black text-white"
      >
        Open support
      </Link>
    </div>
  )
}
