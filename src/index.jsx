import React from "react";
import ReactDOMClient from "react-dom/client";
import { WwwDellComByHtml } from "./screens/WwwDellComByHtml";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<WwwDellComByHtml />);
