import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const PHONE = '9881343100';
export const WHATSAPP_URL = `https://wa.me/91${PHONE}?text=${encodeURIComponent('Hi Box & Go Movers, I need a quote for moving services.')}`;
export const PHONE_URL = `tel:${PHONE}`;
export const EMAIL = 'boxandgomovers@gmail.com';
export const EMAIL_URL = `mailto:${EMAIL}`;
export const ADDRESS = 'Near Bandhan Celebration, Wathoda Nagpur - 440035';
export const SITE_URL = 'https://boxandgomovers.in';
export const COMPANY_NAME = 'Box & Go Movers';
export const TAGLINE = 'Shifting made simple, Box karo, Go karo!';
