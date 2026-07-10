import type { IconKey } from '@/util/icons';

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  fit?: 'cover' | 'contain';
  position?: string;
};

export type Project = {
  title: string;
  description: string;
  tags: IconKey[];
  coverImage?: ProjectImage;
  images?: ProjectImage[];
  link?: string;
  proprietary?: boolean;
};
