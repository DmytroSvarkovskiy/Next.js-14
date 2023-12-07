'use client';
import Select from 'react-select';
import { SingleValue, Option } from './selectComponent';
import { selectStylesLang } from './styled';
import { useCurrentLocale, useChangeLocale } from '@/locales/client';

const langOptions = [
  { label: 'ua', value: 'uk' },
  { label: 'en', value: 'en' },
];

export const ChangeLang = () => {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  const onLangChange = (value: unknown) => {
    const newValue = value as { label: string; value: 'uk' | 'en' };
    changeLocale(newValue.value);
  };
  return (
    <Select
      value={langOptions.find(item => item.value === locale)}
      isSearchable={false}
      options={langOptions}
      components={{ Option, SingleValue }}
      styles={selectStylesLang}
      onChange={onLangChange}
    />
  );
};
