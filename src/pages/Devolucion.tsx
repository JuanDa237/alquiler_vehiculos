import { NavigationBar } from '../components/NavigationBar';

export function Devolucion() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="px-4 py-5 my-5 text-center">
        <img className="d-block mx-auto mb-4" src="/logo2.png" alt="Logo" />
        <h1 className="display-5 fw-bold mb-5">Devolucion un vehiculo</h1>
        <div className="col-lg-6 mx-auto">
          <form className="row">
            <div className="col-6 text-start">
              <label htmlFor="kilometraje" className="form-label">
                kilometraje
              </label>
              <input type="date" className="form-control" id="Kilometraje" />
            </div>
            <div className="col-6 text-start">
              <label htmlFor="gasolina" className="form-label">
                Nivel de gasolina
              </label>
              <input type="number" className="form-control" id="gasolina" />
            </div>

            <div className="col-6 text-start">
              <label htmlFor="Fecha" className="form-label">
                Fecha
              </label>
              <input type="date" className="form-control" id="fecha" disabled />
            </div>
            <div className="col-6 text-start">
              <label htmlFor="Hora" className="form-label">
                Hora
              </label>
              <input type="time" className="form-control" id="hora" />
            </div>

            <div className="my-3">
              <div className="col-12 text-start mb-2">
                Danos
                <button type="button" className="btn btn-primary ms-2">
                  +
                </button>
              </div>
              <div className="row">
                <div className="col-6 text-start">
                  <label htmlFor="Descripcion" className="form-label">
                    Descripcion
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="descripcion"
                  />
                </div>
                <div className="col-6 text-start">
                  <label htmlFor="valor" className="form-label">
                    Valor daño
                  </label>
                  <input type="text" className="form-control" id="valor" />
                </div>
              </div>
            </div>

            <div className="col-6 text-start">
              <label htmlFor="multa" className="form-label">
                Multa
              </label>
              <input
                type="number"
                className="form-control"
                id="multa"
                disabled
              />
            </div>
            <div className="col-6 text-start">
              <label htmlFor="total" className="form-label">
                Total a pagar
              </label>
              <input
                type="number"
                className="form-control"
                id="total"
                disabled
              />
            </div>

            <div className="col-6 text-start">
              <label htmlFor="foto" className="form-label">
                Fotos
              </label>
              <input type="file" className="form-control" id="foto" />
            </div>

            <div className="col-12 mt-3">
              <a
                className="btn btn-primary btn-lg"
                href="/devolucion/finalizado"
              >
                Finalizar
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
