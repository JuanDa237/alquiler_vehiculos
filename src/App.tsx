import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Landing } from './pages/Landing';
import { VehiclesList } from './pages/VehiclesList';
import { VehicleDetail } from './components/VehicleDetail';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Devolucion } from './pages/Devolucion';
import { DevolucionDos } from './pages/DevolucionDos';
import { Entrega } from './pages/Entrega';
import { AdminVehiclesList } from './pages/AdminVehiclesList';
import { BuscarReserva } from './pages/BuscarReserva';
import { VehiclesForm } from './pages/VehiclesForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Publicas */}
          <Route path="/" element={<Landing />}></Route>
          <Route path="/vehiculos" element={<VehiclesList />}></Route>
          <Route path="/vehiculo/:id" element={<VehicleDetail />}></Route>

          {/* Privadas */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route
            path="/devolucion"
            element={<BuscarReserva to="/devolucion/formulario" />}
          ></Route>
          <Route path="/devolucion/formulario" element={<Devolucion />}></Route>
          <Route
            path="/devolucion/finalizado"
            element={<DevolucionDos />}
          ></Route>
          <Route
            path="/entrega"
            element={<BuscarReserva to="/entrega/formulario" />}
          ></Route>
          <Route path="/entrega/formulario" element={<Entrega />}></Route>
          <Route
            path="/lista-vehiculos"
            element={<AdminVehiclesList />}
          ></Route>
          <Route path="/vehicle/add" element={<VehiclesForm />}></Route>
          <Route path="/vehicle/edit/:id" element={<VehiclesForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
