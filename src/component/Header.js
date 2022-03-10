import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Divider = () => {
  return <div className="hr_view"></div>;
};

const Header = () => {
  return (
    <div className="header_main_div">
      <div className="logo_view">
        <h1 className="h1_view">Wild Life</h1>
        <span className="span_view">PHOTOGRAPHY</span>
      </div>
      <div className="header_div">
        <NavLink className="nav_link_css" to="/">
          Home
        </NavLink>
        <Divider />
        <NavLink className="nav_link_css" to="/catagories">
          Categories
        </NavLink>
        <Divider />
        <NavLink className="nav_link_css" to="/about">
          About
        </NavLink>
        <Divider />
        <NavLink className="nav_link_css" to="/gallery">
          Gallery
        </NavLink>
        <Divider />
        <NavLink className="nav_link_css" to="/contact">
          Contact
        </NavLink>
        <Divider />
        <NavLink className="nav_link_css" to="/catagories">
          Services
        </NavLink>
        <Divider />
      </div>
    </div>
  );
};
export default Header;
