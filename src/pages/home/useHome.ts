import { useQuery } from 'react-query';
import { fetchUsers } from 'services/api';
import { setUsers } from 'services/redux/slices/users';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';

const useHome = () => {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.users);

  const { isLoading, isFetching } = useQuery(
    ['fetchUsers', page],
    () => fetchUsers(page),
    {
      retry: 0,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      onSuccess: (value) => {
        const { data, total_pages } = value.data;
        dispatch(
          setUsers({
            total_pages,
            users: data,
          })
        );
      },
    }
  );

  return { isLoading, isFetching };
};

export default useHome;
