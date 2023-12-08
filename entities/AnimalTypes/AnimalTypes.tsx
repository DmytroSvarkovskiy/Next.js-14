'use client';
import { getCategories } from '@/features/petСare/api/api';
import Image from 'next/image';
import { CategoryImage, CategoryItem, FilterWrap } from './styled';
import { PageWrapper } from '@/shared/PageWrapper/PageWrapper';
import { useCurrentLocale } from '@/locales/client';
import { TOneCategory } from '@/features/petСare/api/types';
import { useAppSelector, useAppDispatch } from '@/shared/hooks';
import { AdvicePetActions } from '@/features';
import useSWR from 'swr';
import { Sceleton } from '@/shared/Sceleton/Sceleton';

export const AnimalTypes = () => {
  const { categories, visibleFilter } = useAppSelector(state => state.advisePetState);
  const dispatch = useAppDispatch();

  const baseURL = process.env.NEXT_PUBLIC_URL_USER;
  const lang = useCurrentLocale();

  const { data, isLoading } = useSWR(
    ['catogories', { limit: '100', page: '1' }],
    ([, params]) => getCategories(params),
    { revalidateOnFocus: false, keepPreviousData: true }
  );

  const findLanguageIndex = (categories: TOneCategory, locale: string) => {
    const index = categories.title.findIndex(title => title.lang === locale);
    if (index !== -1) {
      return index;
    }
    return 0;
  };
  const toAddCategories = (id: string) => {
    dispatch(AdvicePetActions.setCategory(id === categories ? null : id));
  };
  const toggleVisibleFilter = () => dispatch(AdvicePetActions.setVasibleFilter());
  return (
    <PageWrapper as="ul" $gap="16px" $flexWrap="wrap" $position="relative" $justifyContent="center">
      {!isLoading ? (
        data?.models.map(item => (
          <CategoryItem
            onClick={() => toAddCategories(item._id)}
            key={item._id}
            $active={!!categories && categories === item._id}
          >
            <CategoryImage
              alt="image"
              src={`${baseURL}/public/ads-categories/${item.image}`}
              width={26}
              height={32}
            />
            <p>{item.title[findLanguageIndex(item, lang)].value}</p>
          </CategoryItem>
        ))
      ) : (
        <>
          <Sceleton />
          <Sceleton />
          <Sceleton />
          <Sceleton />
          <Sceleton />
          <Sceleton />
        </>
      )}
      <FilterWrap width="auto" as="li" $margin="0 " onClick={toggleVisibleFilter}>
        {visibleFilter ? (
          <Image alt="filter" src="/filter.svg" width={40} height={40} />
        ) : (
          <Image alt="filter" src="/inactiveFilter.svg" width={40} height={40} />
        )}
      </FilterWrap>
    </PageWrapper>
  );
};
