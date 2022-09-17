import React, { useState, useEffect } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Main from "../Main/Main";

function PageTemplate(props) {
  const { body } = props;
  let page = null;
  switch (body) {
    case "/":
      page = <Main />;
      break;

    default:
      page = <Main />;
      break;
  }
  useEffect((effect) => {
    return () => {};
  }, []);
  return (
    <div>
      <Header />
      {page}
      <Footer />
    </div>
  );
}

export default PageTemplate;
