import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const ButtonStyle = styled(Button)(() => ({
  width: '100%',
  height: 'auto',
  aspectRatio: '1/1',
  background: '#FFE5D9',
  color: '#9D8189',
  fontSize: '1.5rem',
  border: '1px solid #F4F4F4',
  '&.Operator, &.AllClear, &.Clear, &.Percent': {
    background: '#F4ACB7',
    color: '#F4F4F4',
  },
  '&.Equal': {
    aspectRatio: '2/1',
    background: '#9D8189',
    color: '#F4F4F4',
  },
}));

export default ButtonStyle;
