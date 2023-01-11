import React from 'react';
import PropType from 'prop-types';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StyledAccordionContainer from '../styled-accordion/StyledAccordionContainer';
import StyledAccordionDetail from '../styled-accordion/StyledAccordionDetail';
import StyledAccordionSummary from '../styled-accordion/StyledAccordionSummary';
import StyledAccordionSummaryContent from '../styled-accordion/StyledAccordionSummaryContent';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTheme } from '@mui/material/styles';

const getAreaControlId = (id) => {
  return `panel-${id}-content`;
};

const TabAccordionActiveTextSmallMode = ({ groupedContents }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(groupedContents[0].id);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box>
      {groupedContents.map((groupedContent) => (
        <StyledAccordionContainer
          sx={{ boxShadow: 0 }}
          key={groupedContent.id}
          expanded={expanded === groupedContent.id}
          onChange={handleChange(groupedContent.id)}
        >
          <StyledAccordionSummary
            styleonhoverforendicon={{
              fill: 'black',
              filter: theme.palette.common.svgFilter,
            }}
            aria-controls={getAreaControlId(groupedContent.id)}
            id={getAreaControlId(groupedContent.id)}
          >
            <StyledAccordionSummaryContent
              title={
                <Typography
                  component="h3"
                  variant="body1"
                  sx={{ color: (theme) => theme.palette.text.primary }}
                >
                  {groupedContent.title}
                </Typography>
              }
              startIcon={groupedContent.icon}
              endIcon={
                <KeyboardArrowDownIcon
                  className="accordionIconRotate"
                  sx={(theme) => ({
                    color: theme.palette.grey['400'],
                  })}
                />
              }
            />
          </StyledAccordionSummary>
          <StyledAccordionDetail>
            {groupedContent.descriptionNode}
          </StyledAccordionDetail>
        </StyledAccordionContainer>
      ))}
    </Box>
  );
};

TabAccordionActiveTextSmallMode.propTypes = {
  groupedContents: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      icon: PropTypes.element,
      descriptionNode: PropType.element,
    }),
  ).isRequired,
};

export default TabAccordionActiveTextSmallMode;
