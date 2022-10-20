import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Landing } from './pages/Landing';
import { VehiclesList } from './pages/VehiclesList';
import { VehicleDetail } from './components/VehicleDetail';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
