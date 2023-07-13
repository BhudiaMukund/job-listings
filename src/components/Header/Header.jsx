import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <img
        src="/images/bg-header-desktop.svg"
        alt="Header background illistration for Desktop devices"
        className="desktop-illustration"
      />
      <img
        src="/images/bg-header-mobile.svg"
        alt="Header background illistration for Mobile devices"
        className="mobile-illustration"
      />
    </header>
  );
};

export default Header;
