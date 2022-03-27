import { Wrap, CancelButton, LogOutButton } from './style';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { ReactComponent as IconClose } from 'assets/close.svg';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    minWidth: '350px',
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

interface Props {
  open: boolean;
  onLogOut: () => void;
  handleClose: () => void;
}

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <IconClose />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const Modal = ({ open, onLogOut, handleClose }: Props) => {
  return (
    <BootstrapDialog
      open={open}
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        Are you sure ?
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <Wrap>
          <CancelButton onClick={handleClose}>Cancel</CancelButton>
          <LogOutButton onClick={onLogOut}>Log Out</LogOutButton>
        </Wrap>
      </DialogContent>
    </BootstrapDialog>
  );
};

export default Modal;
