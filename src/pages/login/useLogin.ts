import { loginUser } from 'services/api';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import { IFormProps } from 'services/types';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'services/redux/hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from 'services/schema/form.schema';
import { setToken, setProfile } from 'services/redux/slices/login';
import { notifyError, notifySuccess } from 'components/Notifications';

const useSignUp = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const methods = useForm<IFormProps>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate, isLoading } = useMutation(loginUser, {
    onSuccess: async (data) => {
      await dispatch(setToken(data.data.token));
      await dispatch(setProfile({ email: methods.getValues('email') }));
      await notifySuccess('success');
      await navigate('/profile');
      await methods.reset();
    },
    onError: (err: any) => {
      notifyError(err.response.data.error);
    },
  });

  const disable = !!(
    methods.formState.errors?.email ||
    methods.formState.errors?.password ||
    isLoading
  );

  const onSubmit = (data: any) => mutate(data);

  return { methods, onSubmit, disable };
};

export default useSignUp;
