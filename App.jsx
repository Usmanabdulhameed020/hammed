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
import Buy from "./Pages/Buy";
import Mortgage from "./Pages/Mortgage";
import FindAgent from "./Pages/FindAgent";
import JoinNow from "./Pages/JoinNow";
import RentDetails1 from "./Pages/Pages11/RentDetails1";
import RentDetails2 from "./Pages/Pages11/RentDetails2";
import RentDetails3 from "./Pages/Pages11/RentDetails3";
import RentDetails4 from "./Pages/Pages11/RentDetails4";
import RentDetails5 from "./Pages/Pages11/RentDetails5";
import RentDetails6 from "./Pages/Pages11/RentDetails6";
import RentDetails7 from "./Pages/Pages11/RentDetails7";
import RentDetails8 from "./Pages/Pages11/RentDetails8";
import RentDetails9 from "./Pages/Pages11/RentDetails9";
import PaymentSuccess from "./Pages/Pages11/PaymentSuccess";
import BuyDetails1 from "./Pages/Pages11/BuyDetails1";
import BuyDetails2 from "./Pages/Pages11/BuyDetails2";
import BuyDetails3 from "./Pages/Pages11/BuyDetails3";

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
        <Route path="/Buy" element={<Buy/>} />
        <Route path="/Mortgage" element={<Mortgage/>} />
        <Route path="/find-an-agent" element={<FindAgent />} />
        <Route path="/rent/:id" element={<RentDetails1 />} />
        <Route path="/rent/1" element={<RentDetails1 />} />
        <Route path="/rent/2" element={<RentDetails2 />} />
        <Route path="/rent/3" element={<RentDetails3 />} />
        <Route path="/rent/4" element={<RentDetails4 />} />
        <Route path="/rent/5" element={<RentDetails5 />} />
        <Route path="/rent/6" element={<RentDetails6 />} />
        <Route path="/rent/7" element={<RentDetails7 />} />
        <Route path="/rent/8" element={<RentDetails8 />} />
        <Route path="/rent/9" element={<RentDetails9 />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/buy/1" element={<BuyDetails1 />} />
        <Route path="/buy/2" element={<BuyDetails2 />} />
        <Route path="/buy/3" element={<BuyDetails3 />} />

      </Routes>
      <Footer />
      
    </>
  );
};

export default App;
