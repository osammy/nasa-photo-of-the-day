import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import asyncComponent from './components/AsyncComponent';
const AsynComponentApp = asyncComponent(()=>import("./App"))

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<AsynComponentApp />, document.getElementById("root"));
