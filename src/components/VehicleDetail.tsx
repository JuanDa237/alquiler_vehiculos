import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import StepLabel from '@mui/material/StepLabel';
import Step from '@mui/material/Step';
import Stepper from '@mui/material/Stepper';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';

import { IVehicle } from '../data/vehicle';
import { VehicleApi } from '../api/vehicle.api';

export function VehicleDetail() {
  const params = useParams();
  const [vehicle, setVehicle] = useState<IVehicle | undefined>();

  useEffect(() => {
    getVehicle(Number(params.id));
  }, [params]);

  const getVehicle = async (id: number) => {
    const res = await VehicleApi.getVehicle(id);
    setVehicle(res);
  };

  const steps = ['Información Reserva', 'Información Personal', 'Confirmar'];
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const CarCard = () => {
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
                        <span className="fw-bold">Marca: </span>{' '}
                        {vehicle?.brand}
                      </div>
                      <div className="col-3">
                        <span className="fw-bold">Gama: </span> {vehicle?.range}
                      </div>
                      <div className="col-3">
                        <span className="fw-bold">
                          Capacidad de pasajeros:{' '}
                        </span>{' '}
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
  };

  // Forms

  const EscojerReserva = () => {
    return (
      <>
        <div className="row">
          <div className="col-12">
            <h5>Escoje tu tipo de reserva</h5>
          </div>
          <div className="col-6">
            <p className="fw-bold">Fecha de entrega: 20/02/2022</p>
          </div>
          <div className="col-6">
            <p className="fw-bold">Fecha de devolucion: 29/02/2022</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                <div className="row">
                  <div className="col-2">Por Dias</div>
                  <div className="col-10">
                    <div className="">
                      <label className="form-label">Kilometraje maximo</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Kilometraje ilimitado
              </label>
            </div>
          </div>
        </div>
      </>
    );
  };

  const InformacionPersonal = () => {
    return (
      <form className="row row-cols-2">
        <div className="col mb-2">
          <label className="form-label">Tipo de documento</label>
          <select className="form-select" aria-label="Default select example">
            <option selected>C.C</option>
            <option selected>Pasaporte</option>
          </select>
        </div>
        <div className="col mb-2">
          <label className="form-label">Número de documento</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">Tipo de documento</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">Empresa</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">Nombre Completo</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">Fecha de nacimiento</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">Genero</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">Telefono 1</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">Telefono 2</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">Correo electronico</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">Nivel escolaridad</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">Dirección</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">Dirección</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">Código postal</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">
            Fecha de vencimiento de la licencia
          </label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">Número de licencia de conducción</label>
          <input className="form-control" type="text" />
        </div>
      </form>
    );
  };

  const Fin = () => {
    return (
      <>
        <table>
          <tr>
            <td>
              <b>Lugar de retiro</b>
            </td>
            <td>
              <b>Lugar de devolución</b>
            </td>
          </tr>
          <tr>
            <td>20 de febrero de 2022</td>
            <td>29 de febrero de 2022</td>
          </tr>
          <tr>
            <td>Sede medellín - Calle 108 #65 e 42</td>
            <td>Sede medellín - Calle 108 #65 e 42</td>
          </tr>
        </table>
        <b>Datos personales</b>
        <br />
        Nombre: Pepito Perez Soza Dcoumento de identidad:10006279344 Licencia de
        conducción: 111234543322
        <br />
        Correo Electronico: Pepito@correo.com Teléfono: 52342435
        <br />
        <b>Reserva: Kilometraje Ilimitado</b>
        <br />
        Valor día: 200.000$ Días: 9 Iva: 19% Descuento: 0
      </>
    );
  };

  return (
    <>
      <CarCard></CarCard>

      <div className="container-fluid">
        <Stepper className="my-4" activeStep={activeStep}>
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === 0 ? (
          <EscojerReserva />
        ) : activeStep === 1 ? (
          <InformacionPersonal />
        ) : (
          <Fin />
        )}
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Atras
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
          </Button>
        </Box>
      </div>
    </>
  );
}
