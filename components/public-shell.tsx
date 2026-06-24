import Image from 'next/image';
import Link from 'next/link';
import { Apple, Play } from 'lucide-react';

import { LanguageSwitcher } from '@/components/language-switcher';
import { getDictionary, type Locale, withLocale } from '@/lib/i18n';
import { siteConfig } from '@/lib/site-config';

function getNavLinks(t: ReturnType<typeof getDictionary>) {
  return [
    { label: t.nav.riders, href: '/#riders' },
    { label: t.nav.drivers, href: '/#drivers' },
    { label: t.nav.whyBandi, href: '/#why-bandi' },
    { label: t.nav.faq, href: '/faq' },
    { label: t.nav.contact, href: '/contact' },
  ];
}

function getFooterGroups(t: ReturnType<typeof getDictionary>) {
  return [
    {
      title: t.footer.company,
      links: [
        { label: t.footer.about, href: '/about' },
        { label: t.footer.contact, href: '/contact' },
        { label: t.footer.support, href: '/support' },
        { label: t.footer.faq, href: '/faq' },
      ],
    },
    {
      title: t.footer.legal,
      links: [
        { label: t.footer.privacy, href: '/privacy' },
        { label: t.footer.dataPolicy, href: '/data-policy' },
        { label: t.footer.dataDeletion, href: '/data-deletion' },
        { label: t.footer.riderTerms, href: '/terms/riders' },
        { label: t.footer.driverTerms, href: '/terms/drivers' },
        { label: t.footer.companyTerms, href: '/terms/company' },
      ],
    },
  ];
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const navLinks = getNavLinks(t);
  const storeLinks = [
    {
      available: Boolean(siteConfig.iosAppUrl),
      href: siteConfig.iosAppUrl,
      icon: Apple,
      label: 'iOS',
    },
    {
      available: Boolean(siteConfig.androidAppUrl),
      href: siteConfig.androidAppUrl,
      icon: Play,
      label: 'Android',
    },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/90 shadow-sm shadow-slate-950/5 backdrop-blur-xl supports-backdrop-filter:bg-white/75">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <Link
          href={withLocale('/', locale)}
          className="flex items-center gap-3"
        >
          <Image
            src="/bandi-logo.png"
            alt="Bandi logo"
            width={40}
            height={40}
            className="rounded-xl"
          />
          <span className="text-lg font-black tracking-tight">Bandi</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-bold text-slate-600 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={withLocale(link.href, locale)}
              className="hover:text-sky-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 lg:flex">
            {storeLinks.map(({ available, href, icon: Icon, label }) =>
              available ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600"
                >
                  <Icon className="size-4" />
                  {label}
                </a>
              ) : (
                <span
                  key={label}
                  className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-400 shadow-sm"
                >
                  <Icon className="size-4" />
                  {label}
                </span>
              ),
            )}
          </div>
          <LanguageSwitcher locale={locale} label={t.nav.language} />
          <Link
            href={withLocale('/#join', locale)}
            className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-slate-950/20 sm:inline-flex"
          >
            {t.nav.joinDriver}
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const footerGroups = getFooterGroups(t);
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div className="flex gap-3">
          <Image
            src="/bandi-logo.png"
            alt="Bandi logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-xl"
          />
          <div>
            <p className="font-black">Bandi</p>
            <p className="mt-1 max-w-md text-xs leading-5 text-slate-500">
              {t.footer.note}
            </p>
          </div>
        </div>
        {footerGroups.map((group) => (
          <div key={group.title}>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
              {group.title}
            </p>
            <div className="mt-3 grid gap-2">
              {group.links.map((link) => (
                <Link
                  key={link.href}
                  href={withLocale(link.href, locale)}
                  className="text-sm font-bold text-slate-600 hover:text-sky-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}

export function PublicShell({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader locale={locale} />
      {children}
      <SiteFooter locale={locale} />
    </main>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white mb-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,#bae6fd_0,transparent_28%),radial-gradient(circle_at_80%_20%,#e0f2fe_0,transparent_25%)]" />
      <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-500">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-balance text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-pretty text-lg leading-8 text-slate-600">
          {text}
        </p>
      </div>
    </section>
  );
}
