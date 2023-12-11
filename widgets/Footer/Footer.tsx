import Container from '@/shared/Container/Container';
import PageWrapper from '@/shared/PageWrapper/PageWrapper';
import { FooterContainer, FooterWrap, LinksWrap, TopWrap } from './styled';
import Image from 'next/image';
import Link from 'next/link';
import { getI18n } from '@/locales/server';

export const Footer = async () => {
  const t = await getI18n();
  return (
    <FooterContainer>
      <PageWrapper>
        <FooterWrap>
          <TopWrap>
            <Container width="auto" $margin="0">
              <Image alt="Logo_Footer" width={200} height={55} src="/DarkLogo.svg" />
            </Container>
            <Container width="auto" $margin="0" $gap="16px">
              <Link href="/">
                <Image alt="App_store" width={120} height={40} src="/AppStore.svg" />
              </Link>
              <Link href="/">
                <Image alt="Google_Play" width={120} height={40} src="/GooglePlay.svg" />
              </Link>
            </Container>
          </TopWrap>
          <LinksWrap>
            <a href="/">{t('personalDataProtectionPolicy')}</a>
            <a href="/">{t('termsOfUse')}</a>
            <a href="/">{t('privacyNotice')}</a>
          </LinksWrap>
          <p>© 2023 PetsHealth</p>
        </FooterWrap>
      </PageWrapper>
    </FooterContainer>
  );
};
