import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`;

export const Title = styled.div`
  font-size: 120px;
  color: var(--purpule);
`;

export const SubTitle = styled.div`
  color: gray;
  font-size: 24px;
`;

export const Text = styled.div`
  color: white;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const LinkBack = styled(Link)`
  color: black;
  padding: 5px 0;
  font-weight: 550;
  border-bottom: 1px solid;
`;
