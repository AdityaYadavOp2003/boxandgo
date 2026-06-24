import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  href?: string;
  variant?: 'header' | 'footer' | 'mobile';
  className?: string;
  onDark?: boolean;
}

const sizes = {
  header: {
    width: 240,
    height: 80,
    className: 'h-14 w-auto sm:h-16'
  },
  footer: {
    width: 240,
    height: 80,
    className: 'h-14 w-auto'
  },
  mobile: {
    width: 180,
    height: 60,
    className: 'h-11 w-auto'
  },
} as const;
export default function Logo({
  href = '/',
  variant = 'header',
  className,
  onDark,
}: LogoProps) {
  const { width, height, className: sizeClass } = sizes[variant];

  /**
   * The provided PNG has a white background.
   * - On light backgrounds (solid scrolled navbar, footer): render as-is (white bg blends in).
   * - On dark backgrounds (floating nav, mobile drawer): wrap with a small white rounded
   *   pill container so the logo art is framed cleanly against the dark nav.
   */
  const imageEl = (
    <Image
      src="/logo.png"
      alt="Box & Go Movers"
      width={width}
      height={height}
      className={cn(sizeClass, 'object-contain')}
      priority={variant === 'header' || variant === 'mobile'}
    />
  );

  const wrappedImage = onDark ? (
    <span className="inline-flex items-center bg-white/95 rounded-xl px-2 py-0.5">
      {imageEl}
    </span>
  ) : (
    imageEl
  );

  if (!href) return wrappedImage;

  return (
    <Link
      href={href}
      className={cn('inline-flex items-center shrink-0 min-w-0', className)}
      aria-label="Box & Go Movers home"
    >
      {wrappedImage}
    </Link>
  );
}
