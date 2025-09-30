import React from "react";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./pages/Home.jsx";
import Seo from "./components/common/Seo.jsx";

export default function App() {
  return (
    <>
      <Seo />
      <Navbar />
      <main id="main-content">
        <Home />
      </main>
      <Footer />
    </>
  );
}
