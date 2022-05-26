import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppWrapper from "./App";
import "./style/global.scss";
import { getCLS, getFID, getLCP } from "web-vitals";


const containers = document.getElementById("root");
const root = createRoot(containers!);
root.render(
  <React.StrictMode>
      <AppWrapper />
  </React.StrictMode>
);

// const containers = document.getElementById("root");
// const root = createRoot(containers!);
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

getCLS(console.log);
getFID(console.log);
getLCP(console.log);
