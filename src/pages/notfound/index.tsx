import { memo } from 'react';
import { Text, Title, SubTitle, LinkBack, Wrapper, Container } from './style';

const NotFoundPage = () => {
  const back: any = -1;
  return (
    <Container>
      <Wrapper>
        <Title>404</Title>
        <SubTitle>Topa olmadik...</SubTitle>
        <Text>Siz qidirayotgan sahifa mavjud emas.</Text>
        <LinkBack to={back}>ORTGA QAYTISH</LinkBack>
      </Wrapper>
    </Container>
  );
};

export default memo(NotFoundPage);
