import React from 'react';
import Grid from '@mui/material/Grid';
import CustomButton from '../../components/button/CustomButton';
import WhyChooseIconBox from './why-choose-icon-box/WhyChooseIconBox';
import Typography from '@mui/material/Typography';
import whyChooseIconBoxData from './data/whyChooseIconBox.data';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import headingData from './data/heading.data';
import CustomLink from '../../components/link/CustomLink';

const JoinAction = () => {
  return (
    <CustomLink
      className="joinUsNow"
      navigationObject={headingData.action}
    >
      <CustomButton
        variant="contained"
        color="primary"
        contentText={headingData.action.text}
        endIcon={<ArrowForwardIcon />}
        sx={(theme) => ({
          boxShadow: theme.shadows['0'],
        })}
      />
    </CustomLink>
  );
};

const WhyChooseSection = () => {
  return (
    <Grid
      container
      sx={{ py: 12.5 }}
      justifyContent={{
        lg: 'space-between',
        md: 'center',
        sm: 'center',
        xs: 'flex-end',
      }}
    >
      <Grid
        item
        lg={6}
        md={12}
        sm={12}
        xs={12}
        justifySelf={{
          md: 'flex-start',
          sm: 'flex-start',
          xs: 'flex-start',
        }}
      >
        <Typography
          variant="h2"
          marginBottom={{ lg: 4.5, md: 4, sm: 2, xs: 2 }}
        >
          {headingData.title}
        </Typography>
      </Grid>
      <Grid
        item
        lg={6}
        order={{ lg: 2, md: 3, sm: 3, xs: 3 }}
        textAlign="right"
      >
        <JoinAction />
      </Grid>
      <Grid
        item
        lg={12}
        order={{ md: 2, sm: 2, xs: 2 }}
        marginBottom={{ lg: 7, md: 6, sm: 5, xs: 1 }}
      >
        <WhyChooseIconBox IconBoxDataList={whyChooseIconBoxData} />
      </Grid>
    </Grid>
  );
};

export default WhyChooseSection;
