import Modal from 'components/Modal';
import { NavLink } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearLogIn } from 'services/redux/slices/login';
import { useAppSelector, useAppDispatch } from 'services/redux/hooks';
import { Link, Wrap, Title, Button, WrapLinks, Container } from './style';

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const token = useAppSelector((state) => state.login.token);

  const handleClose = useCallback(() => {
    setOpen((state) => !state);
  }, []);

  const onLogOut = useCallback(() => {
    setOpen(false);
    localStorage.clear();
    dispatch(clearLogIn());
    navigate('/');
  }, [dispatch, navigate]);

  return (
    <Container>
      <Wrap>
        <Title>
          <NavLink to="/">
            {({ isActive }) => <Link isActive={isActive}>Home</Link>}
          </NavLink>
        </Title>
        <WrapLinks>
          {token ? (
            <>
              <NavLink to="/profile">
                {({ isActive }) => <Link isActive={isActive}>Profile</Link>}
              </NavLink>
              <Button onClick={handleClose}>Log Out</Button>
              <Modal
                open={open}
                onLogOut={onLogOut}
                handleClose={handleClose}
              />
            </>
          ) : (
            <>
              <NavLink to="/login">
                {({ isActive }) => <Link isActive={isActive}>Log In</Link>}
              </NavLink>
              <NavLink to="/signup">
                {({ isActive }) => <Link isActive={isActive}>Sign Up</Link>}
              </NavLink>
            </>
          )}
        </WrapLinks>
      </Wrap>
    </Container>
  );
};

export default NavBar;
