import { cn } from '@/lib/utils';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';
type HeadingSize = 'display' | 'h1' | 'h2' | 'h3';

interface HeadingProps {
  as?: HeadingLevel;
  size?: HeadingSize;
  children: React.ReactNode;
  className?: string;
}

const sizeClasses: Record<HeadingSize, string> = {
  display: 'text-[3.5rem] leading-[1.1] tracking-[-0.02em] md:text-[2.5rem]',
  h1: 'text-[2.5rem] leading-[1.1] tracking-[-0.01em] md:text-[2rem]',
  h2: 'text-[1.75rem] leading-[1.3] tracking-[-0.01em] md:text-[1.5rem]',
  h3: 'text-[1.25rem] leading-[1.3] tracking-[-0.01em] md:text-[1.125rem]',
};

export function Heading({ as: Tag = 'h2', size, children, className }: HeadingProps) {
  const resolvedSize = size ?? (Tag === 'h1' ? 'h1' : Tag === 'h2' ? 'h2' : 'h3');

  return (
    <Tag
      className={cn(
        'font-medium text-foreground',
        sizeClasses[resolvedSize],
        className
      )}
    >
      {children}
    </Tag>
  );
}
