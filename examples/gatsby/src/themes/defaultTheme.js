import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'p',
          h4: 'h4',
          h5: 'p',
          h6: 'p',
          subtitle1: 'p',
          subtitle2: 'p',
          body1: 'p',
          body2: 'p',
        },
      },
    },
  },
  palette: {
    type: 'light',
    primary: {
      dark: '#1A1E79',
      main: '#2D31A6',
      light: '#EAEAFC',
      contrastText: '#F4F7FF',
    },
    secondary: {
      dark: '#F9643B',
      main: '#FF7F5C',
      light: '#F5FBF8',
      contrastText: '#EEF8F4',
    },
    grey: {
      50: '#F9F9F9',
      100: '#EDEDED',
      200: '#E0E0E0',
      300: '#0000004D',
      400: '#939393',
      A100: '#FFFFFF4D',
      A200: '#FFFFFF80',
      A400: '#FFFFFFCC',
      A700: '#C1C4D6',
    },
    error: {
      main: '#FF3C38',
      light: '#FDEDED',
    },
    link: {
      main: '#1776D2',
    },
    warning: {
      main: '#FFA117',
      light: '#FFF4E5',
    },
    info: {
      light: '#2D31A6',
      main: '#EAEAFC',
      dark: '#F4F4FF',
    },
    success: {
      main: '#5CB660',
      light: '#EDF7ED',
    },
    text: {
      primary: '#04184B',
      secondary: '#4C5271',
      disabled: '#00000061',
    },
    background: {
      default: '#FFFFFF',
    },
    border: {
      main: '#E6E8F0',
      map: '#F2F2F2',
    },
    white: {
      default: '#FFFFFF',
    },
    common: {
      lightBlue: '#9C9EE7',
      linkBlog: '#2C5EFF',
      svgFilter:
        'invert(11%) sepia(77%) saturate(4218%) hue-rotate(230deg) brightness(110%) contrast(75%)',
      tableCell: '#4C5271',
    },
  },
  typography: {
    fontFamily: ['Roboto', '-apple-system', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontSize: 50,
      fontWeight: 700,
      lineHeight: 1.27,
      letterSpacing: 1,
    },
    h2: {
      fontSize: 42,
      fontWeight: 700,
      lineHeight: 1.31,
      letterSpacing: 0.8,
    },
    h3: {
      fontSize: 36,
      fontWeight: 600,
      lineHeight: 1.22,
      letterSpacing: 0.2,
    },
    h4: {
      fontSize: 28,
      fontWeight: 600,
      lineHeight: 1.28,
      letterSpacing: 0.2,
    },
    h5: {
      fontSize: 24,
      fontWeight: 500,
      lineHeight: 1.16,
      letterSpacing: 0.5,
    },
    h6: {
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: 0.3,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: '24px',
      letterSpacing: 0.08,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 700,
      lineHeight: '24px',
      letterSpacing: 0,
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
      lineHeight: '20px',
      letterSpacing: 0.08,
    },
    buttonMedium: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '25px',
      letterSpacing: 0.4,
    },
    buttonLarge: {
      fontSize: 15,
      fontWeight: 500,
      lineHeight: '26px',
      letterSpacing: 0.46,
    },
    buttonSmall: {
      fontSize: 13,
      fontWeight: 500,
      lineHeight: '23px',
    },
    caption: {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: '16px',
    },
    overline: {
      fontSize: 10,
      fontWeight: 500,
      lineHeight: '16px',
    },
    codeMini: {
      fontFamily: 'Monoid',
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '24px',
    },
  },
  shadows: {
    0: 'none',
    0.5: '0px 0px 8px rgba(0, 0, 0, 0.12)',
    1: '1px 2px 6px rgba(17, 20, 103, 0.12)',
    2: '1px 3px 10px 2px rgba(45, 49, 166, 0.1)',
    3: '2px 4px 8px rgba(55, 52, 169, 0.05)',
    4: '1px 2px 6px 0px rgba(7, 20, 103, 0.12)',
    8: '1px 2px 6px rgba(17, 20, 103, 0.12)',
  },
});

export default responsiveFontSizes(theme);
