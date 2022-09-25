import React from "react";
import { Col } from "reactstrap";
import CCTVBox from "./CCTVBox";
import GPSbox from "./GPSbox";
function RightBox() {
  return (
    <Col>
      <CCTVBox />
      <CCTVBox />
      <GPSbox />
    </Col>
  );
}

export default RightBox;
