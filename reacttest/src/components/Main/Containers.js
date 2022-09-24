import React from "react";
import { Col, Row } from "reactstrap";
import "./Main.css";
import RightBox from "./RightBox";

function Container(props) {
  const rightBox = RightBox(props);
  const MainLeftGroup = (
    <Row className="main-left-group">
      <Col>{props.children}</Col>
      {rightBox}
    </Row>
  );

  const MainWrapper = <div className="main-wrapper">{MainLeftGroup}</div>;

  return <div className="main-box">{MainWrapper}</div>;
}

export default Container;
