import { styled } from '@mui/material/styles';
import AccordionSummary from '@mui/material/AccordionSummary';
import PropTypes from 'prop-types';

const StyledAccordionSummary = styled(AccordionSummary)(
    ({
        styleonhoverforendicon,
        styleonhoverforstarticon,
        styleonhoverfortext,
    }) => ({
        height: 'auto',
        '& .MuiAccordionSummary-content': {
            padding: 5,
            margin: '12px 0 !important',
        },
        '& .accordionIconRotate': {
            transition: 'transform 0.3s ease',
        },
        '& .MuiAccordionSummary-content.Mui-expanded': {
            '& .MuiTypography-root': styleonhoverfortext,
            svg: styleonhoverforstarticon,
            path: styleonhoverforstarticon,
            '& .accordionEndIcon': {
                svg: styleonhoverforendicon,
            },
            '& .accordionIconRotate': {
                transform: 'rotate(180deg)',
                transition: 'transform 0.3s ease',
            },
        },
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded':
            styleonhoverforendicon,
    }),
);

StyledAccordionSummary.propTypes = {
    styleonhoverforendicon: PropTypes.object,
    styleonhoverforstarticon: PropTypes.object,
    styleonhoverfortext: PropTypes.object,
};

export default StyledAccordionSummary;
