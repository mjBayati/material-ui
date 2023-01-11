import {createTheme, responsiveFontSizes} from '@mui/material/styles';
import theme from './defaultTheme';

const blogTheme = createTheme(theme, {
  typography: {
    h1: {
      fontSize: 42,
      fontWeight: 700,
      lineHeight: 1.27,
      letterSpacing: 0.8,
    },
    h2: {
      fontSize: 30,
      fontWeight: 600,
      lineHeight: 1.31,
      letterSpacing: 0.8,
    },
    h3: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 1.22,
      letterSpacing: 0.2,
    },
    h4: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.28,
     letterSpacing: 0.2,
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: 0.08,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '22px',
      letterSpacing: 0.08,
    },
  },
});

export default responsiveFontSizes(blogTheme);
