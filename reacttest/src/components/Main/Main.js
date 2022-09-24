import React from "react";
import Container from "./Containers";
import LeftBox from "./LeftBox";
import { Row } from "reactstrap";
import "./Main.css";
function Main() {
  return (
    <Container>
      <LeftBox />
      <div className="main-lb-box-wrapper"></div>
      <Row></Row>
    </Container>
  );
}

export default Main;
