import { Link } from 'react-router-dom';
import { DashboardNav } from '../components/DashboardNav';

export function BuscarReserva(props: { to: string }) {
  return (
    <>
      <DashboardNav></DashboardNav>
      <div className="px-4 py-5 my-5 text-center">
        <img className="d-block mx-auto mb-4" src="/logo2.png" alt="Logo" />
        <h1 className="display-5 fw-bold mb-5">Buscar reserva</h1>
        <div className="col-lg-6 mx-auto">
          <form className="row">
            <div className="col-12">
              <label className="form-label"># De Reserva</label>
              <input type="text" className="form-control w-50 m-auto" />
            </div>
            <div className="col-12 mt-3">
              <Link className="btn btn-primary btn-lg" to={props.to}>
                Buscar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
