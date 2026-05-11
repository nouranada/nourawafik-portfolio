interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="mt-16 md:mt-24">
      <h2 className="max-w-[680px] mx-auto text-[1.75rem] font-medium leading-[1.3] tracking-[-0.01em] text-foreground mb-6 md:text-[1.75rem]">
        {title}
      </h2>
      {children}
    </section>
  );
}
