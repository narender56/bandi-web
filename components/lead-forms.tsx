"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react"

import { submitContactLead, submitDriverLead } from "@/app/actions"
import { getDictionary, type Locale } from "@/lib/i18n"

const initial = { ok: false, message: "" }

function SubmitButton({ children }: { children: string }) {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? <Loader2 className="size-4 animate-spin" /> : <ArrowRight className="size-4" />}
      {children}
    </button>
  )
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <label className="space-y-1.5 text-sm font-semibold text-slate-800">
      <span>{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
      />
    </label>
  )
}

export function DriverLeadForm({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  const [state, action] = useActionState(submitDriverLead, initial)
  return (
    <form action={action} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.22em] text-sky-500">{t.forms.driverEyebrow}</p>
        <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">{t.forms.driverTitle}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          {t.forms.driverText}
        </p>
      </div>
      <div className="mt-5 grid gap-4">
        <Field label={t.forms.name} name="name" required placeholder="Your name" />
        <Field label={t.forms.phone} name="phone" required placeholder="+91..." />
        <Field label={t.forms.email} name="email" type="email" placeholder="you@example.com" />
        <Field label={t.forms.city} name="city" placeholder="Hyderabad" />
        <label className="space-y-1.5 text-sm font-semibold text-slate-800">
          <span>{t.forms.vehicleType}</span>
          <select
            name="vehicleType"
            required
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
          >
            <option value="">{t.forms.selectVehicle}</option>
            <option value="bike">Bike</option>
            <option value="auto">Auto</option>
            <option value="hatchback">Hatchback</option>
            <option value="sedan">Sedan</option>
            <option value="premium">Premium</option>
            <option value="xl">XL</option>
          </select>
        </label>
        <label className="space-y-1.5 text-sm font-semibold text-slate-800">
          <span>{t.forms.driverMessage}</span>
          <textarea
            name="message"
            rows={3}
            placeholder={t.forms.driverPlaceholder}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
          />
        </label>
        {state.message && (
          <p className={state.ok ? "flex items-center gap-2 text-sm font-semibold text-emerald-600" : "text-sm font-semibold text-red-600"}>
            {state.ok && <CheckCircle2 className="size-4" />}
            {state.message}
          </p>
        )}
        <SubmitButton>{t.forms.requestCall}</SubmitButton>
      </div>
    </form>
  )
}

export function ContactLeadForm({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  const [state, action] = useActionState(submitContactLead, initial)
  return (
    <form action={action} className="rounded-[2rem] border border-slate-800 bg-slate-950 p-5 text-white shadow-2xl shadow-slate-950/30">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-sky-300">{t.forms.contactEyebrow}</p>
      <h3 className="mt-2 text-2xl font-black tracking-tight">{t.forms.contactTitle}</h3>
      <div className="mt-5 grid gap-4">
        {[
          [t.forms.name, "name", "Your name"],
          [t.forms.phone, "phone", "+91..."],
          [t.forms.email, "email", "you@example.com"],
          [t.forms.city, "city", "Hyderabad"],
        ].map(([label, name, placeholder]) => (
          <label key={name} className="space-y-1.5 text-sm font-semibold text-slate-200">
            <span>{label}</span>
            <input
              name={name}
              type={name === "email" ? "email" : "text"}
              placeholder={placeholder}
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300 focus:ring-4 focus:ring-sky-300/10"
            />
          </label>
        ))}
        <label className="space-y-1.5 text-sm font-semibold text-slate-200">
          <span>{t.forms.message}</span>
          <textarea
            name="message"
            rows={4}
            required
            placeholder={t.forms.contactPlaceholder}
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300 focus:ring-4 focus:ring-sky-300/10"
          />
        </label>
        {state.message && (
          <p className={state.ok ? "flex items-center gap-2 text-sm font-semibold text-emerald-300" : "text-sm font-semibold text-red-300"}>
            {state.ok && <CheckCircle2 className="size-4" />}
            {state.message}
          </p>
        )}
        <SubmitButton>{t.forms.send}</SubmitButton>
      </div>
    </form>
  )
}
