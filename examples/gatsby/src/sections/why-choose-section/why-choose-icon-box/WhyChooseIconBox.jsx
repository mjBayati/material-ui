import React from 'react';
import Grid from '@mui/material/Grid';
import WhyChooseIconBoxLargeMode from './WhyChooseIconBoxLargeMode';
import WhyChooseIconBoxSmallMode from './WhyChooseIconBoxSmallMode';
import PolymorphicOnResizeContainer from '../../../components/container/PolymorphicOnResizeContainer';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

const WhyChooseIconBox = ({ IconBoxDataList }) => {
    const theme = useTheme();
    return (
        <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <PolymorphicOnResizeContainer
                    breakpoint={theme.breakpoints.values.sm}
                    largeModeComponent={<WhyChooseIconBoxLargeMode data={IconBoxDataList} />}
                    smallModeComponent={<WhyChooseIconBoxSmallMode data={IconBoxDataList} />}
                />
            </Grid>
        </Grid >
    )
}


WhyChooseIconBox.prototype = {
    IconBoxDataList: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        }),
    ),
};

export default WhyChooseIconBox;
