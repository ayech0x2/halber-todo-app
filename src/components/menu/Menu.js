import React from "react";
import PropTypes from "prop-types";
import "./menu.scss";

const Menu = ({items}) => {
  return (
    <div className="menu">
      {
        items.map( (ele,key) => {
          return(
            <span key={key} className="item">
              {ele}
            </span>
          )
        })
      }
    </div>
  );
};

export default Menu;

Menu.propTypes = {
  items: PropTypes.array.isRequired,
};
