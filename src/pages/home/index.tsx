import useHome from './useHome';
import Card from 'components/Card';
import Spinner from 'components/Spinner';
import { IDataUsers } from 'services/types';
import Pagination from 'components/Pagination';
import { setPage } from 'services/redux/slices/users';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { Wrap, Title, Container, WrapContent, WrapSpinner } from './style';

const Home = () => {
  const { isLoading, isFetching } = useHome();
  const dispatch = useAppDispatch();
  const { users, total_pages, page } = useAppSelector((state) => state.users);

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
  };

  return (
    <Container>
      {isLoading || isFetching ? (
        <WrapSpinner>
          <Spinner />
        </WrapSpinner>
      ) : (
        <>
          <Title>Users</Title>
          <Wrap>
            <WrapContent>
              {users.map((user: IDataUsers) => (
                <Card key={user.id} value={user} />
              ))}
              <Pagination
                page={page}
                count={total_pages}
                onChange={handlePageChange}
              />
            </WrapContent>
          </Wrap>
        </>
      )}
    </Container>
  );
};

export default Home;
