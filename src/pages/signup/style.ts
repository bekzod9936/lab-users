import styled from 'styled-components';
import { device } from 'services/style';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .MuiOutlinedInput-root {
    border-color: red !important;
  }
`;

export const Wrap = styled.div`
  width: 33vw;
  header {
    color: var(--yellow);
    font-size: 24px;
    font-weight: bold;
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
  @media (max-width: ${device.mobile}) {
    width: 90%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
