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
              <Link target="_blank" href="/">
                <Image alt="App_store" width={120} height={40} src="/AppStore.svg" />
              </Link>
              <Link
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.petshealthapp&hl=uk&gl=US&pli=1"
              >
                <Image alt="Google_Play" width={120} height={40} src="/GooglePlay.svg" />
              </Link>
            </Container>
          </TopWrap>
          <LinksWrap>
            <Link target="_blank" href="/protectionPolicy">
              {t('personalDataProtectionPolicy')}
            </Link>
            <Link target="_blank" href="/termsOfUse">
              {t('termsOfUse')}
            </Link>
            <Link target="_blank" href="/privacyNotice">
              {t('privacyNotice')}
            </Link>
          </LinksWrap>
          <p>© 2023 PetsHealth</p>
        </FooterWrap>
      </PageWrapper>
    </FooterContainer>
  );
};
