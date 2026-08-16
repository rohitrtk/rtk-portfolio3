import Icons, { type IconKey } from '@/util/icons';
import SkillTag from './skill-tag';

type Props = {
  skillTags: IconKey[];
};

const SkillTagList = ({ skillTags }: Props) => {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {skillTags.map((skill) => {
        const { id, name, icon } = Icons[skill];

        return <SkillTag key={id} name={name} icon={icon} />;
      })}
    </div>
  );
};

export default SkillTagList;
