import React, { useEffect, useState } from 'react';
import { NavigationBar } from '../components/NavigationBar';
import { VehicleCard } from '../components/VehicleCard';
import { IVehicle } from '../data/vehicle';
import { VehicleApi } from '../api/vehicle.api';

export function VehiclesList() {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);

  useEffect(() => {
    getVehicles();
  }, []);

  const getVehicles = async () => {
    let resp = await VehicleApi.getAllVehicles();
    setVehicles(resp);
  };

  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="container-xl mt-5">
        <div className="row">
          <div className="h2">Reserva un vehiculo</div>
        </div>
        <div className="row">
          {vehicles.map((vehicle) => {
            return (
              <div className="col-4 mb-4">
                <VehicleCard vehicle={vehicle}></VehicleCard>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
