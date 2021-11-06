import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { grey } from '@mui/material/colors';

export const Container = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(grey[800]),
  backgroundColor: grey[800],
  justifySelf: 'flex-end',
  '&:hover': {
    backgroundColor: grey[900],
  },
}));
