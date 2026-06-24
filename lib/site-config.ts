export const siteConfig = {
  companyName:
    process.env.NEXT_PUBLIC_COMPANY_NAME ?? "Bandi Mobility Private Limited",
  brandName: process.env.NEXT_PUBLIC_BRAND_NAME ?? "Bandi",
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL ?? "narenderv7@gmail.com",
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE ?? "+91 8142742972",
  address:
    process.env.NEXT_PUBLIC_COMPANY_ADDRESS ??
    "Road No. 12, Banjara Hills, Hyderabad, Telangana 500034, India",
  city: process.env.NEXT_PUBLIC_LAUNCH_CITY ?? "Hyderabad",
  iosAppUrl: process.env.NEXT_PUBLIC_IOS_APP_URL ?? "",
  androidAppUrl: process.env.NEXT_PUBLIC_ANDROID_APP_URL ?? "",
}

export const legalConfig = {
  effectiveDate: process.env.NEXT_PUBLIC_LEGAL_EFFECTIVE_DATE ?? "24 June 2026",
}
