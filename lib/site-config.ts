export const siteConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mybandi.in',
  companyName:
    process.env.NEXT_PUBLIC_COMPANY_NAME ?? 'Bandi Mobility Private Limited',
  brandName: process.env.NEXT_PUBLIC_BRAND_NAME ?? 'Bandi',
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL ?? 'narenderv7@gmail.com',
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE ?? '+91 8142742972',
  address:
    process.env.NEXT_PUBLIC_COMPANY_ADDRESS ??
    'Vajra Enclave, 151, Jonnabanda, Jeedimetla, Hyderabad, Secunderabad, Telangana 500010, India',
  city: process.env.NEXT_PUBLIC_LAUNCH_CITY ?? 'Hyderabad',
  iosAppUrl: process.env.NEXT_PUBLIC_IOS_APP_URL ?? '',
  androidAppUrl: process.env.NEXT_PUBLIC_ANDROID_APP_URL ?? '',
  iosAppId: process.env.NEXT_PUBLIC_IOS_APP_ID ?? '',
};

export const legalConfig = {
  effectiveDate: process.env.NEXT_PUBLIC_LEGAL_EFFECTIVE_DATE ?? '24 June 2026',
};
