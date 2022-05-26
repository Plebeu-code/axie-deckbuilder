import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { getCLS, getFID, getLCP } from "web-vitals";
import "./style/global.scss";
import App from "./App";

const containers = document.getElementById("root");
const root = createRoot(containers!);
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

getCLS(console.log);
getFID(console.log);
getLCP(console.log);