import React from "react";
import "./Header.css";
function Header() {
  const button = "버튼";
  const logo = "logo";
  return (
    <div className="header">
      <span className="logo">{logo}</span>
      <span className="button">
        {button} | {button}
      </span>
    </div>
  );
}

export default Header;
