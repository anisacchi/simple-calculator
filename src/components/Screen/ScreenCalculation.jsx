import React from 'react';
import PropTypes from 'prop-types';
import TextFieldStyle from './ScreenStyle';

const ScreenCalculation = ({ calculation }) => (
  <TextFieldStyle
    id="screenCalculation"
    value={calculation}
    fullWidth
    disabled
  />
);

ScreenCalculation.propTypes = {
  calculation: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

ScreenCalculation.defaultProps = {
  calculation: '' || 0,
};
export default ScreenCalculation;
