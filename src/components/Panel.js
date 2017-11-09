import React from 'react';
import PropTypes from 'prop-types';

function Panel({ x, y, fuel }) {
  return (
    <ul>
      <li>x: {x}</li>
      <li>y: {y}</li>
      <li>Fuel: {fuel}%</li>
    </ul>
  )
}

Panel.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  fuel: PropTypes.number.isRequired
}

export default Panel;
