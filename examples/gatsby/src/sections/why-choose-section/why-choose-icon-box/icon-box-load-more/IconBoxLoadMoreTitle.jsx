import React from 'react';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CustomCollapseTitle from '../../../../components/collapse/CustomCollapseTitle';


const IconBoxLoadMoreTitle = ({ expanded, setExpanded }) => {
    return (
        <CustomCollapseTitle
            expanded={expanded}
            setExpanded={setExpanded}
            title={expanded == true ?
                <Typography
                    variant="subtitle2"
                    sx={(theme) => ({
                        color: theme.palette.primary.main,
                    })}
                >
                    Less
                </Typography>
                :
                <Typography
                    variant="subtitle2"
                    sx={(theme) => ({
                        color: theme.palette.primary.main,
                    })}
                >
                    More
                </Typography>
            }
            icon={
                <KeyboardArrowDownIcon
                    sx={(theme) => ({
                        color: theme.palette.primary.main,
                    })}
                />
            }
        />
    );
};

IconBoxLoadMoreTitle.prototype = {
    expanded: PropTypes.string.isRequired,
    setExpanded: PropTypes.string.isRequired,
};

export default IconBoxLoadMoreTitle;
