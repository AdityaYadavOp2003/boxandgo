'use client';

import dynamic from 'next/dynamic';

const WhatsAppFloat = dynamic(() => import('./WhatsAppFloat'));
const ExitIntentPopup = dynamic(() => import('../forms/ExitIntentPopup'), {
  ssr: false,
});

export default function ClientOverlays() {
  return (
    <>
      <WhatsAppFloat />
      <ExitIntentPopup />
    </>
  );
}
