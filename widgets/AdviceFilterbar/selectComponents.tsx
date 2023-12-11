import { AdvicePetActions } from '@/features';
import { Inputs } from '@/shared/Inputs';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { OptionProps } from 'react-select';
import { OptionItem } from './styled';
export type TOtionStatus = {
  value: string;
  label: string;
};

export const Option: React.FC<OptionProps<TOtionStatus, false>> = props => {
  const dispatch = useAppDispatch();
  const { subcategory } = useAppSelector(state => state.advisePetState);
  const isChecked = subcategory?.includes(props.data.value);
  return (
    <OptionItem
      onClick={() => {
        dispatch(AdvicePetActions.toggleSubcategory(props.data.value));
      }}
    >
      <Inputs.Checkbox value={!!isChecked} onChange={() => {}} />
      <p>{props.data.label}</p>
    </OptionItem>
  );
};
