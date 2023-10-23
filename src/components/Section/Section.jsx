import { SectionBox } from './Section.styled';
import { Title } from './Title/Title';

export const Section = ({ title, children, tagItem }) => {
  return (
    <SectionBox>
      <Title tagItem={tagItem} title={title} />
      {children}
    </SectionBox>
  );
};
