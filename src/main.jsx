import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Footer from "./layout/Footer/Footer.jsx"
import Header from "./layout/Header/Header.jsx"
import React from "react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-700 text-white">
        <Header />
        <main className="flex-grow">
          <App />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
)