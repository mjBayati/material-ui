import { styled } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';

const StyledButtonGroup = styled(ToggleButton)(({ theme }) => ({
  borderRadius: 30,
  border: 0,
  color: theme.palette.primary.main,
  height: 50,
  textTransform: 'none',
  '&.MuiButtonBase-root.MuiToggleButton-root': {
    borderRadius: 30,
  },
  '&.MuiButtonBase-root.Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.default,
    boxShadow: theme.shadows['1'],
  },
}));

export default StyledButtonGroup;
