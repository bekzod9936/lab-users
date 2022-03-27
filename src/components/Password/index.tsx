import { Controller } from 'react-hook-form';
import { useCallback, useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { ReactComponent as IconEyeOpen } from 'assets/eyeopen.svg';
import { ReactComponent as IconEyeClose } from 'assets/eyeclose.svg';

interface Props {
  control: any;
  error: boolean;
  message: string | undefined;
}

const Password = ({ error, control, message }: Props) => {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => setOpen((prev) => !prev), []);

  return (
    <Controller
      name="password"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          error={error}
          autoComplete="off"
          placeholder="Password"
          type={open ? 'text' : 'password'}
          helperText={error ? message : ''}
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
              >
                {open ? <IconEyeOpen /> : <IconEyeClose />}
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default Password;
