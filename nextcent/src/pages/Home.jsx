import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Clients from "../components/Clients";
import Features from "../components/Features";
import Pixelgrade from "../components/Pixelgrade";
import Stats from "../components/Stats";
import FooterDesign from "../components/FooterDesign";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
    <Navbar />
      <Hero />
      <Clients />
      <Features />
      <Pixelgrade />
      <Stats />
      <FooterDesign />
      <Testimonials />
      <Blog />
      <CTA />
      <Footer />
    </>
  );
}
