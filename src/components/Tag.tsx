type Props = {
  name: string;
  icon?: string;
  variant?: 'large' | 'small';
};

const Tag = ({ name, icon, variant = 'small' }: Props) => {
  return (
    <span
      className={`${variant === 'large' ? 'px-4 py-3' : 'px-3 py-1'} flex items-center text-sm rounded-md bg-secondary/50 border border-secondary`}
    >
      {icon && <i className={`mr-2 ${icon}`} />}
      {name}
    </span>
  );
};

export default Tag;
