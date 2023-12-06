import Select, { CSSObjectWithLabel, ControlProps, OptionProps } from 'react-select';
import { ErrorP, SelectWrap } from './styled';
import { TSelectProps } from './types';
import { useI18n } from '@/locales/client';
import { getCurrentLocale } from '@/locales/server';

export const SelectInput = ({
  width = '335px',
  height = '44px',
  onChange,
  value,
  options,
  error,
  label,
  disabled = false,
  placeholder,
  defaultValue,
  isClearable = false,
  menuPortalTarget,
}: TSelectProps) => {
  const locale = getCurrentLocale();
  // const t = useI18n();

  const selectStyles = {
    valueContainer: (provided: CSSObjectWithLabel) => ({
      ...provided,
      padding: '0px',

      height,
      width,
    }),

    control: (
      provided: CSSObjectWithLabel,
      state: ControlProps<{ label: string; value: string }>
    ) => ({
      ...provided,
      height,
      width,
      padding: ' 0 4px',
      borderRadius: '8px',
      boxShadow: state.isFocused || state.menuIsOpen ? '0 0 0 1px #FD835D' : undefined,
      border: state.isFocused || state.menuIsOpen ? '1px solid #FD835D' : undefined,
      '&:hover': {
        border: state.isFocused || state.menuIsOpen ? '1px solid #FD835D' : undefined,
      },
    }),

    indicatorSeparator: (provided: CSSObjectWithLabel) => ({
      ...provided,
      display: 'none',
    }),

    dropdownIndicator: (provided: CSSObjectWithLabel) => ({
      ...provided,
      padding: '0',
      display: 'flex',
      color: '#FD835D',
    }),

    menu: (base: CSSObjectWithLabel) => ({
      ...base,
      width,
      overflow: 'auto',
    }),

    option: (
      provided: CSSObjectWithLabel,
      state: OptionProps<{ label: string; value: string }>
    ) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? '#646369'
        : state.isFocused
        ? '#FD835D'
        : provided.backgroundColor,
      color: state.isSelected || state.isFocused ? 'white' : provided.color,
      ':active': {
        backgroundColor: state.isSelected ? '#646369' : provided.backgroundColor,
        color: state.isSelected ? 'white' : provided.color,
      },
    }),

    singleValue: (provided: CSSObjectWithLabel) => ({
      ...provided,
      color: '#646369',
    }),
  };

  return (
    <SelectWrap width={width} height={height}>
      {label && <p>{label}</p>}
      <Select
        menuPortalTarget={menuPortalTarget}
        options={options}
        // noOptionsMessage={() => t('noOptionsAvailable')}
        styles={selectStyles}
        onChange={onChange}
        classNamePrefix="select"
        value={value}
        className="react-select"
        placeholder={placeholder}
        isDisabled={disabled}
        defaultValue={defaultValue}
        isClearable={isClearable}
      />
      {error && <ErrorP className="error">{error}</ErrorP>}
    </SelectWrap>
  );
};
