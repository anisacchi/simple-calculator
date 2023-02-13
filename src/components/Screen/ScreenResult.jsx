import React from 'react';
import PropTypes from 'prop-types';
import TextFieldStyle from './ScreenStyle';

const ScreenResult = ({ result }) => (
  <TextFieldStyle fullWidth disabled id="screenResult" value={result} />
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
