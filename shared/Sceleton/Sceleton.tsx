import ContentLoader from 'react-content-loader';

type TProps = {
  width?: string;
  height?: string;
};
const Sceleton: React.FC<TProps> = ({ height = '44', width = '140' }) => (
  <ContentLoader
    speed={2}
    width={parseInt(width)}
    height={parseInt(height)}
    viewBox={`0 0 ${parseInt(width)} ${parseInt(height)}`}
    backgroundColor="#f3f2f2"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="8" ry="8" width={parseInt(width)} height={parseInt(height)} />
  </ContentLoader>
);
export default Sceleton;
