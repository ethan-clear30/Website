'use client';

import { useState, useEffect, useCallback } from 'react';

export default function ComingSoonModal() {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) close();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, close]);

  useEffect(() => {
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <>
      {/* Trigger link rendered inline via the partner card */}
      <a
        href="#"
        className="employers-coming-soon-trigger"
        onClick={(e) => {
          e.preventDefault();
          open();
        }}
      >
        Learn more
      </a>

      <div
        className={`coming-soon-overlay${isOpen ? ' is-open' : ''}`}
        aria-hidden={!isOpen}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="coming-soon-modal">
          <h3>Coming Soon</h3>
          <p>Employer partnerships are on the way. Check back soon!</p>
          <button type="button" className="coming-soon-close" onClick={close}>
            Got it
          </button>
        </div>
      </div>
    </>
  );
}
