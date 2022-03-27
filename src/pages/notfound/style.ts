import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from 'services/style';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 30%;
  height: 50%;
  padding: 24px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--yellow);
  @media (max-width: ${device.mobile}) {
    width: 90%;
  }
`;

export const Title = styled.div`
  font-size: 120px;
  color: var(--purpule);
  text-align: center;
`;

export const SubTitle = styled.div`
  color: gray;
  font-size: 24px;
  text-align: center;
`;

export const Text = styled.div`
  color: white;
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

export const LinkBack = styled(Link)`
  color: black;
  font-weight: 550;
  border-bottom: 1px solid;
`;
