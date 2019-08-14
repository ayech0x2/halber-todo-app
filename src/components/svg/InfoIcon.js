import React from "react";
import PropTypes from "prop-types";

const InfoIcon = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2.897"
      height="7.725"
      viewBox="0 0 2.897 7.725"
    >
      <path
        id="info-solid"
        d="M.3,6.4H.6V4.221H.3a.3.3,0,0,1-.3-.3V3.2a.3.3,0,0,1,.3-.3h1.69a.3.3,0,0,1,.3.3V6.4h.3a.3.3,0,0,1,.3.3v.721a.3.3,0,0,1-.3.3H.3a.3.3,0,0,1-.3-.3V6.7A.3.3,0,0,1,.3,6.4ZM1.448,0A1.086,1.086,0,1,0,2.535,1.086,1.086,1.086,0,0,0,1.448,0Z"
        fill={fill}
      />
    </svg>
  );
};

InfoIcon.propTypes = {
  fill: PropTypes.string.isRequired,
};
export default InfoIcon;
