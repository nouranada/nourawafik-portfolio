import Image from 'next/image';
import { ThumbnailPlaceholder } from '@/components/ui/thumbnail-placeholder';
import { Caption } from './caption';

interface ImageWithCaptionProps {
  src?: string;
  alt: string;
  caption?: string;
}

export function ImageWithCaption({ src, alt, caption }: ImageWithCaptionProps) {
  return (
    <figure className="flex flex-col gap-0">
      {src ? (
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
          />
        </div>
      ) : (
        <ThumbnailPlaceholder label={alt} />
      )}
      {caption && <Caption>{caption}</Caption>}
    </figure>
  );
}
