import { WrapSuspense } from './style';
import { lazy, Suspense } from 'react';
import Spinner from 'components/Spinner';
import PrivateRouter from './PriveteRouter';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/home'));
const User = lazy(() => import('pages/user'));
const LogIn = lazy(() => import('pages/login'));
const SignUp = lazy(() => import('pages/signup'));
const LayOut = lazy(() => import('pages/layout'));
const Profile = lazy(() => import('pages/profile'));
const NotFound = lazy(() => import('pages/notfound'));

const Routers = () => {
  return (
    <Suspense
      fallback={
        <WrapSuspense>
          <Spinner />
        </WrapSuspense>
      }
    >
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route
            path="profile"
            element={
              <PrivateRouter>
                <Profile />
              </PrivateRouter>
            }
          />
          <Route path="user/:user" element={<User />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
