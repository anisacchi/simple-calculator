import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const TextFieldStyle = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderWidth: 0,
    },
  },
  '& .MuiOutlinedInput-input': {
    textAlign: 'right',
    padding: 0,
  },
  '&.calculationScreen': {
    '& .MuiOutlinedInput-input': {
      fontSize: '1.5rem',
    },
  },
  '&.resultScreen': {
    '& .MuiOutlinedInput-input': {
      fontSize: '2rem',
    },
  },
}));

export default TextFieldStyle;
