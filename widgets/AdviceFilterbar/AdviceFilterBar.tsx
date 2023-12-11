'use client';
import { AdvicePetActions } from '@/features';
import { Inputs } from '@/shared/Inputs';
import PageWrapper from '@/shared/PageWrapper/PageWrapper';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { ChangeEvent, useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { IconWrap, InputsWrapper, SearchWrap, selectStyles } from './styled';
import { useCurrentLocale, useI18n } from '@/locales/client';
import useSWR from 'swr';
import { getSubCategories } from '@/features/petСare/api/api';
import { Option } from './selectComponents';
import Select from 'react-select';

const AdviceFilterBar = () => {
  const t = useI18n();
  const locale = useCurrentLocale();
  const dispatch = useAppDispatch();
  const { visibleFilter, search, categories } = useAppSelector(state => state.advisePetState);
  const [menuPortalTarget, setMenuPortalTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    typeof window !== 'undefined' && setMenuPortalTarget(document.body);
  }, []);

  const { data } = useSWR(
    ['getSubcategories', { category: categories || undefined, limit: '100', page: '1' }],
    ([, params]) => getSubCategories(params)
  );
  const subCategoryIndexLang =
    data?.models?.findIndex(item => item.title.find(el => el.lang === locale)) &&
    data?.models?.findIndex(item => item.title.find(el => el.lang === locale)) !== -1
      ? data?.models?.findIndex(item => item.title.find(el => el.lang === locale))
      : 0;

  const optionsSubCategory = data?.models.map(item => ({
    label: item.title[subCategoryIndexLang].value,
    value: item._id,
  }));

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(AdvicePetActions.setSearch(e.target?.value));
  };
  return (
    <PageWrapper>
      {visibleFilter && typeof window !== undefined ? (
        <InputsWrapper>
          <SearchWrap>
            <Inputs.Default
              width="100%"
              $padding="10px 12px 10px 40px"
              placeholder={t('search')}
              value={search}
              onChange={onSearch}
              height="41px"
            />
            <IconWrap>
              <BsSearch />
            </IconWrap>
          </SearchWrap>

          <Select
            isDisabled={!!!categories}
            components={{ Option }}
            styles={selectStyles}
            placeholder={t('selectCategories')}
            // height="44px"
            menuPortalTarget={menuPortalTarget || undefined}
            options={optionsSubCategory}
          />
          <Inputs.SelectInput
            placeholder={t('selectTags')}
            height="44px"
            menuPortalTarget={menuPortalTarget || undefined}
          />
        </InputsWrapper>
      ) : null}
    </PageWrapper>
  );
};
export default AdviceFilterBar;
