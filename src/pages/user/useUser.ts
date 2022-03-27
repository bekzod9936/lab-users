import { useQuery } from 'react-query';
import { fetchUser } from 'services/api';
import { useParams } from 'react-router-dom';
import { setUser } from 'services/redux/slices/users';
import { useAppDispatch } from 'services/redux/hooks';

const useUser = () => {
  let { user } = useParams();
  const dispatch = useAppDispatch();

  const { isLoading } = useQuery(['fetchUser', user], () => fetchUser(user), {
    retry: 0,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    onSuccess: (value) => {
      dispatch(setUser(value.data.data));
    },
  });

  return { isLoading };
};

export default useUser;
