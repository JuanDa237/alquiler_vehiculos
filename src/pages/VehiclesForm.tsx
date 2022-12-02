import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { VehicleApi } from '../api/vehicle.api';
import { DashboardNav } from '../components/DashboardNav';
import { IVehicle } from '../data/vehicle';

const useField = ({ name = '', type = '', className = 'form-control' }) => {
  const [value, setValue] = useState('');

  const setValueExport = useCallback((newValue: any) => setValue(newValue), []);

  const onChange = (event: any) => {
    setValue(event.target.value);
  };

  return [
    {
      id: name,
      name,
      type,
      className,
      value,
      onChange,
    },
    setValueExport,
  ] as const;
};

export function VehiclesForm() {
  const params = useParams();

  const navigate = useNavigate();

  const [isCreating, setIsCreating] = useState(false);
  const [vehicleId, setVehicleId] = useState<number | undefined>(0);
  const [vehicle, setVehicle] = useState<IVehicle | undefined>();

  const [brand, setBrand] = useField({ name: 'brand', type: 'text' });
  const [range, setRange] = useField({ name: 'range', type: 'text' });
  const [passengers, setPassengers] = useField({
    name: 'range',
    type: 'number',
  });
  const [gearbox, setGearbox] = useField({
    name: 'range',
    type: 'text',
    className: 'form-select',
  });
  const [description, setDescription] = useField({
    name: 'range',
    type: 'text',
  });
  const [image, setImage] = useField({ name: 'range', type: 'text' });

  useEffect(() => {
    setIsCreating(params.id == null);
    setVehicleId(params.id ? Number(params.id) : undefined);
  }, [params]);

  useEffect(() => {
    if (vehicleId) getVehicle(vehicleId);
  }, [vehicleId]);

  const getVehicle = async (id: number) => {
    const res = await VehicleApi.getVehicle(id);
    setVehicle(res);
  };

  useEffect(() => {
    if (vehicle) {
      setBrand(vehicle.brand);
      setRange(vehicle.range);
      setPassengers(vehicle.passengers);
      setGearbox(vehicle.gearbox);
      setDescription(vehicle.description);
      setImage(vehicle.image);
    }
  }, [vehicle]);

  const getVehicleValues = () => {
    return {
      id: 0,
      brand: brand.value,
      description: description.value,
      gearbox: gearbox.value as 'mecanico' | 'automatico',
      image: image.value,
      passengers: Number(passengers.value),
      range: range.value,
    } as IVehicle;
  };

  // Events

  const create = async () => {
    let newVehicle: any = getVehicleValues();
    delete newVehicle.id;

    await VehicleApi.createVehicle({ ...newVehicle });

    navigate('/lista-vehiculos');
  };

  const edit = async () => {
    let newVehicle = getVehicleValues();
    if (vehicleId) newVehicle.id = vehicleId;
    await VehicleApi.editVehicle(newVehicle.id, newVehicle);

    navigate('/lista-vehiculos');
  };

  return (
    <>
      <DashboardNav></DashboardNav>
      <div className="container-fluid p-3">
        <form className="row row-cols-2">
          <div className="col mb-2">
            <label className="form-label" htmlFor="brand">
              Marca
            </label>
            <input {...brand} />
          </div>
          <div className="col mb-2">
            <label className="form-label" htmlFor="range">
              Clase
            </label>
            <input {...range} />
          </div>
          <div className="col mb-2">
            <label className="form-label" htmlFor="passengers">
              Pasajeros
            </label>
            <input {...passengers} />
          </div>
          <div className="col mb-2">
            <label className="form-label" htmlFor="gearbox">
              Cambios
            </label>
            <select {...gearbox}>
              <option value="automatico">Automatico</option>
              <option value="mecanico">Mecanico</option>
            </select>
          </div>
          <div className="col mb-2">
            <label className="form-label" htmlFor="image">
              Imagen
            </label>
            <input {...image} />
          </div>
          <div className="col-12 mb-2">
            <label className="form-label" htmlFor="description">
              Descripcion
            </label>
            <textarea
              id={description.id}
              className={description.className}
              rows={3}
              value={description.value}
              onChange={description.onChange}
            ></textarea>
          </div>
          <div className="col-12 mb-2">
            <button
              className="btn btn-success"
              type="button"
              onClick={() => {
                isCreating ? create() : edit();
              }}
            >
              {isCreating ? 'Crear' : 'Editar'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
