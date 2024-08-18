import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";

import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/css/main.css";
import "./assets/style/index.scss";

import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import AssociationsPage from "./pages/AssociationsPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/dernekler" element={<AssociationsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
