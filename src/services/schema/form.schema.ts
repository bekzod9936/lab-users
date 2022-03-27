import { IFormProps } from 'services/types';
import { object, SchemaOf, string } from 'yup';

export const schema: SchemaOf<IFormProps> = object().shape({
  email: string().email().nullable(true).required('required'),
  password: string().nullable(true).required('required'),
});
