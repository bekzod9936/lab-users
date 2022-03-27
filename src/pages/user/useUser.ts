import { useQuery } from 'react-query';
import { fetchUser } from 'services/api';
import { useParams } from 'react-router-dom';
import { setUser } from 'services/redux/slices/users';
import { useAppDispatch } from 'services/redux/hooks';
import { notifyError } from 'components/Notifications';

const useUser = () => {
  let { user } = useParams();
  const dispatch = useAppDispatch();

  const { isLoading, isError } = useQuery(
    ['fetchUser', user],
    () => fetchUser(user),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      onSuccess: (value) => {
        dispatch(setUser(value.data.data));
      },
      onError: () => {
        notifyError('Not Found User');
      },
    }
  );

  return { isLoading, isError };
};

export default useUser;
