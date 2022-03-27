import defuser from 'assets/defuser.svg';
import { IDataUsers } from 'services/types';
import {
  Img,
  Link,
  CardWrap,
  CardImg,
  UserName,
  CardBody,
  Header,
} from './style';

interface Props {
  value: IDataUsers;
}

const Card = ({ value }: Props) => {
  const { id, avatar, last_name, first_name } = value;
  return (
    <>
      <CardWrap>
        <Header>
          <CardImg>
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
          </CardImg>
        </Header>
        <CardBody>
          <UserName>
            <span>{first_name}</span>
            <span>{last_name}</span>
          </UserName>
          <Link to={`user/${id}`}>View profile</Link>
        </CardBody>
      </CardWrap>
    </>
  );
};

export default Card;
