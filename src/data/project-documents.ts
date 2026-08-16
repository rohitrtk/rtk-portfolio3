import { lazy, type ComponentType, type LazyExoticComponent } from 'react';

const modules = import.meta.glob<{ default: ComponentType }>(
  '../content/projects/*.mdx',
);

export const projectDocuments = new Map<
  string,
  LazyExoticComponent<ComponentType>
>();

for (const [path, loadedDocument] of Object.entries(modules)) {
  const slug = path
    .split('/')
    .at(-1)
    ?.replace(/\.mdx$/, '');

  if (slug) {
    projectDocuments.set(slug, lazy(loadedDocument));
  }
}
