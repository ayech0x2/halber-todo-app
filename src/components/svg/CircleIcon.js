import React from "react";
import PropTypes from "prop-types";

const CircleIcon = ({ fill, stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11.807"
      height="11.807"
      viewBox="0 0 11.807 11.807"
    >
      <g
        id="Ellipse_1"
        data-name="Ellipse 1"
        fill={fill}
        stroke={stroke}
        strokeWidth="1"
      >
        <circle id="c1" cx="5.903" cy="5.903" r="5.903" stroke="none" />
        <circle id="c2" cx="5.903" cy="5.903" r="5.403" fill="none" />
      </g>
    </svg>
  );
};

CircleIcon.propTypes = {
  fill: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired
};
export default CircleIcon;

