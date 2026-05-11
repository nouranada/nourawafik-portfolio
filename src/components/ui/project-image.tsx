import Image from 'next/image';

const VARIANT_CONFIG = {
  thumb: { width: 1600, height: 1200, sizes: '(max-width: 768px) 100vw, 600px' },
  hero:  { width: 1600, height: 900,  sizes: '(max-width: 1200px) 100vw, 1200px' },
} as const;

interface ProjectImageProps {
  slug: string;
  variant: 'thumb' | 'hero';
  alt: string;
  priority?: boolean;
}

export function ProjectImage({ slug, variant, alt, priority = false }: ProjectImageProps) {
  const { width, height, sizes } = VARIANT_CONFIG[variant];
  return (
    <Image
      src={`/work/${slug}-${variant}.png`}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      className="w-full h-auto block"
    />
  );
}
