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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/vehiculos" element={<VehiclesList />}></Route>
          <Route path="/vehiculo/:id" element={<VehicleDetail />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/devolucion" element={<Devolucion />}></Route>
          <Route
            path="/devolucion/finalizado"
            element={<DevolucionDos />}
          ></Route>
          <Route path="/dashboard/entrega" element={<Entrega />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
