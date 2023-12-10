'use client';
import useSWRInfinite from 'swr/infinite';
import { useAppSelector } from '@/shared/hooks';
import { getAdvice } from '@/features/petСare/api/api';
import { Container } from '@/shared/Container/Container';
import { AdviceCard } from '@/entities/AdviceCard/AdviceCard';
import { ArticleListStyled, LoadMore } from './styled';
import { TAdviceResponse } from '@/features/petСare/api/types';
import { useI18n } from '@/locales/client';
import ScrollToTop from 'react-scroll-to-top';
import dynamic from 'next/dynamic';
const Sceleton = dynamic(() => import('@/shared/Sceleton/Sceleton'));

export const ArticleList = () => {
  const t = useI18n();
  const { limit, categories, subcategory, order, search, tags } = useAppSelector(
    state => state.advisePetState
  );

  const getKey = (pageIndex: number, previousPageData: TAdviceResponse) => {
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
        tags: tags ? tags : undefined,
      },
    ];
  };

  const { data, setSize, isLoading } = useSWRInfinite(
    getKey,
    swrArgs => {
      const params = swrArgs[1];
      if (typeof params === 'object') {
        return getAdvice(params);
      }
    },
    { revalidateOnFocus: false, keepPreviousData: true }
  );

  const loadMore = () => {
    setSize(prevSize => prevSize + 1);
    setTimeout(() => {
      window.scrollTo({
        top: window.scrollY + 300,
        behavior: 'smooth',
      });
    }, 300);
  };

  const advices = data?.flatMap(pageData => pageData?.models) || [];
  const totalCount = data?.[0]?.totalCount || 0;
  const isAllLoaded = advices.length >= totalCount;

  return (
    <Container $margin="20px 0 0" $flexDirection="column">
      <ArticleListStyled as="ul" $gap="16px" $flexWrap="wrap">
        {!isLoading ? (
          advices?.map((item, i) => item && <AdviceCard item={item} key={`${item._id}` + i} />)
        ) : (
          <>
            <Sceleton width="320" height="260" />
            <Sceleton width="320" height="260" />
            <Sceleton width="320" height="260" />
          </>
        )}
      </ArticleListStyled>
      <LoadMore onClick={loadMore} disabled={isAllLoaded}>
        {t('loadMore')}
      </LoadMore>
      <ScrollToTop smooth top={600} />
    </Container>
  );
};
