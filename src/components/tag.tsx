import type { ComponentType } from 'react';

type Props = {
  name: string;
  icon?: ComponentType;
  variant?: 'large' | 'small';
};

const Tag = ({ name, icon: Icon, variant = 'small' }: Props) => {
  return (
    <span
      className={`${variant === 'large' ? 'px-4 py-3' : 'px-3 py-1'} flex items-center text-sm rounded-md bg-secondary/50 border border-secondary`}
    >
      {Icon && (
        <span
          aria-hidden="true"
          className={`${variant === 'large' ? 'size-5' : 'size-4'} mr-2 inline-flex shrink-0 [&>svg]:size-full`}
        >
          <Icon />
        </span>
      )}
      {name}
    </span>
  );
};

export default Tag;
