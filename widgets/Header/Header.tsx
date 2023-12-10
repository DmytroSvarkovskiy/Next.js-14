'use client';
import { useI18n } from '@/locales/client';
import { ButtonClose, HeaderWrap, LinkWrap, Logo, LogoLink, BurgerMenu } from './styled';
import { usePathname } from 'next/navigation';
import { ChangeLang } from './ui/ChangeLang';
import { IoMdClose } from 'react-icons/io';
import { MouseEvent, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useRouter } from 'next/navigation';
import PageWrapper from '@/shared/PageWrapper/PageWrapper';
import Container from '@/shared/Container/Container';
import dynamic from 'next/dynamic';

export const Header = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);

  const router = useRouter();

  const openBurger = () => setVisibleMenu(true);
  const closeBurger = () => setVisibleMenu(false);

  const pathname = usePathname().split('/')[2];
  const t = useI18n();

  const onLinkClick = (e: MouseEvent<HTMLSpanElement>) => {
    const link = e.currentTarget.id;
    router.push(link);
    visibleMenu && closeBurger();
  };

  return (
    <PageWrapper>
      <HeaderWrap $alignItems="center">
        <Container as="nav" $alignItems="center">
          <LogoLink href="/">
            <Logo alt="logo" src="/Logo.svg" width={181} height={60} priority />
          </LogoLink>
          {!visibleMenu && (
            <BurgerMenu onClick={openBurger}>
              <RxHamburgerMenu />
            </BurgerMenu>
          )}

          <LinkWrap $visible={visibleMenu}>
            <span onClick={onLinkClick} className={!pathname ? 'active' : 'inactive'} id="/">
              {t('functions')}
            </span>
            <span
              onClick={onLinkClick}
              className={pathname === 'features' ? 'active' : 'inactive'}
              id="/features"
            >
              {t('features')}
            </span>
            <span
              onClick={onLinkClick}
              className={pathname === 'underdDevelopment' ? 'active' : 'inactive'}
              id="/underdDevelopment"
            >
              {t('inDevelopment')}
            </span>
            <span
              onClick={onLinkClick}
              className={pathname === 'contacts' ? 'active' : 'inactive'}
              id="/contacts"
            >
              {t('contacts')}
            </span>
            <span
              onClick={onLinkClick}
              className={pathname === 'advices' ? 'active' : 'inactive'}
              id="/advices"
            >
              {t('careTips')}
            </span>
            <ChangeLang />
            <ButtonClose onClick={closeBurger}>
              <IoMdClose />
            </ButtonClose>
          </LinkWrap>
        </Container>
      </HeaderWrap>
    </PageWrapper>
  );
};
