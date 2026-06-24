'use client';

import { useEffect } from 'react';

/**
 * Measures `.site-header` and sets `--navbar-height` on :root for hero offset + scroll anchors.
 */
export default function NavHeightSync() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>('.site-header');
    if (!header) return;

    const setHeight = () => {
      document.documentElement.style.setProperty(
        '--navbar-height',
        `${header.offsetHeight}px`
      );
    };

    setHeight();

    const ro = new ResizeObserver(setHeight);
    ro.observe(header);
    window.addEventListener('resize', setHeight);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', setHeight);
    };
  }, []);

  return null;
}
