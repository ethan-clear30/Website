'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMini, setIsMini] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsMini(window.scrollY > 10);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/how-it-works', label: 'How it works' },
    { href: '/partner-with-us', label: 'Partner with us' },
    { href: '/universities', label: 'Universities' },
    { href: '/research', label: 'Research' },
    { href: '/resources', label: 'Resources' },
  ];

  const appStoreUrl = 'https://apps.apple.com/us/app/clear30-quit-smoking-weed/id6476418203';

  return (
    <>
      <header className={`header${isMini ? ' header--mini' : ''}`}>
        <div className="header-content">
          <Link href="/" className="logo">
            <img src="/images/PNG App Logo.webp" alt="Clear30" className="logo-icon" />
            <span className="logo-text">Clear30</span>
          </Link>
          <nav className="nav-links">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? 'active' : ''}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className="hamburger-btn"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span></span><span></span><span></span>
          </button>
          <a href={appStoreUrl} className="cta-button" target="_blank" rel="noopener">
            Redeem your 3 day trial
          </a>
          <a href={appStoreUrl} className="cta-button-mini" target="_blank" rel="noopener">
            Try for free
          </a>
        </div>
      </header>

      <div
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-backdrop" onClick={() => setMenuOpen(false)} />
        <div className="mobile-menu-panel">
          <div className="mobile-menu-header">
            <span className="logo-text">Menu</span>
            <button
              type="button"
              className="mobile-menu-close"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              &times;
            </button>
          </div>
          <nav className="mobile-nav-links">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={appStoreUrl}
            className="mobile-menu-cta"
            target="_blank"
            rel="noopener"
            onClick={() => setMenuOpen(false)}
          >
            Try for free
          </a>
        </div>
      </div>

      {isMini && <div style={{ height: '80px' }} />}
    </>
  );
}
