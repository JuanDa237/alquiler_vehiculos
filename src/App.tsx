import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NavigationBar } from './components/navigationBar';

import { Landing } from './pages/Landing';
import { VehiclesList } from './pages/VehiclesList';
import { VehicleDetail } from './components/VehicleDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/vehiculos" element={<VehiclesList />}></Route>
          <Route path="/vehiculo/:id" element={<VehicleDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
