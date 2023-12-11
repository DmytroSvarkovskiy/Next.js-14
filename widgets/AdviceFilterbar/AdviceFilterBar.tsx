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
import { getSubCategories, getTags } from '@/features/petСare/api/api';
import { Option, OptionTags } from './selectComponents';
import Select from 'react-select';

const AdviceFilterBar = () => {
  const t = useI18n();
  const locale = useCurrentLocale();
  const dispatch = useAppDispatch();
  const { visibleFilter, search, categories, subcategory, tags } = useAppSelector(
    state => state.advisePetState
  );
  const [menuPortalTarget, setMenuPortalTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    typeof window !== 'undefined' && setMenuPortalTarget(document.body);
  }, []);

  const { data: subCategory } = useSWR(
    categories
      ? ['getSubcategories', { category: categories || undefined, limit: '100', page: '1' }]
      : null,
    ([, params]) => getSubCategories(params),
    { revalidateOnFocus: false }
  );

  const { data: tagsData } = useSWR(
    ['tags', { limit: '120', page: '1' }],
    ([, params]) => getTags(params),
    { revalidateOnFocus: false }
  );

  const indeLangoptions =
    tagsData?.models.findIndex(item => item.title.find(item => item.lang === locale)) &&
    tagsData?.models.findIndex(item => item.title.find(item => item.lang === locale)) !== -1
      ? tagsData?.models.findIndex(item => item.title.find(item => item.lang === locale))
      : 0;
  const subCategoryIndexLang =
    subCategory?.models?.findIndex(item => item.title.find(el => el.lang === locale)) &&
    subCategory?.models?.findIndex(item => item.title.find(el => el.lang === locale)) !== -1
      ? subCategory?.models?.findIndex(item => item.title.find(el => el.lang === locale))
      : 0;

  const optionsSubCategory = subCategory?.models.map(item => ({
    label: item.title[subCategoryIndexLang].value,
    value: item._id,
  }));

  const optionsTags = tagsData?.models.map(item => ({
    label: item.title[indeLangoptions].value,
    value: item._id,
  }));

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(AdvicePetActions.setSearch(e.target?.value));
  };

  const handleSelectChange = (newValue: unknown, input: 'subcategory' | 'tags') => {
    if (input === 'subcategory') {
      if (!newValue) {
        dispatch(AdvicePetActions.toggleSubcategory(''));
      }
    } else if (input === 'tags') {
      dispatch(AdvicePetActions.toggleTags(''));
    }
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
            menuPortalTarget={menuPortalTarget || undefined}
            options={optionsSubCategory}
            noOptionsMessage={() => t('noOptionsAvailable')}
            isClearable
            onChange={value => handleSelectChange(value, 'subcategory')}
            value={
              subcategory?.length
                ? {
                    value: subcategory.length + '',
                    label: `${t('selectCategories')} ${
                      subcategory?.length && `(${subcategory?.length})`
                    }`,
                  }
                : undefined
            }
          />
          <Select
            components={{ Option: OptionTags }}
            styles={selectStyles}
            placeholder={t('selectTags')}
            menuPortalTarget={menuPortalTarget || undefined}
            options={optionsTags}
            noOptionsMessage={() => t('noOptionsAvailable')}
            isClearable
            onChange={value => handleSelectChange(value, 'tags')}
            value={
              tags?.length
                ? {
                    value: tags.length + '',
                    label: `${t('selectTags')} ${tags?.length && `(${tags?.length})`}`,
                  }
                : undefined
            }
          />
        </InputsWrapper>
      ) : null}
    </PageWrapper>
  );
};
export default AdviceFilterBar;
