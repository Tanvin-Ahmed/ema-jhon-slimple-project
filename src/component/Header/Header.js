import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <section className="head">
      <div className="header">
        <img src={logo} alt="" />
      </div>
      <div className="nav">
          <a href="">Shop</a>
          <a href="">Order Review</a>
          <a href="">Manage</a>
      </div>
      <div className="search">
        <input type="text" placeholder="Search Products....."/>
        <button type="submit" className="btn btn-secondary">Search</button>
      </div>
    </section>
  );
};

export default Header;
