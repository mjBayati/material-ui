import {useTheme} from "@mui/material/styles";
import FixedLineTypography from "../../../../components/typography/FixedLineTypography";
import React from 'react';
import PropTypes from 'prop-types';


const TestimonialContent = ({content}) => {
    const theme = useTheme();
    return (
        <FixedLineTypography
            lineToShow={{
                lg: 4,
                md: 6,
                sm: 6,
                xs: 9
            }}
            content={content}
            color={theme.palette.text.secondary}
            variant={"body1"}
        />
    );
}

TestimonialContent.prototype = {
    content: PropTypes.string.isRequired
}

export default TestimonialContent;