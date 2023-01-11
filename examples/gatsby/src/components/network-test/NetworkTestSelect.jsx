import React from 'react'
import Proptypes from "prop-types";
import CustomSelect from '../custome-select/CustomSelect';


const NetworkTestSelect = ({ handleChange, location, networkData, label }) => {
    return (
        <CustomSelect handleChange={handleChange} selectedItem={location} data={networkData} label={label} maxHeight='180px' />
    )
}

NetworkTestSelect.Proptypes = {
    handleChange: Proptypes.func.isRequired,
    location: Proptypes.string.isRequired,
    networkData: Proptypes.arrayOf(
        Proptypes.shape({
            remoteName: Proptypes.string.isRequired,
            remoteLink: Proptypes.string.isRequired
        })
    ).isRequired,
    label: Proptypes.string.isRequired,
}

export default NetworkTestSelect