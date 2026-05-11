import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section aria-label="Introduction" className="py-20 md:py-32">
      <Container>
        <div className="flex flex-col gap-8 max-w-[760px]">
          <div className="flex flex-col gap-3">
            <h1 className="text-[2.5rem] font-medium leading-[1.1] tracking-[-0.02em] text-foreground md:text-[3.5rem]">
              Product Designer
            </h1>
            <p className="text-[1.125rem] leading-[1.65] text-foreground-muted">
              SaaS, healthtech, AI tools
            </p>
          </div>

          <p className="text-[1rem] leading-[1.65] text-foreground max-w-[560px]">
            I design data-heavy SaaS — dashboards, mobile apps, and AI tools — for healthtech and HR
            tech teams. Bilingual (Arabic/English). Based in Cairo, currently working with a UAE-based
            team on products serving the Gulf, Egypt, and the US.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href="/#work" variant="primary">
              See selected work
            </Button>
            <Button href="/#contact" variant="ghost">
              Get in touch
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
