import React from "react";

import "./Footer.css";

function Footer() {
  const AdressText = "주소 : (30100) 세종특별자치시 아름서길 27 (아름동)";
  const FaxTelText = "Fax : 044-330-2357 Tel : 044-330-2380";
  const CopyrightText = "Copyright \u24D2 2020 KOMSA. All rights Reserved.";

  return (
    <div className="footer-box">
      <p className="footerText">{AdressText}</p>
      <p>{FaxTelText}</p>
      <p>{CopyrightText}</p>
    </div>
  );
}

export default Footer;
