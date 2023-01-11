import CustomButton from '../../../../../components/button/CustomButton';
import React from 'react';
import PropTypes from 'prop-types';
import CustomLink from '../../../../../components/link/CustomLink';

const GetStartedAction = ({
  isSelected,
  action,
  os,
  price,
  isCustom,
  disabled,
}) => {
  let actionId = '';
  if (!isCustom) {
    if (os.includes('Linux')) {
      actionId = 'linux' + '-' + price;
    } else {
      actionId = 'windows' + '-' + price;
    }
  }
  const actionBtnRenderer = disabled ? (
    <CustomButton
      id={isCustom ? 'CustomPlan' : actionId}
      contentText={'GET STARTED'}
      variant={isSelected ? 'contained' : 'outlined'}
      color={isSelected ? 'secondary' : 'primary'}
      fullWidth={true}
      disabled={!!disabled}
    />
  ) : (
    <CustomLink
      className="getStartedButtonOfPricingPlan"
      id={isCustom ? 'CustomPlan' : actionId}
      navigationObject={action}
      targetNotBlank={true}
    >
      <CustomButton
        contentText={'GET STARTED'}
        variant={isSelected ? 'contained' : 'outlined'}
        color={isSelected ? 'secondary' : 'primary'}
        fullWidth={true}
        disabled={!!disabled}
      />
    </CustomLink>
  );
  return actionBtnRenderer;
};

GetStartedAction.prototype = {
  isSelected: PropTypes.bool.isRequired,
  isCustom: PropTypes.bool,
  disabled: PropTypes.bool,
  os: PropTypes.string,
  price: PropTypes.objectOf(
    PropTypes.shape({
      perMonth: {
        unit: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        period: PropTypes.string.isRequired,
      },
      billedAnnually: {
        period: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        unit: PropTypes.string.isRequired,
      },
    }),
  ),
  action: PropTypes.objectOf(
    PropTypes.shape({
      remoteLink: PropTypes.string.isRequired,
    }),
  ),
};

export default GetStartedAction;
