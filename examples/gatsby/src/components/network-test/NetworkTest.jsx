import React from 'react'
import Grid from "@mui/material/Grid"
import CustomButton from '../button/CustomButton';
import NetworkTestData from './data/NetworkTest.data';
import NetworkTestSelect from './NetworkTestSelect';
import FrontMatterContext from '../../context/FrontMatter.context';
import { useContext } from 'react';

const NetworkTest = () => {
    const type = useContext(FrontMatterContext).slug
    const [location, setLocation] = React.useState(NetworkTestData.find(item => item.type === type) || '');
    const handleChange = (event) => {
        setLocation(event.target.value);
    };

    return (
        <Grid container spacing={1.5} justifyContent="center" alignItems='center'>
            <Grid item width={320}>
                <NetworkTestSelect handleChange={handleChange} location={location} networkData={NetworkTestData} label='Choose a location' />
            </Grid>
            <Grid item>
                <CustomButton
                    id="networkTestButton"
                    variant="contained"
                    color="primary"
                    contentText="Network Test"
                    navigationObject={location}
                />
            </Grid>
        </Grid>
    );
}


export default NetworkTest

