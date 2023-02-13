import React from 'react';
import { Grid } from '@mui/material';
import PropTypes from 'prop-types';

import ScreenCalculation from './ScreenCalculation';
import ScreenResult from './ScreenResult';

const Screen = ({ calculation, result }) => (
  <Grid>
    <ScreenCalculation
      calculation={calculation}
    />
    <ScreenResult
      result={result}
    />
  </Grid>
);

Screen.propTypes = {
  calculation: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  result: PropTypes.oneOfType([
    PropTypes.number,
  ]),
};

Screen.defaultProps = {
  calculation: '' || 0,
  result: 0,
};

export default Screen;
