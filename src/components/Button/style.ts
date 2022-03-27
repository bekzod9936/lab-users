import { Button } from '@mui/material';
import styled, { css } from 'styled-components';

interface Props {
  disableStyle: boolean;
}

const disabledstyle = css`
  height: 50px;
  font-weight: 550;
  border-radius: 4px;
  background-color: gray;
  cursor: not-allowed !important;
`;

const style = css`
  background-color: var(--yellow);
`;

export const WrapButton = styled.div`
  ${({ disableStyle }: Props) => (disableStyle ? disabledstyle : style)}
`;

export const MButton = styled(Button)`
  width: 100%;
  height: 56px;
  color: white !important;
  background-color: inherit !important;
`;
