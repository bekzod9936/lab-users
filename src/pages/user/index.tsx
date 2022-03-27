import useUser from './useUser';
import defuser from 'assets/defuser.svg';
import Spinner from 'components/Spinner';
import { useAppSelector } from 'services/redux/hooks';
import {
  Img,
  UserInfo,
  UserName,
  WrapImg,
  Header,
  LinkBack,
  Container,
  WrapSinner,
  WrapNotFound,
} from './style';

const User = () => {
  const { isLoading, isError } = useUser();
  const { user } = useAppSelector((state) => state.users);
  const { avatar, first_name, last_name, email } = user;

  return isLoading ? (
    <WrapSinner>
      <Spinner />
    </WrapSinner>
  ) : isError ? (
    <WrapNotFound>
      not found user
      <LinkBack to="/">Go Back</LinkBack>
    </WrapNotFound>
  ) : (
    <Container>
      <Header>
        <WrapImg>
          <Img
            alt="user"
            src={avatar ?? ''}
            height="100%"
            width="100%"
            effect="blur"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src = defuser;
            }}
          />
        </WrapImg>
        <UserInfo>
          <div>
            <UserName>
              <span>{first_name}</span>
              <span>{last_name}</span>
            </UserName>
            <a href={`mailto: ${email}`} target="_blank" rel="noreferrer">
              Email: {email ?? '----'}
            </a>
          </div>
          <LinkBack to="/">Go Back</LinkBack>
        </UserInfo>
      </Header>
    </Container>
  );
};

export default User;
