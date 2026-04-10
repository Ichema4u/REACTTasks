import Home from "./HomeComponent";
import AboutUs from "./AboutUsComponent";
import React from "react";
import ContactUs from "./ContactUsComponent";

function Hero() {
  return (
    <div className="hero">
      <Home />
      <AboutUs />
      <h1>Welcome to TANELES CLOTHINGS</h1>
      <p>Your one-stop shop for stylish and affordable clothing.</p>
    </div>
  );
}
export default Hero;
