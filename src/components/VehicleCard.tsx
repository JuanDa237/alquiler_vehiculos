import { IVehicle } from '../data/vehicle';

interface Props {
  vehicle: IVehicle;
}

export function VehicleCard(props: Props) {
  const { vehicle } = props;

  return (
    <div className="card">
      <img src={vehicle.image} className="card-img-top" alt="vehicle" />
      <div className="card-body">
        <h5 className="card-title">{vehicle.brand}</h5>
        <p className="card-text">
          {vehicle.description.length <= 200
            ? vehicle.description
            : vehicle.description.substring(0, 200) + '...'}
        </p>
        <a href={'/vehiculo/' + vehicle.id} className="btn btn-primary">
          Alquilar
        </a>
      </div>
    </div>
  );
}
