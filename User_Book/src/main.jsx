import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import MyNav from "./MyNav.jsx";
import { ThemeProvider } from "react-bootstrap";

createRoot(document.getElementById("root")).render(
  <ThemeProvider
    breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    minBreakpoint="xxs"
  >
    <BrowserRouter>
      <MyNav />
      <App />
    </BrowserRouter>
  </ThemeProvider>

  // <App />
  // <MyNav />
);
