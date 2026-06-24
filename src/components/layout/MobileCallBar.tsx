'use client';

import { Phone, MessageCircle } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/919881343100?text=Hi%20Box%20%26%20Go%20Movers%2C%20I%20need%20a%20quote%20for%20moving%20services.';

export default function MobileCallBar() {
  return (
    <div className="mobile-call-bar">
      <a href="tel:9881343100">
        <Phone size={18} />
        Call Now
      </a>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
        <MessageCircle size={18} />
        WhatsApp
      </a>
    </div>
  );
}
