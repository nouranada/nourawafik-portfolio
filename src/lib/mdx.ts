import { readFile, readdir } from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import type { CaseStudyFrontmatter, ProjectStub } from '@/types';

const CONTENT_DIR = path.join(process.cwd(), 'src/content/case-studies');

export async function getStudySlugs(): Promise<string[]> {
  const files = await readdir(CONTENT_DIR);
  return files.filter((f) => f.endsWith('.mdx')).map((f) => f.replace('.mdx', ''));
}

export async function getSource(slug: string): Promise<string> {
  return readFile(path.join(CONTENT_DIR, `${slug}.mdx`), 'utf8');
}

export async function getFrontmatter(slug: string): Promise<CaseStudyFrontmatter> {
  const source = await getSource(slug);
  const { data } = matter(source);
  return data as CaseStudyFrontmatter;
}

export async function getNextProject(currentSlug: string): Promise<ProjectStub | null> {
  const slugs = await getStudySlugs();

  const stubs = await Promise.all(
    slugs
      .filter((s) => s !== 'sample')
      .map(async (s) => {
        const fm = await getFrontmatter(s);
        return { slug: s, title: fm.title, order: fm.order } satisfies ProjectStub;
      })
  );

  if (stubs.length === 0) return null;

  stubs.sort((a, b) => a.order - b.order);

  const currentIndex = stubs.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return null;

  return stubs[(currentIndex + 1) % stubs.length];
}
