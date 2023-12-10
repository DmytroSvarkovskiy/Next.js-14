'use client';
import { AdvicePetActions } from '@/features';
import { Inputs } from '@/shared/Inputs';
import PageWrapper from '@/shared/PageWrapper/PageWrapper';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { ChangeEvent, useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { IconWrap, InputsWrapper, SearchWrap } from './styled';
import { useI18n } from '@/locales/client';

const AdviceFilterBar = () => {
  const t = useI18n();
  const [menuPortalTarget, setMenuPortalTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    typeof window !== 'undefined' && setMenuPortalTarget(document.body);
  }, []);
  const opt = [
    { label: 'fdgg', value: 'dfg' },
    { label: 'dgdfg', value: 'dfg' },
  ];
  const { visibleFilter, search } = useAppSelector(state => state.advisePetState);
  const dispatch = useAppDispatch();
  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(AdvicePetActions.setSearch(e.target?.value));
  };
  return (
    <PageWrapper>
      {visibleFilter ? (
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

          <Inputs.SelectInput
            placeholder={t('selectCategories')}
            height="44px"
            menuPortalTarget={menuPortalTarget || undefined}
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
