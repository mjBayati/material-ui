import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import StyledToggleGroup from './StyledToggleGroup';
import StyledButtonGroup from './StyledButtonGroup';

const CustomToggleButtonGroup = ({
  selectedValue,
  setSelectedValue,
  leftButtonValue,
  rightButtonValue,
  buttonWidth,
}) => {
  const handleOsChange = (event, newSelectedValue) => {
    if (newSelectedValue) {
      setSelectedValue(newSelectedValue);
    }
  };

  return (
    <Box
      sx={{
        border: 1,
        borderRadius: 20,
        borderColor: (theme) => theme.palette.border.main,
        padding: 0.25,
      }}
    >
      <StyledToggleGroup
        value={selectedValue}
        exclusive
        onChange={handleOsChange}
        size="large"
      >
        <StyledButtonGroup
          className="toggleButtonBlogAndKBSection"
          component={'a'}
          id={leftButtonValue}
          value={leftButtonValue}
          fullWidth
          sx={{
            minWidth: !!buttonWidth ? buttonWidth : 120,
          }}
        >
          <Typography variant="subtitle1" align="center">
            {leftButtonValue}
          </Typography>
        </StyledButtonGroup>
        <StyledButtonGroup
          className="toggleButtonBlogAndKBSection"
          component={'a'}
          id={rightButtonValue}
          value={rightButtonValue}
          fullWidth
          sx={{
            minWidth: !!buttonWidth ? buttonWidth : 120,
          }}
        >
          <Typography variant="subtitle1" align="center">
            {rightButtonValue}
          </Typography>
        </StyledButtonGroup>
      </StyledToggleGroup>
    </Box>
  );
};

CustomToggleButtonGroup.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  setSelectedValue: PropTypes.func.isRequired,
  leftButtonValue: PropTypes.string.isRequired,
  rightButtonValue: PropTypes.string.isRequired,
  width: PropTypes.number,
};

export default CustomToggleButtonGroup;
