export const Title = ({ title, tagItem }) => {
  const Tag = tagItem || 'h2';
  return <Tag>{title}</Tag>;
};
