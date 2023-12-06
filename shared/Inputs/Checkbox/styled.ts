import styled from 'styled-components';
export const CheckBoxWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border: ${({ theme }) => theme.borderInputs};
  border-radius: 3px;
  cursor: pointer;
  background-color: transparent;
  &#checked {
    svg {
      width: 16px;
      height: 16px;
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;
