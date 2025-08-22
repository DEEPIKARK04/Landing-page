import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service"; 
import Feature from "./pages/Feature";
import Product from "./pages/Product";
import Testimonial from "./pages/Testimonial";
import FAQ from "./pages/Faq";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/feature" element={<Feature />} />
      <Route path="/product" element={<Product />} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/faq" element={<FAQ />} /> 
    </Routes>
  );
}
