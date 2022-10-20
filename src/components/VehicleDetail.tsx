import { useParams } from 'react-router-dom';
import { vehicles } from '../data/vehicle';

export function VehicleDetail() {
  const params = useParams();
  const vehicle = vehicles.find((vehicle) => vehicle.id === Number(params.id));

  return (
    <div className="container-xl mt-5">
      <div className="row">
        <div className="col-12">
          <div className="card shadow mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={vehicle?.image}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{vehicle?.brand}</h5>
                  <div className="card-tags row mb-3">
                    <div className="col-3">
                      <span className="fw-bold">Marca: </span> {vehicle?.brand}
                    </div>
                    <div className="col-3">
                      <span className="fw-bold">Gama: </span> {vehicle?.range}
                    </div>
                    <div className="col-3">
                      <span className="fw-bold">Capacidad de pasajeros: </span>{' '}
                      {vehicle?.passengers}
                    </div>
                    <div className="col-3">
                      <span className="fw-bold">Tipo de cambios: </span>{' '}
                      {vehicle?.gearbox}
                    </div>
                  </div>
                  <p className="card-text">{vehicle?.description}</p>
                  <a
                    className="h2 text-decoration-none"
                    href="tel:+573126577900"
                  >
                    ¿Dudas? Llamanos al (+57) 312 6577900
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
