import { Button } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const BtnCalculator = ({ value, category, setCalculation }) => {
  const onClickHandler = (props) => {
    setCalculation(props);
  };

  return (
    <Button
      sx={{ width: '100%', height: 'auto', aspectRatio: '1/1' }}
      onClick={() => onClickHandler({ value, category })}
    >
      {value}
    </Button>
  );
};

BtnCalculator.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  category: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  setCalculation: PropTypes.oneOfType([
    PropTypes.func,
  ]),
};

BtnCalculator.defaultProps = {
  value: '' || 0,
  category: '' || 0,
  setCalculation: () => {},
};

export default BtnCalculator;
