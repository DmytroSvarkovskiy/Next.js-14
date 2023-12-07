import { OptionProps, SingleValueProps } from 'react-select';
import { LangWrap, Singlevalue } from './styled';

export type LangOption = {
  value: string;
  label: string;
};

export const Option: React.FC<OptionProps<LangOption, false>> = props => {
  return <LangWrap onClick={() => props.selectOption(props.data)}>{props.data.label}</LangWrap>;
};

export const SingleValue: React.FC<SingleValueProps<LangOption, false>> = props => {
  return <Singlevalue>{props.data.label}</Singlevalue>;
};
