import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { VehicleApi } from '../api/vehicle.api';

import { DashboardNav } from '../components/DashboardNav';
import { IVehicle } from '../data/vehicle';

export function AdminVehiclesList() {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);

  useEffect(() => {
    getVehicles();
  }, []);

  const getVehicles = async () => {
    let resp = await VehicleApi.getAllVehicles();
    setVehicles(resp);
  };

  // Events

  const deleteEvent = async (id: number) => {
    await VehicleApi.deleteVehicle(id);
    setVehicles(
      vehicles.filter((x) => {
        return x.id !== id;
      }),
    );
  };

  return (
    <>
      <DashboardNav></DashboardNav>
      <div className="container-fluid p-3">
        <div className="row mb-5">
          <div className="col-2">
            <div className="h2">Lista de vehiculos</div>
          </div>
          <div className="col-10">
            <Link to="/vehicle/add" className="btn btn-success">
              Nuevo vehiculo
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Marca</th>
                  <th scope="col">Clase</th>
                  <th scope="col">Pasajeros</th>
                  <th scope="col">Cambios</th>
                  <th scope="col">Descripcion</th>
                  <th scope="col">Imagen</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((vehicle) => {
                  return (
                    <tr key={vehicle.id}>
                      <td>{vehicle.id}</td>
                      <td>{vehicle.brand}</td>
                      <td>{vehicle.range}</td>
                      <td>{vehicle.passengers}</td>
                      <td>{vehicle.gearbox}</td>
                      <td>{vehicle.description.substring(0, 50)} ...</td>
                      <td>{vehicle.image.substring(0, 50)} ...</td>
                      <td>
                        <div className="btn-group" role="group">
                          <Link
                            to={'/vehicle/edit/' + vehicle.id}
                            className="btn btn-info"
                          >
                            Editar
                          </Link>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              deleteEvent(vehicle.id);
                            }}
                          >
                            Eliminar
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
