import { Routes, Route } from "react-router-dom";
import React from "react";

import Home from "../pages/Home"; 
import NotFound from "../components/NotFound/NotFound";
import Contact from "../components/Contact/Contact";
import Projets from "../pages/portfolio/Projets";
import Experience_Pro from "../pages/portfolio/Expepro";
import Competences from "../pages/portfolio/Competences";
import Whoami from "../pages/portfolio/whoami";
import Formations from "../pages/portfolio/Formations";
import Tamagoshi from "../pages/portfolio/projets/Tamagoshi";
import Minouverse from "../pages/portfolio/projets/Minouverse";
import Recrutement from "../pages/portfolio/projets/Recrutement";
import Lumiere from "../pages/portfolio/projets/Lumiere";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio/projets" element={<Projets />} />
      <Route path="/portfolio/competences" element={<Competences />} />
      <Route path="/portfolio/experience_pro" element={<Experience_Pro/>} />
      <Route path="/portfolio/qui_je_suis" element={<Whoami/>} />
      <Route path="/portfolio/formations" element={<Formations/>} />
      <Route path="/portfolio/projets/tamagoshi" element={<Tamagoshi/>} />
      <Route path="/portfolio/projets/minouverse" element={<Minouverse/>} />
      <Route path="/portfolio/projets/siterecrutement" element={<Recrutement/>} />
      <Route path="/portfolio/projets/jeulumiere" element={<Lumiere/>} />
    </Routes>
  );
}