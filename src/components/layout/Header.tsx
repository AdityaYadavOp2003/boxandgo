'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { m, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Package,
  Home,
  Building2,
  MapPin,
  Truck,
  Bike,
  Warehouse,
  MessageCircle,
} from 'lucide-react';
import Logo from '@/components/brand/Logo';
import { services } from '@/data/services';
import { PHONE, PHONE_URL, WHATSAPP_URL } from '@/lib/utils';
import { cn } from '@/lib/utils';
import NavHeightSync from './NavHeightSync';

const iconMap: Record<string, React.ElementType> = {
  Home,
  Building2,
  MapPin,
  Truck,
  Bike,
  Warehouse,
};

const navLinks: { label: string; href: string; hasDropdown?: boolean }[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Why Us', href: '/#why-us' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: { opacity: 0, y: 6, transition: { duration: 0.15 } },
};

const drawerVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.25, ease: [0.4, 0, 1, 1] as const },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const next = window.scrollY > 16;
        setScrolled((prev) => (prev === next ? prev : next));
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (href: string): boolean => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return false;
    return pathname.startsWith(href);
  };

  const closeDrawer = () => setMobileOpen(false);

  const onHero = isHome && !scrolled;
  const navSolid = scrolled || !isHome;

  return (
    <>
      <NavHeightSync />
      <header className="site-header" role="banner">
        <div
          className={cn(
            'nav-bar',
            navSolid ? 'nav-glass-solid' : 'nav-glass-floating'
          )}
        >
          <Logo variant="header" onDark={onHero} className="nav-bar__brand" />

          {/* Desktop navigation — centered column */}
          <nav className="nav-bar__nav" aria-label="Main">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setServicesOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'nav-link-premium',
                      onHero ? 'nav-link-premium--hero' : 'nav-link-premium--solid',
                      active && 'is-active'
                    )}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown
                        size={15}
                        className={cn(
                          'opacity-70 transition-transform duration-200',
                          servicesOpen && link.hasDropdown && 'rotate-180'
                        )}
                        aria-hidden
                      />
                    )}
                  </Link>

                  {link.hasDropdown && (
                    <AnimatePresence>
                      {servicesOpen && (
                        <m.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="nav-bar__dropdown"
                        >
                          <div className="nav-bar__dropdown-panel">
                            {services.map((service) => {
                              const Icon = iconMap[service.icon] || Package;
                              return (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-accent"
                                >
                                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
                                    <Icon size={18} className="text-accent" aria-hidden />
                                  </div>
                                  {service.shortTitle}
                                </Link>
                              );
                            })}
                            <Link
                              href="/services"
                              className="mt-1 block rounded-xl px-3 py-2.5 text-center text-xs font-semibold text-accent hover:bg-accent/5"
                            >
                              View all services →
                            </Link>
                          </div>
                        </m.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right: phone + CTA + mobile toggle */}
          <div className="nav-bar__actions">
            <a
              href={PHONE_URL}
              className={cn(
                'nav-bar__phone',
                onHero ? 'nav-bar__phone--hero' : 'nav-bar__phone--solid'
              )}
            >
              <span className="nav-bar__phone-icon">
                <Phone size={18} aria-hidden />
              </span>
              <span className="hidden xl:inline tabular-nums">{PHONE}</span>
            </a>

            <a
              href={isHome ? '#quote' : '/contact'}
              className="btn-primary nav-bar__cta"
            >
              Get Free Quote
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                'nav-bar__menu-btn',
                onHero
                  ? 'text-white hover:bg-white/10'
                  : 'text-primary hover:bg-neutral-100'
              )}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* ─── Mobile / tablet drawer (< 1024px) ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop overlay — dark only, NO page blur */}
            <m.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-[1010] bg-black/50 lg:hidden"
              onClick={closeDrawer}
              aria-hidden
            />

            {/* Drawer panel */}
            <m.div
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mobile-drawer lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* ── Drawer Header ── */}
              <div className="mobile-drawer__header">
                <Logo variant="mobile" href="/" onDark />
                <button
                  type="button"
                  onClick={closeDrawer}
                  className="mobile-drawer__close-btn"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* ── Nav Links ── */}
              <nav className="mobile-drawer__nav" aria-label="Mobile navigation">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return link.hasDropdown ? (
                    <div key={link.label}>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={cn(
                          'mobile-drawer__link',
                          active && 'mobile-drawer__link--active'
                        )}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          size={18}
                          className={cn(
                            'transition-transform duration-200 opacity-60',
                            mobileServicesOpen && 'rotate-180'
                          )}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <m.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="mobile-drawer__sub-menu">
                              {services.map((service) => {
                                const Icon = iconMap[service.icon] || Package;
                                return (
                                  <Link
                                    key={service.slug}
                                    href={`/services/${service.slug}`}
                                    onClick={closeDrawer}
                                    className="mobile-drawer__sub-link"
                                  >
                                    <span className="mobile-drawer__sub-icon">
                                      <Icon size={14} aria-hidden />
                                    </span>
                                    {service.shortTitle}
                                  </Link>
                                );
                              })}
                            </div>
                          </m.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={closeDrawer}
                      className={cn(
                        'mobile-drawer__link',
                        active && 'mobile-drawer__link--active'
                      )}
                    >
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* ── CTA Section ── */}
              <div className="mobile-drawer__cta-section">
                <a
                  href={PHONE_URL}
                  className="mobile-drawer__cta-btn mobile-drawer__cta-btn--call"
                >
                  <Phone size={17} aria-hidden />
                  Call Now
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-drawer__cta-btn mobile-drawer__cta-btn--whatsapp"
                >
                  <MessageCircle size={17} aria-hidden />
                  WhatsApp
                </a>
                <a
                  href={isHome ? '#quote' : '/contact'}
                  onClick={closeDrawer}
                  className="mobile-drawer__cta-btn mobile-drawer__cta-btn--quote"
                >
                  Get Free Quote
                </a>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
