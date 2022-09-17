import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageTemplate from "./components/PageTemplate/PageTemplate";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" elements={<PageTemplate body={"Main"} />} />
          <Route path="/Main" elements={<PageTemplate body={"Main"} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
