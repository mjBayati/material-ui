import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Proptypes from "prop-types";

const CustomSelect = ({ selectedItem, handleChange, data, label, maxHeight }) => {
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: maxHeight,
                width: 290,
                borderRadius: 4,
                elevation: 1
            },
        },
    };
    return (
        <FormControl fullWidth size="small">
            <InputLabel id="controlled-open-select-label">{label}</InputLabel>
            <Select
                labelId="controlled-open-select-label"
                id="controlled-open-select"
                value={selectedItem}
                label={label}
                sx={(theme) => ({
                    color: theme.palette.text.primary
                })}
                onChange={handleChange}
                MenuProps={MenuProps}

            >
                {data.map((item, index) => (
                    <MenuItem value={item} key={index} color="textPrimary">{item.title}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

CustomSelect.prototype = {
    selectedItem: Proptypes.string.isRequired,
    handleChange: Proptypes.func.isRequired,
    data: Proptypes.string.isRequired,
    label: Proptypes.string.isRequired,
    maxHeight: Proptypes.string.isRequired
}

export default CustomSelect