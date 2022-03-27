import useProfile from './useProfile';
import defuser from 'assets/defuser.svg';
import Spinner from 'components/Spinner';
import { useAppSelector } from 'services/redux/hooks';
import {
  Img,
  UserInfo,
  UserName,
  WrapImg,
  Header,
  Container,
  WrapSinner,
} from './style';

const Profile = () => {
  const { isLoading } = useProfile();
  const { profile } = useAppSelector((state) => state.login);
  const { avatar, first_name, last_name, email } = profile;

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
              Email: {email}
            </a>
          </div>
        </UserInfo>
      </Header>
    </Container>
  );
};

export default Profile;
