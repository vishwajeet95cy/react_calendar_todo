import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const Header = ({ title }) => {
  return (
    <aside className="header_container">
      <h1 className="header_container_title">{title}</h1>
    </aside>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: "Awesome To-do App",
};

export default Header;
