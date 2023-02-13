import React from 'react';
import PropTypes from 'prop-types';
import WrapperStyle from './WrapperStyle';

const Wrapper = ({ screen, buttonBox }) => (
  <WrapperStyle container className="wrapper">
    {screen}
    {buttonBox}
  </WrapperStyle>
);

Wrapper.propTypes = {
  screen: PropTypes.oneOfType([PropTypes.object]),
  buttonBox: PropTypes.oneOfType([PropTypes.object]),
};

Wrapper.defaultProps = {
  screen: () => {},
  buttonBox: () => {},
};

export default Wrapper;
