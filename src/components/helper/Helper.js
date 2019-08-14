import React from "react";
import PropTypes from "prop-types";

import "./helper.scss";

const Helper = ({content, icon}) => {
  return <div className="helper">
    <div className="helper-body">
      <span className="icon">{icon}</span>
      <span className="content">{content}</span>
    </div>
  </div>;
};

export default Helper;

Helper.propTypes = {
  icon: PropTypes.node.isRequired,
  content: PropTypes.string.isRequired
};
