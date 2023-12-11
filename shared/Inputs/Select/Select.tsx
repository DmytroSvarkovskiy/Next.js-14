import Select, { CSSObjectWithLabel, ControlProps, OptionProps } from 'react-select';
import { ErrorP, SelectWrap } from './styled';
import { TSelectProps } from './types';

export const SelectInput = ({
  width = '232px',
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
  noOptionsMessage,
  required,
}: TSelectProps) => {
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
      boxShadow: state.isFocused || state.menuIsOpen ? '0 0 0 1px #0086BF' : undefined,
      border: state.isFocused || state.menuIsOpen ? '1px solid #0086BF' : undefined,
      '&:hover': {
        border: state.isFocused || state.menuIsOpen ? '1px solid #0086BF' : undefined,
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
      color: '#0086BF',
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
        ? '#9DADBC'
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
        required={required}
        menuPortalTarget={menuPortalTarget}
        options={options}
        noOptionsMessage={() => noOptionsMessage || ''}
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
