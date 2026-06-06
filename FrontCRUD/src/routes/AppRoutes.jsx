import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Pacientes from "../pages/Pacientes";
import Medicos from "../pages/Medicos";
import NuevaCita from "../pages/NuevaCita";
import PacienteForm from "../components/PacienteForm";
import MedicoForm from "../components/MedicoForm";

function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/pacientes" element={<Pacientes />} />

      <Route path="/medicos" element={<Medicos />} />

      <Route path="/citas/nueva" element={<NuevaCita />} />

      <Route path="/pacientes/agregar" element={<PacienteForm />} />

      <Route path="/medicos/agregar" element={<MedicoForm />} />

    </Routes>
  );
}

export default AppRoutes;