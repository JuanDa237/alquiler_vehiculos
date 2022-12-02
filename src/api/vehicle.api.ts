import { IVehicle } from '../data/vehicle';

const vehicleAPI = 'http://localhost:4000/vehicle';

const getAllVehicles = async (): Promise<IVehicle[]> => {
  let res = await fetch(vehicleAPI, { method: 'GET' });
  let data = await res.json();

  if (!res.ok) {
    throw Error(data.message || res.statusText);
  }

  return data;
};

const getVehicle = async (id: number): Promise<IVehicle> => {
  let res = await fetch(vehicleAPI + `/${id}`, { method: 'GET' });
  let data = await res.json();

  if (!res.ok) {
    throw Error(data.message || res.statusText);
  }

  return data;
};

const createVehicle = async (
  vehicle: Omit<IVehicle, 'id'>,
): Promise<IVehicle> => {
  let res = await fetch(vehicleAPI, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(vehicle),
  });

  let data = await res.json();

  if (!res.ok) {
    throw Error(data.message || res.statusText);
  }

  return data;
};

const editVehicle = async (
  id: number,
  vehicle: IVehicle,
): Promise<IVehicle> => {
  let res = await fetch(vehicleAPI + `/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(vehicle),
  });

  let data = await res.json();

  if (!res.ok) {
    throw Error(data.message || res.statusText);
  }

  return data;
};

const deleteVehicle = async (id: number): Promise<IVehicle> => {
  let res = await fetch(vehicleAPI + `/${id}`, { method: 'DELETE' });
  let data = await res.json();

  if (!res.ok) {
    throw Error(data.message || res.statusText);
  }

  return data;
};

export const VehicleApi = {
  getAllVehicles,
  getVehicle,
  createVehicle,
  editVehicle,
  deleteVehicle,
};
