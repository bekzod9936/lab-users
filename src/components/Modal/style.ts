import styled from 'styled-components';
import { Button as MButton } from '@mui/material';

export const Wrap = styled.div`
  display: flex;
  gap: 20px;
`;

export const CancelButton = styled(MButton)`
  height: 56px;
  color: white !important;
  padding: 20px !important;
  background-color: var(--blue) !important;
  &:hover {
    background-color: var(--blue) !important;
  }
`;

export const LogOutButton = styled(MButton)`
  height: 56px;
  color: white !important;
  padding: 20px !important;
  background-color: red !important;
  &:hover {
    background-color: red !important;
  }
`;
