'use client';
import useSWRInfinite from 'swr/infinite';
import { useAppSelector } from '@/shared/hooks';
import { getAdvice } from '@/features/petСare/api/api';
import { Container } from '@/shared/Container/Container';
import { AdviceCard } from '@/entities/AdviceCard/AdviceCard';
import { ArticleListStyled, LoadMore } from './styled';
import { TAdviceParams } from '@/features/petСare/api/types';
import { nanoid } from '@reduxjs/toolkit';
import { useI18n } from '@/locales/client';

export const ArticleList = () => {
  const t = useI18n();
  const { limit, categories, subcategory, order, search, tags } = useAppSelector(
    state => state.advisePetState
  );

  const getKey = (pageIndex: number, previousPageData: any) => {
    if (previousPageData && !previousPageData.models.length) return null;
    return [
      'advices',
      {
        title: search || undefined,
        category: categories ? [categories] : undefined,
        subcategory: subcategory ? subcategory : undefined,
        page: (pageIndex + 1).toString(),
        limit: limit?.toString(),
        order: order?.toString(),
      },
    ];
  };

  const { data, setSize } = useSWRInfinite(
    getKey,
    swrArgs => {
      const params = swrArgs[1];
      if (typeof params === 'object') {
        return getAdvice(params as TAdviceParams);
      }
    },
    { revalidateOnFocus: false, keepPreviousData: true }
  );

  const loadMore = () => {
    setSize(prevSize => prevSize + 1);
  };
  const advices = data ? data.flatMap(pageData => pageData?.models) : [];
  const totalCount = data?.[0]?.totalCount || 0;
  const isAllLoaded = advices.length >= totalCount;

  return (
    <Container $margin="20px 0 0" $flexDirection="column">
      <ArticleListStyled as="ul" $gap="16px" $flexWrap="wrap">
        {advices?.map((item, i) => item && <AdviceCard item={item} key={nanoid()} />)}
      </ArticleListStyled>
      <LoadMore onClick={loadMore} disabled={isAllLoaded}>
        {t('loadMore')}
      </LoadMore>
    </Container>
  );
};
