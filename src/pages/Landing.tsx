import { NavigationBar } from '../components/navigationBar';

export function Landing() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="px-4 py-5 my-5 text-center">
        <img className="d-block mx-auto mb-4" src="/logo2.png" alt="Logo" />
        <h1 className="display-5 fw-bold">Reserva un vehiculo</h1>
        <div className="col-lg-6 mx-auto">
          <form className="row">
            <div className="col-6 text-start">
              <label htmlFor="entrega" className="form-label">
                Entrega
              </label>
              <input type="date" className="form-control" id="entrega" />
            </div>
            <div className="col-6 text-start">
              <label htmlFor="devolucion" className="form-label">
                Devolucion
              </label>
              <input type="date" className="form-control" id="devolucion" />
            </div>
            <div className="col-12 mt-3">
              <a className="btn btn-primary btn-lg" href="/vehiculos">
                Buscar
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
