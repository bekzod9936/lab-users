import styled from 'styled-components';
import { Link as RLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const CardWrap = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  margin: 0 auto;
  overflow: hidden;
  min-height: 280px;
  border-radius: 6px;
  background: #ffffff;
  flex-direction: column;
  box-shadow: 1px 1px 14px var(--yellow);
`;

export const Header = styled.div`
  height: 100px;
  background: var(--yellow);
`;

export const CardImg = styled.div`
  width: 100px;
  height: 90px;
  margin: 0 auto;
  position: relative;
`;

export const CardBody = styled.div`
  padding: 50px 30px 30px;
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const UserName = styled.div`
  span {
    padding: 5px;
    font-size: 18px;
    font-weight: 600;
  }
`;

export const Img = styled(LazyLoadImage)`
  bottom: -49px;
  object-fit: fill;
  border-radius: 50%;
  user-select: none;
  position: absolute;
  border: 4px solid white;
`;

export const Link = styled(RLink)`
  color: white;
  margin-top: 10px;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: var(--yellow);
`;
