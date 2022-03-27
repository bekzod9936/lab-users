import { memo } from 'react';
import { Text, Title, SubTitle, LinkBack, Wrapper, Container } from './style';

const NotFoundPage = () => {
  const back: any = -1;
  return (
    <Container>
      <Wrapper>
        <Title>404</Title>
        <SubTitle>We couldn't find it ...</SubTitle>
        <Text>The page you are looking for does not exist.</Text>
        <LinkBack to={back}>Go Back</LinkBack>
      </Wrapper>
    </Container>
  );
};

export default memo(NotFoundPage);
