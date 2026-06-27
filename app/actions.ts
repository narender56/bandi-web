"use server"

type LeadType = "contact" | "driver_join"

type LeadState = {
  ok: boolean
  message: string
}

const SUPABASE_URL = process.env.SUPABASE_URL
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

function clean(value: FormDataEntryValue | null, max = 500) {
  return String(value ?? "").trim().slice(0, max)
}

function isEmail(value: string) {
  return !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

async function insertLead(payload: Record<string, unknown>) {
  if (!SUPABASE_URL || !SERVICE_KEY) {
    throw new Error("Website lead storage is not configured")
  }
  const res = await fetch(`${SUPABASE_URL}/rest/v1/website_leads`, {
    method: "POST",
    headers: {
      apikey: SERVICE_KEY,
      authorization: `Bearer ${SERVICE_KEY}`,
      "content-type": "application/json",
      prefer: "return=minimal",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error(await res.text())
  }
}

async function submitLead(formData: FormData, leadType: LeadType): Promise<LeadState> {
  const name = clean(formData.get("name"), 120)
  const phone = clean(formData.get("phone"), 32)
  const email = clean(formData.get("email"), 160)
  const city = clean(formData.get("city"), 120)
  const vehicleType = clean(formData.get("vehicleType"), 40)
  const message = clean(formData.get("message"), 1200)

  if (!name) return { ok: false, message: "Please enter your name." }
  if (!phone && !email) return { ok: false, message: "Please share a phone number or email." }
  if (!isEmail(email)) return { ok: false, message: "Please enter a valid email address." }
  if (leadType === "driver_join" && !vehicleType) {
    return { ok: false, message: "Please select your vehicle type." }
  }

  try {
    await insertLead({
      lead_type: leadType,
      name,
      phone: phone || null,
      email: email || null,
      city: city || null,
      vehicle_type: vehicleType || null,
      message: message || null,
      source: "bandi-web",
    })
    return {
      ok: true,
      message:
        leadType === "driver_join"
          ? "Thanks. Our onboarding team will contact you soon."
          : "Thanks. We received your message.",
    }
  } catch {
    return {
      ok: false,
      message: "We could not save this right now. Please call or email us.",
    }
  }
}

export async function submitContactLead(
  _prev: LeadState,
  formData: FormData,
): Promise<LeadState> {
  return submitLead(formData, "contact")
}

export async function submitDriverLead(
  _prev: LeadState,
  formData: FormData,
): Promise<LeadState> {
  return submitLead(formData, "driver_join")
}
