import useUser from './useUser';
import defuser from 'assets/defuser.svg';
import {
  Img,
  UserInfo,
  UserName,
  WrapImg,
  Header,
  LinkBack,
  Container,
  WrapSinner,
} from './style';
import { useAppSelector } from 'services/redux/hooks';
import Spinner from 'components/Spinner';

const User = () => {
  const { isLoading } = useUser();
  const { user } = useAppSelector((state) => state.users);
  const { avatar, first_name, last_name, email } = user;

  return isLoading ? (
    <WrapSinner>
      <Spinner />
    </WrapSinner>
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
