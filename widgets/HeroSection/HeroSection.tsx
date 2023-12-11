import { HeadingTitle, HeroSectionWrap } from './styled';
import { THeroSectionTypes } from './types';
import { Header } from '@/widgets/Header/Header';

const HeroSection = ({ filterBar, text }: THeroSectionTypes) => {
  return (
    <HeroSectionWrap $flexDirection="column">
      <Header />

      <HeadingTitle>
        <h1>{text.split(' ').slice(0, 4).join(' ')}</h1>
        <h1 className="blue">{text.split(' ').slice(4, text.split(' ').length).join(' ')}</h1>
      </HeadingTitle>
      {filterBar}
    </HeroSectionWrap>
  );
};
export default HeroSection;
