import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Navbar";
import Hero from "./Pages/hero";
import FeaturedProperties from "./Pages/FeaturedProperties";
import PropertyDetails from "./Pages/Pages11/PropertyDetails";
import PropertyDetails2 from "./Pages/Pages11/PropertyDetails2";
import PropertyDetails3 from "./Pages/Pages11/PropertyDetails3";
import WhyChooseUs from "./Pages/WhyChooseUS";
import Agents from "./Pages/Agents";
import Footer from "./Pages/Footer";
import BlogSection from "./Pages/BlogSection";
import Gallery from "./Pages/Gallery";
import Rent from "./Pages/Rent";
import Sale from "./Pages/Sale";
import Mortgage from "./Pages/Mortgage";
import FindAgent from "./Pages/FindAgent";
import JoinNow from "./Pages/JoinNow";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FeaturedProperties />
              <Gallery />
              <WhyChooseUs />
              <Agents />
              <BlogSection />
              
            </>
          }
        />
        <Route path="/property/1" element={<PropertyDetails />} />
        <Route path="/property/2" element={<PropertyDetails2 />} />
        <Route path="/property/3" element={<PropertyDetails3 />} />
        <Route path="/agent/:id" element={<Agents />} />
        <Route path="/Rent" element={<Rent/>} />
        <Route path="/Sale" element={<Sale/>} />
        <Route path="/Mortgage" element={<Mortgage/>} />
        <Route path="/find-an-agent" element={<FindAgent />} />
      </Routes>
      <Footer />
      
    </>
  );
};

export default App;
