'use client';

import PageWrapper from '@/shared/PageWrapper/PageWrapper';
import { FormContainer, FormWrapper, ImageWrap } from './styled';
import useSWR from 'swr';
import { getCategories } from '@/features/petСare/api/api';
import { useCurrentLocale, useI18n } from '@/locales/client';
import { Inputs } from '@/shared/Inputs';
import { TOneCategory } from '@/features/petСare/api/types';
import Image from 'next/image';

export const SubscriptionForm = () => {
  const t = useI18n();
  const locale = useCurrentLocale();
  const findLanguageIndex = (categories: TOneCategory) => {
    const index = categories.title.findIndex(title => title.lang === locale);
    if (index !== -1) {
      return index;
    }
    return 0;
  };
  const { data, isLoading } = useSWR(
    ['catogories', { limit: '100', page: '1' }],
    ([, params]) => getCategories(params),
    { revalidateOnFocus: false, keepPreviousData: true }
  );
  return (
    <PageWrapper>
      <FormWrapper>
        <FormContainer>
          <h3>{t('subscribeToNewsletter')} 💙</h3>
          <p>{t('getInterestingArticlesFromPetsHealth')}</p>
        </FormContainer>
        <ImageWrap>
          <Image src="/catDog.svg" height={240} width={430} alt="animals" />
        </ImageWrap>
      </FormWrapper>
    </PageWrapper>
  );
};
