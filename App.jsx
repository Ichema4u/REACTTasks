import Home from "./HomeComponent";
import Hero from "./HeroComponent";
import Footer from "./FooterComponent";
import AddChart from "./AddChartComponent";
import LandingPage from "./LandingPageComponent";
import Button from "./ButtonComponent";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Link,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import JsonPlaceHolder from "./JsonPlaceHolderComponent";
import Weather from "./WeatherComponent";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <nav>
          <Link to="/">Landing Page</Link>
          <Link to="/home">Home</Link>
          <Link to="/hero">Hero</Link>
          <Link to="/footer">Footer</Link>
          <Link to="/addchart">Add Chart</Link>
          <Link to="/jsonplaceholder">JSON Placeholder</Link>
          <Link to="/weather">Weather</Link>

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/addchart" element={<AddChart />} />
            <Route path="/jsonplaceholder" element={<JsonPlaceHolder />} />
            <Route path="/weather" element={<Weather />} />
          </Routes>
        </nav>
      </BrowserRouter>
      <div className="app">
        <Hero />
        <Home />
        <LandingPage />
        <AddChart />
        <JsonPlaceHolder />
        <Weather />

        <Footer />
      </div>
    </div>
  );
}
export default App;
