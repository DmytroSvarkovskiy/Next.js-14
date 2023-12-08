import ContentLoader from 'react-content-loader';
type TProps = {
  width?: string;
  height?: string;
};
export const Sceleton: React.FC<TProps> = ({ height = '44px', width = '134px' }) => (
  <ContentLoader
    speed={1}
    width={parseInt(width)}
    height={parseInt(height)}
    viewBox={`0 0 ${parseInt(width)} ${parseInt(height)}`}
    backgroundColor="#f3f2f2"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="8" ry="8" width={parseInt(width)} height={parseInt(height)} />
  </ContentLoader>
);
