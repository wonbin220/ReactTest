import React from "react";

import "./Footer.css";

function Footer() {
  const AdressText = "주소 : (30100) 세종특별자치시 아름서길 27 (아름동)";
  const FaxTelText = "Fax : 044-330-2357 Tel : 044-330-2380";
  const CopyrightText = "Copyright \u24D2 2020 KOMSA. All rights Reserved.";

  return React.createElement(
    "div",
    { className: "footer-box" },
    React.createElement(
      "p",
      null,
      AdressText,
      React.createElement("br", null),
      FaxTelText
    ),
    React.createElement("p", null, CopyrightText)
  );
}

export default Footer;
