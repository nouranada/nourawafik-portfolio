import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { ProjectImage } from '@/components/ui/project-image';

function ArHero() {
  return (
    <section aria-label="مقدمة" className="py-20 md:py-32">
      <Container>
        <div className="flex flex-col gap-8 max-w-[760px]">
          <div className="flex flex-col gap-3">
            <h1 className="text-[2.5rem] font-medium leading-[1.1] tracking-[-0.02em] text-foreground md:text-[3.5rem]">
              نورا وفيق
            </h1>
            <p className="text-[1.125rem] leading-[1.65] text-foreground-muted">
              مصممة منتجات رقمية
            </p>
          </div>

          <p className="text-[1rem] leading-[1.65] text-foreground max-w-[560px]">
            أصمم أنظمة تصميم وتطبيقات SaaS بالعربي والإنجليزي — للقطاعات الصحية والتقنية ومنصات
            الذكاء الاصطناعي. شغلي الحالي مع شركة في الإمارات، على منتجات تخدم السعودية ومصر
            والولايات المتحدة. مقري في القاهرة.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href="/ar#work" variant="primary">
              تصفحوا أعمالي
            </Button>
            <Button href="mailto:hello@nourawafik.com" variant="ghost" external>
              تواصلوا معي
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

const arProjects = [
  {
    slug: 'dayratna',
    title: 'دايرتنا',
    body: 'منصة عربية للدعم النفسي تخدم السعودية ومصر. بنيت نظام التصميم من الصفر — يخدم اللغتين العربية والإنجليزية، الويب والموبايل، الوضعين الفاتح والغامق. أقود التصميم مع مصممة جونيور بتشتغل على نسخة الويب تحت إشرافي.',
    thumbAlt: "Da'eratna platform — circle detail screen in Arabic showing categories and theme picker",
  },
  {
    slug: 'kemeclinic',
    title: 'KemeClinic',
    body: 'منصة طبية أمريكية للعلاج النفسي عن بُعد. أصمم وحدي كل الواجهات لأربعة أنواع مستخدمين (إدارة، أطباء، مرضى، موظفين). المنتج حالياً في الإنتاج بيخدم أكتر من 200 مستخدم نشط.',
    thumbAlt: 'KemeClinic provider dashboard',
  },
  {
    slug: 'got-ai',
    title: 'Got-AI',
    body: 'منصة توظيف بمساعدة الذكاء الاصطناعي. بنيت تجربة المستخدم لاثنين من المساعدين الذكيين — واحد للـ recruiters وواحد للـ candidates. التحدي الأكبر كان تصميم قرارات AI تقدر الشركات تشرحها قانونياً.',
    thumbAlt: 'Got-AI Finn recruiter view showing candidate score with reasoning',
  },
];

function ArWork() {
  return (
    <section id="work" aria-labelledby="work-heading" className="py-20 md:py-32 border-t border-border">
      <Container>
        <h2
          id="work-heading"
          className="text-[1.5rem] font-medium leading-[1.2] tracking-[-0.015em] text-foreground mb-4"
        >
          لمحة عن أعمالي الحالية
        </h2>
        <p className="text-[1rem] leading-[1.65] text-foreground-muted max-w-[560px] mb-16">
          أشتغل دلوقتي على ثلاث منتجات في مجالات مختلفة. كل واحد منهم بيحل مشكلة مختلفة، لكن
          كلهم بيشتركوا في نفس الفلسفة: التصميم الجاد للمستخدمين الجادين.
        </p>

        <ul className="flex flex-col divide-y divide-border list-none" role="list">
          {arProjects.map((project, i) => (
            <li key={project.slug}>
              <div className="py-10 md:py-14">
                <div className="flex flex-col gap-6 md:flex-row md:gap-16">
                  <div className="flex flex-col gap-4 flex-1">
                    <p className="font-mono text-[0.8125rem] text-foreground-subtle">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="text-[1.25rem] font-medium leading-[1.3] tracking-[-0.01em] text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-[1rem] leading-[1.65] text-foreground-muted max-w-[480px]">
                      {project.body}
                    </p>
                    <Link
                      href={`/work/${project.slug}`}
                      className="text-[0.875rem] text-foreground-muted hover:text-foreground transition-colors duration-150 w-fit"
                    >
                      اقرأوا الـ case study ←
                    </Link>
                  </div>
                  <div className="md:w-[380px] shrink-0 overflow-hidden bg-surface border border-border">
                    <ProjectImage slug={project.slug} variant="thumb" alt={project.thumbAlt} priority={i === 0} />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function ArAbout() {
  return (
    <section id="about" aria-labelledby="about-ar-heading" className="py-20 md:py-32 border-t border-border">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:gap-24">
          <h2
            id="about-ar-heading"
            className="text-[0.8125rem] font-mono text-foreground-subtle shrink-0 md:w-32 md:pt-1"
          >
            نبذة عني
          </h2>

          <div className="flex flex-col gap-6 max-w-[560px]">
            <p className="text-[1rem] leading-[1.65] text-foreground-muted">
              أنا نورا، مصممة منتجات مقري القاهرة. عندي سنتين وأربع شهور في تصميم المنتجات الرقمية،
              وأربع سنوات إضافية في التصميم البصري والـ branding. شغلي بيغطي كامل دورة التصميم — من
              البحث وفهم المستخدمين، لبناء أنظمة التصميم، للتفاصيل الدقيقة في التفاعل والـ UI.
            </p>

            <p className="text-[1rem] leading-[1.65] text-foreground-muted">
              متخصصة في منتجات SaaS الـ data-heavy، تطبيقات الصحة النفسية والطبية، ومنتجات الذكاء
              الاصطناعي. الخلفية البصرية والـ branding بتساعدني أوصّل قرارات التصميم بوضوح للفرق غير
              المصممة.
            </p>

            <p className="text-[1rem] leading-[1.65] text-foreground-muted">
              ثنائية اللغة (عربي وإنجليزي)، وعندي خبرة عميقة في تصميم الـ Arabic UX — من الـ RTL
              والـ bidirectional text، لاختيار الأرقام (عربية مقابل لاتينية) حسب السياق، لتصميم
              الأزواج البصرية بين الخطين العربي والإنجليزي.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ArContact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 md:py-32 border-t border-border"
    >
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:gap-24">
          <h2
            id="contact-heading"
            className="text-[0.8125rem] font-mono text-foreground-subtle shrink-0 md:w-32 md:pt-1"
          >
            تواصل
          </h2>

          <div className="flex flex-col gap-6 max-w-[560px]">
            <h3 className="text-[1.5rem] font-medium leading-[1.2] tracking-[-0.015em] text-foreground">
              للوظائف والمشاريع
            </h3>
            <p className="text-[1rem] leading-[1.65] text-foreground-muted">
              متاحة حالياً للوظائف بدوام كامل.
            </p>
            <a
              href="mailto:hello@nourawafik.com"
              className="text-[1.25rem] font-medium leading-[1.3] tracking-[-0.01em] text-foreground hover:opacity-70 transition-opacity duration-150 w-fit"
            >
              hello@nourawafik.com
            </a>
            <div className="flex flex-col gap-2">
              <a
                href="https://linkedin.com/in/nourawafik"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-[0.875rem] text-foreground-muted hover:text-foreground transition-colors duration-150 w-fit"
              >
                <span className="font-mono text-foreground-subtle">لينكدإن</span>
                <span className="group-hover:underline underline-offset-2">
                  linkedin.com/in/nourawafik
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function ArPage() {
  return (
    <>
      <ArHero />
      <ArWork />
      <ArAbout />
      <ArContact />
    </>
  );
}
