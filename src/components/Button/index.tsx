import { WrapButton, MButton } from './style';

interface Props {
  children: string;
  disabled: boolean;
}

const Button = ({ children, disabled }: Props) => {
  return (
    <WrapButton disableStyle={disabled}>
      <MButton type={'submit'} disabled={disabled}>
        {children}
      </MButton>
    </WrapButton>
  );
};

export default Button;
