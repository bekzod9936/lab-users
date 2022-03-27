import { Controller } from 'react-hook-form';
import { TextField, InputAdornment } from '@mui/material';
import { ReactComponent as IconMessage } from 'assets/message.svg';

interface Props {
  control: any;
  error: boolean;
  message: string | undefined;
}

const Email = ({ error, control, message }: Props) => {
  return (
    <Controller
      name="email"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          error={error}
          type={'email'}
          autoComplete="off"
          placeholder="Email"
          helperText={error ? message : ''}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconMessage />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default Email;
