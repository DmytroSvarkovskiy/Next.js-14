'use client';
import Select from 'react-select';
import { SingleValue, Option } from './selectComponent';
import { selectStylesLang } from './styled';
import { useCurrentLocale, useChangeLocale, useI18n } from '@/locales/client';
import { useEffect, useState } from 'react';

export const ChangeLang = () => {
  const locale = useCurrentLocale();
  const t = useI18n();
  const changeLocale = useChangeLocale();
  const [menuPortalTarget, setMenuPortalTarget] = useState<HTMLElement | null>(null);

  const langOptions = [
    { label: t('languages.uk'), value: 'uk' },
    { label: t('languages.en'), value: 'en' },
  ];
  useEffect(() => {
    setMenuPortalTarget(document.body);
  }, []);

  const onLangChange = (value: unknown) => {
    const newValue = value as { label: string; value: 'uk' | 'en' };
    changeLocale(newValue.value);
  };

  return (
    <Select
      menuPortalTarget={menuPortalTarget}
      value={langOptions.find(item => item.value === locale)}
      isSearchable={false}
      options={langOptions}
      components={{ Option, SingleValue }}
      styles={selectStylesLang}
      onChange={onLangChange}
      instanceId="32"
    />
  );
};
