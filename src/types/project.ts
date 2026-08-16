import type { IconKey } from '@/util/icons';

export type Skill = IconKey;

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  fit?: 'cover' | 'contain';
  position?: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: Skill[];
  coverImage?: ProjectImage;
  images?: ProjectImage[];
  link?: string;
  proprietary?: boolean;
  liveLink?: string;
};
