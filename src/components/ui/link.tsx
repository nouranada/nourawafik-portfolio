import NextLink from 'next/link';
import { cn } from '@/lib/utils';

interface LinkProps {
  href: string;
  external?: boolean;
  underline?: boolean;
  muted?: boolean;
  children: React.ReactNode;
  className?: string;
  'aria-label'?: string;
}

export function Link({ href, external, underline = true, muted, children, className, 'aria-label': ariaLabel }: LinkProps) {
  const classes = cn(
    'transition-opacity duration-150 hover:opacity-70',
    underline && 'underline underline-offset-4 decoration-border-strong hover:decoration-foreground',
    muted ? 'text-foreground-muted' : 'text-foreground',
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </NextLink>
  );
}
