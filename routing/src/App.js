import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home1 from "./Home1";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Layout from "./Layout";
import ErrorPage from "./ErrorPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home1 />} />`
          <Route path="home2" element={<Home2 />} />
          <Route path="home3" element={<Home3 />} />`
          <Route path="*" element={<ErrorPage />} />`
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
