import styled from 'styled-components';
import { Button as MButton } from '@mui/material';

export const Container = styled.div`
  width: 100%;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--yellow);
`;

export const Wrap = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-weight: bolder;
`;

export const WrapLinks = styled.div`
  display: flex;
  grid-gap: 20px;
  align-items: center;
`;

interface Props {
  isActive: boolean;
}

export const Link = styled.span`
  color: ${({ isActive }: Props) => (isActive ? 'black' : 'white')};
`;

export const Button = styled(MButton)`
  height: fit-content;
  color: white !important;
`;
