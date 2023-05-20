import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationMenu from "./components/layout/NavigationMenu";
import Home from "./pages/Home";
import JobListing from "./pages/JobListing";
import Footer from "./components/layout/Footer";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";

const App = () => {
  return (
    <BrowserRouter>
      <NavigationMenu>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobListing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </NavigationMenu>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
