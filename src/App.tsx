import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Home } from './pages/home';
import { Inventario } from './pages/inventario';
import { NavigationBar } from './components/navigationBar';
import './App.sass';
import { VehicleDetailComponent } from './components/vehicleDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar></NavigationBar>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/inventario' element={<Inventario/>}></Route>
          <Route path='/detail/:id' element={<VehicleDetailComponent/>}></Route>
        </Routes>
        
      </Router>

    </div>
  );
}

export default App;
