import { NavigationBar } from '../components/NavigationBar';
import { VehicleCard } from '../components/VehicleCard';
import { vehicles } from '../data/vehicle';

export function VehiclesList() {
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
