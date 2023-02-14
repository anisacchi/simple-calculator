import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyle from './ButtonStyle';

const BtnCalculator = ({ value, category, setCalculation }) => {
  const onClickHandler = (props) => {
    setCalculation(props);
  };

  return (
    <ButtonStyle
      onClick={() => onClickHandler({ value, category })}
      className={category}
    >
      {value}
    </ButtonStyle>
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
