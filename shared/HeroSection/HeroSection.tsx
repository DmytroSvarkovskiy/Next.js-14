import { Container } from '../Container/Container';
import { HeroSectionWrap } from './styled';
import { THeroSectionTypes } from './types';

export const HeroSection = ({ filterBar, text }: THeroSectionTypes) => {
  return (
    <HeroSectionWrap>
      <Container $flexDirection="column" $alignItems="center">
        <h1>{text.split(' ').slice(0, 4).join(' ')}</h1>
        <h1 className="blue">{text.split(' ').slice(4, text.split(' ').length).join(' ')}</h1>
      </Container>
      <Container width="auto" $alignItems="center">
        {filterBar}
      </Container>
    </HeroSectionWrap>
  );
};
