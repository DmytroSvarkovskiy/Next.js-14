import { OptionProps } from 'react-select';
import { Inputs } from '@/shared/Inputs';
import { OptionItem } from './styled';

export type TOptionsProps = {
  value: string;
  label: string;
};

export const Option: React.FC<OptionProps<any, false>> = ({ data, isSelected, selectOption }) => {
  return (
    <OptionItem onClick={() => selectOption(data)}>
      <Inputs.Checkbox value={isSelected} onChange={() => {}} />
      <p>{data.label}</p>
    </OptionItem>
  );
};
