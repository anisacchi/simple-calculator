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
    fontSize: '2rem',
    padding: 0,
  },
}));

export default TextFieldStyle;
