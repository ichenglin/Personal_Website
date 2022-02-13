import React from "react";
import ReactDOM from "react-dom";
import PageRoot from "./pages/root/page_root";
import "./theme.css";
import "./components/global/global.css";

ReactDOM.render(<React.StrictMode><PageRoot/></React.StrictMode>, document.getElementById("page_root"));