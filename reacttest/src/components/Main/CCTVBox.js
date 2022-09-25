import React from "react";
import { Row, Col } from "reactstrap";

import "./Main.css";

function CCTVBox() {
  const player = "player";
  return (
    <div className="main-r-box-cctv">
      <Col>
        <Row>{player}</Row>
      </Col>
    </div>
  );
}
export default CCTVBox;
