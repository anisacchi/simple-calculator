import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import PropTypes from 'prop-types';
import BtnCalculator from './Button';

const buttonValues = ([
  ['AllClear', 'AC'], ['Clear', 'C'], ['Percent', '%'], ['Operator', '/'],
  ['Number', 7], ['Number', 8], ['Number', 9], ['Operator', '*'],
  ['Number', 4], ['Number', 5], ['Number', 6], ['Operator', '-'],
  ['Number', 1], ['Number', 2], ['Number', 3], ['Operator', '+'],
  ['Number', 0], ['Decimal', '.'],
]);

const ButtonBox = ({ setCalculation }) => {
  const clickButtonHandler = (props) => {
    setCalculation(props);
  };

  return (
    <Grid sx={{ justifyContent: 'center' }} container>
      {buttonValues.map(([category, value]) => (
        <Grid item xs={3} xl={3} key={value}>
          <BtnCalculator
            value={value}
            category={category}
            setCalculation={clickButtonHandler}
          />
        </Grid>
      ))}
      <Grid item xs={6} xl={6} key="=">
        <BtnCalculator
          value="="
          category="Equal"
          setCalculation={clickButtonHandler}
        />
      </Grid>
    </Grid>
  );
};

ButtonBox.propTypes = {
  setCalculation: PropTypes.oneOfType([
    PropTypes.func,
  ]),
};

ButtonBox.defaultProps = {
  setCalculation: () => {},
};

export default ButtonBox;
