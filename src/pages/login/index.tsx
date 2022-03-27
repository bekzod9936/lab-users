import useLogin from './useLogin';
import Email from 'components/Email';
import Button from 'components/Button';
import Password from 'components/Password';
import { FormProvider } from 'react-hook-form';
import { Wrap, Form, Container } from './style';

const LogIn = () => {
  const { methods, onSubmit, disable } = useLogin();

  return (
    <FormProvider {...methods}>
      <Container>
        <Wrap>
          <header>Log In</header>
          <Form onSubmit={methods.handleSubmit(onSubmit)}>
            <Email
              control={methods.control}
              error={!!methods.formState.errors.email}
              message={methods.formState.errors.email?.message}
            />
            <Password
              control={methods.control}
              error={!!methods.formState.errors.password}
              message={methods.formState.errors.password?.message}
            />
            <Button disabled={disable}>Log In</Button>
          </Form>
        </Wrap>
      </Container>
    </FormProvider>
  );
};

export default LogIn;
