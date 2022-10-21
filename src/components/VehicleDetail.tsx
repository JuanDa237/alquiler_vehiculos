import { useParams } from 'react-router-dom';
import { vehicles } from '../data/vehicle';
import StepLabel from '@mui/material/StepLabel';
import Step from '@mui/material/Step';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';

export function VehicleDetail() {
  const params = useParams();
  const vehicle = vehicles.find((vehicle) => vehicle.id === Number(params.id));
  const steps = ['Información Reserva', 'Información Personal', 'Finalización'];
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  return (
    <div>
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
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            {
              activeStep === 0 ? (
                <form>
                  <label>Escoge tu tipo de reserva</label>
                  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <input type="date" name="" id="" />
                    <input type="date" name="" id="" />
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <span>
                      <input type="radio" name="" id="" /><label>Por días</label> <label>Kilometraje máximo</label><input type="Number" />
                    </span>
                    <span>
                      <input type="radio" name="" id="" /><label>Kilometraje ilimitado</label>
                    </span>

                  </Box>

                </form>
              ) : activeStep === 1 ? (
                <form>
                  <label>Información Personal</label>
                  <Box sx={{ display: 'grid', gridTemplateColumns: '50% 50%', padding: '20px' }}>
                    <span>
                      <label>Tipo de documento</label>
                      <select style={{ width: '100%' }} name="" id="">
                        <option value="">C.C</option>
                      </select>
                    </span>
                    <span>
                      <label>Número de documento</label>
                      <input style={{ width: '100%' }} type="text" />
                    </span>
                    <span>
                      <label>Tipo de documento</label>
                      <input style={{ width: '100%' }} type="text" />
                    </span>
                    <span>
                      <label>Empresa</label>
                      <input style={{ width: '100%' }} type="text" />
                    </span>
                    <span>
                      <label>Nombre Completo</label>
                      <input style={{ width: '100%' }} type="text" />
                    </span>
                    <span>
                      <label>Fecha de nacimiento</label>
                      <input style={{ width: '100%' }} type="text" />
                    </span>
                    <span>
                      <label>Genero</label>
                      <input style={{ width: '100%' }} type="text" />
                    </span>
                    <span>
                      <label>Telefono 1</label>
                      <input style={{ width: '100%' }} type="text" />
                    </span>
                    <span>
                      <label>Telefono 2</label>
                      <input style={{ width: '100%' }} type="text" />
                    </span>
                    <span>
                      <label>Correo electronico</label>
                      <input style={{ width: '100%' }} type="text" />
                    </span>
                    <span>
                      <label>Nivel escolaridad</label>
                      <input style={{ width: '100%' }} type="text" />
                    </span>
                    <span>
                      <label>Dirección</label>
                      <input style={{ width: '100%' }} type="text" />
                    </span>
                    <span>
                      <label>Dirección</label>
                      <input style={{ width: '100%' }} type="text" />
                    </span>
                    <span>
                      <label>Código postal</label>
                      <input style={{ width: '100%' }} type="text" />
                    </span>
                    <span>
                      <label>Fecha de vencimiento de la licencia</label>
                      <input style={{ width: '100%' }} type="text" />
                    </span>
                    <span>
                      <label>Número de licencia de conducción</label>
                      <input style={{ width: '100%' }} type="text" />
                    </span>
                  </Box>
                </form>
              ) : (
                <React.Fragment>
                  <table>
                    <tr>
                      <td><b>Lugar de retiro</b></td>
                      <td><b>Lugar de devolución</b></td>
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
                  <b>Datos personales</b><br/>
                  Nombre: Pepito Perez Soza
                  Dcoumento de identidad:10006279344
                  Licencia de conducción: 111234543322<br/>
                  Correo Electronico: Pepito@correo.com
                  Teléfono: 52342435<br/>
                  <b>Reserva: Kilometraje Ilimitado</b><br/>
                  Valor día: 200.000$
                  Días: 9
                  Iva: 19%
                  Descuento: 0
                </React.Fragment>
              )
            }
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </div >

  );
}
