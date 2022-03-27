import { useAppSelector } from 'services/redux/hooks';
import { useLocation, Navigate } from 'react-router-dom';

const PrivateRouter = ({ children }: any) => {
  let location = useLocation();
  const token = useAppSelector((state) => state.login.token);

  if (!token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRouter;
