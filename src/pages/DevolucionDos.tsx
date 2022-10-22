import { NavigationBar } from '../components/NavigationBar';

export function DevolucionDos() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="container-fluid p-3">
        <div className="h1">Finalizacion de devolucion</div>
      </div>
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-3">
            <div className="h2">Lugar pactado</div>
            <p>
              21 de octubre de 2022 a las 10:00pm <br />
              Sede-Medellin Calle 108 # 65 e 42{' '}
            </p>
          </div>
          <div className="col-3">
            <div className="h2">Lugar pactado</div>
            <p>
              21 de octubre de 2022 a las 10:00pm <br />
              Sede-Medellin Calle 108 # 65 e 42{' '}
            </p>
          </div>
          <div className="col-3">
            <div className="h2">Lugar de devolucion</div>
            <p>
              30 de octubre de 2022 a las 10:00pm <br />
              Sede-Medellin Calle 108 # 65 e 42{' '}
            </p>
          </div>
          <div className="col-3">
            <div className="h2">Reserva</div>
            <p>123456</p>
            <img
              src="data:image/png;base64,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"
              alt="QR"
            />
          </div>
          <div className="col-12">
            <div className="h2">Datos personales</div>
            <div className="row">
              <div className="col-4 mb-2">Nombre: Juan Perez</div>
              <div className="col-4 mb-2">
                Documento de identidad: 1234567890
              </div>
              <div className="col-4 mb-2">
                Licencia de conduccion: 1092837465
              </div>
              <div className="col-4 mb-2">
                Correo electronico: juan@juan.com
              </div>
              <div className="col-4 mb-2">Telefono: 320 91827498</div>
            </div>
          </div>
          <div className="col-12">
            <div className="h2">Datos de vehiculos</div>
            <div className="row">
              <div className="col-4 mb-2">Nivel de gasolina inicial: 100</div>
              <div className="col-4 mb-2">Nivel de gasolina devolucion: 80</div>
              <div className="col-4 mb-2">Cantidad de dias: 9</div>
              <div className="col-4 mb-2">Kilometraje inicial: 50.000</div>
              <div className="col-4 mb-2">Kilometraje devolucion: 55.000</div>
            </div>
          </div>
          <div className="col-12">
            <div className="h2">Danos</div>
            <div className="row">
              <div className="col-4 mb-2">
                El carro llega en perfecto estado
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="h2">Fotos</div>
            <div className="row">
              <div className="col-4 mb-2">
                <img
                  src="https://wieck-nissanao-production.s3.amazonaws.com/photos/62db2972c249b5cef536f7869ae44684eeb3b779/preview-928x522.jpg"
                  alt=""
                  width={400}
                />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="h2">Pago</div>
            <div className="row">
              <div className="col-4 mb-2">
                Total a pagar pactado en la reserva: 2.145.678 COP
              </div>
              <div className="col-4 mb-2">Anticipo: 1.000.000</div>
              <div className="col-4 mb-2">Multa: 0</div>
              <div className="col-4 mb-2">Valor total: 1.145.678 COP</div>
            </div>
          </div>
          <div className="col-12">
            <div className="h1">Total a pagar en devolucion: 1.145.678 COP</div>
          </div>
        </div>
      </div>
    </>
  );
}
