'use client';
import { TOneAdvice } from '@/features/petСare/api/types';
import { ArticleWrapper } from './styled';
import ScrollToTop from 'react-scroll-to-top';
import { useCurrentLocale, useI18n } from '@/locales/client';

export const Article = ({ data }: { data: TOneAdvice }) => {
  const lang = useCurrentLocale();
  const t = useI18n();

  const indexLang = data?.description.findIndex(title => title.lang === lang) ?? 0;

  const text = data?.description[indexLang]?.value;
  return (
    <ArticleWrapper>
      {text ? (
        <article dangerouslySetInnerHTML={{ __html: text }} />
      ) : (
        <p>{t('noContentAvailable')}</p>
      )}
      <ScrollToTop smooth top={600} />
    </ArticleWrapper>
  );
};
