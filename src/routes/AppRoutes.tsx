import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Series } from '../components/Series';
import { Comics } from "../components/Comics";
import { Personajes } from '../components/Personajes';
import { PersonajeInfo } from '../components/PersonajeInfo';


const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Personajes />} />
      <Route path="/series/" element={<Series />} />
      <Route path="/comics" element={<Comics />} />
      <Route path="/personajes/:id" element={<PersonajeInfo />} />
      <Route path="/series/:id" element={<PersonajeInfo />} />
      <Route path="/comics/:id" element={<PersonajeInfo />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
