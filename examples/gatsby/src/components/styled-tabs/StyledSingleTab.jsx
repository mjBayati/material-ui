import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';

const StyledSingleTab = styled(Tab)(
  ({ theme, styleonhoverforstarticon, summarystyle, not_change_title_color, iconsize }) => ({
    boxShadow: theme.shadows['1'],
    borderRadius: 8,
    height: 'auto',
    svg: { ...iconsize },
    typography: theme.typography.h6,
    color: theme.palette.text.primary,
    textTransform: 'none',
    padding: 20,
    '&.MuiButtonBase-root': { ...summarystyle, justifyContent: summarystyle?.flexDirection !== 'row' ? 'flex-start' : 'center' },
    '&.MuiButtonBase-root.Mui-selected': {
      borderBottom: '7px solid',
      borderBottomColor: theme.palette.primary.main,
      color: not_change_title_color ? theme.palette.text.primary : theme.palette.primary.main,
      height: 'auto',
      svg: styleonhoverforstarticon,
      path: styleonhoverforstarticon,
      overflow: 'visible',
      '&:before': {
        content: '""',
        width: '0',
        height: '0',
        borderStyle: 'solid',
        borderWidth: '12px 12px 0 12px',
        borderColor: `${theme.palette.primary.main} transparent transparent transparent`,
        marginRight: 'auto',
        marginLeft: 'auto',
        bottom: -16,
        zIndex: 120,
        position: 'absolute',
      },
    },
  }),
);

StyledSingleTab.prototype = {
  styleonhoverforstarticonn: PropTypes.object,
  summarystyle: PropTypes.objectOf({
    flexDirection: PropTypes.string,
    svg: PropTypes.objectOf({
      marginRight: PropTypes.string,
    }),
  }),
  not_change_title_color: PropTypes.bool,
  iconsize: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string
  })
};

export default StyledSingleTab;
