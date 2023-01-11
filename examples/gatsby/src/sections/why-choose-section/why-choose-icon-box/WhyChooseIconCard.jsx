import React from 'react'
import PropTypes from 'prop-types'
import IconBox from '../../../components/icon-box/IconBox'
import Typography from '@mui/material/Typography'

const WhyChooseIconCard = ({ icon, title, description }) => {
    return (
        <IconBox
            height={{
                lg: '100%', md: '100%', sm: '100%', xs: '100%'
            }}
            icon={icon}
            title={< Typography variant="h5" > {title}</Typography>}
            description={
                <Typography variant="body1" color="textSecondary">
                    {description}
                </Typography>
            }
        />
    )
}

WhyChooseIconCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default WhyChooseIconCard