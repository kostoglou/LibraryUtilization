import ReactDOM from "react-dom/client";
import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import MoreInfo from "./moreInfo";
import Layout from "./layout";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="more" element={<MoreInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Routing />);