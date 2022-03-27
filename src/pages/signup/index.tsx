import useSignUp from './useSignUp';
import Email from 'components/Email';
import Button from 'components/Button';
import Password from 'components/Password';
import { Wrap, Form, Container } from './style';
import { FormProvider } from 'react-hook-form';

const LogIn = () => {
  const { methods, onSubmit, disable } = useSignUp();

  return (
    <FormProvider {...methods}>
      <Container>
        <Wrap>
          <header>Sign Up</header>
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
            <Button disabled={disable}>Sign Up</Button>
          </Form>
        </Wrap>
      </Container>
    </FormProvider>
  );
};

export default LogIn;
