interface QuoteProps {
  children: React.ReactNode;
}

export function Quote({ children }: QuoteProps) {
  return (
    <blockquote className="max-w-[680px] mx-auto border-l-2 border-foreground pl-6 my-8">
      <div className="text-[1.125rem] leading-[1.65] text-foreground-muted [&>p]:mt-0 [&>p]:mb-0 [&>p]:max-w-none [&>p]:mx-0">
        {children}
      </div>
    </blockquote>
  );
}
