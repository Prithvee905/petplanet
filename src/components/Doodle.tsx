import type { SVGProps } from 'react';
import { cn } from '../lib/utils';
import { PawPrint, Dog } from 'lucide-react';

export type DoodleType = 'paw' | 'bone' | 'swirl' | 'arrow' | 'sparkle' | 'dog';

interface DoodleProps extends SVGProps<SVGSVGElement> {
  type: DoodleType;
  className?: string;
}

export function Doodle({ type, className, ...props }: DoodleProps) {
  // Common classes: absolute positioning, non-interactive, visible on all screens with clear opacity
  const baseClasses = "absolute pointer-events-none opacity-50 text-orange";

  switch (type) {
    case 'dog':
      return (
        <Dog className={cn(baseClasses, className)} {...(props as any)} />
      );
    case 'paw':
      return (
        <PawPrint className={cn(baseClasses, className)} {...(props as any)} />
      );
    case 'bone':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn(baseClasses, className)} {...props}>
          <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-5 5c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c0 .28.22.5.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5l5-5Z" />
        </svg>
      );
    case 'swirl':
      return (
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className={cn(baseClasses, className)} {...props}>
          <path d="M 20 100 Q 50 20 100 100 T 180 100" />
          <path d="M 90 90 Q 120 10 150 70" />
        </svg>
      );
    case 'arrow':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn(baseClasses, className)} {...props}>
          <path d="M8 4l-4 4 4 4" />
          <path d="M4 8h10c3 0 6 3 6 6" />
        </svg>
      );
    case 'sparkle':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={cn(baseClasses, className)} {...props}>
          <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
          <path d="M19 15L19.5 17.5L22 18L19.5 18.5L19 21L18.5 18.5L16 18L18.5 17.5L19 15Z" />
          <path d="M5 4L5.5 6.5L8 7L5.5 7.5L5 10L4.5 7.5L2 7L4.5 6.5L5 4Z" />
        </svg>
      );
    default:
      return null;
  }
}
