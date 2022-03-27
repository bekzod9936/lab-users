import styled from 'styled-components';
import { device } from 'services/style';

export const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

export const Wrap = styled.div`
  overflow: auto;
  width: 100%;
  height: 100%;
  padding: 10px 5%;
`;

export const WrapContent = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, minmax(30%, 1fr));
  @media (max-width: ${device.mobile}) {
    grid-template-columns: minmax(100%, 1fr);
    padding-right: 15px;
    grid-gap: 25px;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    grid-template-columns: repeat(2, minmax(40%, 1fr));
  }
  @media (min-width: ${device.laptop}) {
    grid-template-columns: repeat(4, minmax(20%, 1fr));
    padding-right: 25px;
    grid-gap: 35px;
  }
`;

export const WrapSpinner = styled.div`
  width: 90%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  width: 90%;
  font-size: 25px;
  font-weight: 900;
  margin-top: 10px;
`;
