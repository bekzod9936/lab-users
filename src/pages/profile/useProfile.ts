import { useQuery } from 'react-query';
import { fetchUser } from 'services/api';
import { useAppDispatch } from 'services/redux/hooks';
import { setProfile } from 'services/redux/slices/login';

const useUser = () => {
  const userid = localStorage.getItem('id');
  const dispatch = useAppDispatch();

  const { isLoading } = useQuery(
    ['fetchProfile', userid],
    () => fetchUser(userid),
    {
      retry: 0,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      enabled: !!userid,
      onSuccess: (value) => {
        dispatch(setProfile(value.data.data));
      },
    }
  );

  return { isLoading };
};

export default useUser;
