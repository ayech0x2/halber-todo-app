import React from "react";

import PropTypes from "prop-types";

const CalendarIcon = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5.903"
      height="6.747"
      viewBox="0 0 5.903 6.747"
    >
      <path
        id="calendar-regular"
        d="M5.271.843H4.638V.158A.159.159,0,0,0,4.48,0H3.953a.159.159,0,0,0-.158.158V.843H2.108V.158A.159.159,0,0,0,1.95,0H1.423a.159.159,0,0,0-.158.158V.843H.632A.633.633,0,0,0,0,1.476V6.114a.633.633,0,0,0,.632.633H5.271A.633.633,0,0,0,5.9,6.114V1.476A.633.633,0,0,0,5.271.843ZM5.192,6.114H.712a.079.079,0,0,1-.079-.079V2.108H5.271V6.035A.079.079,0,0,1,5.192,6.114Z"
        fill={fill}
      />
    </svg>
  );
};

CalendarIcon.propTypes = {
  fill: PropTypes.string.isRequired
};
export default CalendarIcon;
