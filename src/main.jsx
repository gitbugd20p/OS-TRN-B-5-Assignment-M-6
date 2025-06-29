import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Layout/index.jsx";
import About from "./pages/About.jsx";
import Books from "./pages/Books.jsx";
import FrontEndLayout from "./Layout/FrontEndLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontEndLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/admin" element={<Layout />}>
          <Route path="books" element={<Books />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
