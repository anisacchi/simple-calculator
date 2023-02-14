import React from 'react';
import PropTypes from 'prop-types';
import TextFieldStyle from './ScreenStyle';

const ScreenResult = ({ result }) => (
  <TextFieldStyle
    value={result}
    fullWidth
    disabled
    className="resultScreen"
  />
);

ScreenResult.propTypes = {
  result: PropTypes.oneOfType([
    PropTypes.number,
  ]),
};

ScreenResult.defaultProps = {
  result: 0,
};

export default ScreenResult;
