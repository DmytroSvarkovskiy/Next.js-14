'use client';
import { BsCheckLg } from 'react-icons/bs';
import { CheckBoxWrap } from './styled';
type TProps = {
  value: boolean;
  onChange: (value: boolean) => void;
};
export const Checkbox = ({ value, onChange }: TProps) => {
  return (
    <CheckBoxWrap onClick={() => onChange(!value)} id={value ? 'checked' : 'uncheked'}>
      {value ? <BsCheckLg /> : ''}
    </CheckBoxWrap>
  );
};
