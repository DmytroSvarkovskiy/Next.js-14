import { I18nProviderClient } from '@/locales/client';
import { HeadingTitle, HeroSectionWrap } from './styled';
import { THeroSectionTypes } from './types';
import { Header } from '@/widgets/Header/Header';
import { getCurrentLocale } from '@/locales/server';
import { Container } from '@/shared/Container/Container';

export const HeroSection = ({ filterBar, text }: THeroSectionTypes) => {
  const locale = getCurrentLocale();
  return (
    <HeroSectionWrap $flexDirection="column">
      <I18nProviderClient locale={locale}>{<Header />}</I18nProviderClient>
      <HeadingTitle>
        <h1>{text.split(' ').slice(0, 4).join(' ')}</h1>
        <h1 className="blue">{text.split(' ').slice(4, text.split(' ').length).join(' ')}</h1>
      </HeadingTitle>
      <Container width="auto" $alignItems="center">
        {filterBar}
      </Container>
    </HeroSectionWrap>
  );
};
