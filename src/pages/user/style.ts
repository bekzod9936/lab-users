import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 24px 5%;
  justify-content: center;
`;

export const WrapContent = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const Header = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  padding: 24px;
  border-radius: 10px;
  align-items: center;
  background-color: var(--yellow);
`;

export const Img = styled(LazyLoadImage)`
  object-fit: fill;
  user-select: none;
  border-radius: 10px;
  border: 4px solid white;
`;

export const WrapImg = styled.div`
  width: 150px;
  height: 100%;
`;

export const UserName = styled.div`
  span {
    font-size: 30px;
    font-weight: 900;
    padding: 5px 10px 5px 0;
  }
`;

export const UserInfo = styled.div`
  height: 100%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LinkBack = styled(Link)`
  color: black;
  font-weight: 550;
  border-bottom: 1px solid;
  width: fit-content;
`;

export const WrapSinner = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
