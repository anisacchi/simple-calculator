import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const WrapperStyle = styled(Grid)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  padding: '24px 16px',
  alignContent: 'flex-end',
  rowGap: '16px',
  background: '#F4F4F4',
  [theme.breakpoints.up('400')]: {
    '&.MuiGrid-root': {
      maxWidth: '370px',
      borderRadius: '16px',
    },
    position: 'absolute',
    height: '600px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  },
}));

export default WrapperStyle;
