import NavBar from 'components/NavBar';
import { Outlet } from 'react-router-dom';
import { Container, WrapContent } from './style';

const LayOut = () => {
  return (
    <Container>
      <NavBar />
      <WrapContent>
        <Outlet />
      </WrapContent>
    </Container>
  );
};

export default LayOut;
